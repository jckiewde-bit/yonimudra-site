import fs from "node:fs";
import path from "node:path";
import { SplashOverlay } from "@/components/SplashOverlay";

// Home. Renders the Webflow template HTML (Jacqueline's purchased Growthway
// template, content swapped in by scripts/transform.js at prep time) inline,
// with the SplashOverlay layered on top.
//
// The template brings its own header, footer, styles (/template/site.css)
// and interactions (Webflow JS hosted at /template/webflow*.js).
// The Next.js RootLayout deliberately does NOT render a header/footer,
// so there's no chrome collision.
export default function Home() {
  const filePath = path.join(process.cwd(), "public", "template", "home.html");
  const fullHtml = fs.readFileSync(filePath, "utf8");
  const match = fullHtml.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const bodyInner = match ? match[1] : "";

  return (
    <>
      {/* Template stylesheet — auto-hoisted to <head> by React 19. */}
      <link rel="stylesheet" href="/template/site.css" />

      <SplashOverlay />

      <div dangerouslySetInnerHTML={{ __html: bodyInner }} />
    </>
  );
}
