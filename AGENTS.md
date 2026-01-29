# Agent Instructions

## Core Philosophy

**Every web application is a state machine.**

Boozang users model application behavior - modules, operations, interdependencies. Not click sequences. All documentation must reflect this paradigm. See `.agent/context/testing-philosophy.md`.

> **For AI Agents**: Read `.agent/instructions.md` for complete guidelines.

## Quick Reference

```bash
npm run start   # Dev server
npm run build   # Production build
```

## Key Guidelines

- Use consistent terminology (see `chatgpt/boozang_dictionary.csv`)
- Test changes locally before committing
- Update LLM content after significant changes

## Documentation Agent

When editing documentation:
- Keep language clear and concise
- Use consistent terminology (see chatgpt/boozang_dictionary.csv)
- Preserve existing formatting and structure
- Test links work correctly

## Content Processing

When working with the chatgpt/ folder:
- Run `node chatgpt/clean-en.mjs` after changes to regenerate cleaned content
- Output goes to `chatgpt/pages/`
- `all-crawled.md` contains combined content

## Build & Deploy

1. Test locally: `npm run start`
2. Build: `npm run build`
3. Verify: `npm run serve`

## File Conventions

| Path | Purpose |
|------|---------|
| `docs/**/*.md` | Source documentation |
| `chatgpt/pages/*.md` | Processed LLM content |
| `sidebars.js` | Navigation structure |
| `docusaurus.config.js` | Site configuration |
