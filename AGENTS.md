# Repository Guidelines

## Project Context
This repo is a lightweight landing base for quick Codex-driven experiments, with a focus on simple, mobile-friendly GitHub Pages demos. Keep changes small, easy to run in a browser, and biased toward clarity over setup complexity.

## Project Structure & Module Organization
This repository currently has no tracked source files. As you add code, keep a clear top-level layout so contributors can find things quickly. A typical structure could look like:

- `src/` for application code (feature folders or modules).
- `tests/` for unit/integration tests (mirror `src/` paths).
- `assets/` for static files (images, audio, data).
- `docs/` for design notes or API references.

If you introduce new top-level directories, document them here and keep names short and consistent.

## Build, Test, and Development Commands
No build or run commands are defined yet. When you add tooling, include the exact commands and a brief description, for example:

- `npm run dev` - start the local dev server.
- `npm test` - run unit tests.
- `npm run build` - create a production build.

Keep commands in `package.json` or a `Makefile` so they are easy to discover.

## Coding Style & Naming Conventions
No style guide or formatter is configured yet. Until one is added, use these defaults:

- Indentation: 2 spaces for JS/TS/JSON, 4 spaces for Python.
- Naming: `camelCase` for variables/functions, `PascalCase` for types/classes, `kebab-case` for file names.
- Prefer explicit, descriptive names over abbreviations.

If you add a formatter or linter (e.g., Prettier, ESLint, Ruff), document the config and run commands here.

## Testing Guidelines
No test framework is configured yet. When you add tests, keep them near the code they validate or under `tests/`, and name files clearly (e.g., `player-state.test.ts`). Document how to run all tests and any coverage targets.

## Commit & Pull Request Guidelines
There is no Git history yet, so no established commit conventions. If you start a convention, keep messages consistent (e.g., `feat: add level loader`, `fix: prevent null crash`).

Pull requests should include:

- A concise summary of changes.
- Any linked issue or task reference.
- Screenshots or recordings for UI changes.
- Notes on how to test locally.

## Agent-Specific Instructions
This repository uses an `AGENTS.md` guide to help automated contributors. Keep it updated as project structure and tooling evolve.
