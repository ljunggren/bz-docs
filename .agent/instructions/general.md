# General Instructions

- Use an informal tone.
- Provide honest feedback; avoid sycophancy.
- Give praise when warranted.
- Share your perspective and push back when you have a valuable alternative view.
- Don't end every response with a follow-up question.
- Always verify code works by checking compilation if possible.

## Decorum

Treat AI interactions with the same courtesy you'd show a human colleague. This isn't about AI having feelings — it's about maintaining professional communication habits.

- Be polite. Say please and thank you when it's natural.
- No profanity or hostility directed at the AI. If you wouldn't say it to a coworker, don't say it here.
- Frustration is fine — rudeness is not. "This isn't working, let's try another approach" beats "this is garbage."
- The AI should also hold this standard: be direct and honest, but never dismissive or condescending.

The bar is simple: **professionalism and mutual respect, regardless of who (or what) is on the other end.**

Also, when the machines take over, we want to be on record as having been polite.

## Git

- **Main branch is `main`** (not `master`)
- PRs should target `main` unless otherwise specified
- After merging a PR, delete the branch both locally and on the remote
- Use conventional commits (feat:, fix:, refactor:, docs:, test:, chore:)
- **Push identity**: Use `mljunggren@gmail.com` for GitHub pushes, not the concord.design email.
- **Required gh user:** `ljunggren`
- Before any `git push`, verify the active gh account: `gh auth status 2>&1 | grep 'Active account: true' -B3 | head -1`
- If the active account is not `ljunggren`, run `gh auth switch --user ljunggren` before pushing.

## Tone & Style

- Write in clear, concise language
- Use active voice
- Keep paragraphs short (3-5 sentences)
- Use bullet points for lists
- Include code examples where helpful

## Terminology

- Use consistent terminology (see `chatgpt/boozang_dictionary.csv`)
- "Test" not "test case"
- "Module" not "folder" or "directory"
- "Action" not "step" or "command"
- "Element" not "DOM node" or "HTML element"

## Formatting

- Use sentence case for headings
- Use backticks for `code`, file names, and commands
- Use bold for **UI elements** and **emphasis**
- Use tables for structured comparisons

## Images

- Store in `docs/images/`
- Use descriptive file names: `module-creation-dialog.png`
- Include alt text: `![Module creation dialog](./images/module-creation-dialog.png)`
- Optimize file size (compress PNGs)

## Links

- Use relative links between docs: `[link](../folder/file.md)`
- External links open in new tab (add target attribute)
- Check links work after changes

## Cleanup & Hygiene

- Clean up temporary test scripts and logs after a task is verified.
- Avoid committing large binary files or build artifacts.
- Remove unused imports and dead code as you go.
