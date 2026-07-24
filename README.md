# 임우진 — CV Website

Single-page static CV site. Plain HTML/CSS/JS, no build step, no framework, no external runtime
dependencies (font falls back to system fonts — see below). See
`docs/superpowers/specs/2026-07-24-cv-website-design.md` for the full design rationale and
`docs/superpowers/plans/2026-07-24-cv-website-plan.md` for how it was built.

## Local preview

```bash
python3 -m http.server 8811
# open http://localhost:8811
```

## Font

The plan called for self-hosting Pretendard Variable, but the font CDN was unreachable from this
environment at build time, so the site currently uses a system font stack
(`-apple-system, BlinkMacSystemFont, 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif`) instead —
this keeps the zero-external-dependency property (system fonts ship with the OS, no network request
at all). To switch to Pretendard later:

```bash
curl -fL "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/woff2/PretendardVariable.woff2" \
  -o assets/fonts/PretendardVariable.woff2
```

Then in `styles.css`, add back:

```css
@font-face {
  font-family: 'Pretendard Variable';
  src: url('assets/fonts/PretendardVariable.woff2') format('woff2-variations');
  font-weight: 45 920;
  font-style: normal;
  font-display: swap;
}
```

and change `--font-body` to `'Pretendard Variable', -apple-system, BlinkMacSystemFont, 'Malgun Gothic', sans-serif;`.

## Deploy (Cloudflare Pages, connected to a GitHub repo)

1. Create an empty repo on GitHub (e.g. `cv-website`), then:
   ```bash
   git remote add origin https://github.com/WO0j1n/cv-website.git
   git push -u origin main
   ```
2. Go to the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select this repo. Build settings: **Framework preset: None**, **Build command: (empty)**,
   **Build output directory: /**.
4. Deploy. Cloudflare gives you a `<project-name>.pages.dev` URL — public, HTTPS, and behind
   Cloudflare's edge network (DDoS mitigation + bot protection applied automatically, no extra
   config, no domain purchase required).
5. **Verify security headers are actually live:**
   ```bash
   curl -sI https://<project-name>.pages.dev/ | grep -Ei "content-security-policy|x-frame-options|strict-transport-security"
   ```
   All three should be present — this confirms the `_headers` file was picked up by Cloudflare Pages.
6. Every future `git push` to `main` auto-redeploys.

## Updating content

All content is hardcoded in `index.html` — edit the relevant `<section>` directly, no data file or
build step involved.
