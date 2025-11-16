## Tasks

- [x] 1.0 Project setup and tooling
  - [x] 1.1 Initialize Vite (React) project and base directories (`src/components`, `src/sections`, `src/pages`, `src/i18n`, `src/data`, `src/styles`, `public`)
  - [x] 1.2 Add TailwindCSS + PostCSS + Autoprefixer and verify build
  - [x] 1.3 Install Framer Motion and React Router
  - [x] 1.4 Decide language mode (JS vs TS); proceed with JS by default
  - [x] 1.5 Configure ESLint/Prettier with Tailwind plugin (optional but recommended)
  - [x] 1.6 Add base npm scripts: `dev`, `build`, `preview`, `lint`, `format`

- [x] 2.0 Theming, Tailwind, fonts, and base SEO
  - [x] 2.1 Configure `tailwind.config.js` (colors: black/white/#6366f1, container, fontFamily: Pretendard)
  - [x] 2.2 Create `src/styles/index.css` with Tailwind directives and base resets
  - [x] 2.3 Integrate Pretendard font (self-host or CDN link in `index.html`) with fallbacks
  - [x] 2.4 Add base SEO/meta in `index.html` (title, description, og:title/description/image, theme-color, viewport)
  - [x] 2.5 Add Open Graph image and favicon assets (placeholders)

- [ ] 3.0 Routing, global layout, and i18n (ko/en)
  - [x] 3.1 Set up routes: `/`, `/projects`, `/projects/:slug`, `*` (NotFound)
  - [x] 3.2 Create global layout: `Navbar`, `Footer`, `LangToggle` (sticky header)
  - [x] 3.3 Implement simple i18n with JSON resources (`src/i18n/ko.json`, `src/i18n/en.json`) and a context/provider
  - [x] 3.4 On language change, update `html lang` and persist selection (localStorage), default `ko`
  - [x] 3.5 Ensure anchor navigation for in-page sections (About/Projects/Skills/Contact)

- [ ] 4.0 Home sections with animations (Hero, About, Projects, Skills, Contact)
  - [x] 4.1 Hero: name/title/intro/CTA, Framer Motion sequence + subtle parallax
  - [x] 4.2 About: career summary, traits, specialties; responsive typographic layout
  - [x] 4.3 Projects (home): 5 placeholder cards linking to detail; glass hover effects
  - [x] 4.4 Skills: icon + text grouped by categories (Backend/LLM/Automation/Frontend)
  - [x] 4.5 Contact: mailto link + SNS icon links (GitHub required; others placeholder)
  - [x] 4.6 Respect `prefers-reduced-motion`; avoid heavy motion on low-power devices

- [ ] 5.0 Projects list (glass cards) and Project detail pages
  - [x] 5.1 Define `src/data/projects.js` with 5 items (slug, title, summary, stack, role, links, tags, detail placeholders)
  - [x] 5.2 Build reusable `ProjectCard` (glassmorphism) with accessible hover/focus states
  - [x] 5.3 Projects page: grid list using `ProjectCard`, filters (optional future), responsive
  - [x] 5.4 Project detail page: header(meta), sections(Problem, Approach/Architecture, Key Features, Results, Links)
  - [x] 5.5 Update document title/meta (basic) per route; ensure shareable OG fallback

- [ ] 6.0 Optional 3D particle background (r3f/three) with performance guards
  - [x] 6.1 Install `@react-three/fiber` and `@react-three/drei` (optional feature flag)
  - [x] 6.2 Implement `ParticleBackground` with density/resolution controls and z-index isolation
  - [x] 6.3 Provide on/off toggle (prop or env) and ensure text contrast/readability

- [ ] 7.0 Deploy to GitHub Pages and validate acceptance criteria
  - [x] 7.1 Ensure Vite `base: "/"` for user page repo `lucide99.github.io`
  - [x] 7.2 Add SPA fallback: copy `index.html` to `404.html` on build (script or action)
  - [ ] 7.3 Build and publish to GitHub Pages (Pages → main branch / root)
  - [ ] 7.4 Verify routes on production and asset paths
  - [ ] 7.5 Lighthouse: Accessibility ≥ 90, check basic Performance; fix regressions if any
  - [ ] 7.6 Verify acceptance criteria (sections complete, responsiveness, deploy reachable)


## Relevant Files

- `package.json` - Scripts and dependencies (vite, tailwindcss, postcss, autoprefixer, framer-motion, react-router-dom)
- `vite.config.js` - Vite configuration; `base: "/"` for user page root
- `tailwind.config.js` - Tailwind theme (colors, fontFamily Pretendard), content globs
- `postcss.config.js` - Tailwind + Autoprefixer
- `index.html` - Base SEO/meta, font includes, root mount
- `public/og-default.svg` - Default Open Graph image
- `public/favicon.svg` - Favicon placeholder
- `src/main.jsx` - App bootstrap, router/i18n providers
- `src/App.jsx` - Route layout shell (if used)
- `src/styles/index.css` - Tailwind directives and global styles
- `src/i18n/ko.json` - Korean copy
- `src/i18n/en.json` - English copy
- `src/components/Navbar.jsx` - Top navigation with anchors and LangToggle
- `src/components/Footer.jsx` - Footer with SNS/email
- `src/components/LangToggle.jsx` - Language switch
- `src/components/ProjectCard.jsx` - Glassmorphism project card
- `src/components/ParticleBackground.jsx` - Optional r3f/drei background
- `src/sections/Hero.jsx` - Home hero section with animations
- `src/sections/AboutSection.jsx` - Home about section
- `src/sections/ProjectsGrid.jsx` - Home projects grid
- `src/sections/SkillsGrid.jsx` - Home skills section
- `src/sections/ContactBar.jsx` - Home contact section
- `src/pages/Home.jsx` - Home page composing sections
- `src/pages/Projects.jsx` - Projects list page
- `src/pages/ProjectDetail.jsx` - Project detail page by `:slug`
- `src/pages/NotFound.jsx` - 404 route
- `src/data/projects.js` - Projects data (placeholders per PRD)
- `.github/workflows/deploy.yml` - Optional GitHub Actions deploy (if used)


### Notes

- TypeScript is optional; proceed with JS unless specified otherwise.
- For GH Pages SPA routing, duplicate `index.html` to `404.html` on deploy to enable fallback.
- Keep animations performant and honor `prefers-reduced-motion`.
- 3D background is optional; ensure readability and provide a disable switch.
- Pretendard can be included via CDN first; consider self-host later for stability.
- i18n may start with placeholder strings; ensure toggling updates `html lang` attribute.

