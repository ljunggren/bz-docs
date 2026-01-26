# Boozang Documentation

Documentation site for Boozang test automation platform (Docusaurus).

## Quick Commands

```bash
npm run start   # Dev server at localhost:3000
npm run build   # Production build
npm run serve   # Serve production build
```

## Key Paths

| Path | Purpose |
|------|---------|
| `docs/` | Main documentation (Markdown/MDX) |
| `sidebars.js` | Navigation structure |
| `docusaurus.config.js` | Site configuration |
| `chatgpt/` | LLM content processing |

## Session Commands

| Command | Action |
|---------|--------|
| `start session` | Read instructions, check journal |
| `end session` | Summarize work, update journal |

## Detailed Instructions

See `.agent/instructions.md` for comprehensive documentation.

## Project Structure

```
docs/           - Main documentation (Markdown/MDX)
chatgpt/        - Processed content for ChatGPT/LLM training
  pages/        - Cleaned markdown pages
static/         - Static assets (images, etc.)
src/            - React components and CSS
blog/           - Blog posts
transcripts/    - Video transcripts
```

## Commands

```bash
npm run start   # Dev server at localhost:3000
npm run build   # Production build to build/
npm run serve   # Serve production build locally
npm run clear   # Clear Docusaurus cache
```

## Documentation Guidelines

- Docs are in `docs/` organized by topic (api-testing, core-concepts, etc.)
- Use relative links between docs: `[link](../folder/file.md)`
- Images go in `docs/images/` - reference as `![alt](./images/name.png)`
- Sidebar config is in `sidebars.js`

## ChatGPT Content

The `chatgpt/` folder contains scripts to crawl and clean documentation for LLM consumption:
- `crawler.js` - Crawls the docs site
- `clean-en.mjs` - Cleans and processes content
- `pages/` - Output cleaned markdown files
