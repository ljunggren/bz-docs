# Documentation Journal

## 2026-01-28

### Session: Core Philosophy & Positioning Overhaul

**The Breakthrough:**
Boozang's core philosophy was buried. The foundational insight - "every web application is a state machine" - wasn't front and center. Documentation described features instead of the paradigm.

**Work Completed:**
- Created `testing-philosophy.md` in `.agent/context/`
- Updated `CLAUDE.md` and `AGENTS.md` to lead with philosophy
- Updated `project-context.md` (reframed around state machines)
- Updated `terminology.md` with foundational state machine concepts
- Updated `instructions.md` to prioritize philosophy doc
- Added GitHub push identity preference to `general.md`

**Key Documentation Guidance:**
- Never describe Boozang as "record and playback"
- Emphasize modeling over scripting
- Use state machine language: states, operations, transitions, interdependencies
- Avoid: "click here, click there", "test steps", "automated clicking"

**Commits Pushed:**
- 8072e58: Testing philosophy documentation
- f4ad4cd: State machine paradigm in CLAUDE/AGENTS
- 3be9cb3: Git identity preference

---

## 2026-01-25
 
### Session: Agentic Setup Evaluation
 
**Work Completed:**
- Performed detailed review of the `.agent/` structure and instructions.
- Created evaluation report [AGENT_SETUP_EVAL.md](file:///Users/matsljunggren/.gemini/antigravity/brain/c27334df-d561-4775-94d6-9ccab566a00d/AGENT_SETUP_EVAL.md) (Rating: 9/10).
- Provided feedback on modular instructions, session management, and terminology discipline.
 
**Key Decisions:**
- Formalized the evaluation into an artifact for long-term reference.
 
---

### Session: Cleanup .DS_Store Files
 
**Work Completed:**
- Added `.DS_Store` to `.gitignore`.
- Deleted all `.DS_Store` files in the repository.
- Verified cleanup via `git status`.
 
**Key Decisions:**
- Permanently ignore OS-specific metadata files to maintain a clean workspace.
 
---

### Session: Agentic Programming Docs Section

**Work Completed:**
- Created new `docs/agentic-programming/` section with human-focused documentation:
  - `introduction.md` - Overview of agentic programming concepts
  - `ai-integration.md` - How AI assistants work with Boozang
  - `mcp-api.md` - API reference for programmatic access
- Updated `sidebars.js` to add "Agentic Programming" category
- Links to public agent files at `/agent/*.md` for machine-readable references

**Key Decisions:**
- Used wrapper approach: human-readable docs that reference static agent files
- Avoids content duplication between docs and static agent files

---

### Session: Public Agent Docs Setup

**Work Completed:**
- Created `static/agent/` directory for public AI agent documentation
- Copied agent docs from main `bz/public/agent/` repository:
  - `AGENT.md` - Entry point for AI assistants
  - `concepts.md` - Core terminology
  - `workflows.md` - Common patterns
  - `best-practices.md` - Recommendations
  - `mcp-api.md` - API reference
  - `README.md`
- Docs now accessible at `https://docs.boozang.com/agent/AGENT.md`
- Updated `CLAUDE.md` with new paths and structure
- Committed and pushed all changes including chatgpt/ updates (commit 9d17b30)

**Key Decisions:**
- Mirrored content from main app (not docs-specific version)
- Keeps both sites in sync for AI agent consumption

**Open Items:**
- Consider if docs site needs docs-specific agent content
- Keep `static/agent/` synced with `bz/public/agent/` on updates

---

### Session: Agent Structure Setup

**Work Completed:**
- Fixed `docusaurus.config.js` template defaults
  - Changed `organizationName` from 'facebook' to 'ljunggren'
  - Changed `projectName` from 'docusaurus' to 'bz-docs'
  - Fixed `editUrl` to point to actual repository
- Created `.agent/` directory structure
  - Added modular instruction files
  - Added context files for project and terminology
  - Initialized journal

**Key Decisions:**
- Mirrored `.agent/` structure from main `bz` repository
- Tailored instructions for documentation (not code)

**Open Items:**
- Document MCP API when ready for public release
- Consider removing or reviving inactive blog section
- Align terminology with `bz/public/agent/concepts.md`

---
