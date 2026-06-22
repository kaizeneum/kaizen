# Kaizen — Website

Static single-page site. No build step, no dependencies beyond Google Fonts (CDN).

## Structure
```
index.html      — markup
style.css        — all styling
script.js        — ticker, scroll reveals, vault animation, smooth nav
assets/          — all images (compressed JPGs + the recolored vault gear PNG)
```

## Run locally
Just open `index.html` in a browser, or for a local dev server:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`

## Deploy
Drop this whole folder into any static host — Vercel, Netlify, GitHub Pages, Cloudflare Pages.
For GitHub Pages: push to a repo, enable Pages on the `main` branch root, done.

## Editing
- Colors / fonts / spacing → `style.css` (`:root` variables at the top control the whole palette)
- Copy / structure → `index.html`
- Ticker data, animations → `script.js`
- Swap any image → replace the file in `assets/` with the same filename
