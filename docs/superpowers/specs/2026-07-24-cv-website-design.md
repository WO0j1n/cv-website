# CV Website — Design Spec

Date: 2026-07-24
Owner: 임우진 (WO0j1n)

## Purpose

A public, single-page CV/portfolio website for 임우진 (정보통신공학과, 명지대학교, 졸업예정 2026.02), used to
contact professors and labs for graduate school applications. Source content comes from a Notion CV export
(`/Users/im-woojin/Downloads/98bae59a-3e05-4bd8-88a7-13ea3f60112d_임우진_CV.pdf`, actually an HTML export;
extracted text cached at the time of writing).

## Content Sections

Mapped 1:1 from the CV export, in this order:

1. **Hero** — name, major (정보통신공학과 / 연계전공 인공지능 ICT 융합, GPA 4.16), one-line intro, research
   interest tags (Image Restoration, SR Image Processing).
2. **About** — the "교수님께" message, kept close to the original wording; light editing for web readability
   only (no content removed).
3. **Experience** — timeline: 명지대 DAN Lab (2024.04–2025.04), SMC MARS Lab (2025.07–2025.11),
   GIST IVL Lab (2025.12–2026.02), WE-IT (2024.02–2025.02), each with their bullet achievements.
4. **Projects** — card grid: M-PICK (재테크 챗봇, 2024.09–2024.11), ROSC 진단 보조 시스템
   (SMC 하계인턴, 2025.08), Image Restoration (GIST 동계인턴, 2026.02 — Noise2Void/AP-BSN/C-BSN/LG-BPN).
   Each card: title, org/period, role, one-paragraph description, tech-stack tags.
5. **Awards & Certificates** — grid: 3 awards (2024 하계종합학술대회, ChatGPT 실전활용 경진대회,
   패스트캠퍼스 아이디어 경진대회) + 4 certificates (SQLD, ADsP, AICE Associate, 빅데이터분석기사) with
   issuer and date.
6. **Contact** — email (imwoojin01@naver.com), GitHub (github.com/WO0j1n), Blog (velog.io/@dinost) as
   button/link elements only.

**Privacy decision:** the phone number present in the source CV is intentionally **excluded** from the
public site (spam/smishing exposure risk on a page anyone can reach). Only email + social links are public.

## Design Direction

Chosen direction — **"Minimal Academic Bento Hybrid"**:

- Light mode by default (off-white background, near-black text, single deep-navy/indigo accent), with a
  manual dark-mode toggle (`prefers-color-scheme` as the initial value).
- Pretendard (self-hosted variable woff2) as the sole typeface; hierarchy built from weight/size, not
  multiple font families — matches the 2026 "typography as the design element" trend while staying legible
  for mixed Korean/English content.
- Experience / Projects / Awards rendered as bento-style grid cards (asymmetric card sizes, not a rigid
  uniform grid) with a subtle `IntersectionObserver`-driven fade/slide-in on scroll. No parallax, no
  autoplay video, no heavy motion — keeps it professional for an academic audience.
- Rejected alternatives: dark "terminal/dev-portfolio" style (too informal for a professor-facing first
  impression) and a plain traditional academic homepage (safe but doesn't meet the "current trend" ask).

## Architecture

- **No framework, no build step.** Plain HTML + CSS + vanilla JS. A single `index.html` with sectioned
  markup, one `styles.css`, one `main.js` (scroll-reveal + dark-mode toggle only).
- **Zero third-party runtime dependencies.** No CDN scripts, no analytics, no external font loading —
  everything self-hosted in the repo. This is both a design and a security decision (see below): fewer
  dependencies means near-zero supply-chain attack surface.
- Content lives directly in the markup (this is a one-person static CV, not a CMS — a data-file/templating
  layer would be unused complexity for a single page that changes a few times a year).

Repo layout:
```
cv-website/
├── index.html
├── styles.css
├── main.js
├── assets/
│   ├── fonts/         (Pretendard woff2, self-hosted)
│   └── ...
├── _headers            (Cloudflare Pages security headers config)
└── docs/superpowers/specs/2026-07-24-cv-website-design.md
```

## Deployment & Network-Layer Security

Original ask was "GitHub Pages" + a firewall in front. Correction made during design: `*.github.io` is a
GitHub-owned domain, so Cloudflare cannot be proxied in front of it without the user first buying a custom
domain. The equivalent that satisfies the actual goal without requiring a domain purchase:

- **Source stays on GitHub** (a normal repo, pushed by the user).
- **Deployment target is Cloudflare Pages**, connected to the GitHub repo (push → auto-deploy), served on
  a free `*.pages.dev` subdomain.
- Because Cloudflare Pages traffic always transits Cloudflare's edge network, this gives DDoS mitigation,
  bot-fight mode, and rate-limiting **for free, with no code and no domain purchase** — the most realistic
  way to satisfy the "firewall configuration" requirement for a static site.
- Deployment itself (connecting the Cloudflare account, first push) is done by the user, since it requires
  their own GitHub/Cloudflare account access. This spec's implementation output is the code + a written
  deployment runbook, not an actual live deploy performed by the agent.

## Security — KISA Secure Coding Guide Mapping

The site has no server, no database, no form submission, and no user input anywhere — which is itself the
strongest mitigation for the majority of KISA's categories (injection, command execution, session/auth
flaws, error-handling info leaks from a backend) since there is no backend code path for them to apply to.
What's still concretely implemented for the parts that *do* apply to a static frontend:

- **HTTP security headers** (via Cloudflare Pages `_headers` file): `Content-Security-Policy` (strict,
  `script-src 'self'`, no `unsafe-inline`/`unsafe-eval`), `X-Content-Type-Options: nosniff`,
  `X-Frame-Options: DENY` / `frame-ancestors 'none'`, `Referrer-Policy: strict-origin-when-cross-origin`,
  `Permissions-Policy` (deny camera/mic/geolocation/etc.), `Strict-Transport-Security`.
- **No inline scripts/handlers, no `eval`, no `innerHTML` with dynamic/untrusted data** — the only dynamic
  JS behavior is a scroll observer and a class toggle, neither touches HTML strings.
- **No external CDN dependencies** — removes the entire class of "우회 경로/부적절한 자원 해제" and
  Subresource-Integrity concerns by not fetching third-party JS/CSS/fonts at all.
- **No secrets, tokens, or PII beyond what's intentionally public** in the repo (phone number excluded, no
  API keys since there's no API).
- Custom, information-free 404 handling (no stack traces or path disclosure — Cloudflare Pages default is
  already safe here, no page reveals internal file structure).

## Testing / Verification Plan

- Manual browser check (desktop + mobile viewport) of all sections, dark-mode toggle, scroll-reveal.
- Lighthouse pass (performance/accessibility/best-practices/SEO) before considering it done.
- Header verification: after first deploy, confirm `_headers` are actually applied via `curl -I` against
  the live `*.pages.dev` URL.
- No automated test suite — there's no application logic to unit-test; verification is visual + header
  inspection + Lighthouse.

## Out of Scope

- Contact form / backend of any kind (explicitly declined in favor of static links).
- CMS or content data-file abstraction (single static page, edited directly).
- Custom domain purchase (can be added later by the user; not required for this spec).
