# MCP API Reference

## Overview

The **Model Context Protocol (MCP) API** enables AI agents to programmatically interact with Boozang. Use this API to automate test management, creation, and execution.

## Authentication

### Getting an API Token

1. Log into Boozang (https://ai.boozang.com, or https://eu.boozang.com for EU projects)
2. Open your project and go to **Edit Project**
3. Check **Enable MCP API (LLM access)**
4. Under **API Tokens**, enter a token name and select the access level (**Read** or **Write**)
5. Click **Generate** and store the token securely (tokens cannot be retrieved after creation)

Tokens are prefixed with `bzmcp_` and scoped to one project. A token's project is used for every call, so `projectId` can be omitted.

| Scope | Access |
|-------|--------|
| `read` | Only the tools marked `read` below. `tools/list` returns just those tools. |
| `write` | All tools |

### Using the Token

Include the token in all API requests:

```bash
curl -X POST https://ai.boozang.com/api/mcp \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "tools/call", ...}'
```

## Protocol

The MCP API uses **JSON-RPC 2.0** over HTTPS.

### Request Format

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "tool_name",
    "arguments": {
      "param1": "value1"
    }
  }
}
```

### Response Format

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "content": [
      {
        "type": "text",
        "text": "Result data here"
      }
    ]
  }
}
```

---

## Available Tools

Tools that work in the IDE (IDE control, page inspection and authoring) need the Boozang IDE open in a browser and logged into the token's project. Most of them also need the application window open; `openAppWindow` opens it, and `runTest` opens it when needed.

Call `tools/list` for the same list at runtime.

<!-- generated:mcp-tools (scripts/gen-mcp-api-docs.js in bz) -->
## Module Tools

### getModules

Retrieve list of modules in the current project/version

**Scope:** `read`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | No | Boozang project code (required) |
| `versionId` | string | No | Version code (required) |
| `includeTests` | boolean | No | Whether to include test details |

### createModule

Create a new module in the current project/version

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Module name |
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |
| `parentModule` | string | No | Parent module code for nested module |
| `comment` | string | No | Module description/comment |

### editModule

Update an existing module's properties

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `moduleCode` | string | Yes | Module code to edit |
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |
| `name` | string | No | New module name |
| `comment` | string | No | New module description/comment |
| `tag` | string | No | Module tags, comma- or space-separated. Suite membership is decided by tag: a test plugged into an "int" suite is skipped at run time unless its MODULE carries a tag matching the active tag filter. Pass an empty string to clear. |

### deleteModule

Delete an existing module from the project/version

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `moduleCode` | string | Yes | Module code to delete |
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |

## Model Tools

### getModelFields

List the data-model fields of a model module — the element paths its generated tests use — plus per-form path overrides, the operations and validation forms (testVE) that generate tests, and the scenarios (given/when/then steps naming the tests they call)

**Scope:** `read`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |
| `moduleCode` | string | Yes | Model module code (e.g. "m79") |
| `raw` | boolean | No | Return forms (definition.contents) verbatim, with every panel setting |

### editModelField

