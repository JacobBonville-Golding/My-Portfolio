# Jake Bonville-Golding — Portfolio

A responsive portfolio featuring selected web projects, an About page, and a cat-inspired visual theme. This repository records its construction through small, working commits.

## Run locally

```powershell
npm install
npm run dev
```

Open the local address shown by Vite.

## Production build

```powershell
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Built with

- React and Vite
- SCSS organized by site section
- Responsive images in WebP format
- Zdog for the optional paw cursor

## Accessibility features

The portfolio supports keyboard navigation, visible focus indicators, descriptive image text, light and dark themes, and reduced-motion preferences. The animated greeting can be skipped. Project content remains available when decorative effects are disabled.

## Project structure

- `src/main.jsx` — slide content and application layout
- `src/portfolioData.js` — project text and links
- `src/imageData.js` — project and About image references
- `src/styles/` — section-specific SCSS
- `src/media/` — portfolio imagery
- `public/` — favicon and other public assets

## Credits

Portfolio photos and project presentation images are used with permission. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for third-party attribution and license notices.