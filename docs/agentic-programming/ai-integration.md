---
id: ai-integration
title: AI Integration
---

# AI Integration

:::info For AI assistants reading this page
The complete machine-readable reference is at **https://docs.boozang.com/agent/AGENT.md** — start there for concepts, workflows, and the full MCP API with parameters.
:::

Boozang provides multiple ways for AI assistants to help with test automation.

## Setup with bz-agent

The `bz-agent` CLI tool is the recommended way to connect AI assistants to your Boozang project:

```bash
npx bz-agent init
```

This creates a `.bz/` directory with:
- **`AGENT.md`** — Entry point for AI assistants (give them this file)
- **`config.json`** — Server URL, API endpoint, version
- **`.env`** — Auth token (gitignored)
- **`mcp-api.md`** — Full API reference with parameters for all 40+ tools
- **`concepts.md`**, **`workflows.md`**, **`best-practices.md`** — AI-readable guides

Cache your project structure so AI agents don't need to re-fetch it:

```bash
npx bz-agent snapshot   # Creates .bz/project-map.md and modules-cache.json
```

Parse Boozang runner logs for test results and failures:

```bash
npx bz-agent parse worker1.log --pretty
npx bz-agent parse ./logs/ --build=1866
```

## Conversation-Based Assistance

The simplest way to use AI with Boozang is through conversation. AI assistants can:

### Help Plan Tests

Describe your application and user journeys. The AI will suggest:

- How to structure modules
- Which test types to use (functional, API, visual)
- Data-driven testing strategies
- Edge cases to consider

### Guide Test Creation

While working in Boozang, ask the AI for help with:

- Element selection strategies
- Handling dynamic content
- Validation approaches
- Control flow (loops, conditionals)

### Debug Failures

When tests fail, share the error details. The AI can:

- Analyze failure patterns
- Suggest root causes
- Recommend fixes
- Identify flaky test indicators

## IDE Integration

Modern IDEs with AI capabilities (Cursor, VS Code with Copilot) can assist when working with Boozang's coded tests or CI configurations.

### Coded Tests

For teams using Boozang's coded test feature, AI can help write JavaScript test code that integrates with Boozang's API.

### CI Configuration

AI can help configure:

- Jenkins pipelines
- GitHub Actions workflows
- GitLab CI configurations
- Docker-based test execution

## MCP API Integration

The Model Context Protocol (MCP) API enables programmatic AI integration:

```
AI Assistant ←→ MCP API ←→ Boozang Platform
```

Authentication uses project-scoped tokens (prefixed `bzmcp_`) with two scopes:
- **`read`** — Browse projects, modules, tests, environments, IDE state
- **`write`** — All read operations plus create, edit, delete, and IDE control

The API provides 40+ tools across six categories:
- **Module/Test/Action CRUD** — Full lifecycle management
- **Environment management** — Create, edit, provision environments
- **IDE control** — Navigate, run tests, get screenshots, set breakpoints
- **Auth configuration** — Manage authentication settings

See the [MCP API Reference](./mcp-api.md) for an overview, or the [full specification with parameters](pathname:///agent/mcp-api.md) for complete details.

## Best Practices for AI-Assisted Testing

### Be Specific

Instead of: "Create tests for my app"

Try: "Create a login test module with tests for: valid login, invalid password, forgot password flow"

### Provide Context

Share relevant information:

- Application URL and technology stack
- User roles and permissions
- Business rules and validation requirements
- Known edge cases

### Iterate

AI-generated tests are a starting point. Review, run, and refine:

1. Generate initial test structure
2. Run tests to verify they work
3. Adjust selectors or assertions as needed
4. Add data variations

### Maintain Human Oversight

AI accelerates test creation but doesn't replace judgment:

- Review generated tests for correctness
- Validate business logic coverage
- Ensure security-sensitive flows are properly tested
- Monitor test reliability over time

## Supported AI Assistants

Boozang works with any AI assistant that can read the `.bz/AGENT.md` guide and make HTTP requests to the MCP API. The `bz-agent init` command optionally creates a `CLAUDE.md` pointer file for Claude Code.

Popular options include:

- **Claude Code** - Anthropic's CLI agent (reads CLAUDE.md automatically)
- **Cursor** - AI-powered code editor
- **ChatGPT** - OpenAI's conversational AI
- **GitHub Copilot** - AI pair programmer
