# Boozang Project Context

> **Important:** Before reading this file, read [Testing Philosophy](./testing-philosophy.md) to understand the foundational ideas behind Boozang.

## What is Boozang?

Boozang is a **model-based test automation platform** built on a core insight: **every web application is a state machine**.

Rather than scripting click sequences ("click here, click there"), users model their application's behavior:
- Define modules and their operations
- Map interdependencies between modules
- Let Boozang understand the graph of states and transitions

This enables testing that validates **behavior**, not just paths.

### Platform Characteristics

- **Browser-based IDE** - No installation required
- **Natural language selectors** - Identifies elements without DOM selectors
- **State machine modeling** - Map operations and interdependencies
- **Real-time collaboration** - Multiple users can work simultaneously

## Platform URLs

| Environment | URL |
|-------------|-----|
| Primary (AI) | https://ai.boozang.com |
| EU Server | https://eu.boozang.com |
| Sandbox (legacy) | https://thelab.boozang.com |
| Documentation | https://docs.boozang.com |
| **AI Agent Docs** | https://ai.boozang.com/agent/AGENT.md |
| Old Docs | http://docs-old.boozang.com |

## Core Concepts

### Hierarchy

```
Company → Project → Version → Module → Test → Action
```

### Key Terms

| Term | Definition |
|------|------------|
| **Project** | Top-level container for tests |
| **Version** | Branch-like container (like git) |
| **Module** | Groups related tests |
| **Test** | Individual test case |
| **Action** | Single step in a test |

### Test Types

| Code | Type | Description |
|------|------|-------------|
| `cell` | Standard | Standard test case |
| `unit` | Unit | Component-level test |
| `int` | Integration | Integration test |
| `api` | API | Backend API test |
| `scenario` | Scenario | Model-based / scenario test |
| `bug` | Bug | Bug reproduction test |
| `com` | Component | Component test |

Test subtypes: `ctrl` (Control), `operation` (Operation), `validation` (Validation)

## Related Repositories

| Repo | Purpose |
|------|---------|
| `bz` | Main application (server + IDE) |
| `bz-agent` | CLI tool for AI agent integration (`npx bz-agent init`) |
| `bz-docs` | This documentation site |
| `bz-deploy` | Deployment infrastructure |
| `bz-dist` | Distribution packages |

## Documentation Audience

Primary readers:
- QA Engineers learning Boozang
- Developers integrating with CI/CD
- Teams evaluating test automation tools

Write for users who may be new to test automation or coming from other tools (Selenium, Cypress, Playwright).
