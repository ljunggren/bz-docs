# Boozang Testing Philosophy

This document captures the foundational idea behind Boozang. Every piece of documentation should reflect this philosophy.

## The Core Insight

**Every web application is a state machine.**

This is not a metaphor - it's the literal foundation of how Boozang approaches test automation. Regardless of complexity, any web application can be understood as:

- **States** = possible configurations of data and UI
- **Operations** = transitions between states
- **Modules** = bounded contexts with their own state spaces
- **Interdependencies** = how operations in one module affect states in another

## Why Traditional Test Automation Fails

Traditional test automation is **procedural** - you script sequences of actions:

```
Click login button
Enter username
Enter password
Click submit
Assert dashboard visible
```

This approach is fundamentally flawed:

1. **You're testing paths, not behavior** - A scripted sequence only validates one specific path through the application
2. **No understanding of relationships** - Each test is isolated; the automation doesn't know that "Create User" enables "Assign Role"
3. **Brittle to change** - Any UI change can break tests with no insight into actual behavioral impact
4. **Maintenance nightmare** - Tests accumulate as disconnected scripts with duplicated logic

## The Boozang Approach

With Boozang, you're not writing tests. You're **modeling the application's state machine**.

### What You Define

1. **Modules** - Bounded contexts in the application (e.g., User Management, Inventory, Billing)
2. **Operations** - Every action possible within each module (Create, Edit, Delete, Archive, Share, etc.)
3. **Interdependencies** - How modules and operations relate:
   - Module A's "Create" enables Module B's "Assign"
   - Module C's "Delete" cascades to Module D
   - State X in Module E unlocks Operation Y in Module F

### What Boozang Understands

Once the model is defined, Boozang understands the **graph of possible states and transitions**:

```
          ┌─────────┐
          │  Start  │
          └────┬────┘
               │ Create User
               ▼
          ┌─────────┐      Assign Role      ┌─────────┐
          │  User   │─────────────────────▶│  Role   │
          │ Exists  │                       │Assigned │
          └────┬────┘                       └────┬────┘
               │ Delete User                     │
               ▼                                 │
          ┌─────────┐      Cascades              │
          │ Deleted │◀───────────────────────────┘
          └─────────┘
```

### How Testing Changes

Tests become **explorations of the state space**, not blind click sequences:

| Traditional | Boozang |
|-------------|---------|
| Test scripts | State machine model |
| Test paths | Test behaviors |
| Isolated tests | Connected operations |
| Manual maintenance | Model-driven updates |
| "Did the clicks work?" | "Is the state valid?" |

When something changes in the application:
- You update the model (not hundreds of scripts)
- Boozang knows what states are affected
- Boozang knows what downstream dependencies break
- You understand the actual behavioral impact

## Implications for Documentation

When writing Boozang documentation:

1. **Never describe Boozang as "record and playback"** - That implies procedural scripting
2. **Emphasize modeling over scripting** - Users define application behavior, not click sequences
3. **Highlight interdependencies** - This is the key differentiator
4. **Use state machine language** - States, transitions, operations, not "steps" and "clicks"
5. **Compare depth, not ease** - Boozang isn't just "easier Selenium" - it's a fundamentally different approach

## Key Phrases

Use these when explaining Boozang:

- "Model your application's behavior"
- "Map operations and interdependencies"
- "Test the state machine, not just paths"
- "Understand how changes ripple through your application"
- "Living model that evolves with your application"

Avoid these:

- "Click here, click there"
- "Record your actions"
- "Script your tests"
- "Automated clicking"

## Further Reading

- `/docs/model-based-testing/introduction.mdx` - User-facing explanation
- `/docs/model-based-testing/advantages.mdx` - Benefits of the approach
- `/demo/model-based-implementation-of-example-saas-file-cabinets.md` - Practical implementation guide
