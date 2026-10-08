# TeaMilk Design System

## Purpose and status

This document defines reusable visual and interaction rules for TeaMilk pages, including Home, Menu, News, Contact, Login, Register, Account, Orders, and Checkout. Apply the same system as pages are redesigned incrementally.

Values identified as **proposed** or **recommended** are starting points from the approved UI/UX direction. They are not confirmed brand standards unless explicitly marked approved later. This document does not select a new styling framework or change the application architecture.

## Visual direction

Use a contemporary Vietnamese tea-house style: warm, confident, ingredient-led, and approachable. The TeaMilk logo provides the identity anchor. Use calm cream surfaces, deep tea-brown text and actions, and restrained matcha and apricot accents. Let authentic TeaMilk product photography and concise editorial content carry personality.

Do not use another tea brand's logo or campaign artwork as TeaMilk branding. Confirm asset ownership and accuracy before using campaign, product, store, or company imagery and information.

## Color tokens

Use semantic tokens in shared styles. Components should refer to token names rather than repeat raw color values. These color values are **proposed**, not confirmed official brand colors:

| Token | Proposed value | Use |
|---|---|---|
| `--color-brand-primary` | `#9A3C22` | Primary buttons, key links, selected states |
| `--color-text` | `#302820` | Main text and headings |
| `--color-background` | `#FFF9F1` | Main page background |
| `--color-surface-warm` | `#F0E4D4` | Warm section and card surfaces |
| `--color-accent-matcha` | `#64744F` | Supporting accents and category details |
| `--color-accent-apricot` | `#E5A36F` | Campaign highlights and small accents |
| `--color-border` | `#E4D8C9` | Dividers, card outlines, and form boundaries |
| `--color-white` | `#FFFFFF` | Contrast surface and button text where appropriate |

Use the primary tea-brown with white text for primary actions. Keep matcha and apricot as supporting accents; do not use green as the default action color throughout the site. Check all final foreground/background combinations for WCAG AA contrast before release. If a proposed value fails contrast for its intended use, adjust the token rather than relying on color alone.

## Typography

- **Proposed primary family:** Be Vietnam Pro for interface text, body copy, labels, navigation, and controls.
- **Proposed display family:** Lora for selective editorial headings. If a two-family treatment feels inconsistent with the TeaMilk logo, use Be Vietnam Pro throughout.
- Confirm font licensing and Vietnamese glyph coverage before adoption. Prefer self-hosted approved font files; do not add an external font dependency without approval.
- Use a clear hierarchy of page title, section heading, card title, body, supporting text, and label. Prefer sentence case; reserve uppercase for short labels or campaign styling.
- **Recommended starting values, pending design review:** body text 16px with line height around 1.6; small supporting text no smaller than 14px; headings scale responsively and use weight and spacing consistently.

## Spacing, shape, and layout

- Build layouts from a consistent spacing scale and generous whitespace. Avoid one-off margin and padding values when a shared token fits.
- **Recommended spacing scale:** 4, 8, 12, 16, 24, 32, 48, and 64px. These are implementation recommendations, not finalized values.
- Use consistent content widths, aligned section edges, and predictable gaps between sections and cards. Exact container widths remain a recommendation to finalize during page review.
- Use restrained corner rounding and subtle borders. Avoid mixing unrelated shadows, radii, and card treatments.
- Keep long-form copy at a comfortable reading width. Align product grids and editorial sections to the same page container.
- Do not create a new layout or styling framework as part of applying these visual rules.

## Components and visual patterns

### Buttons and links

- Provide a clear primary action, a secondary outline action, and quiet text links.
- Use action-oriented labels and maintain consistent height, padding, and focus treatment.
- Links must look and behave like links; buttons must trigger actions. Do not style inert controls as active actions.

### Cards

- Use consistent card padding, image treatment, text hierarchy, and action placement.
- Product cards should show a product image, name, price, and add action with consistent alignment. Use consistent image ratios and crops.
- News cards should prioritize title, date/category metadata, short summary, and a clear read action.
- Order cards should group status, date, branch, line items, and total in a predictable order.

### Forms

- Give each field a persistent visible label, consistent spacing, and a clear required/optional state.
- Place validation feedback next to the field and associate it programmatically. Confirm success or submission state visibly.
- Group related information, especially Account and Checkout fields, without crowding the page.

### Status, feedback, and dialogs

- Pair status colors with text labels or icons; color alone must not carry meaning.
- Use alerts or toast feedback consistently for cart updates and form outcomes.
- Use dialogs for short tasks such as cart review. Longer tasks and content belong on pages.
- Dialogs must support focus entry, keyboard focus containment, Escape dismissal where appropriate, and focus restoration to the invoking control.

