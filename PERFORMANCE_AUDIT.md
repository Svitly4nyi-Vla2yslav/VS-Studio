# Performance audit — 2026-10-16

## Scope and method

- Baseline: repository `HEAD` before this optimization (`48fff15`).
- After: route splitting plus the isolated starfield preview in the working tree.
- Both builds used the same Node installation, Vite production mode, local server, Lighthouse 12.8.2 and machine.
- The supplied production baseline remains the best public-site reference: Mobile Performance 73, main-thread work 2.9 s, unused JavaScript about 381 KiB, transfer about 3,470 KiB, and 292 non-composited animated elements.
- Local Lighthouse scores are useful for relative diagnostics, not as substitutes for a post-deploy field or production run. CPU throttling was unusually severe, and Google Tag Manager loaded only in the after run, adding about 158.5 KiB and making score/LCP comparisons noisy.

## Measured bundle change

| Metric | Before | After | Change |
| --- | ---: | ---: | ---: |
| Largest JS chunk, raw | 1,273.69 KiB | 1,020.95 KiB | -252.74 KiB (-19.8%) |
| Initial JS transfer in Mobile run | 366.7 KiB | 303.4 KiB | -63.3 KiB (-17.3%) |
| Mobile total blocking time | 6,150 ms | 3,120 ms | -3,030 ms |
| Mobile main-thread work | 19.1 s | 10.7 s | -8.4 s |
| Mobile CLS | 0 | 0 | no regression |
| Accessibility | 100 | 100 | no regression |
| Best Practices | 96 | 96 | no regression |
| SEO | 100 | 100 | no regression |

Desktop CLS stayed at 0.028. The local synthetic Performance score changed from 28 to 31 on Mobile and 53 to 48 on Desktop, but the Desktop after run had additional third-party work and normal run-to-run variance. Run at least three production Lighthouse samples and use the median after deployment approval.

## Main causes found

1. **Eager route graph in `src/App.tsx`.** Almost every page was imported synchronously. Pricing, contact, references, service, niche, legal and informational page code was therefore part of the initial application graph. These routes are now lazy-loaded.
2. **Always-on assistant in `src/components/Layout/Layout.tsx`.** `FloatingAssistantWidget` is mounted on every route and pulls in Framer Motion, assistant state, avatar animation hooks and Firebase Analytics before the user opens it. This is the next high-value component-splitting target, but it was not changed because the task explicitly requires separate avatar verification.
3. **Homepage dependency density.** `src/pages/HomePage/HomePage.tsx` imports all below-the-fold sections synchronously. `ProcessSection` includes Swiper; most sections include Framer Motion and icon modules. A viewport-gated split can help, but must preserve crawlable content and avoid placeholder CLS.
4. **Hero video transfer.** `src/assets/hero-image/Startseite.webm` is about 1.28 MiB and is the largest request in the Mobile Lighthouse waterfall. `preload="metadata"` still resulted in the full media transfer during the audit. The poster remains the LCP-safe fallback. Any source or autoplay policy change should be validated separately because the Hero was intentionally left untouched.
5. **Large media outside the homepage.** Portfolio videos are about 1.7–4.1 MiB each. Route splitting prevents their fetch on the homepage, but the portfolio route needs poster-first loading, `preload="none"` below the fold and mobile encodes.
6. **Background assets.** Long marble images range from about 566 KiB to 1.78 MiB. Confirm that only AVIF is selected on supporting browsers and avoid loading desktop and mobile variants together.
7. **Font payload.** Four TTF files are emitted; Inter alone is about 335 KiB. Convert/subset to WOFF2 and preload only the font used for the LCP heading. `modern-normalize` is also imported both in `main.tsx` and `GlobalStyle.ts`.
8. **Animation volume.** The project has many infinite CSS and Framer Motion animations. The largest clusters are `Contact.styled.ts`, `ReferencesPage.styles.ts`, `Service.tsx`, and the portfolio components. Several animate shadows, gradients, width, or many individual elements, which explains Lighthouse's non-composited animation count. Existing animations were not removed automatically.
9. **Dependency duplication / cleanup.** `@tsparticles/react` v3 + `@tsparticles/slim` v3 coexist with `react-tsparticles` v2 + `tsparticles-slim` v2, but no source imports were found. No source imports were found for `three`, `lax.js`, `lodash`, `popmotion`, `react-select`, `yup`, or `zod` either. Confirm scripts/server usage, then remove unused packages in a dedicated dependency commit.
10. **Third-party variability.** Firebase Analytics/Google Tag Manager added about 158.5 KiB in one local run and not the other. Consent-aware delayed initialization and preconnect should be measured separately.

## Starfield implementation

`src/components/StarfieldBackground/StarfieldBackground.tsx` is independent of the Hero and avatar. It uses Canvas 2D, caps rendering at 30 FPS and DPR at 1.5, reduces particles below 768 px, pauses for hidden tabs and out-of-view content, renders a static frame for reduced-motion users, and cleans up RAF, observers and listeners. The gradient is a separate CSS layer and every visual layer has `pointer-events: none`.

The isolated development preview is available at `/dev/starfield`; the route is removed from production builds by `import.meta.env.DEV`.

## Safe Hero integration plan (not applied)

1. Capture three median Lighthouse runs and a Chrome Performance trace for the current Hero.
2. Add `StarfieldBackground` as an absolute layer behind `.hero-content`, with the existing video still available behind a feature flag.
3. Compare three variants on mobile: current video, poster + starfield, and reduced-motion static poster + stars.
4. Keep the heading and CTA in normal document flow; do not make canvas the LCP element.
5. Verify contrast, keyboard navigation, clicks, text selection, CLS, INP and assistant behavior.
6. Select the variant only after review. Do not remove the current video or animations until the visual and performance comparison is approved.

## Remaining validation before production

- Test Chrome/Android and Safari/iOS on physical devices, including background/foreground transitions and low-power mode.
- Record a Chrome Performance trace with screenshots and confirm no long starfield tasks or continuous work while offscreen.
- Run three Mobile and Desktop Lighthouse samples against the production-equivalent host and report medians.
- Confirm zero console errors on home, contact, pricing, portfolio, AI assistant and the preview route.
- Deploy only after explicit approval.
