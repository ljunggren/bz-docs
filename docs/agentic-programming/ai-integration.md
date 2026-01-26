---
id: ai-integration
title: AI Integration
---

# AI Integration

Boozang provides multiple ways for AI assistants to help with test automation.

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

This allows AI agents to:

1. **Read** - Browse projects, modules, and tests
2. **Create** - Generate new tests and modules
3. **Update** - Modify existing test structures
4. **Execute** - Trigger test runs and monitor results

See the [MCP API Reference](./mcp-api.md) for details.

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

Boozang works with any AI assistant that can:

- Read and understand our [public agent documentation](pathname:///agent/AGENT.md)
- Make HTTP requests to the MCP API
- Process JSON responses

Popular options include:

- **Claude** - Anthropic's AI assistant
- **ChatGPT** - OpenAI's conversational AI
- **Cursor** - AI-powered code editor
- **GitHub Copilot** - AI pair programmer
