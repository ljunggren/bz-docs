# LLM Content Processing

## Overview

The `chatgpt/` directory contains infrastructure for preparing documentation for LLM consumption (ChatGPT, Claude, etc.).

## Directory Structure

```
chatgpt/
├── crawler.js              # Crawls the docs site
├── clean-en.mjs            # Cleans and processes content
├── pages/                  # Output: cleaned markdown (51 files)
├── all-crawled.md          # Combined content (428KB)
├── boozang_dictionary.csv  # Terminology definitions
└── boozang_dictionary_dirty.js  # Raw dictionary data
```

## Processing Workflow

After updating documentation:

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Serve locally** (for crawler):
   ```bash
   npm run serve
   ```

3. **Run crawler** (in another terminal):
   ```bash
   node chatgpt/crawler.js
   ```

4. **Clean content**:
   ```bash
   node chatgpt/clean-en.mjs
   ```

5. **Verify output** in `chatgpt/pages/`

## Terminology Dictionary

`boozang_dictionary.csv` contains 150+ term definitions:
- Boozang-specific terminology
- Test automation concepts
- UI element names

Use this for consistent language across documentation.

## Output Usage

The processed content in `chatgpt/pages/` and `all-crawled.md` can be:
- Fed to LLMs for training
- Used as context for AI assistants
- Searched for terminology

## When to Regenerate

Regenerate LLM content when:
- Significant documentation updates
- New features added
- Terminology changes
- Before major releases
