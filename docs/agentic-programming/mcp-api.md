---
id: mcp-api
title: MCP API Reference
---

# MCP API Reference

:::tip Full specification with all parameters
This page is an overview. For the **complete API reference** with parameters, request/response examples, retry policies, and concurrency guidelines, see the **[full MCP API specification](pathname:///agent/mcp-api.md)**.

Or run `npx bz-agent init` to generate it locally in your project.
:::

The **Model Context Protocol (MCP) API** enables AI agents to programmatically interact with Boozang for automated test management.

## Authentication

### Getting an API Token

1. Log into Boozang at https://ai.boozang.com
2. Navigate to **Settings -> API Tokens**
3. Generate a new token with appropriate permissions
4. Store securely (tokens cannot be retrieved after creation)

Tokens are prefixed with `bzmcp_` and scoped to a project. Two permission scopes are available:

| Scope | Access |
|-------|--------|
| `read` | Read-only tools (getModules, getTests, getActions, getEnvironments, getIDEState, etc.) |
| `write` | All tools including create, edit, and delete operations |

### Using the Token

Include the token in all API requests:

```bash
curl -X POST https://ai.boozang.com/api/mcp \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "tools/call", ...}'
```

## Protocol

The MCP API uses **JSON-RPC 2.0** over HTTPS.

### Request Format

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "tool_name",
    "arguments": {
      "param1": "value1"
    }
  }
}
```

### Response Format

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "content": [
      {
        "type": "text",
        "text": "Result data here"
      }
    ]
  }
}
```

## Available Tools (40+)

### Module Tools

| Tool | Description | Key Parameters |
|------|-------------|----------------|
| `getModules` | List all modules | `projectId`, `versionId`, `includeTests` |
| `createModule` | Create a new module | `name`, `projectId`, `versionId`, `parentModule`, `comment` |
| `editModule` | Update a module | `moduleCode`, `projectId`, `versionId`, `name`, `comment` |
| `deleteModule` | Delete a module and its tests | `moduleCode`, `projectId`, `versionId` |

### Test Tools

| Tool | Description | Key Parameters |
|------|-------------|----------------|
| `getTests` | List tests in a module | `projectId`, `versionId`, `moduleCode` |
| `createTest` | Create a new test | `name`, `projectId`, `versionId`, `moduleCode`, `type` |
| `editTest` | Update a test | `testCode`, `projectId`, `versionId`, `moduleCode` |
| `deleteTest` | Delete a test | `testCode`, `projectId`, `versionId`, `moduleCode` |

### Action Tools

| Tool | Description | Key Parameters |
|------|-------------|----------------|
| `getActions` | List actions in a test | `projectId`, `versionId`, `moduleCode`, `testCode` |
| `createAction` | Create a new action | `type`, `projectId`, `versionId`, `moduleCode`, `testCode` |
| `editAction` | Update an action | `actionIndex`, `projectId`, `versionId`, `moduleCode`, `testCode` |
| `deleteAction` | Delete an action | `actionIndex`, `projectId`, `versionId`, `moduleCode`, `testCode` |

### Environment Tools

| Tool | Description | Key Parameters |
|------|-------------|----------------|
| `getEnvironments` | List all environments | `projectId`, `versionId` |
| `createEnvironment` | Create an environment | `name`, `projectId`, `versionId`, `items` |
| `editEnvironment` | Update an environment | `environmentCode`, `projectId`, `versionId` |
| `deleteEnvironment` | Delete an environment | `environmentCode`, `projectId`, `versionId` |
| `provisionEnvironments` | Provision multiple environments | `projectId`, `versionId`, `environments` |

### IDE Control Tools

These tools control the Boozang IDE browser window. They require the IDE to be open and logged into a project.

| Tool | Description | Key Parameters |
|------|-------------|----------------|
| `getIDEState` | Get current IDE state | *(none)* |
| `navigateTo` | Navigate to module/test | `moduleId`, `testId` |
| `runTest` | Run a test | `moduleId`, `testId` |
| `stopTest` | Stop a running test | |
| `pauseTest` / `resumeTest` | Pause/resume test | |
| `getTestStatus` | Get running test status | |
| `getTestResults` | Get last test results | |
| `getPageInfo` | Get current page info | |
| `getPageElements` | Get page elements | |
| `getScreenshot` | Capture screenshot | |
| `getConsoleLog` | Get browser console | |
| `setBreakpoint` / `getBreakpoints` / `clearBreakpoints` | Manage breakpoints | |
| `getAppUrl` / `navigateUrl` / `refreshPage` | Control AUT browser | |
| `waitForPageReady` | Wait for page load | |
| `getIDEUrl` / `setIDEUrl` | Get/set IDE URL | |

### Auth Config Tools

| Tool | Description |
|------|-------------|
| `getAuthConfig` | Get authentication configuration |
| `configureAuth` | Configure authentication settings |

## Quick Example

```python
import requests

def call_mcp_tool(tool_name, arguments, token):
    response = requests.post(
        "https://ai.boozang.com/api/mcp",
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        },
        json={
            "jsonrpc": "2.0",
            "id": 1,
            "method": "tools/call",
            "params": {
                "name": tool_name,
                "arguments": arguments
            }
        }
    )
    return response.json()

# List all modules with tests
result = call_mcp_tool("getModules", {
    "projectId": "p123",
    "versionId": "master",
    "includeTests": True
}, "bzmcp_your_token_here")
```

## Error Handling

| Code | Meaning | Resolution |
|------|---------|------------|
| -32700 | Parse error | Check JSON syntax |
| -32600 | Invalid request | Verify request format |
| -32601 | Method not found | Check tool name |
| -32602 | Invalid params | Verify parameters |
| -32603 | Internal error | Contact support |
| -32000 | Auth/execution error | Check token and permissions |

## Full Specification

For complete details including:
- All parameter types and descriptions
- Request/response examples for every tool
- Retry policies and exponential backoff
- Concurrency guidelines

See the **[full MCP API specification](pathname:///agent/mcp-api.md)** or run `npx bz-agent init` to generate it locally.
