# Ignore Standards

- **OS Specific**: Always ignore `.DS_Store` and other OS-generated metadata.
- **Dependencies**: Never commit `node_modules/`. Always commit `package-lock.json` for reproducible builds.
- **IDE Settings**: Ignore local `.vscode/` or other IDE-specific workspace configurations.
- **Build Artifacts**: Ignore `dist/`, `build/`, `.next/`, `storybook-static/`, and generated files.
- **Environment Files**: Never commit `.env.local` or files containing secrets/credentials.
- **Test Artifacts**: Ignore `coverage/`, `playwright-report/`, `test-results/`.
- **Synchronicity**: Ensure the root `.gitignore` strictly reflects these standards.
