# Refactoring Skill

## Goal

Improve code structure without changing external behavior.

## Workflow

1. Define current behavior.
2. Identify the problem.
3. Identify duplication or complexity.
4. Check existing architecture.
5. Propose the smallest useful refactor.
6. Identify affected files.
7. Identify regression risks.
8. Wait for approval.
9. Implement.
10. Run tests/build.
11. Review git diff.

## Rules

- Behavior must remain unchanged.
- Avoid speculative abstractions.
- Do not refactor unrelated code.
- Prefer small incremental changes.
- Remove duplication only when duplication is meaningful.
- Do not introduce architecture merely for theoretical scalability.

## Output

Before implementation:

- Current problem
- Proposed refactor
- Benefits
- Risks
- Files affected

After implementation:

- Changes
- Validation
- Behavior confirmation
