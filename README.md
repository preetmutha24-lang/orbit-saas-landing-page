# Orbit — SaaS landing page

Orbit is a responsive landing page for a fictional team-workspace SaaS product. It was designed for the Sankar Group front-end development assignment with a focus on calm visual hierarchy, useful motion, and a clear conversion path.

## Quick start

No build step or package installation is required.

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in a browser.

For the best local preview (and to avoid browser file restrictions), run a simple server from this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

The site is fully static, so there is no database, backend, login, API key, or environment variable to configure.

## Technologies

- Semantic HTML5
- Modern CSS with responsive breakpoints
- Vanilla JavaScript
- Google Fonts (DM Sans and Space Grotesk)

## Included interactions

- Navigation links smoothly scroll to their page sections.
- Mobile navigation opens and closes with an accessible menu button.
- Monthly/yearly pricing controls provide active-state feedback.
- The workspace form validates name and email fields in the browser and shows a success message. No backend is required.

## Submission files

- `index.html`, `styles.css`, and `script.js` — complete source code
- `orbit-desktop.png` — desktop layout screenshot
- `orbit-mobile.png` — mobile layout screenshot
- `Orbit-Submission-Overview.pdf` — visual submission overview, design explanation, and candidate statement

## Design notes

Orbit uses a soft cream canvas, dark ink typography, and fresh green accents to make a productivity product feel focused rather than noisy. The dashboard illustration is built from HTML and CSS so the page remains lightweight and does not rely on stock imagery. Large type and generous spacing create a clear desktop hierarchy, while the layout collapses into a single readable column on smaller screens. The main challenge was making a static page feel like a real product, so the hero preview, project cards, progress chart, and orbit diagram were created as reusable visual UI elements. The form completes the conversion path with clear feedback and lightweight validation.
