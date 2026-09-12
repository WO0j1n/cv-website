# 임우진 — CV Website

Single-page static CV site. Plain HTML/CSS/JS, no build step, no framework, no external runtime
dependencies (fonts are self-hosted — see below). Visual design is modeled on
[lesgmstudios.com](https://www.lesgmstudios.com/): a dark, high-contrast editorial look with a bold
display face for headings and a staggered scroll-reveal on every card. See
`docs/superpowers/specs/2026-07-24-cv-website-design.md` for the original design rationale and
`docs/superpowers/plans/2026-07-24-cv-website-plan.md` for how it was built.

## Local preview

```bash
python3 -m http.server 8811
# open http://localhost:8811
```

## Font

Two fonts, both self-hosted under `assets/fonts/` so the strict `font-src 'self'` /
`style-src 'self'` CSP in `_headers` never has to loosen for an external font CDN:

- **Clash Display** (weights 600/700) — headings, the hero name, section titles. Free for personal
  and commercial use via [Fontshare](https://www.fontshare.com/fonts/clash-display).
- **Geist** (weights 400/500/600/700) — body text and nav. MIT-licensed, from
  [vercel/geist-font](https://github.com/vercel/geist-font).

Both fall back to the Korean-aware system stack (`Apple SD Gothic Neo` / `Malgun Gothic`) for glyphs
they don't cover, since neither ships Hangul.

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
