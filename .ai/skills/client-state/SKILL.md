# Client State Skill

## Goal

Design and implement client-side state only when UI interaction
requires it.

## Workflow

1. Identify the state requirement.
2. Determine whether state is actually necessary.
3. Determine state ownership.
4. Determine whether state is local or shared.
5. Identify consumers.
6. Choose the simplest appropriate solution.
7. Define state types.
8. Implement.
9. Test state transitions.

## Decision order

Prefer:

1. Local component state
2. Lifted state
3. React Context
4. Existing project state solution
5. External state library only when justified

## Rules

- Do not introduce global state unnecessarily.
- Do not introduce a state library for simple local state.
- Keep state close to where it is used.
- Keep business rules separate from UI.
- Use strict TypeScript.
- Handle invalid state safely.

## Output

Return:

- State required
- State owner
- Consumers
- Recommended solution
- Why alternatives were rejected
- Files affected
