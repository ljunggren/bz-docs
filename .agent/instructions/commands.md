# Session Commands

Reserved commands for managing AI agent sessions.

## Commands

| Command | Action |
|---------|--------|
| `start session` | Initialize session, review context |
| `end session` | Summarize work, update journal |
| `push` | Commit and push changes |
| `pull` | Pull latest changes |
| `journal` | Update work log |

## Start Session Behavior

When `start session` is invoked:
1. Read `.agent/instructions.md`
2. Check latest entry in `.agent/memory/journal.md`
3. Check git status
4. Provide context reminder

## End Session Behavior

When `end session` is invoked:
1. Commit pending changes (if user confirms)
2. Update journal with work summary
3. Run LLM processing if docs changed
4. Provide session summary

## Push Behavior

1. Check git status
2. Stage documentation changes
3. Commit with descriptive message
4. Push to origin

## After Documentation Changes

If documentation content was modified:
1. Test locally: `npm run start`
2. Verify build: `npm run build`
3. Consider regenerating LLM content
