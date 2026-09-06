# VS Web Studio

Modern websites and web applications for small and medium-sized businesses, with a strong focus on responsive UX, performance, local visibility and practical lead generation.

**Live:** https://vs-web-studio.de/

> Status: active portfolio and pre-launch business project. Planned business start: 01.01.2027.

## What this project demonstrates

- Responsive business websites and landing pages
- React + TypeScript component architecture
- Multi-language content with i18next
- Routing and reusable page structures
- Lead capture and contact flows
- Firebase integrations
- SEO asset generation and structured content
- Performance-oriented frontend implementation
- Interactive UI, animation and visual effects
- Deployment and production troubleshooting

## Tech stack

- React 19
- TypeScript
- Vite
- React Router 7
- Firebase
- i18next / react-i18next
- Styled Components
- Material UI
- Framer Motion
- Three.js / tsParticles
- Yup / Zod
- ESLint / Prettier

## Local development

Prerequisites: **Node.js 20+** and npm.

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

Useful project scripts:

```bash
npm run lint
npm run seo:generate
npm run favicon
```

`npm run build` runs the TypeScript/Vite application build first and then regenerates the SEO assets. This keeps production output and generated SEO files in sync.

## Deployment flow

Production deployment is configured for Netlify. `netlify.toml` runs `npm run build` with Node.js 20 and publishes the Vite `dist/` directory.

For local testing of Netlify-specific behavior, use:

```bash
npm run dev:netlify
```

Netlify proxies `/api/contact` to the serverless contact function and rewrites application routes to `index.html` so client-side React Router navigation continues to work after direct page loads.

Production and deploy-preview contexts both run the same production build. Branch deploys are intentionally skipped, and documentation-only changes under Markdown files, `docs/` or `.github/` do not trigger a Netlify rebuild. This reduces unnecessary deploy queue activity while keeping production code changes covered by the normal build pipeline.

Before a production release, run `npm run lint` and `npm run build`, then verify the contact flow in the Netlify environment because function behavior depends on deployment-side configuration.

## Project focus

VS Web Studio is built around real small-business needs rather than isolated demo screens. The project combines frontend development, technical SEO, multilingual UX, contact conversion and deployment work in one production-oriented codebase.

Current development includes service pages, portfolio presentation, pricing, lead generation, local Hildesheim positioning, booking/contact functionality and ongoing SEO/UX improvements.

## Development evidence

The repository commit history documents continuous work on the project, including:

- pricing and configurator updates
- SEO and structured-data improvements
- responsive UI and design-system work
- Firebase and deployment fixes
- multilingual content
- booking and lead-capture improvements
- AI-assistant and service presentation features

This history is intentionally kept public as practical evidence of ongoing development work.

## Privacy and security

No secrets, private API credentials or customer personal data should be committed to this repository. Environment-specific credentials belong in local or platform environment variables.

## Author

**Vladyslav Svitlychnyi**  
Junior Full-Stack Developer · React / TypeScript / Node.js  
Hildesheim, Germany  

- Portfolio / studio: https://vs-web-studio.de/
- GitHub: https://github.com/Svitly4nyi-Vla2yslav
- LinkedIn: https://www.linkedin.com/in/vladyslav-svitlychnyi/

## License

See [LICENSE](LICENSE) for licensing information.
