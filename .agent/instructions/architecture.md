# Architecture & Patterns

## Technology Stack

- **Framework**: Docusaurus 2 (React-based static site generator)
- **Language**: Markdown/MDX for content, JavaScript for config
- **Styling**: Custom CSS in `src/css/custom.css`
- **Hosting**: Static deployment at docs.boozang.com

## Project Structure

```
docs/               - Main documentation (Markdown/MDX)
  overview/         - Product overview
  getting-started/  - Setup and onboarding
  core-concepts/    - Fundamental concepts
  api-testing/      - API testing guides
  continuous-integration/ - CI/CD integration
  integrations/     - Third-party integrations
  reporting/        - Test reporting
  model-based-testing/ - Model-based testing
  coded/            - Coded (JavaScript) tests
  other/            - Miscellaneous topics
  images/           - Documentation images
static/             - Static assets
  agent/            - Public AI agent docs (mirrored from bz repo)
src/                - React components and custom CSS
  components/       - Custom MDX components (e.g., YouTubeEmbed)
  css/              - Custom styling
chatgpt/            - LLM content processing pipeline
  pages/            - Cleaned markdown output
blog/               - Blog posts
transcripts/        - Video transcripts
.agent/             - AI agent configuration
.readonly/          - Protected specifications (never modify)
```

## Key Design Principles

- **Philosophy first**: All documentation reflects the state machine paradigm
- **Content over chrome**: Focus on clear, accurate documentation
- **Mirror pattern**: Public agent docs in `static/agent/` mirror `bz/public/agent/`
- **LLM-ready**: Documentation is processed for AI consumption via `chatgpt/` pipeline

## Key Configuration Files

| File | Purpose |
|------|---------|
| `docusaurus.config.js` | Site configuration, theme, plugins |
| `sidebars.js` | Navigation structure |
| `src/css/custom.css` | Theme customization |
| `package.json` | Dependencies and scripts |
