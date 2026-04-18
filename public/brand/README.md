# Brand assets

Drop the following files here. The site reads them via absolute paths and
falls back to CSS color swatches if they're missing.

- `logo.svg` — primary logo, square or round crop, ~256×256 minimum.
- `logo-wordmark.svg` — wordmark variant (horizontal), used for larger header on the home page if desired.
- `og.png` — 1200×630 Open Graph preview image.
- `headshot.jpg` — Jacqueline's headshot (warm, well-lit, authentic). Used on `/about` and the `/` trust section. ~1200×1500 portrait.

## Brand tokens (placeholders until Canva values land)

These are in `app/globals.css` under `:root`. Swap the six `--brand-*` hex codes
and the entire site re-skins. No other file needs to change.

Current placeholders:

| Token              | Hex       | Role                       |
| ------------------ | --------- | -------------------------- |
| `--brand-cream`    | `#faf6ee` | Page background            |
| `--brand-sage`     | `#7c8f7a` | Primary (buttons, accents) |
| `--brand-sage-ink` | `#52634f` | Sage hover / body headings |
| `--brand-ochre`    | `#c89b3c` | Accent — creative warmth   |
| `--brand-rose`     | `#d4a5a5` | Soft warm accent           |
| `--brand-ink`      | `#1f1d1a` | Body text                  |
