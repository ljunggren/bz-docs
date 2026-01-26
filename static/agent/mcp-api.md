# MCP API Reference

## Overview

The **Model Context Protocol (MCP) API** enables AI agents to programmatically interact with Boozang. Use this API to automate test management, creation, and execution.

## Authentication

### Getting an API Token

1. Log into Boozang
2. Navigate to **Settings → API Tokens**
3. Generate a new token with appropriate permissions
4. Store securely (tokens cannot be retrieved after creation)

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

---

## Available Tools

### listModules

List all modules in a project/version.

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| projectId | string | No | Project ID (uses current if omitted) |
| versionId | string | No | Version ID (uses current if omitted) |
| includeTests | boolean | No | Include test details (default: false) |

**Example Request:**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "listModules",
    "arguments": {
      "includeTests": true
    }
  }
}
```

**Example Response:**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "content": [{
      "type": "text",
      "text": "{\"modules\":[{\"code\":\"m1\",\"name\":\"Authentication\",\"tests\":[...]}]}"
    }]
  }
}
```

---

### getModule

Get details of a specific module.

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| moduleId | string | Yes | Module ID or path (e.g., "m1" or "1.2") |

**Example:**

```json
{
  "params": {
    "name": "getModule",
    "arguments": {
      "moduleId": "m1"
    }
  }
}
```

---

### createModule

Create a new module.

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| name | string | Yes | Module name |
| code | string | No | Module code (auto-generated if omitted) |
| parentPath | string | No | Parent module path for nesting |
| description | string | No | Module description |

**Example:**

```json
{
  "params": {
    "name": "createModule",
    "arguments": {
      "name": "Payment Processing",
      "description": "Tests for payment flows"
    }
  }
}
```

---

### editModule

Update an existing module.

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| moduleId | string | Yes | Module ID to update |
| name | string | No | New name |
| description | string | No | New description |

---

### deleteModule

Delete a module.

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| moduleId | string | Yes | Module ID to delete |

**Warning:** This permanently deletes the module and all its tests.

---

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
| 401 | Unauthorized | Check token validity |
| 403 | Forbidden | Check project permissions |
| 404 | Not found | Verify resource exists |

---

## Rate Limits

| Tier | Requests/minute | Requests/day |
|------|-----------------|--------------|
| Free | 60 | 1,000 |
| Pro | 300 | 10,000 |
| Enterprise | Unlimited | Unlimited |

---

## SDK Examples

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
result = call_mcp_tool("listModules", {"includeTests": True}, "your_token")
print(result)
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
  name: 'New Module',
  description: 'Created via API'
}, 'your_token');
```

---

## Best Practices

1. **Cache tokens** - Don't request new tokens for every call
2. **Handle errors** - Always check for error responses
3. **Respect rate limits** - Implement exponential backoff
4. **Use specific scopes** - Request minimal permissions
5. **Secure tokens** - Never commit tokens to version control
