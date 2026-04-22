@AGENTS.md
# [CREATIVE-THERAPY-APP] Guidelines

## Critical: No Silent Failures
- **Loud Errors:** Never use empty catch blocks or silent fallbacks. If an operation fails, it must throw an error or log it explicitly.
- **Receipts Required:** After editing any file, you must run `cat` or `ls` to verify the change actually landed. Do not rely on successful tool call messages alone.
- **No Guessing:** If you are unsure about a path or logic, use a tool to verify it. Do not hallucinate or assume successful execution.

## Development Workflow
- **Plan Mode First:** For any non-trivial change, state your plan and wait for approval before writing code.
- **Verify Before Commit:** You must run the relevant test/lint command below before declaring a task complete.
- **Atomic Sessions:** If a conversation exceeds ~25 turns or context usage reaches 50%, suggest a `/compact` or new session.

## Core Commands
- **Install:** `npm install` (or your specific command)
- **Build:** `npm run build`
- **Test:** `npm test` or `pytest`
- **Lint:** `npm run lint`

## Coding Conventions
- **Style:** [e.g., TypeScript strict mode, functional components, 2-space indentation].
- **Error Handling:** Use `async/await` with explicit error propagation.
- **Naming:** [e.g., camelCase for variables, PascalCase for classes].