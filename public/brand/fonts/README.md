# JA Jayagiri Sans webfont — how to activate

**Status:** placeholder. The site currently renders headings in Cormorant Garamond.
Swap in JA Jayagiri Sans with these steps.

## The licensing situation

JA Jayagiri Sans is a commercial font by **Juru Aksara**
([creativemarket.com/JuruAksara/2437856-JA-Jayagiri-Extras](https://creativemarket.com/JuruAksara/2437856-JA-Jayagiri-Extras)).
Your Canva subscription lets you *use* the font inside Canva designs — but that
license does **not** extend to hosting the font file on your own website.

You have two options:

### Option A — use JA Jayagiri only in the logo/wordmark (free, recommended)

Export the logo from Canva as PNG or SVG with the type already rasterized/outlined.
The font travels baked into the image, no webfont license required. Headings and
body on the site stay in the current Cormorant + Inter pairing, which is a
deliberate creative-arts aesthetic the research specifically called out as
high-converting for this niche.

**What to do:** drop the logo PNG/SVG into `public/brand/logo.svg` and ignore
this README.

### Option B — license JA Jayagiri as a webfont (paid, one-time)

If you want headlines (H1, H2, etc.) rendered in JA Jayagiri Sans across every page:

1. Buy the webfont license from Juru Aksara on Creative Market (typically $20–40
   for a standalone website license; confirm the license at purchase covers web
   embedding).
2. Convert the purchased `.otf` or `.ttf` to `.woff2` — either use
   [transfonter.org](https://transfonter.org) (free, in-browser, doesn't upload
   the file) or the `woff2` CLI. Keep the purchased file in your records.
3. Drop the resulting file here: `public/brand/fonts/ja-jayagiri-sans.woff2`.
4. In [`app/layout.tsx`](../../app/layout.tsx), replace the `display` block with
   the snippet the comment in that file shows. The site will pick it up on the
   next build.

**Caveat:** JA Jayagiri Sans is a display/poster font. It works beautifully at
30px+ (hero headline), becomes tiring to read at body sizes. The site keeps Inter
for body text in either option.
