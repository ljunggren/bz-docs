# Operation & DevOps

**IMPORTANT: Always use project scripts for all operations. Never run tools directly if a script exists.**

## Scripts

```bash
npm run start   # Dev server at localhost:3000
npm run build   # Production build to build/
npm run serve   # Serve production build locally
npm run clear   # Clear Docusaurus cache
```

## Ports

| Service | Port |
|---------|------|
| Dev server | 3000 |

## LLM Content Pipeline

After significant documentation changes, regenerate LLM content:

```bash
npm run build && npm run serve  # Build and serve locally
node chatgpt/crawler.js         # Crawl docs site
node chatgpt/clean-en.mjs       # Clean and process content
```

## Deployment Verification

After any deploy, verify:

1. **Build succeeds** — `npm run build` completes without errors
2. **Local test** — `npm run serve` and check key pages
3. **Links work** — No broken internal or external links
4. **Images load** — All referenced images render correctly
5. **Sidebar correct** — Navigation structure matches `sidebars.js`

## Prerequisites

- Node.js (check `.nvmrc` or `package.json` engines if specified)
- npm
