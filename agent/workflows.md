# Common Workflows

## Creating Your First Test

### Step 1: Create a Module

```
Project → Version → Right-click → New Module
```

Name it based on the feature: "User Authentication", "Checkout Flow", etc.

### Step 2: Create a Test

```
Module → Right-click → New Test
```

Give it a descriptive name: "Login with valid credentials"

### Step 3: Record Actions

1. Click the **Record** button
2. Perform actions in your application
3. Click **Stop** when done
4. Review and refine recorded actions

### Step 4: Add Validations

After key actions, add validation steps:
- Verify text is visible
- Check element exists
- Validate URL changed

### Step 5: Run and Debug

1. Click **Play** to run the test
2. Watch the execution
3. Fix any failing steps
4. Re-run until stable

---

## Organizing Tests by Feature

### Recommended Structure

```
m1. Core Flows
    m1.1. Authentication
          t1. Login - valid credentials
          t2. Login - invalid password
          t3. Logout
    m1.2. Navigation
          t1. Main menu links
          t2. Breadcrumb navigation
m2. E-commerce
    m2.1. Product Catalog
          t1. Search products
          t2. Filter by category
    m2.2. Shopping Cart
          t1. Add to cart
          t2. Update quantity
          t3. Remove item
    m2.3. Checkout
          t1. Guest checkout
          t2. Registered user checkout
m3. User Account
    t1. Update profile
    t2. Change password
    t3. View order history
```

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Module | Feature area | "Shopping Cart" |
| Test | Action + Context | "Add item to cart" |
| Action | Verb + Target | "Click submit button" |

---

## Creating Reusable Components

### When to Create a Template

Create a template when:
- Same steps appear in 3+ tests
- The flow is stable and well-defined
- Changes should propagate automatically

### Template Example: Login Flow

**Template: "Login as User"**
```
1. Navigate to /login
2. Enter {{username}} in email field
3. Enter {{password}} in password field
4. Click "Sign In" button
5. Wait for dashboard to load
```

**Usage in tests:**
```
Test: Purchase as registered user
  1. [Call Template] Login as User (username: "buyer@test.com")
  2. Search for "laptop"
  3. Add to cart
  4. Complete checkout
```

---

## Data-Driven Testing

### Setting Up Test Data

1. Open test properties
2. Navigate to "Loop Data" tab
3. Add data rows:

```json
[
  { "product": "Laptop", "quantity": 1, "expected_total": "$999" },
  { "product": "Mouse", "quantity": 2, "expected_total": "$50" },
  { "product": "Keyboard", "quantity": 1, "expected_total": "$75" }
]
```

### Using Variables in Actions

Reference data using `$` prefix:
- `$product` → "Laptop"
- `$quantity` → 1
- `$expected_total` → "$999"

---

## CI/CD Integration

### Running Tests from Command Line

```bash
# Run all tests (project is derived from token)
npx boozang run --token=TOKEN

# Run specific module
npx boozang run --module=m1 --token=TOKEN

# Run with environment
npx boozang run --env=staging --token=TOKEN
```

### GitHub Actions Example

```yaml
name: E2E Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Boozang Tests
        run: npx boozang run --token=${{ secrets.BZ_TOKEN }}
```

---

## Debugging Failed Tests

### Common Failure Reasons

| Symptom | Likely Cause | Solution |
|---------|--------------|----------|
| Element not found | Selector changed | Update element reference |
| Timeout | Page slow to load | Increase wait time |
| Unexpected text | Dynamic content | Use partial match or regex |
| Click no effect | Element covered | Scroll into view first |

### Debugging Steps

1. **Check screenshots** - Review failure screenshots
2. **Inspect element** - Verify selector still works
3. **Add waits** - Ensure element is ready
4. **Check data** - Verify test data is correct
5. **Run in slow mode** - Watch step-by-step execution

---

## Collaboration Workflow

### Working as a Team

1. **Use versions** - Create branches for features
2. **Communicate** - Use test comments for context
3. **Review** - Check changes before merging
4. **Don't overlap** - Avoid editing same tests simultaneously

### Merging Versions

```
feature-branch → development → master
```

1. Complete feature tests in branch
2. Merge to development for integration
3. Run full suite
4. Merge to master when stable
