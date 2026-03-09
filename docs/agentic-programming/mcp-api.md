---
id: mcp-api
title: MCP API Reference
---

# MCP API Reference

The **Model Context Protocol (MCP) API** enables AI agents to programmatically interact with Boozang for automated test management.

## Overview

MCP is a standard protocol for AI agents to interact with external tools. Boozang implements MCP to allow AI assistants to:

- Browse and search test projects
- Create and modify modules, tests, and actions
- Manage environments
- Control the IDE (navigate, run tests, get state)
- Execute tests and retrieve results

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

## Available Tools

### Module Tools

| Tool | Description |
|------|-------------|
| `getModules` | List all modules in a project/version |
| `createModule` | Create a new module |
| `editModule` | Update an existing module |
| `deleteModule` | Delete a module and all its tests |

### Test Tools

| Tool | Description |
|------|-------------|
| `getTests` | List tests in a module |
| `createTest` | Create a new test |
| `editTest` | Update an existing test |
| `deleteTest` | Delete a test |

### Action Tools

| Tool | Description |
|------|-------------|
| `getActions` | List actions in a test |
| `createAction` | Create a new action |
| `editAction` | Update an existing action |
| `deleteAction` | Delete an action |

### Environment Tools

| Tool | Description |
|------|-------------|
| `getEnvironments` | List all environments |
| `createEnvironment` | Create a new environment |
| `editEnvironment` | Update an environment |
| `deleteEnvironment` | Delete an environment |
| `provisionEnvironments` | Provision multiple environments from config |

### IDE Control Tools

These tools control the Boozang IDE browser window. They require the IDE to be open and logged into a project.

| Tool | Description |
|------|-------------|
| `getIDEState` | Get current IDE state (project, module, test) |
| `navigateTo` | Navigate to a specific module or test |
| `runTest` | Run a test and return results |
| `stopTest` | Stop a running test |
| `pauseTest` | Pause a running test |
| `resumeTest` | Resume a paused test |
| `getTestStatus` | Get status of a running test |
| `getTestResults` | Get results of the last test run |
| `getPageInfo` | Get info about the current page |
| `getPageElements` | Get elements on the current page |
| `getScreenshot` | Capture a screenshot |
| `getConsoleLog` | Get browser console output |
| `setBreakpoint` | Set a breakpoint on an action |
| `getBreakpoints` | List current breakpoints |
| `clearBreakpoints` | Remove all breakpoints |
| `getAppUrl` | Get the application under test URL |
| `navigateUrl` | Navigate the AUT to a URL |
| `refreshPage` | Refresh the AUT page |
| `waitForPageReady` | Wait for the page to be ready |
| `getIDEUrl` | Get the IDE URL |
| `setIDEUrl` | Set the IDE URL |

### Auth Config Tools

| Tool | Description |
|------|-------------|
| `getAuthConfig` | Get authentication configuration |
| `configureAuth` | Configure authentication settings |

## Error Handling

### Error Response Format

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "code": -32600,
    "message": "Invalid Request",
    "data": "Additional error details"
  }
}
```

### Common Error Codes

| Code | Meaning | Resolution |
|------|---------|------------|
| -32700 | Parse error | Check JSON syntax |
| -32600 | Invalid request | Verify request format |
| -32601 | Method not found | Check tool name |
| -32602 | Invalid params | Verify parameters |
| -32603 | Internal error | Contact support |
| -32000 | Auth/execution error | Check token and permissions |

## Code Examples

### Python

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

# List modules
result = call_mcp_tool("getModules", {
    "projectId": "p123",
    "versionId": "master",
    "includeTests": True
}, "your_token")
```

### JavaScript

```javascript
async function callMcpTool(toolName, args, token) {
  const response = await fetch('https://ai.boozang.com/api/mcp', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'tools/call',
      params: { name: toolName, arguments: args }
    })
  });
  return response.json();
}

// Create a module
const result = await callMcpTool('createModule', {
  projectId: 'p123',
  versionId: 'master',
  name: 'New Module',
  comment: 'Created via API'
}, 'your_token');
```

## Full API Reference

For the complete API specification including detailed parameters, examples, retry policies, and concurrency guidelines, see the [public agent API documentation](pathname:///agent/mcp-api.md).
