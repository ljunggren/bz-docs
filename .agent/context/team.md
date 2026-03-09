# Team Structure & Roles

## Team Members

### Mats — Operator
- Observes patterns, prioritizes work, files issues
- Reviews PRs, manages branches and releases
- Sets direction and decides what to work on next
- Triages findings from scout reports

### Claude — Agent
- Analyzes code, scouts for issues
- Writes PRs with tests, documents findings
- Refactors, cleans up, enforces consistency
- Produces structured reports for triage

## Decision Authority

| Domain | Authority |
|--------|-----------|
| What to work on, priority | **Operator** |
| How to implement, code patterns | **Operator** |
| Code quality standards | **Operator** |
| Release timing, branch management | **Operator** |

## Key Principles

1. **Operator's patterns are the source of truth.** Match their style, don't "improve" it.
2. **Claude proposes, never ships.** All changes require human approval before merge.
3. **Low-ceremony communication.** Brief is better. Show findings, not process.
