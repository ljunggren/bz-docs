# Team Collaboration Flow — "Scout, Propose, Decide"

## Main Flow

```mermaid
flowchart TD
    OBSERVE([Operator observes a pattern or area of concern])
    --> DIRECT{What kind of work?}

    DIRECT -->|Code quality| SCOUT_QUALITY[Claude scouts: code quality scan]
    DIRECT -->|User-facing bug| SCOUT_BUG[Claude scouts: reproduce & analyze bug]
    DIRECT -->|New feature| DISCUSS[Discuss with Architect first]
    DIRECT -->|Cleanup/hygiene| SCOUT_CLEANUP[Claude scouts: cleanup scope]

    SCOUT_QUALITY --> REPORT([Claude produces structured report])
    SCOUT_BUG --> REPORT
    SCOUT_CLEANUP --> REPORT

    DISCUSS --> ARCH_SCOPE{Architect approves scope?}
    ARCH_SCOPE -->|Yes| SCOUT_FEATURE[Claude scouts: implementation approach]
    ARCH_SCOPE -->|No| STOP([Stop — not now])
    SCOUT_FEATURE --> REPORT

    REPORT --> TRIAGE([Operator triages findings])
    TRIAGE --> PROPOSE{Claude proposes action?}

    PROPOSE -->|L0-L1: Safe cleanup| EXECUTE[Claude executes, opens PR]
    PROPOSE -->|L2: Behavior change| REVIEW_A[Architect reviews approach first]
    PROPOSE -->|L3: Architecture| REVIEW_A

    REVIEW_A --> APPROVED{Architect approves?}
    APPROVED -->|Yes| EXECUTE
    APPROVED -->|No, adjust| REVISE[Claude revises approach]
    APPROVED -->|No, stop| STOP

    REVISE --> REVIEW_A

    EXECUTE --> PR([PR ready for review])
    PR --> MERGE{Architect reviews & merges}
    MERGE -->|Approved| DONE([Merged])
    MERGE -->|Changes requested| REVISE_PR[Claude addresses feedback]
    REVISE_PR --> MERGE
```

## Escalation Levels Reference

| Level | Description | Who decides |
|-------|-------------|-------------|
| **L0** | Formatting, dead code, typos | Claude proceeds |
| **L1** | Safe refactor, extract function, rename | Claude proceeds, Operator reviews PR |
| **L2** | Behavior change, new util, pattern shift | Architect approves before work |
| **L3** | Architecture, new dependency, schema change | Architect approves before work |

## Scout Report Format

When Claude runs a `scout` command, the report should include:

1. **Area scanned** — what files/modules were analyzed
2. **Findings** — ranked by severity (critical -> minor)
3. **Recommendations** — proposed actions with escalation level
4. **Risks** — what could go wrong if left unaddressed
