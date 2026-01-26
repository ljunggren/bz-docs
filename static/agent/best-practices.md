# Test Automation Best Practices

## Test Design Principles

### 1. One Test, One Purpose

Each test should verify a single behavior or scenario.

**Good:**
```
Test: User can add item to cart
  1. Navigate to product
  2. Click "Add to Cart"
  3. Verify cart count increased
```

**Avoid:**
```
Test: Shopping flow (too broad)
  1. Login
  2. Search products
  3. Add to cart
  4. Checkout
  5. Verify order
```

Split large flows into focused tests that can be composed.

---

### 2. Independent Tests

Tests should not depend on other tests' execution or state.

**Good:**
- Each test sets up its own preconditions
- Tests can run in any order
- Parallel execution is possible

**Avoid:**
- Test B requires Test A to run first
- Tests share mutable state
- Sequential-only execution

---

### 3. Stable Element Selection

Choose selectors that survive UI changes.

**Priority order:**
1. `data-testid` attributes (most stable)
2. Semantic attributes (`role`, `aria-label`)
3. Unique IDs
4. CSS classes (less stable)
5. XPath with text (least stable)

**Example:**
```html
<!-- Add test IDs to your app -->
<button data-testid="submit-order">Place Order</button>
```

```
Selector: [data-testid="submit-order"]
```

---

### 4. Meaningful Waits

Use explicit waits instead of fixed delays.

**Good:**
```
Wait for element: #confirmation-message
  Condition: visible
  Timeout: 10s
```

**Avoid:**
```
Wait: 5 seconds (arbitrary)
```

---

### 5. Data-Driven Design

Separate test logic from test data.

**Template:**
```
1. Navigate to /login
2. Enter $username
3. Enter $password
4. Click login
5. Verify $expected_result
```

**Data:**
```json
[
  { "username": "valid@test.com", "password": "correct", "expected_result": "Dashboard" },
  { "username": "valid@test.com", "password": "wrong", "expected_result": "Invalid password" },
  { "username": "blocked@test.com", "password": "any", "expected_result": "Account locked" }
]
```

---

## Test Organization

### Module Structure

Organize by feature, not by test type.

**Good:**
```
Authentication/
  Login tests
  Registration tests
  Password reset tests
Shopping Cart/
  Add to cart tests
  Cart management tests
```

**Avoid:**
```
Smoke Tests/
  (mixed features)
Regression Tests/
  (mixed features)
```

---

### Naming Conventions

| Element | Pattern | Example |
|---------|---------|---------|
| Module | Feature Name | "User Authentication" |
| Test | Action + Context | "Login with valid email and password" |
| Template | Reusable Action | "Complete checkout as guest" |

Use descriptive names that explain the scenario without reading the steps.

---

### Test Tagging

Tag tests for selective execution:

| Tag | Purpose |
|-----|---------|
| `@smoke` | Critical path, run on every deploy |
| `@regression` | Full coverage, run nightly |
| `@wip` | Work in progress, skip in CI |
| `@slow` | Long-running, run separately |

---

## Reliability Patterns

### Handle Dynamic Content

For elements with changing text or positions:

1. **Use partial matching**
   - "contains text" instead of "equals text"

2. **Use relative positioning**
   - "button inside form" instead of absolute path

3. **Wait for stability**
   - Wait for animations to complete
   - Wait for AJAX calls to finish

---

### Retry Flaky Steps

For inherently unstable operations (network, animations):

```
Action: Click checkout button
  Retry: 3 times
  Wait between: 1 second
```

---

### Clean Test Data

Each test run should start fresh:

1. **Create test data** at start of test
2. **Use unique identifiers** (timestamps, UUIDs)
3. **Clean up after** (or use isolated environments)

---

## Performance Considerations

### Parallel Execution

Design tests to run simultaneously:

- No shared state between tests
- Each test has its own user/session
- Database isolation per test

### Selective Execution

Don't run everything every time:

| Event | Tests to Run |
|-------|--------------|
| Pull request | Smoke tests only |
| Merge to main | Smoke + affected modules |
| Nightly | Full regression |
| Release | Everything |

---

## Maintenance Practices

### Regular Review

- **Weekly**: Fix flaky tests
- **Monthly**: Remove obsolete tests
- **Quarterly**: Refactor test structure

### Documentation

For complex tests, add comments explaining:
- Why this test exists
- What scenario it covers
- Any known limitations

### Version Control

- Commit test changes with feature code
- Review test changes in PRs
- Track test coverage metrics

---

## Common Anti-Patterns

### Avoid These

| Anti-Pattern | Problem | Solution |
|--------------|---------|----------|
| Hardcoded delays | Slow and unreliable | Use explicit waits |
| Shared test users | Conflicts in parallel | Create per-test users |
| Long test chains | Hard to debug | Break into small tests |
| UI-only validation | Misses backend bugs | Add API checks |
| Copy-paste tests | Maintenance burden | Use templates |
| Testing framework, not app | False confidence | Focus on user behavior |

---

## Quality Checklist

Before committing a test:

- [ ] Test has a clear, descriptive name
- [ ] Test is independent (can run alone)
- [ ] No hardcoded waits
- [ ] Selectors are stable
- [ ] Test data is isolated
- [ ] Validation is meaningful
- [ ] Test runs reliably (3+ consecutive passes)
