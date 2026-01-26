# Boozang Project Context

## What is Boozang?

Boozang is a **codeless test automation platform** for web applications. Key characteristics:

- **Browser-based IDE** - No installation required
- **Natural language selectors** - Identifies elements without DOM selectors
- **AI-powered** - Uses AI for element identification and test generation
- **Real-time collaboration** - Multiple users can work simultaneously

## Platform URLs

| Environment | URL |
|-------------|-----|
| Primary (AI) | https://ai.boozang.com |
| EU Server | https://eu.boozang.com |
| Sandbox | https://thelab.boozang.com |
| Documentation | https://docs.boozang.com |
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

- Standard tests
- API tests
- Model-based tests
- Coded tests (JavaScript)

## Related Repositories

| Repo | Purpose |
|------|---------|
| `bz` | Main application (server + IDE) |
| `bz-docs` | This documentation site |
| `bz-deploy` | Deployment infrastructure |
| `bz-dist` | Distribution packages |

## Documentation Audience

Primary readers:
- QA Engineers learning Boozang
- Developers integrating with CI/CD
- Teams evaluating test automation tools

Write for users who may be new to test automation or coming from other tools (Selenium, Cypress, Playwright).
