# Portfolio Page Overrides

> **PROJECT:** VS Studio Portfolio
> **Generated:** 2026-07-13 11:19:35
> **Page Type:** General

> ⚠️ **IMPORTANT:** Rules in this file **override** the Master file (`design-system/MASTER.md`).
> Only deviations from the Master are documented here. For all other rules, refer to the Master.

---

## Page-Specific Rules

### Layout Overrides

- **Max Width:** 1200px (standard)
- **Layout:** Full-width sections, centered content
- **Sections:** 1. Hero (Name/Role), 2. Project Grid (Masonry), 3. About/Philosophy, 4. Contact

### Spacing Overrides

- No overrides — use Master spacing

### Typography Overrides

- No overrides — use Master typography

### Color Overrides

- **Strategy:** Neutral background (let work shine). Text: Black/White. Accent: Minimal.

### Component Overrides

- Avoid: Ignore accessibility motion settings
- Avoid: Animate everything that moves
- Avoid: Use linear for UI transitions

---

## Page-Specific Components

- No unique components for this page

---

## Recommendations

- Effects: Scroll anim (Intersection Observer), hover (300-400ms), entrance, parallax (3-5 layers), page transitions
- Animation: Check prefers-reduced-motion media query
- Animation: Animate 1-2 key elements per view maximum
- Animation: Use ease-out for entering ease-in for exiting
- CTA Placement: Project Card Hover + Footer Contact
