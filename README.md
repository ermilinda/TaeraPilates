# TÆRA Studio – Newsletter (React)

React + Vite implementation of the TÆRA "Coming Soon" newsletter.

One responsive codebase:
- **Desktop (≥ 761px):** wide web layout – nav bar, glass "Grand Opening" panel on the right, two-column letter and Founding sections.
- **Mobile (≤ 760px):** email-style layout – centered logo and headline, full-width panel, three class photos in a row, mat photo beside the Founding text.

All layout switching is done with CSS media queries in `src/styles/newsletter.css` (see the "MOBILE" block at the bottom).

## Start

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build in /dist
```

## Structure

```
src/
  main.jsx                  entry – sets the opening date
  components/Newsletter.jsx all sections (hero, arch, letter, classes, founding, footer)
  components/Countdown.jsx  live days / hours / minutes / seconds
  hooks/useCountdown.js     countdown logic
  styles/newsletter.css     brand colors (CSS variables) + layout
  assets/                   photos and logos
```

## Changing content

- **Opening date:** `src/main.jsx` → `openingDate="2027-01-01T09:00:00"` (the date label and countdown update automatically).
- **Links / address / email:** props on `<Newsletter />`: `ctaUrl`, `address`, `email`, `instagramUrl`, `websiteUrl`.
- **Classes and Founding perks:** the `CLASSES` and `FOUNDING_PERKS` arrays at the top of `Newsletter.jsx`.
- **Colors:** CSS variables at the top of `newsletter.css`.

## Note on email clients

This is a web version (for the website or "View in browser"). Email clients such as Gmail and Outlook do not run React or JavaScript, so a real send needs static HTML with inline styles, and the live countdown needs a timer service (e.g. a countdown GIF from Mailchimp, Klaviyo or Sendtric).
