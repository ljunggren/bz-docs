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

### getModules

List all modules in a project/version.

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| projectId | string | Yes | Boozang project code |
| versionId | string | Yes | Version code (e.g., "master") |
| includeTests | boolean | No | Include test details (default: false) |

**Example Request:**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "getModules",
    "arguments": {
      "projectId": "p123",
      "versionId": "master",
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
      "text": "{\"success\":true,\"modules\":[{\"code\":\"m1\",\"name\":\"Authentication\",\"tests\":[...]}],\"projectCode\":\"p123\",\"versionCode\":\"master\"}"
    }]
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
| projectId | string | Yes | Boozang project code |
| versionId | string | Yes | Version code |
| parentModule | string | No | Parent module code for nesting |
| comment | string | No | Module description/comment |

**Example:**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "createModule",
    "arguments": {
      "projectId": "p123",
      "versionId": "master",
      "name": "Payment Processing",
      "comment": "Tests for payment flows"
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
      "text": "{\"success\":true,\"module\":{\"id\":\"...\",\"code\":\"m5\",\"name\":\"Payment Processing\"},\"message\":\"Module \\\"Payment Processing\\\" created successfully\"}"
    }]
  }
}
```

---

### editModule

Update an existing module.

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| moduleCode | string | Yes | Module code to update (e.g., "m1") |
| projectId | string | Yes | Boozang project code |
| versionId | string | Yes | Version code |
| name | string | No | New name |
| comment | string | No | New description/comment |

**Example:**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "editModule",
    "arguments": {
      "projectId": "p123",
      "versionId": "master",
      "moduleCode": "m5",
      "name": "Payment Processing v2",
      "comment": "Updated payment tests"
    }
  }
}
```

---

### deleteModule

Delete a module.

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| moduleCode | string | Yes | Module code to delete (e.g., "m1") |
| projectId | string | Yes | Boozang project code |
| versionId | string | Yes | Version code |

**Warning:** This permanently deletes the module and all its tests.

**Example:**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "deleteModule",
    "arguments": {
      "projectId": "p123",
      "versionId": "master",
      "moduleCode": "m5"
    }
  }
}
```

---

### getEnvironments

List all environments in a project/version.

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| projectId | string | Yes | Boozang project code |
| versionId | string | Yes | Version code |

---

### createEnvironment

Create a new environment.

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| name | string | Yes | Environment name |
| projectId | string | Yes | Boozang project code |
| versionId | string | Yes | Version code |
| items | array | No | Application configurations |

---

### editEnvironment

Update an existing environment.

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| environmentCode | string | Yes | Environment code to update |
| projectId | string | Yes | Boozang project code |
| versionId | string | Yes | Version code |
| name | string | No | New name |
| items | array | No | Updated application configurations |

---

### deleteEnvironment

Delete an environment.

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| environmentCode | string | Yes | Environment code to delete |
| projectId | string | Yes | Boozang project code |
| versionId | string | Yes | Version code |

---

### provisionEnvironments

Provision multiple environments from configuration.

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| projectId | string | Yes | Boozang project code |
| versionId | string | Yes | Version code |
| environments | array | Yes | Array of environment configs |

---

## IDE Control Tools

These tools control the Boozang IDE browser window via Socket.io. They require the IDE to be open in a browser and logged into a project.

### getIDEState

Get the current state of the IDE (open project, module, test).

**Parameters:** None

**Example Request:**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "getIDEState",
    "arguments": {}
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
      "text": "{\"success\":true,\"state\":{\"project\":{\"code\":\"p123\",\"name\":\"My Project\"},\"version\":{\"code\":\"master\"},\"module\":{\"code\":\"m1\"},\"test\":{\"code\":\"t1\"},\"connected\":true}}"
    }]
  }
}
```

---

### navigateTo

Navigate the IDE to a specific module or test.

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| moduleId | string | Yes | Module code to navigate to (e.g., "m1") |
| testId | string | No | Test code to navigate to (requires moduleId) |

**Example Request:**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "navigateTo",
    "arguments": {
      "moduleId": "m1",
      "testId": "t1"
    }
  }
}
```

---

### runTest

Run a test in the IDE and return pass/fail result.

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| moduleId | string | Yes | Module code containing the test |
| testId | string | Yes | Test code to run |

**Prerequisites:**
- IDE must be open in a browser, logged into a project
- AUT (application under test) window must be open, **or** popups must be allowed for the IDE domain so it can be opened automatically
- If the AUT window is closed and popups are blocked, the tool returns an error: `"AUT window is not open and could not be opened automatically. Allow popups for the IDE domain in browser settings, or open the application window manually."`

**Example Request:**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "runTest",
    "arguments": {
      "moduleId": "m1",
      "testId": "t1"
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
      "text": "{\"success\":true,\"testResult\":{\"passed\":3,\"failed\":0,\"total\":3,\"duration\":1250,\"status\":\"pass\"}}"
    }]
  }
}
```

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
result = call_mcp_tool("getModules", {
    "projectId": "p123",
    "versionId": "master",
    "includeTests": True
}, "your_token")
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
  projectId: 'p123',
  versionId: 'master',
  name: 'New Module',
  comment: 'Created via API'
}, 'your_token');
```

---

## Retry Policy

### When to Retry

| Error Type | Action | Retry Strategy |
|------------|--------|----------------|
| 5xx Server errors | Retry | Exponential backoff, max 3 attempts |
| 429 Rate limited | Retry | Wait for `Retry-After` header |
| 401 Unauthorized | Do not retry | Re-authenticate with fresh token |
| 400 Bad request | Do not retry | Fix request parameters |
| -32602 Invalid params | Do not retry | Fix request parameters |
| Network timeout | Retry | Exponential backoff, max 3 attempts |

### Exponential Backoff Example

```javascript
async function callWithRetry(request, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await callMcpTool(request);
      if (response.error?.code >= -32000) {
        return response; // Application error, don't retry
      }
      return response;
    } catch (error) {
      if (attempt === maxRetries - 1) throw error;
      const delay = Math.pow(2, attempt) * 1000; // 1s, 2s, 4s
      await new Promise(r => setTimeout(r, delay));
    }
  }
}
```

---

## Concurrency

### Important Considerations

- **Operations are NOT atomic**: Multiple concurrent operations on the same module may cause conflicts
- **No optimistic locking**: Check `success` field in responses to verify operations completed
- **Read-after-write**: Allow brief delay before reading after write operations

### Recommended Patterns

1. **Sequential operations**: For related changes, execute sequentially
   ```javascript
   await createModule(...);
   await editModule(...);  // Wait for create to complete
   ```

2. **Verify mutations**: Check response `success` field
   ```javascript
   const result = await callTool('createModule', params);
   const data = JSON.parse(result.content[0].text);
   if (!data.success) {
     throw new Error(data.error.message);
   }
   ```

3. **Avoid parallel mutations**: Don't update the same module from multiple agents simultaneously

---

## Best Practices

1. **Cache tokens** - Don't request new tokens for every call
2. **Handle errors** - Always check for error responses
3. **Respect rate limits** - Implement exponential backoff
4. **Use specific scopes** - Request minimal permissions
5. **Secure tokens** - Never commit tokens to version control
6. **Validate responses** - Check `success` field before proceeding
7. **Use sequential mutations** - Avoid parallel writes to same resources
