# Navy Gupta — Portfolio

A quiet, editorial personal site built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Stack
- React + Vite
- Tailwind CSS v4 (CSS-first config, see `src/index.css`)
- Framer Motion (subtle fade + upward-drift reveals only)
- Lucide React (available if you want icons — currently unused, kept text-first)
- Geist typeface, self-hosted as `.woff2` files in `src/assets/fonts`

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  components/
    Nav.jsx          sticky nav + mobile index overlay
    Hero.jsx          full-viewport opening statement
    SelectedWork.jsx  editorial project "chapters" (no cards, no images)
    Perspective.jsx   narrow centered statement
    Journey.jsx        single-entry experience, no timeline graphics
    LetsBuild.jsx      contact links
    Footer.jsx
    Reveal.jsx         shared scroll-reveal wrapper (fade + slight rise)
  data/
    projects.js        edit project content here
```

## Editing content

- Project entries live in `src/data/projects.js`.
- Contact links live in `src/components/LetsBuild.jsx` (`LINKS` array) — update the
  email, GitHub, and LinkedIn URLs.
- Company placeholder for the internship lives in `src/components/Journey.jsx`.
- Add a real `resume.pdf` to the `public/` folder — it's already linked from the
  nav and the "Let's Build" section.

## Notes

- Palette is intentionally restricted to white, black, and neutral grays
  (see the `@theme` block in `src/index.css`).
- Motion is deliberately limited to fade / slight upward movement / hover —
  nothing else animates.
- `prefers-reduced-motion` is respected globally.
