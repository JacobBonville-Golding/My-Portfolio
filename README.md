# Jake Bonville-Golding — Portfolio

A responsive portfolio featuring selected web projects, an About section, and a cat-inspired visual theme. This repository records its construction through small, working commits.

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

## AI assistance

This portfolio was developed by Jacob Bonville-Golding with assistance from OpenAI Codex for planning, code suggestions, debugging, and review. I made the final design decisions and tested the finished site.

## Accessibility and Motion

The portfolio supports keyboard navigation, visible focus indicators, meaningful alternative text, light and dark themes, and reduced-motion preferences. It also includes decorative effects such as a moving gradient, multilingual welcome message, pointer-tracking cat eyes and a custom paw cursor.

To keep these effects accessible:

- The site respects `prefers-reduced-motion`.
- Background animation includes a keyboard-accessible pause/play control.
- Decorative motion is hidden from assistive technology.
- Pointer effects are disabled on touch devices and compact screens.
- The welcome animation can be skipped and provides stable screen-reader text.
- Important information never depends on animation, shadows or colour alone.
- Project content remains available when decorative effects are disabled.

See the [complete accessibility notes](docs/accessibility.md).

## Project structure

- `src/main.jsx` — application state and layout
- `src/portfolioData.js` — project text and links
- `src/imageData.js` — project and About image references
- `src/styles/` — section-specific SCSS
- `src/media/` — portfolio imagery
- `public/` — favicon and other public assets
- `docs/accessibility.md` — detailed animation and accessibility notes

## Credits

Portfolio photos and project presentation images are used with permission. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for third-party attribution and license notices.