Change the element path or input mode of a model-module field (path: the field default or one form's override), the value a form fills it with by default (defValue), or the steps run before/after it is filled (preSteps/endSteps). Bumps the module updateStamp so the IDE regenerates the model tests

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |
| `moduleCode` | string | Yes | Model module code (e.g. "m79") |
| `fieldCode` | string | Yes | Field code, or its data key (e.g. "name") |
| `formCode` | string | No | Optional form (definition.contents[].code). When set, the path is written as that form's override instead of the field default |
| `path` | array | No | Element selector path. First element must be "BZ.TW.document", last is usually the match index, e.g. ["BZ.TW.document", "DIV.first-panel", "INPUT", 0] |
| `view` | array | No | Field view path (read-only display element). Element selector path. First element must be "BZ.TW.document", last is usually the match index, e.g. ["BZ.TW.document", "DIV.first-panel", "INPUT", 0] |
| `defValue` | string | No | Default value the form fills this field with (requires formCode), as the IDE form field option: an expression such as "$project.$curtResource" (the record this run created) or a generator such as "/{random}/". Empty string clears it |
| `preSteps` | object[] | No | Full replacement for the field's preSteps — actions run before it is filled in every generated test, e.g. filtering a list before picking a row. Same shape as getActions/createAction actions; steps without a key get one. Field only (not with formCode) |
| `endSteps` | object[] | No | Full replacement for the field's endSteps — actions run after it is filled. Field only (not with formCode) |
| `inputMode` | "change" \| "change + blur" \| "change + enter" \| "change + enter + blur" \| "change + submit" | No | How the generated fill action commits the value, as the IDE field option. Use an "enter" mode for inputs that only commit on Enter, e.g. inline renames. Field default only (not with formCode) |

### editModelForm

Replace a model form's own steps (preSteps/mainStep/endSteps) — the actions every generated test runs at that form around its field fills, e.g. a details entry's search + wait + row click — its path (the element clicked to open it), or a panel's validScript. formCode may also be an operation code, to change the path or steps that open that operation, or a form button's code, to set steps around its click (they run even when $ignoreSubmit skips it). Use getModelFields with raw:true to read them first. Bumps the module updateStamp so the IDE regenerates the model tests

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |
| `moduleCode` | string | Yes | Model module code (e.g. "m78") |
| `formCode` | string | Yes | Form code (definition.contents[].code), an operation code (definition.operations[].code), or a form button code (definition.contents[].buttons[].code) |
| `path` | array | No | Element clicked to open the form or operation. Element selector path. First element must be "BZ.TW.document", last is usually the match index, e.g. ["BZ.TW.document", "DIV.first-panel", "INPUT", 0] |
| `preSteps` | object[] | No | Full replacement for the form's preSteps (run before the form) — action objects as getActions/createAction shape them ({type, element, event, content, max, ...}). Steps without a key get one. |
| `mainStep` | object[] | No | Full replacement for the form's mainStep — action objects as getActions/createAction shape them ({type, element, event, content, max, ...}). Steps without a key get one. |
| `endSteps` | object[] | No | Full replacement for the form's endSteps (run after the form) — action objects as getActions/createAction shape them ({type, element, event, content, max, ...}). Steps without a key get one. |
| `validScript` | string | No | A panel's validation script, run in the app page when the panel opens to check it shows the expected state (truthy = valid; $parameter/$project in scope). Empty string clears it |
| `handleParameter` | string | No | Operation only: script run before it, shaping $parameter (e.g. set $parameter.$ignoreSubmit=1 to skip the submit click). Replaces the whole script |
| `handleData` | string | No | Operation only: script run after it, recording the data it changed. Replaces the whole script |
| `testCode` | string | No | Move the test this generates to another code, e.g. "t30": an operation's testCode, or a form's validation test (testVE). Must be unused in the module. Scenarios calling the old code keep calling it: repoint them with editModelScenario |

### getModelTemplates

List the version's model templates (shared path/steps/options several model items use, e.g. one bulk-action button path for Shift/Lock/Unlock). A template overrides the path and steps of every item that names it, so editModelForm/editModelField cannot change those: use editModelTemplate. "$$name" in a template value stands for the using item's name

**Scope:** `read`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |
| `templateCode` | string | No | Only this template (e.g. "a1760623038401") |

### editModelTemplate

Change a model template's path or preSteps/endSteps, which every model item using it takes (getModelTemplates lists them). Use "$$name" for the using item's name, e.g. ["BZ.TW.document", "BUTTON:text($$name)", 0]. Bumps the updateStamp of each module using it so the IDE regenerates their model tests

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |
| `templateCode` | string | Yes | Template code (e.g. "a1760623038401") |
| `path` | array | No | Element path every using item takes. Element selector path. First element must be "BZ.TW.document", last is usually the match index, e.g. ["BZ.TW.document", "DIV.first-panel", "INPUT", 0] |
| `preSteps` | object[] | No | Full replacement for the template's preSteps. Steps without a key get one. |
| `endSteps` | object[] | No | Full replacement for the template's endSteps. Steps without a key get one. |

### editModelScenario

Replace a model scenario's given/when/then steps — e.g. point a "then" step at the validation test it means to call — or the data rows it loops over (dataCsv). Read them first from getModelFields (scenarios). Bumps the module updateStamp so the IDE regenerates the model tests

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |
| `moduleCode` | string | Yes | Model module code (e.g. "m79") |
| `scenarioCode` | string | Yes | Scenario test code, e.g. "t23" (or "m79.t23") |
| `given` | object[] | No | Full replacement for the scenario's given steps, as getModelFields lists them: each names the test it calls in test ("m79.t30"), with its stepKey, data, ... |
| `when` | object[] | No | Full replacement for the scenario's when steps, as getModelFields lists them: each names the test it calls in test ("m79.t30"), with its stepKey, data, ... |
| `then` | object[] | No | Full replacement for the scenario's then steps, as getModelFields lists them: each names the test it calls in test ("m79.t30"), with its stepKey, data, ... |
| `dataCsv` | string | No | Full replacement for the rows the scenario's test loops over, as CSV with a header row; each column is a $loop variable. A delete scenario needs "$result\nfailed" so its "then" validation passes when the data is gone |

## Report Tools

### getStoredScreenshot

Fetch a failure screenshot stored by a test run, by the id the runner logs ("Screenshot:<id>" in Jenkins/worker logs). Returns the image itself, so you can see what the worker saw when an action failed. Only works on the server that ran the IDE session (e.g. staging).

**Scope:** `read`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | No | Boozang project code (defaults to the token project) |
| `name` | string | Yes | Screenshot id: 32 hex chars, as logged after "Screenshot:" |

### getStoredReport

Read a CI run's stored report as text — every worker's results, where the Jenkins console only has worker 1's. Pass the "Summary report:" URL from the Jenkins log. Use match (e.g. "Failed") to keep only the matching lines. Only works on the server the run reported to (e.g. staging).

**Scope:** `read`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | No | Boozang project code (defaults to the token project) |
| `name` | string | Yes | Report URL or file name as logged ("…/report/<code>/2026-11-04-19-54-40-m41.t1-fs.html"), or just "2026-11-04-19-54-40-m41.t1" |
| `kind` | "fs" \| "fd" \| "pfd" \| "report" \| "lt" \| "rup" | No | Which report of the run (default fs, the summary). Ignored when name already ends in -<kind>.html |
| `match` | string | No | Case-insensitive regex; return only the lines that match |
| `maxChars` | number | No | Cap on the returned text (default 50000) |

## Environment Tools

### getEnvironments

Retrieve list of environments in the current project/version

**Scope:** `read`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | No | Boozang project code (required) |
| `versionId` | string | No | Version code (required) |

### createEnvironment

Create a new environment. Defaults to index 0 (replacing Default). Warns if index is occupied unless overwrite is true.

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Environment name |
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |
| `index` | number | No | Target index (default: 0). If occupied, returns warning unless overwrite is true. |
| `overwrite` | boolean | No | If true, replace environment at target index. Default: false. |
| `items` | object[] | No | Array of host items [{name, host, defaultRoot}] |

### editEnvironment

Update an existing environment's properties

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `environmentIndex` | number | Yes | Index of the environment to edit |
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |
| `name` | string | No | New environment name |
| `items` | object[] | No | New array of host items [{name, host, defaultRoot}] |

### deleteEnvironment

Delete an existing environment from the project/version

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `environmentIndex` | number | Yes | Index of the environment to delete |
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |

### provisionEnvironments

Provision environments and app interfaces from configuration

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |
| `config` | string | No | Optional: Overriding configuration string (JSON or Line-items). If omitted, uses server config. |

## IDE Control Tools

### getIDEState

Get the current state of the IDE (open project, module, test)

**Scope:** `read`

No parameters.

### navigateTo

Navigate the IDE to a specific module or test

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `moduleId` | string | Yes | Module code to navigate to |
| `testId` | string | No | Test code to navigate to (requires moduleId) |
| `actionIndex` | string | No | Action index to navigate to (requires testId). E.g. "10" or "6-4" |

### runTest

Run a test in the IDE and return the result. `status` is "pass", "fail", "stopped" (the run was stopped before it finished — not a pass), or "empty" — "empty" means the test had actions but none executed, in which case `skippedActions`, `tagFilter` and `skipReason` say why (members of an "int" suite are dropped when their tags do not match the active tag filter). Treat "empty" as a problem, never as a pass. On "fail", `failures` lists each failed test (`test` as "m1.t2", `name`) with the action that failed (`action.index`/`key`/`description`) and the runner's `message`.

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `moduleId` | string | Yes | Module code containing the test |
| `testId` | string | Yes | Test code to run |
| `fromAction` | string | No | Optional 1-based action index to start from, e.g. "9" (or "6-4" for an action inside a group). Earlier actions are skipped. Omit to run the full test. |
| `waitSeconds` | number | No | How long to wait for the run to end (default 45, max 540). A run that goes on longer keeps running and this returns status "running": poll getTestStatus until idle, then read getTestResults. |

### getPageInfo

Get current AUT (Application Under Test) page URL, title, and readyState

**Scope:** `read`

No parameters.

### getPageElements

Extract interactive elements from the AUT page (inputs, buttons, links, etc.)

**Scope:** `read`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `selector` | string | No | CSS selector scope (default: "body") |
| `types` | string[] | No | Element types to include: "input", "button", "link", "select", "textarea", "form", "all" (default: ["all"]) |
| `maxElements` | number | No | Max elements to return (default: 100) |

### getScreenshot

Capture the visible AUT viewport (or one element) as an image. Works for cross-origin apps too: the capture then runs through the Boozang extension, as runner failure screenshots do

**Scope:** `read`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `selector` | string | No | Element to capture (default: the whole viewport). A CSS selector; on a cross-origin app it is resolved in the page as a Boozang path segment, e.g. ".rightPane" |
| `format` | "png" \| "jpeg" | No | Image format: "png" or "jpeg" (default: "jpeg") |
| `quality` | number | No | JPEG quality 1-100 (default: 70) |
| `maxWidth` | number | No | Max width in pixels, scales down if exceeded (default: 1024) |

### setBreakpoint

Set or clear a breakpoint on a specific action in the IDE

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `moduleId` | string | Yes | Module code |
| `testId` | string | Yes | Test code |
| `actionIndex` | string | Yes | Action index (e.g. "10" or "6-4") |
| `enabled` | boolean | No | true to set, false to clear (default: true) |

### getAppUrl

Get the current URL of the AUT (Application Under Test) page

**Scope:** `write`

No parameters.

### openAppWindow

Open the AUT (Application Under Test) window, same as the IDE's "Open App Window" button. Loads the current test's entry-point URL (or the current environment host). Use this before scanPage/clickElement/runTest when no app window is open. If a window is already open it is reused and refocused.

**Scope:** `write`

No parameters.

### refreshPage

Reload the AUT (Application Under Test) page in the browser

**Scope:** `write`

No parameters.

### navigateUrl

Navigate the AUT (Application Under Test) to a specific URL

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | URL to navigate to (e.g. "https://example.com/login") |

### clearBreakpoints

Clear all breakpoints in the IDE

**Scope:** `write`

No parameters.

### waitForPageReady

Wait for the AUT page to finish loading (document.readyState === "complete")

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `timeout` | number | No | Max wait time in ms (default: 10000) |

### stopTest

Stop the currently running test in the IDE

**Scope:** `write`

No parameters.

### getTestResults

Get the results from the last test run (passed, failed, total, actions, duration). `status` is "pass", "fail", "stopped" (stopped before finishing — not a pass), "empty" (actions existed but none ran — see `skippedActions`/`tagFilter`/`skipReason`) or "none". `stale` is true when the run that was started never completed, meaning this report describes an earlier run; `run` identifies the test it belongs to. On "fail", `failures` lists each failed test with its failed action and message.

**Scope:** `write`

No parameters.

### getConsoleLog

Get console log messages from the IDE (last N entries, optionally filtered). Each message carries t, the epoch ms it was logged; the IDE keeps the last 500. total counts every match and more says some were left out: page forward with since, back with until.

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | number | No | Max number of messages to return (default: 50) |
| `filter` | string | No | Filter messages containing this string |
| `since` | number | No | Only messages logged after this epoch ms, oldest first — pass the last t you saw to read a long run forward without gaps (more: true means call again) |
| `until` | number | No | Only messages logged before this epoch ms, newest last — pass the first t you saw to page backwards. Combine with since for a time window |

### getBreakpoints

List all breakpoints currently set in the IDE

**Scope:** `write`

No parameters.

### pauseTest

Pause the currently running test in the IDE

**Scope:** `write`

No parameters.

### resumeTest

Resume a paused test (e.g. after hitting a breakpoint). Works like clicking Play in the IDE. Returns as soon as the run continues; poll getTestStatus (paused again at the next breakpoint, or idle) and read getTestResults when it ends.

**Scope:** `write`

No parameters.

### getTestStatus

Check if a test is currently running, paused, or idle, and get current module/test info. While running: currentAction {id, description, timeoutMs, startedAt, elapsedMs}, waitingMessage (what the runner says it waits on), lastLogAt, appWindowOpen, and stalled — true when the AUT window is closed, or when the current action has run past its timeout plus 3 minutes (stalledForMs says by how much); stalledReason says which. Poll this rather than diffing console text to tell a slow run from a hung one.

**Scope:** `write`

No parameters.

### getIDEUrl

Get the current IDE URL including query parameters (token, env, group, filter, scope, etc.) and hash

**Scope:** `write`

No parameters.

### setIDEUrl

Navigate the IDE to a new URL (triggers full page reload — socket will disconnect and reconnect)

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | No | Full URL to navigate the IDE to (e.g. "/extension?token=...&env=0#project/branch/test/run") |
| `params` | object | No | Query parameters to set/override (merged with current URL). Alternative to providing full url. |

### getIDETestActions

Get the actions of a test as currently loaded in the IDE (what the runner will execute), including group loopData/groupType/conditionAction. Compare with getActions (database) to detect a stale IDE copy

**Scope:** `read`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `moduleCode` | string | Yes | Module code (e.g. "com") |
| `testCode` | string | Yes | Test code (e.g. "t2") |

### getRuntimeContext

Snapshot of the test runner variables ($parameter, $loop, $group, $action, $test) and current test key, as seen by loopData/scripts. Read it while paused at a breakpoint

**Scope:** `read`

No parameters.

## Test Tools

### getTests

Retrieve list of tests in a module

**Scope:** `read`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | Yes | Boozang project code (required) |
| `versionId` | string | Yes | Version code (required) |
| `moduleCode` | string | Yes | Module code (required, e.g. "m1") |

### createTest

Create a new test in a module

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |
| `moduleCode` | string | Yes | Module code (e.g. "m1") |
| `name` | string | Yes | Test name (required) |
| `type` | "cell" \| "bug" \| "com" \| "unit" \| "api" \| "int" \| "scenario" | No | Test type (default: "unit") |
| `subtype` | "ctrl" \| "operation" \| "validation" | No | Test subtype |
| `description` | string | No | Test description |
| `tag` | string | No | Test tag |
| `comment` | string | No | Test comment |
| `url` | string | No | URL path for the test entry point (e.g. "/edge-cases/nightmare.html"). Sets the load page action. |

### editTest

Update an existing test's properties

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |
| `moduleCode` | string | Yes | Module code |
| `testCode` | string | Yes | Test code to edit (e.g. "t1") |
| `name` | string | No | New test name |
| `type` | "cell" \| "bug" \| "com" \| "unit" \| "api" \| "int" \| "scenario" | No | New test type |
| `subtype` | "ctrl" \| "operation" \| "validation" | No | New test subtype |
| `description` | string | No | New test description |
| `tag` | string | No | New test tag |
| `comment` | string | No | New test comment |

### deleteTest

Delete a test and its associated document

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |
| `moduleCode` | string | Yes | Module code |
| `testCode` | string | Yes | Test code to delete (e.g. "t1") |

### plugTest

Plug a test into another test or suite as a reference (type-4 ref action)

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |
| `targetModuleCode` | string | Yes | Module of the test being added TO (e.g. "m1") |
| `targetTestCode` | string | Yes | Test being added TO — the suite or parent test (e.g. "t1") |
| `refModuleCode` | string | Yes | Module of the test being plugged IN (e.g. "m1", or "com") |
| `refTestCode` | string | Yes | Test being plugged IN (e.g. "t2") |
| `description` | string | No | Optional description for the ref action. Defaults to the IDE auto-description. |
| `position` | number | No | Insert position (0-based). Defaults to end of list. |
| `groupKey` | string | No | Key of a parent group action (type 7) to insert into |

## Action Tools

### getActions

Retrieve actions for a test

**Scope:** `read`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | Yes | Boozang project code (required) |
| `versionId` | string | Yes | Version code (required) |
| `moduleCode` | string | Yes | Module code (required) |
| `testCode` | string | Yes | Test code (required, e.g. "t1") |

### createAction

Add a new action to a test

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |
| `moduleCode` | string | Yes | Module code |
| `testCode` | string | Yes | Test code |
| `type` | number | Yes | Action type: 0=validation, 1=trigger, 2=extract, 3=script, 4=ref, 5=comment, 6=navigate, 7=group |
| `element` | string[] | No | Element selector path array, e.g. ["BZ.TW.document", ":RowCol(Row\|Col)"] |
| `event` | object | No | Trigger event (for type 1). Click: {type:"mouse",action:"click"}. Set value: {type:"change",value:"text or {{$parameter.x}}",autoBlur:"on"}. Defaults to click for type 1. |
| `method` | number | No | Validation/extract method number (for type 0 and 2) |
| `content` | object | No | Expected content for validation (for type 0) |
| `compareMark` | string | No | Compare mark for validation, e.g. "==" (for type 0) |
| `expectation` | string | No | Expected value for validation (for type 0) |
| `description` | string | No | Action description |
| `position` | number | No | Insert position (0-based). Defaults to end of list. |
| `groupKey` | string | No | Key of parent group to insert into (for nested actions) |
| `failedReaction` | number | No | On-failure reaction: 0=default (wait for timeout), 1=quick fail (proceed immediately), 2=retry |
| `refOfSuccess` | string | No | Exit condition on success. Format: [test-key/][dots/][status/] — test-key: "m1.t2/" runs that test (a type-4 ref; prefer the dedicated plugTest tool, which verifies the test exists); dots: .=continue, ..=break test, ...=skip group, ....=stop all; status: s/f/e/w. E.g. ".../s/" skips the group and reports success. |
| `refOfFailed` | string | No | Exit condition on failure. Same format as refOfSuccess, including the optional [test-key/] prefix. Default: "../" (break test on failure). Use ".../s/" to skip group and report success. |
| `refOfError` | string | No | Exit condition on error. Same format as refOfSuccess, including the optional [test-key/] prefix. Default: "../" (break test on error). |
| `groupType` | string | No | Group kind (type 7 only): "if" \| "else if" \| "else" \| "while" \| "finally". An "if"/"else if" group runs only when its conditionAction passes; following "else" groups are skipped once one is entered. Empty string clears. |
| `conditionAction` | object | No | Condition for an "if"/"else if"/"while" group: { element: [...selector], max?: "8000" (wait ms), min?, method?: 0, compareMark?: "==", content?: {type:"exist"}, refOfFailed?/refOfError?: ".../w" }. Defaults to an "exists" check. Pass null to remove. |
| `loopData` | string | No | Group loop/guard expression (type 7 only), evaluated in the IDE each run with $parameter, $loop, $test in scope. 0 or [] skips the group, N runs it N times, an array once per item. E.g. '$parameter.$label.includes("/planning")?1:0' runs the group only on that page — a branch with no failing step. Empty string clears. |
| `withEntry` | boolean | No | Press Enter after a change event (IDE "change + enter"). For inputs that only commit on Enter, e.g. inline renames. false clears. |
| `withSubmit` | boolean | No | Submit the form after a change event (IDE "change + submit"). false clears. |
| `max` | number | No | Wait up to this many ms for the action's element (IDE timeout). Use it for a step that runs right after a navigation or re-render, e.g. validating a heading after a click; a headless runner is slower than the IDE. 0 clears. |
| `min` | number | No | Wait this many ms before running the action. 0 clears. |

### editAction

Update an existing action in a test

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |
| `moduleCode` | string | Yes | Module code |
| `testCode` | string | Yes | Test code |
| `actionKey` | string | Yes | Key of the action to edit |
| `type` | number | No | New action type |
| `element` | string,number[] | No | New element selector path array, e.g. ["BZ.TW.document", "H3:equal(Planning)", 0] |
| `event` | object | No | New trigger event. Click: {type:"mouse",action:"click"}. Set value: {type:"change",value:"...",autoBlur:"on"}. |
| `description` | string | No | New action description |
| `disable` | boolean | No | Disable/enable the action |
| `preScript` | string | No | Pre-execution script |
| `resultscript` | string | No | Result validation script |
| `failedReaction` | number | No | On-failure reaction: 0=default, 1=quick fail, 2=retry |
| `refOfSuccess` | string | No | Exit condition on success. Format: [test-key/][dots/][status/] — test-key: "m1.t2/" runs that test (a type-4 ref; prefer the dedicated plugTest tool). E.g. ".../s/" skips group and reports success. |
| `refOfFailed` | string | No | Exit condition on failure. Same format as refOfSuccess. Use ".../s/" to skip group and report success instead of failing. |
| `refOfError` | string | No | Exit condition on error. |
| `groupType` | string | No | Group kind (type 7 only): "if" \| "else if" \| "else" \| "while" \| "finally". An "if"/"else if" group runs only when its conditionAction passes; following "else" groups are skipped once one is entered. Empty string clears. |
| `conditionAction` | object | No | Condition for an "if"/"else if"/"while" group: { element: [...selector], max?: "8000" (wait ms), min?, method?: 0, compareMark?: "==", content?: {type:"exist"}, refOfFailed?/refOfError?: ".../w" }. Defaults to an "exists" check. Pass null to remove. |
| `loopData` | string | No | Group loop/guard expression (type 7 only), evaluated in the IDE each run with $parameter, $loop, $test in scope. 0 or [] skips the group, N runs it N times, an array once per item. E.g. '$parameter.$label.includes("/planning")?1:0' runs the group only on that page — a branch with no failing step. Empty string clears. |
| `withEntry` | boolean | No | Press Enter after a change event (IDE "change + enter"). For inputs that only commit on Enter, e.g. inline renames. false clears. |
| `withSubmit` | boolean | No | Submit the form after a change event (IDE "change + submit"). false clears. |
| `max` | number | No | Wait up to this many ms for the action's element (IDE timeout). Use it for a step that runs right after a navigation or re-render, e.g. validating a heading after a click; a headless runner is slower than the IDE. 0 clears. |
| `min` | number | No | Wait this many ms before running the action. 0 clears. |

### deleteAction

Remove an action from a test

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |
| `moduleCode` | string | Yes | Module code |
| `testCode` | string | Yes | Test code |
| `actionKey` | string | Yes | Key of the action to delete |

### moveAction

Move an action (with all its fields) into a group, out to the top level, or to another position

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | Yes | Boozang project code |
| `versionId` | string | Yes | Version code |
| `moduleCode` | string | Yes | Module code |
| `testCode` | string | Yes | Test code |
| `actionKey` | string | Yes | Key of the action to move |
| `groupKey` | string | No | Key of the target group (type 7). Omit to move to the top level. |
| `position` | number | No | Index in the target array after the move (0 = first). Omit to append. |

## Auth Config Tools

### getAuthConfig

Get auth configuration for all hosts in a project version

**Scope:** `read`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | Yes | Boozang project code (required) |
| `versionId` | string | Yes | Version code (required) |

### configureAuth

Enable/disable auth for a host and set auth module reference

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | Yes | Boozang project code (required) |
| `versionId` | string | Yes | Version code (required) |
| `hostIndex` | number | Yes | Host index in authList (required, 0-based) |
| `enabled` | boolean | No | Enable or disable auth for this host |
| `module` | string | No | Auth module code reference |
| `tokenKey` | string | No | Token storage key name |
| `token` | string | No | Auth token value |

## Settings Tools

### getSettings

Get the version's IDE settings: content policy flags (e.g. aiControlActionRetry = smart retry on element missing, aiControlAction = wait on API requests) and per-environment timings. Flags are "on" or "". Environments and auth have their own tools.

**Scope:** `read`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | No | Boozang project code (defaults to the token project) |
| `versionId` | string | Yes | Version code, e.g. "tmp" |

### editSettings

Change the version's IDE settings. `content` sets content policy flags by key (true/false for on/off switches, or a string), e.g. {"aiControlActionRetry": true} turns smart retry on. `advanced` sets per-environment timings, e.g. [{"index":0,"loadPageTime":120000}]. Use getSettings for the keys.

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectId` | string | No | Boozang project code (defaults to the token project) |
| `versionId` | string | Yes | Version code, e.g. "tmp" |
| `content` | object | No | Content policy keys to set: true → "on", false → "", or a string |
| `advanced` | object[] | No | Per-environment timings: [{ index, expectReactionTime?, stepDelay?, performanceReminder?, maxRequestTime?, loadPageTime?, popWindowStyle?, onPoorPerformance? }] |

## Page Inspection and Authoring Tools

### resolveSelector

Test an NLP selector path against the live AUT page. Returns matched elements without modifying anything. Use this to validate selectors before creating actions.

**Scope:** `read`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `selector` | string[] | Yes | Boozang selector path array. First element is always "BZ.TW.document". Example: ["BZ.TW.document", "INPUT:input(Email)"] |

### getPageDOM

Get a structured DOM tree of the AUT page. Returns parent-child relationships so you can understand page layout, scoping panels, and form structure. Use rootSelector to scope to a specific section.

**Scope:** `read`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rootSelector` | string | No | CSS selector to scope the snapshot (e.g. "#main-form", ".modal"). Omit for full page. |
| `maxDepth` | number | No | Maximum DOM depth to traverse (default: 8). Lower = faster, less detail. |
| `includeHidden` | boolean | No | Include elements with display:none or visibility:hidden (default: false) |

### clickElement

Click an element in the AUT using an NLP selector. Does NOT create a permanent test action — use this to explore the app during authoring (open dropdowns, switch tabs, navigate).

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `selector` | string[] | Yes | Boozang selector path. Example: ["BZ.TW.document", "BUTTON:Contains(New Project)"] |
| `waitAfter` | number | No | Milliseconds to wait after click for page to settle (default: 500) |

### fillElement

Set a value on an input/select/textarea in the AUT using an NLP selector. Handles React/Angular change events. Does NOT create a permanent test action.

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `selector` | string[] | Yes | Boozang selector path. Example: ["BZ.TW.document", "INPUT:input(Email)"] |
| `value` | string | Yes | Value to set on the element |
| `append` | boolean | No | Append to existing value instead of replacing (default: false) |

### evaluateInApp

Execute a JavaScript expression in the AUT (Application Under Test) window and return the result. Useful for reading app state, checking framework stores, or extracting dynamic values.

**Scope:** `write`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expression` | string | Yes | JavaScript expression to evaluate in AUT context. Examples: "document.title", "document.querySelectorAll('input').length", "window.__STORE__.getState()" |
| `timeout` | number | No | Timeout in ms (default: 5000) |

### scanPage

Discover all interactive regions on the current AUT page: forms (with field labels), tables (with headers), buttons, navigation links, modals. Returns suggested NLP selectors for each discovered element.

**Scope:** `read`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `includeSelectors` | boolean | No | Generate suggested NLP selectors for each element (default: true). Uses Boozang cssHandler. |
| `scope` | string | No | CSS selector to scope the scan (e.g. ".main-content"). Omit for full page. |
<!-- /generated:mcp-tools -->

---

## Error Handling

### Error Response Format

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "code": -32600,
    "message": "Invalid Request",
    "data": "Additional error details"
  }
}
```

### Common Error Codes

| Code | Meaning | Resolution |
|------|---------|------------|
| -32700 | Parse error | Check JSON syntax |
| -32600 | Invalid request | Verify request format |
| -32601 | Method not found | Check tool name |
| -32602 | Invalid params | Verify parameters |
| -32603 | Internal error | Contact support |
| -32000 | Authentication or tool error | Check the token, its scope and project, and the message |

---

## SDK Examples

### Python

```python
import requests

def call_mcp_tool(tool_name, arguments, token):
    response = requests.post(
        "https://ai.boozang.com/api/mcp",
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        },
        json={
            "jsonrpc": "2.0",
            "id": 1,
            "method": "tools/call",
            "params": {
                "name": tool_name,
                "arguments": arguments
            }
        }
    )
    return response.json()

# List modules
result = call_mcp_tool("getModules", {
    "projectId": "p123",
    "versionId": "master",
    "includeTests": True
}, "your_token")
print(result)
```

### JavaScript

```javascript
async function callMcpTool(toolName, args, token) {
  const response = await fetch('https://ai.boozang.com/api/mcp', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'tools/call',
      params: { name: toolName, arguments: args }
    })
  });
  return response.json();
}

// Create a module
const result = await callMcpTool('createModule', {
  projectId: 'p123',
  versionId: 'master',
  name: 'New Module',
  comment: 'Created via API'
}, 'your_token');
```

---

## Retry Policy

### When to Retry

| Error Type | Action | Retry Strategy |
|------------|--------|----------------|
| 5xx Server errors | Retry | Exponential backoff, max 3 attempts |
| 401 Unauthorized | Do not retry | Re-authenticate with fresh token |
| 400 Bad request | Do not retry | Fix request parameters |
| -32602 Invalid params | Do not retry | Fix request parameters |
| Network timeout | Retry | Exponential backoff, max 3 attempts |

### Exponential Backoff Example

```javascript
async function callWithRetry(request, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await callMcpTool(request);
      if (response.error?.code >= -32000) {
        return response; // Application error, don't retry
      }
      return response;
    } catch (error) {
      if (attempt === maxRetries - 1) throw error;
      const delay = Math.pow(2, attempt) * 1000; // 1s, 2s, 4s
      await new Promise(r => setTimeout(r, delay));
    }
  }
}
```

---

## Concurrency

### Important Considerations

- **Operations are NOT atomic**: Multiple concurrent operations on the same module may cause conflicts
- **No optimistic locking**: Check `success` field in responses to verify operations completed
- **Read-after-write**: Allow brief delay before reading after write operations

### Recommended Patterns

1. **Sequential operations**: For related changes, execute sequentially
   ```javascript
   await createModule(...);
   await editModule(...);  // Wait for create to complete
   ```

2. **Verify mutations**: Check response `success` field
   ```javascript
   const result = await callTool('createModule', params);
   const data = JSON.parse(result.content[0].text);
   if (!data.success) {
     throw new Error(data.error.message);
   }
   ```

3. **Avoid parallel mutations**: Don't update the same module from multiple agents simultaneously

---

## Best Practices

1. **Cache tokens** - Don't request new tokens for every call
2. **Handle errors** - Always check for error responses
3. **Back off on errors** - Retry transient failures with exponential backoff
4. **Use specific scopes** - Request minimal permissions
5. **Secure tokens** - Never commit tokens to version control
6. **Validate responses** - Check `success` field before proceeding
7. **Use sequential mutations** - Avoid parallel writes to same resources
