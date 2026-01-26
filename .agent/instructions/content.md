# Content Guidelines

## Documentation Structure

Each major topic should have:
1. **Overview** - What it is and why it matters
2. **Getting Started** - Quick start steps
3. **Concepts** - Detailed explanations
4. **Examples** - Practical usage
5. **Reference** - Complete options/API

## Writing New Documentation

### Before Writing

1. Check if similar content exists
2. Identify the target audience
3. Determine where it fits in navigation

### Page Structure

```markdown
---
sidebar_position: 1
title: "Feature Name"
---

# Feature Name

Brief introduction (1-2 sentences).

## Overview

What this feature does and why it's useful.

## Getting Started

Step-by-step guide to first use.

## Key Concepts

Detailed explanation of concepts.

## Examples

Practical examples with screenshots/code.

## Best Practices

Recommendations for effective use.

## Troubleshooting

Common issues and solutions.
```

## Updating Existing Content

1. Preserve existing structure
2. Update screenshots if UI changed
3. Check all links still work
4. Update related pages if needed
5. Run LLM processing if content changed

## Video Embeds

Use the YouTubeEmbed component:

```jsx
import YouTubeEmbed from '@site/src/components/YouTubeEmbed';

<YouTubeEmbed videoId="VIDEO_ID" />
```

Video transcripts are in `transcripts/` for reference.

## Cross-References

Link to related content:
- Within docs: `[Module concepts](../core-concepts/modules.md)`
- To main site: `[Boozang homepage](https://boozang.com)`
- To app: `[Open Boozang](https://ai.boozang.com)`
