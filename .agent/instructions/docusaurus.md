# Docusaurus Instructions

## Site Structure

```
docs/                   # Main documentation
├── overview/           # Introduction and overview
├── getting-started/    # Setup and first steps
├── core-concepts/      # Key concepts
├── api-testing/        # API testing features
├── continuous-integration/  # CI/CD integration
├── integrations/       # Third-party integrations
├── reporting/          # Reports and analytics
├── model-based-testing/  # MBT features
├── coded/              # Coded tests
└── other/              # Miscellaneous
```

## Configuration Files

| File | Purpose |
|------|---------|
| `docusaurus.config.js` | Main site configuration |
| `sidebars.js` | Navigation structure |
| `src/css/custom.css` | Custom styles |

## Commands

```bash
npm run start    # Dev server at localhost:3000
npm run build    # Production build
npm run serve    # Serve production build
npm run clear    # Clear cache
```

## Adding New Pages

1. Create `.md` or `.mdx` file in appropriate `docs/` subdirectory
2. Add frontmatter:
   ```yaml
   ---
   sidebar_position: 1
   title: "Page Title"
   ---
   ```
3. Add to `sidebars.js` if needed
4. Test with `npm run start`

## MDX Features

Docusaurus supports MDX (Markdown + JSX):

```jsx
import YouTubeEmbed from '@site/src/components/YouTubeEmbed';

<YouTubeEmbed videoId="abc123" />
```

## Deployment

Site deploys to `docs.boozang.com` via GitHub Pages or hosting provider.
