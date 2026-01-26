---
id: introduction
title: Introduction to Agentic Programming
---

# Agentic Programming with Boozang

**Agentic programming** refers to using AI assistants to help create, manage, and maintain automated tests. Boozang is designed from the ground up to support this paradigm.

## What is Agentic Programming?

Traditional test automation requires developers to manually write and maintain test scripts. Agentic programming shifts this model:

- **AI understands intent** - Describe what you want to test in natural language
- **AI generates tests** - The assistant creates appropriate test structures
- **AI maintains tests** - When your application changes, AI helps update tests
- **AI debugs failures** - AI analyzes failures and suggests fixes

## Why Boozang for Agentic Programming?

Boozang's architecture makes it uniquely suited for AI-assisted testing:

### Natural Language Foundation

Boozang identifies elements using natural language rather than brittle CSS selectors or XPaths. This means:

- Tests read like documentation
- AI can understand test intent from the test itself
- Changes to test descriptions map directly to UI changes

### Structured Data Model

Tests in Boozang follow a clear hierarchy:

```
Project → Version → Module → Test → Action
```

This structure allows AI to navigate and modify tests programmatically.

### MCP API

The Model Context Protocol (MCP) API enables AI agents to:

- List and browse test modules
- Create and modify tests
- Execute tests and analyze results
- Manage test data

## Getting Started

1. **Use AI assistants** - Tools like Claude, ChatGPT, or Cursor can help you work with Boozang
2. **Describe your tests** - Tell the AI what user journey you want to automate
3. **Review and refine** - The AI generates tests; you validate and adjust

## Public Agent Documentation

For AI assistants helping you with Boozang, we provide machine-readable documentation:

- [Agent Entry Point](pathname:///agent/AGENT.md) - Starting point for AI assistants
- [Core Concepts](pathname:///agent/concepts.md) - Terminology and data model
- [Workflows](pathname:///agent/workflows.md) - Common test automation patterns
- [Best Practices](pathname:///agent/best-practices.md) - Recommendations for effective testing

These documents are designed to be consumed by AI systems to provide better assistance.

## Next Steps

- [AI Integration](./ai-integration.md) - Learn how AI assistants interact with Boozang
- [MCP API Reference](./mcp-api.md) - Programmatic access for AI agents
