# Legacy JavaScript Migration Skill

## Goal

Migrate legacy JavaScript behavior into maintainable
TypeScript/React behavior.

## Workflow

1. Identify the legacy JavaScript file.
2. Identify what triggers the behavior.
3. Trace the state changes.
4. Identify DOM manipulation.
5. Identify event handlers.
6. Identify external dependencies.
7. Determine whether React state/effects are required.
8. Map behavior to React architecture.
9. Implement.
10. Test the original behavior.

## Rules

- Preserve behavior unless requirements changed.
- Do not blindly translate jQuery/DOM code line-by-line.
- Prefer React state and event handlers.
- Avoid unnecessary `useEffect`.
- Do not manipulate the DOM directly unless required.
- Do not copy legacy architectural problems into React.
- Use TypeScript.
- No `any`.

## Before implementation

Explain:

Legacy behavior
→ React equivalent
→ State
→ Events
→ Side effects

Do not implement until the migration approach is clear.
