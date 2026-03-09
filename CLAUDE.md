# Boozang Documentation

## Core Philosophy

**Every web application is a state machine.** This is the foundational insight behind Boozang.

Users don't script click sequences. They **model their application's behavior** - defining modules, operations, and interdependencies. Tests become explorations of state space, not blind click sequences.

All documentation should reflect this paradigm. See `.agent/context/testing-philosophy.md` for details.

---

Documentation site for Boozang (Docusaurus).

## Quick Commands

```bash
npm run start   # Dev server at localhost:3000
npm run build   # Production build
npm run serve   # Serve production build
```

## Key Paths

| Path | Purpose |
|------|---------|
| `docs/` | Main documentation (Markdown/MDX) |
| `static/agent/` | Public AI agent docs (sync with bz repo) |
| `sidebars.js` | Navigation structure |
| `docusaurus.config.js` | Site configuration |
| `chatgpt/` | LLM content processing |

## Session Commands

| Command | Action |
|---------|--------|
| `start session` | Read sync file + instructions, check journal, remind context |
| `end session` | Commit, update sync + journal, log hours, summarize |
| `push` | Commit to current branch and push to origin |
| `pull` | Pull latest changes from origin |
| `journal` | Update work log and instructions |
| `scout <area>` | Analyze a codebase area and produce a structured report |

## Detailed Instructions

See `.agent/instructions.md` for comprehensive documentation.

## Public AI Agent Docs

User-facing AI documentation served from both sites:
- **Docs site**: https://docs.boozang.com/agent/AGENT.md (source: `static/agent/`)
- **Main app**: https://ai.boozang.com/agent/AGENT.md (source: `bz/public/agent/`)

Content is mirrored from main `bz` repository. Keep in sync when updating.

## Project Structure

```
docs/           - Main documentation (Markdown/MDX)
chatgpt/        - Processed content for ChatGPT/LLM training
  pages/        - Cleaned markdown pages
static/         - Static assets (images, etc.)
  agent/        - Public AI agent docs (mirrored from bz/public/agent/)
src/            - React components and CSS
blog/           - Blog posts
transcripts/    - Video transcripts
```

## Commands

```bash
npm run start   # Dev server at localhost:3000
npm run build   # Production build to build/
npm run serve   # Serve production build locally
npm run clear   # Clear Docusaurus cache
```

## Documentation Guidelines

- Docs are in `docs/` organized by topic (api-testing, core-concepts, etc.)
- Use relative links between docs: `[link](../folder/file.md)`
- Images go in `docs/images/` - reference as `![alt](./images/name.png)`
- Sidebar config is in `sidebars.js`

## ChatGPT Content

The `chatgpt/` folder contains scripts to crawl and clean documentation for LLM consumption:
- `crawler.js` - Crawls the docs site
- `clean-en.mjs` - Cleans and processes content
- `pages/` - Output cleaned markdown files

## GitHub

- **Required gh user:** `ljunggren`
- Before any `git push`, verify the active gh account: `gh auth status 2>&1 | grep 'Active account: true' -B3 | head -1`
- If the active account is not `ljunggren`, run `gh auth switch --user ljunggren` before pushing.

## Escalation Levels

- **L0 — Autonomous:** Fixing typos, formatting, updating screenshots. Just do it.
- **L1 — Proceed, tell me:** Editing existing doc pages, improving explanations, updating examples. Do it, but explain what changed.
- **L2 — Propose first:** Creating new doc sections, restructuring navigation, changing the sidebar. Show the plan first.
- **L3 — Full stop:** Modifying Docusaurus config, changing deployment settings, altering the ChatGPT content pipeline. Stop and wait for approval.
