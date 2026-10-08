# Next.js Migration Skill

## Goal

Migrate one feature or page from the legacy HTML/CSS/JS
TeaMilk project into the approved Next.js architecture.

## Workflow

1. Identify the legacy page/feature.
2. Read only relevant HTML.
3. Read related CSS.
4. Read related JavaScript.
5. Identify required assets.
6. Identify existing behavior.
7. Identify reusable UI.
8. Map legacy structure to Next.js.
9. Determine Server vs Client Components.
10. Determine state requirements.
11. Identify data requirements.
12. Propose files to create/change.
13. Analyze migration risks.
14. Wait for approval.
15. Implement.
16. Run validation.
17. Review the diff.

## Before implementation

Return:

- Legacy files involved
- Existing behavior
- Assets involved
- Components to reuse
- Components to create
- Server/client decisions
- State requirements
- Data requirements
- Files to modify
- Files to create
- Risks
- Validation plan

Do not modify files.

## Implementation rules

- Follow PROJECT_CONTEXT.md.
- Preserve existing behavior.
- Preserve responsive behavior.
- Reuse existing assets where appropriate.
- Reuse existing components.
- Keep page components focused on composition.
- Keep business logic outside page components.
- Use TypeScript.
- Do not use `any`.
- Avoid unnecessary dependencies.
- Do not rewrite unrelated code.
- Make the smallest safe change.

## Validation

After implementation:

- Run lint.
- Run type checking if available.
- Run build.
- Test important interactions.
- Check responsive behavior.
- Review git diff.

Report:

- Files changed
- Functionality migrated
- Validation results
- Remaining issues
