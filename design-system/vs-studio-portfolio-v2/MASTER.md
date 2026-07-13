# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** VS Studio Portfolio V2
**Generated:** 2026-07-13 11:47:25
**Category:** Portfolio/Personal
**Design Dials:** Variance 9/10 (Bold / Asymmetric) | Motion 9/10 (Complex) | Density 3/10 (Spacious)

---

## Global Rules

### Color Palette

| Role        | Hex       | CSS Variable          |
| ----------- | --------- | --------------------- |
| Primary     | `#1E293B` | `--color-primary`     |
| On Primary  | `#FFFFFF` | `--color-on-primary`  |
| Secondary   | `#334155` | `--color-secondary`   |
| Accent/CTA  | `#22C55E` | `--color-accent`      |
| Background  | `#0F172A` | `--color-background`  |
| Foreground  | `#F8FAFC` | `--color-foreground`  |
| Muted       | `#272F42` | `--color-muted`       |
| Border      | `#475569` | `--color-border`      |
| Destructive | `#EF4444` | `--color-destructive` |
| Ring        | `#1E293B` | `--color-ring`        |

**Color Notes:** Code dark + run green

### Typography

- **Heading Font:** Inter
- **Body Font:** Inter
- **Mood:** dark, cinematic, technical, precision, clean, premium, developer, professional, high-end utility
- **Google Fonts:** [Inter + Inter](https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap)

**CSS Import:**

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

### Spacing Variables

_Density: 3/10 — Spacious_

| Token         | Value             | Usage                     |
| ------------- | ----------------- | ------------------------- |
| `--space-xs`  | `4px` / `0.25rem` | Tight gaps                |
| `--space-sm`  | `8px` / `0.5rem`  | Icon gaps, inline spacing |
| `--space-md`  | `24px` / `1.5rem` | Standard padding          |
| `--space-lg`  | `32px` / `2rem`   | Section padding           |
| `--space-xl`  | `48px` / `3rem`   | Large gaps                |
| `--space-2xl` | `64px` / `4rem`   | Section margins           |
| `--space-3xl` | `96px` / `6rem`   | Hero padding              |

### Shadow Depths

| Level         | Value                          | Usage                       |
| ------------- | ------------------------------ | --------------------------- |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)`   | Subtle lift                 |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)`    | Cards, buttons              |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)`  | Modals, dropdowns           |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #22c55e;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #1e293b;
  border: 2px solid #1e293b;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #0f172a;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #1e293b;
  outline: none;
  box-shadow: 0 0 0 3px #1e293b20;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Kinetic Brutalism (Mobile)

**Keywords:** kinetic, brutalism, motion, marquee, acid yellow, uppercase, oversized, aggressive typography, street, zine, high contrast, scroll-driven, haptic, reanimated

**Best For:** Immersive storytelling apps, brand flagship mobile, music/culture platforms, sports apps, underground zines, limited-edition product drops, performance dashboards

**Key Effects:** Infinite marquee (Reanimated, Linear easing, 5s loop, hard clip), hero parallax (scale 1.0→1.3 + fade), sticky section header push, card flood inversion on press (bg→#DFE104, text→#000000), haptic Medium on every press, scroll-triggered interpolate transforms, 0px radius, 2px borders, 100ms color transitions

### Page Pattern

**Pattern Name:** Horizontal Scroll Journey

- **Conversion Strategy:** Immersive product discovery. High engagement. Keep navigation visible.
- **CTA Placement:** Floating Sticky CTA or End of Horizontal Track
- **Section Order:** 1. Intro (Vertical), 2. The Journey (Horizontal Track), 3. Detail Reveal, 4. Vertical Footer

---

## Motion

**Scroll Reveal** (Complex) — Trigger: scroll (continuous scrub) | Duration: tied to scroll position | Easing: `none (scrub-driven)`

```js
gsap
  .timeline({
    scrollTrigger: { trigger: section, start: 'top top', end: '+=150%', scrub: 1, pin: true },
  })
  .from('.headline', { opacity: 0, y: 40 })
  .to('.bg-layer', { yPercent: -20 }, '<');
```

**Framework notes:** Pinning needs the section to have deterministic height; recalc ScrollTrigger.refresh() after images/fonts load

- ✅ Use scrub: true or a small number (0.5-1.5) instead of instant jumps so it feels tied to the scrollbar
- ❌ Don't pin more than 1-2 sections per page; excessive pinning fights native scroll feel and hurts mobile UX
- ⚡ Pinning forces layout reflow; test on mid-tier mobile devices, not just desktop

---

## Anti-Patterns (Do NOT Use)

- ❌ Corporate templates
- ❌ Generic layouts

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
