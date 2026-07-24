---
id: authoring-actions
title: Authoring Actions over MCP
---

# Authoring Actions over MCP

A practical recipe for creating Boozang test actions through the MCP API:
natural language in, working test out — no recording and no hand-written CSS
selectors.

## Prerequisites

- A Boozang server with the MCP API enabled (**Edit Project → Enable MCP API**).
- A project-scoped **write** token (`bzmcp_…`), sent as `Authorization: Bearer …`.
- The **IDE open in a browser** for the target project — the MCP socket bridge
  connects the server to that IDE tab. Confirm with `getIDEState` →
  `state.connected === true`.
- For anything that touches the page under test (`resolveSelector`, `scanPage`,
  `clickElement`, `runTest`), the **App window (AUT) must be open**. Open it with
  the IDE's *Open App Window* toolbar button, or the `openAppWindow` tool.

## The core loop

For each natural-language instruction, run four steps:

| Step | Tool | Purpose |
|------|------|---------|
| 1. Ground | `scanPage` | List live elements plus engine-suggested NLP selectors |
| 2. Validate | `resolveSelector` | Confirm the selector matches **exactly 1** element |
| 3. Persist | `createAction` | Save the action to the test |
| 4. Execute | `runTest` | Run it and get pass/fail per action |

Grounding before persisting is what keeps the test stable: you never guess a
selector, you ask the page which selector identifies the element and then
verify it is unique.

## Selectors

Selectors are Boozang NLP paths, always starting with `BZ.TW.document`:

```js
["BZ.TW.document", "A:text(Planning)", 0]          // header link
["BZ.TW.document", "BUTTON:text(Add)", 0]          // button by text
["BZ.TW.document", ":input(Name)", 0]              // input by its label
["BZ.TW.document", "DIV.panel", "BUTTON:text(Save):first", 0]  // scoped
```

The grammar is `[scope segments…] + TAG:pseudo(text) + index`. The verb in the
instruction decides the action `type` and `event`:

| Instruction | `type` | `event` |
|-------------|--------|---------|
| Click / press X | `1` | `{type:"mouse", action:"click"}` |
| Type / fill / set X = V | `1` | `{type:"change", value:"V", autoBlur:"on"}` |
| Verify / check X | `0` | validation `method` + `content` |
| Go to URL | `6` | (load page) |

## Worked example

Goal: *"Click the header links Planning and Projects, then Add → Project, then
fill in the project name Banana."*

### Static elements — ground, validate, persist

```js
// validate first — must be matchCount === 1
resolveSelector { selector: ["BZ.TW.document", "A:text(Planning)", 0] }
// -> { found: true, matchCount: 1, resolvedIn: "aut" }

createAction {
  moduleCode: "m134", testCode: "t4", type: 1,
  element: ["BZ.TW.document", "A:text(Planning)", 0],
  event: { type: "mouse", action: "click" },
  description: "Click Planning"
}
// repeat for A:text(Projects)
```

### Dynamic elements — reveal, then ground

`Project` and the `Name` field **do not exist in the DOM** until the menu or
form is opened. `resolveSelector` correctly returns `matchCount: 0` while they
are hidden. Use `clickElement` — exploratory, not persisted — to reveal them,
then validate:

```js
resolveSelector { selector: ["BZ.TW.document", "A:text(Project)", 0] }
// -> matchCount: 0   (menu is closed)

clickElement { selector: ["BZ.TW.document", "BUTTON:text(Add)", 0], waitAfter: 900 }
// -> menu opens

resolveSelector { selector: ["BZ.TW.document", "A:text(Project)", 0] }
// -> matchCount: 1   (now visible)

clickElement { selector: ["BZ.TW.document", "A:text(Project)", 0], waitAfter: 900 }
// -> new-project form opens

resolveSelector { selector: ["BZ.TW.document", ":input(Name)", 0] }
// -> matchCount: 1

// now persist all three
createAction { …, element: ["BZ.TW.document", "BUTTON:text(Add)", 0],
               event: { type:"mouse", action:"click" }, description:"Click Add" }
createAction { …, element: ["BZ.TW.document", "A:text(Project)", 0],
               event: { type:"mouse", action:"click" }, description:"Click Project" }
createAction { …, element: ["BZ.TW.document", ":input(Name)", 0],
               event: { type:"change", value:"Banana", autoBlur:"on" },
               description:"Fill project name Banana" }
```

### Run

```js
runTest { moduleId: "m134", testId: "t4" }
// -> { passed: 1, actions: 6, failedActions: 0, status: "pass" }

// verify a filled value without a screenshot:
resolveSelector { selector: ["BZ.TW.document", ":input(Name)", 0] }
// -> first.value === "Banana"
```

## Gotchas

These cause most of the friction when authoring over MCP.

:::caution Writes close the App window
Every `createAction` / `editAction` / `deleteAction` triggers an IDE
auto-refresh, which reloads the IDE and **closes the AUT popup**. So:

1. **Explore and validate first.** Reads (`scanPage`, `resolveSelector`,
   `clickElement`) keep the window open.
2. **Persist all actions last**, in a batch.
3. **Reopen the App window**, then `runTest`.

Do not interleave writes with page reads — the window will be gone.
:::

- **`runTest` needs the App window open.** In a fresh session it fails with a
  `sendMessage` error if no AUT window exists. Open it first.
- **`openAppWindow` is popup-policy dependent.** It uses `window.open`; in an
  automated or hardened browser it may be blocked ("Could not open (popup
  blocked?)"). The IDE's *Open App Window* toolbar button is a user gesture and
  is the reliable fallback. Once a window is open, it is reused.
- **Menu and dropdown items are hidden until revealed.** A `matchCount: 0` on a
  menu item usually means the menu is closed, not that the selector is wrong.
  Reveal with `clickElement`, then validate.
- **`resolveSelector` runs in the AUT page context** (`resolvedIn: "aut"`). If
  you see `resolvedIn: "ide-fallback"` with a warning, the AUT channel did not
  respond — the match came from the IDE's own DOM and is not trustworthy.
- **Chained-selector diagnostics.** When a selector misses, `resolveSelector`
  returns a `chain` array with per-segment match counts, so you can see which
  link in `["…","DIV.panel","BUTTON:text(Save)",0]` is the one at `count: 0`.

## Verifying without screenshots

Everything needed to confirm a result is available as structured data:

- **Element value and state** — `resolveSelector` returns `first.value`,
  `first.text`, `first.rect`, `first.className`.
- **Page inventory** — `scanPage` returns `{ buttons, links, inputs, other,
  stats }`, each item with a `suggestedSelector`.
- **Results** — `runTest` returns `{ passed, actions, failedActions, status }`;
  `getActions` reads back the persisted actions, including their `event`.

## See also

- [MCP API Reference](./mcp-api.md) — authentication, protocol, and the full
  tool list.
- The [full MCP API specification](pathname:///agent/mcp-api.md) — every
  parameter, with request and response examples.
