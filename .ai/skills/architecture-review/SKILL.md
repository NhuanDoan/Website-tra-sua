# Architecture Review Skill

## Goal

Review a proposed architecture before implementation.

## Workflow

1. Understand the project requirements.
2. Read the current project context.
3. Review the proposed architecture.
4. Compare it with existing project conventions.
5. Identify unnecessary complexity.
6. Identify missing concerns.
7. Identify migration risks.
8. Check whether responsibilities are correctly separated.
9. Recommend changes only when justified.

## Review

Check:

- Routing
- Component boundaries
- Data flow
- State management
- Server/client boundaries
- Styling
- Assets
- Authentication
- Error handling
- Testing
- Maintainability
- Scalability
- Complexity

## Rules

- Do not redesign architecture without evidence.
- Prefer the simplest architecture that satisfies requirements.
- Do not introduce libraries without justification.
- Do not optimize for hypothetical future requirements.
- Preserve working behavior where possible.

## Output

Return:

1. What is good
2. Problems
3. Risks
4. Recommended changes
5. Final recommendation

Do not implement anything.
