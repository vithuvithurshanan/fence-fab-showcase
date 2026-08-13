# Bugfix Requirements Document

## Introduction

PageSpeed Insights has flagged several performance defects on the Affordable Fence website (affordable-fence-service.web.app). The issues collectively hurt Core Web Vitals — particularly LCP, FID/INP, and TBT — by blocking the critical rendering path, serving oversized images, rendering fonts invisibly during load, wasting bandwidth with unused code, and forcing layout recalculations in JavaScript. This document captures the defective behaviors, the correct behaviors that must replace them, and the existing behaviors that must remain intact after the fix.

---

## Bug Analysis

### Current Behavior (Defect)

1.1 WHEN the browser parses the HTML document THEN the system blocks page rendering for ~180 ms while downloading and parsing `/assets/styles-D0W296e2.css` (6 KB), because no non-blocking loading strategy is applied to the stylesheet link.

1.2 WHEN the browser downloads content images THEN the system serves them as full-resolution JPEGs (up to 421 KiB for the hero background) with no WebP/AVIF variants, causing 303–548 KiB of excess transfer per page load.

1.3 WHEN the browser downloads the logo image THEN the system serves `logo.webp` at its original 1200×896 px resolution (55.3 KiB) even though it is displayed at 34×34 px, wasting ~54.8 KiB of transfer on every page load.

1.4 WHEN the page loads Google Fonts THEN the system omits `font-display: swap` (or equivalent) on the `@font-face` declarations, causing text to remain invisible until the font file is fully downloaded (FOIT).

1.5 WHEN the browser resolves resource hints THEN the system emits more than four `<link rel="preconnect">` tags, some pointing to origins that are never used on the page, adding unnecessary TCP/TLS round-trips.

1.6 WHEN the Parallax component's scroll handler fires THEN the system calls `getBoundingClientRect()` inside the rAF callback after the scroll event has already dirtied layout, causing at least one forced synchronous reflow per scroll event (~38 ms total measured by PageSpeed).

1.7 WHEN the browser evaluates the JavaScript bundle THEN the system ships ~390 KiB of unused JavaScript (dead code, un-code-split routes, or vendor chunks that are never exercised on the landing page), increasing parse and execution time.

1.8 WHEN the browser applies page styles THEN the system ships ~14 KiB of unused CSS rules that are never matched on any rendered element.

### Expected Behavior (Correct)

2.1 WHEN the browser parses the HTML document THEN the system SHALL deliver critical CSS inline or via a preloaded non-render-blocking link so that first contentful paint is not gated on a stylesheet network round-trip.

2.2 WHEN the browser downloads content images THEN the system SHALL serve WebP (or AVIF) variants at display-appropriate dimensions so that total image payload is reduced by at least 400 KiB across the full page.

2.3 WHEN the browser downloads the logo image THEN the system SHALL serve a resized logo no larger than 68×68 px (2× for HiDPI) in WebP format, so that the logo contributes no more than ~2 KiB to the transferred payload.

2.4 WHEN the page loads Google Fonts THEN the system SHALL include `font-display=swap` in the Google Fonts URL query string (or equivalent `@font-face font-display: swap` in CSS) so that fallback text is visible immediately and the font swap happens without invisible text.

2.5 WHEN the browser resolves resource hints THEN the system SHALL emit no more than four `<link rel="preconnect">` tags, each pointing only to origins that are actually used during page load.

2.6 WHEN the Parallax component's scroll handler fires THEN the system SHALL batch all DOM reads before any DOM writes (read `getBoundingClientRect` outside the write path, or cache the last known value) so that no forced synchronous reflow is triggered during scroll.

2.7 WHEN the browser evaluates the JavaScript bundle THEN the system SHALL use route-level code splitting so that the landing page loads only the JS it needs, reducing unused JavaScript by at least 200 KiB.

2.8 WHEN the browser applies page styles THEN the system SHALL ensure that PurgeCSS (or Tailwind's content scanning) is correctly configured for all source paths so that unused CSS classes are removed from the production bundle, reducing unused CSS by at least 10 KiB.

### Unchanged Behavior (Regression Prevention)

3.1 WHEN the page is loaded in a browser with JavaScript disabled or slow JavaScript parsing THEN the system SHALL CONTINUE TO display all visible text content and hero imagery without layout shifts.

3.2 WHEN a user navigates between the home page, Terms, and Privacy routes THEN the system SHALL CONTINUE TO load the correct page content without errors or blank screens.

3.3 WHEN the Parallax scroll animation runs THEN the system SHALL CONTINUE TO apply the parallax offset to the background layer at the correct speed ratio, with no visual regression in the parallax effect.

3.4 WHEN the Reveal (fade-in) animation triggers on scroll THEN the system SHALL CONTINUE TO fade and translate elements into view correctly, respecting `prefers-reduced-motion`.

3.5 WHEN a user views the site on a mobile viewport (< 640 px) THEN the system SHALL CONTINUE TO display the responsive grid layouts, the mobile navigation drawer, and correctly sized images.

3.6 WHEN the contact form iframe is loaded THEN the system SHALL CONTINUE TO render the embedded GHL form at the correct dimensions without broken layout.

3.7 WHEN the site is deployed to Firebase Hosting THEN the system SHALL CONTINUE TO serve the SPA correctly, with all asset cache headers (`Cache-Control: public, max-age=31536000, immutable`) preserved for hashed assets.

3.8 WHEN the Navbar's IntersectionObserver tracks the active section THEN the system SHALL CONTINUE TO highlight the correct nav link as the user scrolls through each section.
