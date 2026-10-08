# UI Migration Skill

## Goal

Migrate legacy HTML/CSS UI into the new Next.js UI while
preserving visual behavior.

## Workflow

1. Inspect legacy HTML structure.
2. Inspect related CSS.
3. Identify layout system.
4. Identify responsive breakpoints.
5. Identify typography.
6. Identify spacing.
7. Identify colors and visual tokens.
8. Identify interactive states.
9. Identify reusable UI patterns.
10. Map them to React components.
11. Implement.
12. Compare with the legacy UI.

## Rules

- Preserve visual intent.
- Preserve responsive behavior.
- Do not blindly copy unnecessary legacy CSS.
- Remove obsolete selectors when safely possible.
- Avoid inline styles unless justified.
- Avoid duplicated styles.
- Reuse project styling conventions.
- Do not change UX without requirement.

## Check

Verify:

- Desktop
- Tablet
- Mobile
- Hover
- Focus
- Active states
- Images
- Typography
- Spacing
- Overflow
- Navigation

## Output

Return:

- Legacy styles identified
- New implementation
- Removed obsolete styles
- Responsive behavior
- Remaining visual differences
