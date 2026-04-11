# Mark McKinnon Bakery Formula Menu

Static site scaffold for Mark McKinnon's bakery formula menu. The live website now lives in a
dedicated `public/` folder so deployment does not expose source notes or the full raw image archive
by accident.

## Project structure

- `public/index.html` - main public-facing bakery menu page
- `public/assets/css/styles.css` - shared site styling and responsive layout rules
- `public/assets/images/` - only the images used by the live website
- `public/404.html` - fallback page for bad routes
- `public/robots.txt` - basic crawler directive
- `content/resume/` - background copy and resume notes
- `content/source-images/mark-archive/` - raw image archive kept out of the deployed site

## Updating the site

1. Edit the page copy and section structure in `public/index.html`.
2. Adjust layout and presentation in `public/assets/css/styles.css`.
3. Add any new live website images to `public/assets/images/` and point the page at those files.
4. Keep drafts, reference material, and unused photography under `content/`, not `public/`.
5. Update contact details if Mark's enquiry method or service offering changes.

## Deployment

Deploy the `public/` directory as the publish root.

- Netlify/Cloudflare Pages/GitHub Pages: set the publish directory to `public`.
- Any other static host: upload the contents of `public/` only.

If you later add build tooling, keep `public/` as the final output folder so the separation between
live files and source material stays clean.