## Page patterns

- **Home:** One clear featured campaign with primary menu and store-finder actions; then signature products, seasonal feature, brand story, store locator, and latest news. A static hero is preferred. Use a manually controlled carousel only if approved TeaMilk campaign assets justify it.
- **Menu:** Search and category navigation precede product groups. Maintain consistent product-card structure and clear add-to-cart feedback.
- **News:** Use an editorial listing and readable article detail pattern. Show dates and make expired promotions identifiable.
- **Info:** Present TeaMilk's verified story and core values using consistent editorial sections and authentic imagery.
- **Contact:** Separate verified contact/branch details from a well-labeled feedback form.
- **Login and Register:** Use focused, uncluttered forms with visible field errors and consistent password controls. Do not imply unsupported recovery or social sign-in features.
- **Account:** Group profile fields and account navigation clearly; adapt the navigation for mobile.
- **Orders:** Present each order as a card with date, status, branch, line items, and total. Show tracking or reorder actions only when supported.
- **Checkout:** Keep order summary, delivery information, payment selection, and confirmation visually distinct. Do not present sample totals as a customer's actual order.

## Responsive behavior

- **Desktop:** Full navigation, spacious hero and editorial sections, and four-column product grids where content width supports legibility.
- **Tablet:** Compact navigation, two- or three-column product grids, and fewer side-by-side form fields.
- **Mobile:** Collapsible navigation, stacked hero content, single-column forms and checkout, and two-column product cards only where names and controls remain legible.
- Category navigation may scroll horizontally when necessary. Keep controls touch-friendly and prevent clipped labels or narrow order summaries.
- **Recommended breakpoint starting points:** Bootstrap-style 576px, 768px, 992px, and 1200px thresholds. Confirm these against actual page layouts; they are not fixed brand requirements.
- Crop images deliberately at each viewport so the product or subject remains visible.

## Accessibility

- Target WCAG 2.2 AA for contrast and interaction.
- Use Vietnamese document language, semantic landmarks, logical heading levels, and descriptive image alternatives.
- Ensure keyboard access and visible focus for every interactive control. Maintain logical focus order and dialog focus management.
- Provide persistent field labels, programmatic error associations, and clear validation feedback.
- Make icon-only controls accessible by name. Do not communicate state through color alone.
- Respect `prefers-reduced-motion`. Avoid automatic carousel movement by default; if a carousel is approved, provide clear manual controls and an accessible pause/interaction model.

## Interaction and animation

- Keep interaction feedback consistent: selected category, added-to-cart confirmation, form errors, and successful completion should be visually distinct and perceivable without color alone.
- Do not add motion for decoration where it competes with product content or slows task completion.
- Use short, subtle transitions for hover, focus, and state changes. Exact durations and easing are **recommendations to finalize during implementation**.
- Prefer a static hero. If a carousel is retained, make it manually controllable, keyboard accessible, and compatible with reduced-motion preferences; do not require Bootstrap JavaScript for its behavior.
- Never imply that search, store finding, ordering, payment, account saving, or contact submission succeeded unless the corresponding behavior exists.

## Imagery and content presentation

- Use accurate TeaMilk-owned imagery, product photography, store images, and campaign artwork. Resolve the existing Gong cha and Phúc Long mismatches before carrying those materials into redesigned pages.
- Favor clear product photography, natural ingredients, tea textures, and warm light consistent with the approved visual direction.
- Use a consistent image ratio and crop within each content type. Keep text out of images when it needs to remain responsive or accessible.
- Verify product names, prices, promotion dates, contact details, branch information, and brand-story copy before treating them as canonical content.
- Use descriptive alt text for informative images and empty alt text for purely decorative images.

## Styling principles

- Define and reuse semantic tokens for color, type, spacing, borders, and interaction states.
- Prefer shared component patterns over page-specific visual reinvention.
- Keep styles scoped according to the existing project approach; do not introduce a new styling framework as part of this design system.
- Avoid arbitrary one-off values, broad global selectors, duplicated page styles, and visual fixes that break another viewport.
- Preserve content clarity and existing supported behavior unless a redesign decision explicitly changes it.

## Items still requiring confirmation

- Official TeaMilk brand colors and whether the proposed palette is accepted.
- Final font families, licensing, and self-hosted font assets.
- Approved TeaMilk-owned campaign and product imagery; replacement for assets visibly branded Gong cha and copy referring to Phúc Long.
- Whether Home uses a static hero or an approved manually controlled carousel.
- Final spacing, container widths, corner radii, and transition values; numerical starting points above are recommendations.
- Verified brand story, locations, contact information, product prices, promotion dates, and which interactions are connected to real services.
