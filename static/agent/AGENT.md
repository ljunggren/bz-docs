# Boozang AI Agent Guide

> **For AI Assistants**: This is your entry point to help users with Boozang test automation.

## What is Boozang?

Boozang is a **web-based test automation platform** that enables teams to create, manage, and execute automated tests for web applications. Key features:

- **Browser-based IDE** - No installation required
- **Real-time collaboration** - Multiple users can work simultaneously
- **AI-powered test creation** - Natural language to test conversion
- **MCP API** - Programmatic access for AI agents

## Quick Links

| Document | Purpose |
|----------|---------|
| [concepts.md](./concepts.md) | Core terminology and data model |
| [workflows.md](./workflows.md) | Common test automation patterns |
| [best-practices.md](./best-practices.md) | Recommendations for effective testing |

| [mcp-api.md](./mcp-api.md) | Full MCP API reference (40+ tools) |

## How to Help Users

### When they want to create tests

1. Understand their application under test
2. Help structure tests into logical modules
3. Guide them on element selection strategies
4. Suggest data-driven approaches for variations

### When they want to organize tests

1. Explain the Project → Version → Module → Test hierarchy
2. Recommend module grouping by feature or user journey
3. Suggest naming conventions

### When they want to run tests

1. Explain local vs CI execution options
2. Help configure test suites
3. Assist with debugging failed tests

## Platform URLs

- **Application**: https://ai.boozang.com (primary) or https://eu.boozang.com (EU)
- **Documentation**: https://docs.boozang.com
- **Support**: https://boozang.com/support

## Getting Started Prompt

If a user is new to Boozang, suggest:

> "Let's start by understanding what you want to test. What's your application URL, and what's the most important user journey you'd like to automate first?"
