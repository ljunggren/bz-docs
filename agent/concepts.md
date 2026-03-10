# Boozang Core Concepts

## Data Hierarchy

```
Company
  └── Project
        └── Version (like a branch)
              └── Module (test container)
                    └── Test
                          └── Actions (steps)
```

## Projects

A **Project** is the top-level container for all test assets.

- Has a unique `code` (identifier) and `name`
- Contains multiple **Versions** (like git branches)
- Users have role-based access per project

**Common roles:**
- `owner` - Full control
- `admin` - Manage users and settings
- `developer` - Create and edit tests
- `viewer` - Read-only access

## Versions

A **Version** acts like a branch for your tests.

- Allows parallel development of test suites
- Contains all modules and tests
- Can be merged or compared

**Typical usage:**
- `master` - Production-ready tests
- `development` - Work in progress
- Feature branches for new test development

## Modules

A **Module** groups related tests together.

- Identified by `code` and `name`
- Can be nested (sub-modules)
- Contains tests and shared data

**Recommended organization:**
```
m1. Authentication
    t1. Login with valid credentials
    t2. Login with invalid password
    t3. Forgot password flow
m2. Shopping Cart
    t1. Add item to cart
    t2. Remove item from cart
    t3. Update quantity
```

## Tests

A **Test** is an individual test case containing actions.

### Test Types

| Type | Code | Purpose |
|------|------|---------|
| Test | `test` | Standard test case |
| Unit | `unit` | Component-level test |
| Integration | `int` | Cross-component test |
| API | `api` | Backend API test |

### Test Structure

```
Test: Login with valid credentials
  ├── Action 1: Navigate to login page
  ├── Action 2: Enter username
  ├── Action 3: Enter password
  ├── Action 4: Click login button
  └── Action 5: Verify dashboard loaded
```

## Actions

An **Action** is a single step within a test.

### Action Types

| Type | Description | Example |
|------|-------------|---------|
| `click` | Click an element | Click "Submit" button |
| `set` | Enter text | Type email address |
| `validate` | Assert condition | Verify text is visible |
| `script` | Run JavaScript | Custom validation logic |
| `call` | Call another test | Reuse login flow |

### Element Selection

Boozang uses multiple strategies to find elements:

1. **Natural language** - "the login button"
2. **CSS selectors** - `.btn-primary`
3. **XPath** - `//button[@id='login']`
4. **AI-powered** - Automatic element detection

## Data-Driven Testing

Tests can be parameterized using **Loop Data**.

```json
{
  "testData": [
    { "username": "user1@test.com", "password": "pass1" },
    { "username": "user2@test.com", "password": "pass2" }
  ]
}
```

The test runs once for each data row, enabling:
- Multiple user scenarios
- Boundary value testing
- Cross-browser/environment testing

## Templates

**Templates** are reusable action sequences.

- Define once, use across multiple tests
- Keep tests DRY (Don't Repeat Yourself)
- Update in one place, changes reflect everywhere

**Example template**: "Login as Admin"
- Used in 50 tests
- When login flow changes, update template only
