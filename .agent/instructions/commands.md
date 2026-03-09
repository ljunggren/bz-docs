# Session Commands

Reserved commands for managing AI agent sessions.

## Commands

| Command | Action |
|---------|--------|
| `start session` | Initialize session, review context |
| `end session` | Commit, update sync + journal, summarize |
| `push` | Commit to current branch and push to origin |
| `pull` | Pull latest changes from origin to current branch |
| `journal` | Update .agent journal with work log and instructions |
| `scout <area>` | Analyze a codebase area and produce a structured report |

## Start Session Behavior

When `start session` is invoked:
1. Read `.agent/instructions.md` and key instruction files
2. Read `.agent/session/sync.md` for cross-session context and handoff notes
3. Check latest entry in `.agent/memory/journal.md`
4. Check git status for any uncommitted work
5. **Record the start time**: Run `date` to get the current time and record it in `.agent/session/sync.md` under `## Session Clock` as `**Start:** HH:MM AM/PM (YYYY-MM-DD)`
6. **Display session disclaimer** (every time, keep it brief):
   > AI is a powerful tool that can keep you in a flow state longer than you'd naturally sustain. That's a feature and a risk. Take breaks. The code will still be here.
7. Provide brief reminder to user:
   - Last session date and summary
   - Any handoff notes from other sessions
   - Any pending work or open items
   - Current branch status

## End Session Behavior

When `end session` is invoked:
1. **Commit pending changes** (if user confirms)
2. **Calculate hours**: Read start time from `.agent/session/sync.md` `## Session Clock`. Run `date` to get the current time. Calculate elapsed hours (round to nearest 0.5h). Ask if hours are **billable** or **non-billable** (non-billable = unpaid work done to go above and beyond).
3. **Session sync**: Update `.agent/session/sync.md` with current context, decisions, and anything the next session needs to know. Clear the Session Clock section.
4. **Worklog**: Update `.agent/memory/worklog.md` with calculated hours and items completed. Update the running total.
5. **Journal**: Run the `journal` command logic.
6. **Commit documentation updates** separately from code changes
7. Provide session summary to user (including hours logged)

## Push Behavior
- Check status.
- Stage all changes (interactive confirmation if needed).
- Commit with conventional commit message.
- Push to current branch.

## Pull Behavior
- Check status (stash if needed).
- Pull from origin (rebase preferred).
- Pop stash if needed.

## Scout Behavior

When `scout <area>` is invoked (e.g., `scout security`, `scout performance`, `scout src/api/`):
1. **Identify scope** — resolve `<area>` to specific files/directories
2. **Analyze** — scan for issues relevant to the area (code quality, security, performance, dead code, inconsistencies)
3. **Produce report** with:
   - **Area scanned**: files and modules analyzed
   - **Findings**: ranked by severity (critical -> minor), each with file path and line reference
   - **Recommendations**: proposed actions with escalation level (L0-L3)
   - **Risks**: what could go wrong if left unaddressed
4. **Do not make changes** — the report is for the Operator to triage

## Journal Behavior
- **Update agentic instructions** based on session learnings:
  - New patterns discovered -> update relevant `.agent/instructions/*.md`
  - Gotchas or pitfalls -> add to relevant instruction file
  - **Issues solved -> add to `troubleshooting.md`** (capture problem + solution)
- **Write journal entry** in `.agent/memory/journal.md`:
  - Date and session title
  - Summary of work completed
  - Key decisions made
  - Open items for next session

## After Documentation Changes

If documentation content was modified:
1. Test locally: `npm run start`
2. Verify build: `npm run build`
3. Consider regenerating LLM content
