# Code Review Skill

## Goal

Review code changes for correctness, maintainability,
architecture, and unnecessary complexity.

## Workflow

1. Review the git diff.
2. Understand the intended change.
3. Check architecture.
4. Check TypeScript.
5. Check React/Next.js usage.
6. Check state management.
7. Check error handling.
8. Check responsive behavior when relevant.
9. Check performance risks.
10. Check security concerns.
11. Check unnecessary changes.
12. Check tests.
13. Report findings.

## Severity

CRITICAL

- Security issue
- Data loss
- Broken core functionality

HIGH

- Significant bug
- Architecture violation
- Incorrect state/data behavior

MEDIUM

- Maintainability issue
- Missing edge case
- Poor implementation

LOW

- Style
- Minor improvement

## Rules

- Review the diff, not the entire project unnecessarily.
- Do not criticize intentional behavior without evidence.
- Prioritize real problems.
- Do not recommend unnecessary rewrites.

## Output

For each finding:

Severity
File
Location
Problem
Why it matters
Recommended fix

If no important issues exist, say so.
