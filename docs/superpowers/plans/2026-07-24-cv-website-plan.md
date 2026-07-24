# CV Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page, static CV/portfolio website for 임우진, deployable via GitHub + Cloudflare Pages, matching the approved design spec.

**Architecture:** One `index.html`, one `styles.css`, one `main.js`. No framework, no build step, no external runtime dependencies (fonts self-hosted, no CDN scripts). Content is hardcoded directly in the markup — this is a single page updated a few times a year, not a CMS.

**Tech Stack:** Plain HTML5, CSS3 (custom properties, Grid/Flexbox), Vanilla JS (`IntersectionObserver`, `localStorage`). Pretendard variable font, self-hosted.

## Global Constraints

- No JS framework, no build tooling, no npm dependencies. (Spec §Architecture)
- No third-party CDN for scripts, fonts, or styles — everything self-hosted in the repo. (Spec §Architecture, §Security)
- Light mode is the default theme; dark mode is a manual toggle, initialized from `prefers-color-scheme`. (Spec §Design Direction)
- Single accent color (deep navy/indigo) — no secondary accent colors. (Spec §Design Direction)
- Phone number is excluded from all content — email + GitHub + Blog only. (Spec §Content Sections, privacy decision)
- No contact form, no analytics, no tracking scripts of any kind. (Spec §Out of Scope)
- No inline `<script>`/`<style>` event handlers, no `eval`, no `innerHTML` assignment with dynamic content — required for the strict CSP in Task 11. (Spec §Security)
- All source content (Experience/Projects/Awards/Certificates text) must match the CV extraction verbatim — do not paraphrase or invent details.

---

## Reference: Source Content

This is the exact content to place in the markup (confirmed with the user; do not alter wording).

**Hero**
- Name: 임우진
- Line 1: 정보통신공학과 · 명지대학교 (졸업예정 2026.02) · GPA 4.16 (전공 4.15)
- Line 2: 연계전공: 인공지능 ICT 융합
- Intro: "이미지 복원(Image Restoration)과 초해상화(Super-Resolution)를 연구하는 학부생입니다."
- Tags: `Image Restoration`, `SR Image Processing`

**About** (verbatim paragraphs)
1. 안녕하세요. 교수님.
2. 교수님께서 보시기에 아직은 제 실력이 부족하다고 느끼실 수 있습니다. 하지만 대학원 과정을 마칠 시점에는 누구보다 깊이 있게 성장한 모습으로 보답드릴 것을 약속드립니다.
3. 저는 '꾸준함'과 '소신'을 제 삶의 가장 중요한 가치로 삼고 있습니다. 학창 시절 저는 남들보다 조금 느린 학생이었습니다. 그러나 부족함을 인정하고 좌절하기보다, 몇 배의 노력을 기울여 따라잡았고, 그 과정에서 진정한 배움의 의미를 깨달았습니다. 이러한 경험은 저의 강점인 '노력'이라는 키워드로 이어집니다. 학부 시절, 저는 초과 학점을 이수하며 부족한 부분을 스스로 채워나갔고, 새로운 도전을 멈추지 않았습니다. 지금도 제가 다른 학생들보다 부족한 점이 많다고 생각합니다. 하지만 학부 시절 그랬던 것처럼, 대학원 과정에서도 성실하고 꾸준한 노력으로 부족함을 극복하고, 누구보다 깊이 있는 성장을 이룰 것입니다.
4. 지금까지 부족함을 인정하고 극복해 온 저의 진심 어린 노력이, 앞으로의 연구와 학문적 발전에 큰 밑거름이 되리라 확신합니다.
5. 제 관심 연구 분야는 아래와 같습니다: Image Restoration, SR Image Processing

**Experience** (chronological, oldest first)
1. **WE-IT** — 대학생 연합 동아리 · 2024.02–2025.02
   - 대학생 연합 동아리 IT부문 6위
   - 운영진 - 총무부장
   - 데이터 분석 및 머신러닝 Study
   - 매주 최신 기술 및 취업 관련 아티클 조사 및 공유
2. **명지대학교 DAN Lab** — 2024.04–2025.04
   - 밑바닥부터 시작하는 딥러닝 Study
   - Backbone paper Review
   - 2024 하계, 동계 통신학회 참석
   - 2024 하계 통신학회 아이디어 경진대회 장려상 수상
3. **SMC MARS Lab** — 2025.07–2025.11
   - Task: Signal, Tabular
   - Backbone paper Review
   - Backbone 활용한 의료 도메인 논문 리뷰
   - SMC forum 참석
   - 하계 인턴 프로젝트 - 심장 초음파 활용 ROSC 진단 보조 시스템
   - Paper Review
4. **GIST IVL Lab** — 2025.12–2026.02
   - 동계 인턴 프로젝트 - SIDD dataset & Medical Image(CT) Restoration

**Projects**
1. **M-PICK** — 렛유인, 명지대 주관 · 2024.09–2024.11
   - Role: [팀장] 20, 30세대들을 위한 재테크 관리 매니저
   - 기여도: 프로젝트 기획 및 데이터 전처리 및 VectorDB 구축, 프롬프트 개발
   - 설명: 20, 30 세대들의 재테크 방법에 대한 부족함과 금융 리터러시 향상을 통한 재테크 문맹 해소에 기여하고자 수행하게 되었습니다. 기존에 상품 추천 챗봇은 금융권에서 서비스 진행 중이기에 20, 30 세대들의 이목을 끌기 위해 MBTI를 활용하였으며, Langchain 기술과 OpenAI로 LLM의 답변에 신뢰성을 부여하였습니다.
   - Tags: `Langchain`, `OpenAI GPT-4`, `Ollama`, `bge-m3`, `Weaviate DB`
2. **ROSC 진단 보조 시스템** — SMC 응급의학과 주관 · 2025.08
   - Role: [팀장] 심정지 환자에 대한 ROSC 진단 보조 시스템
   - 기여도: 프로젝트 기획 및 Segmentation, Classification model 개발 및 통합 파이프라인 구축
   - 설명: CPR Ultrasound video(image)를 통한 CAC 기반 Arrest vs ROSC Classification end-to-end 시스템으로, 임상에서 사용 가능한 arrest vs ROSC 진단 보조 시스템 구축을 목표로 수행했습니다. 전체 파이프라인은 Detection-Segmentation-Classification으로 구성되며, 각 단계에서 Yolov12n, SAM2.1-large, GRU를 활용하였습니다.
   - Tags: `SAM2 Fine-tuning`, `LightGBM`, `1D-CNN`, `GRU`, `YOLOv12n`
3. **Image Restoration** — GIST 동계 인턴 · 2026.02
   - 설명: Noise2Void, AP-BSN, C-BSN, LG-BPN 모델들을 활용하여 논문 모델 재현 및 CT 이미지에서의 구현(Implementation) 프로젝트를 수행했습니다.
   - Tags: `Noise2Void`, `AP-BSN`, `C-BSN`, `LG-BPN`, `CT Restoration`

**Awards**
- 2024년도 하계종합학술발표회 아이디어 경진대회 장려상
- 2024년도 명지대학교 ChatGPT 기반 AI 실전활용 경진대회 장려상
- 2024년도 패스트캠퍼스 아이디어 경진대회 특별상

**Certificates**
- SQLD — 한국데이터산업진흥원 · 2025.04
- ADsP — 한국데이터산업진흥원 · 2025.03
- AICE Associate — KT · 한국경제신문 · 2026.03
- 빅데이터분석기사 — 한국데이터산업진흥원 · 2026.07

**Contact**
- Email: imwoojin01@naver.com
- GitHub: https://github.com/WO0j1n
- Blog: https://velog.io/@dinost

---

### Task 1: Project scaffold, font, and base shell

**Files:**
- Create: `/Users/im-woojin/cv-website/index.html`
- Create: `/Users/im-woojin/cv-website/styles.css`
- Create: `/Users/im-woojin/cv-website/main.js` (empty file, filled in Task 8-9)
- Create: `/Users/im-woojin/cv-website/assets/fonts/PretendardVariable.woff2`
- Create: `/Users/im-woojin/cv-website/.gitignore`

**Interfaces:**
- Produces: CSS custom properties `--color-bg`, `--color-text`, `--color-text-muted`, `--color-accent`, `--color-border`, `--color-card-bg` (light values in `:root`, dark values in `:root[data-theme="dark"]`) — every later task's CSS uses these tokens, never hardcoded colors.
- Produces: `<html>` `id`/structure with `<nav>`, `<main>` (empty, sections added in Tasks 2-7), `<footer>` (empty, filled in Task 7).
- Produces: `font-family: 'Pretendard Variable', -apple-system, 'Malgun Gothic', sans-serif;` applied via `body` — later tasks never redeclare `font-family`.

- [ ] **Step 1: Create directories and .gitignore**

```bash
mkdir -p /Users/im-woojin/cv-website/assets/fonts
cat > /Users/im-woojin/cv-website/.gitignore << 'EOF'
.DS_Store
EOF
```

- [ ] **Step 2: Download the self-hosted font**

```bash
curl -fL "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/woff2/PretendardVariable.woff2" \
  -o /Users/im-woojin/cv-website/assets/fonts/PretendardVariable.woff2
```

Expected: file created, size roughly 2-3 MB. Verify:

```bash
file /Users/im-woojin/cv-website/assets/fonts/PretendardVariable.woff2
ls -la /Users/im-woojin/cv-website/assets/fonts/PretendardVariable.woff2
```

Expected output: `... Web Open Font Format (Version 2)` (or similar binary description) and a non-zero file size.

**If the download fails (network restrictions, sandboxed environment, CDN unreachable):** skip the font file and instead use a system-only stack in Step 4's CSS — replace the `@font-face` block with nothing, and change `font-family` in Step 4 to:
`font-family: -apple-system, BlinkMacSystemFont, 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif;`
This keeps the zero-external-dependency property (system fonts ship with the OS) and every later task still just uses `body`'s inherited `font-family` — no other file changes needed.

- [ ] **Step 3: Create `index.html` shell**

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>임우진 — CV</title>
  <meta name="description" content="임우진 · 정보통신공학과 · Image Restoration & Super-Resolution 연구 관심 학부생 CV">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav class="nav">
    <span class="nav__name">임우진</span>
    <div class="nav__links">
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#awards">Awards</a>
      <a href="#contact">Contact</a>
      <button id="theme-toggle" class="theme-toggle" type="button" aria-label="다크 모드 전환">🌙</button>
    </div>
  </nav>

  <main>
    <!-- Sections inserted here by Tasks 2-6 -->
  </main>

  <footer class="footer">
    <!-- Filled in by Task 7 -->
  </footer>

  <script src="main.js"></script>
</body>
</html>
```

- [ ] **Step 4: Create `styles.css` with reset + design tokens + nav styling**

```css
/* Reset */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }

/* Font */
@font-face {
  font-family: 'Pretendard Variable';
  src: url('assets/fonts/PretendardVariable.woff2') format('woff2-variations');
  font-weight: 45 920;
  font-style: normal;
  font-display: swap;
}

/* Design tokens */
:root {
  --color-bg: #FAFAF8;
  --color-text: #1A1A1A;
  --color-text-muted: #5A5A5A;
  --color-accent: #2D3E82;
  --color-border: #E4E2DC;
  --color-card-bg: #FFFFFF;

  --font-body: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, 'Malgun Gothic', sans-serif;
  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2.5rem;
  --space-5: 4rem;
  --radius: 12px;
  --max-width: 960px;
}

:root[data-theme="dark"] {
  --color-bg: #10131A;
  --color-text: #ECECEC;
  --color-text-muted: #9AA1AE;
  --color-accent: #7C8FE0;
  --color-border: #262B36;
  --color-card-bg: #171B24;
}

body {
  font-family: var(--font-body);
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.65;
  transition: background 0.2s ease, color 0.2s ease;
}

main {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-3);
}

/* Nav */
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-2) var(--space-3);
  background: color-mix(in srgb, var(--color-bg) 85%, transparent);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border);
}

.nav__name {
  font-weight: 700;
  font-size: 1.1rem;
}

.nav__links {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: 0.95rem;
  color: var(--color-text-muted);
}

.nav__links a:hover {
  color: var(--color-accent);
}

.theme-toggle {
  background: none;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
}
```

- [ ] **Step 5: Verify in browser**

```bash
cd /Users/im-woojin/cv-website && python3 -m http.server 8811 &>/tmp/cv-server.log &
sleep 1
curl -sI http://localhost:8811/index.html | head -1
```

Expected: `HTTP/1.0 200 OK`. If Step 2's font download succeeded, also run
`curl -sI http://localhost:8811/assets/fonts/PretendardVariable.woff2 | head -1` and expect `200 OK` too — if
the fallback system-font path was used instead, skip this second check (the file won't exist, which is
correct). Then open `http://localhost:8811` in a browser — you should see a sticky nav bar with "임우진" on the left, nav links + a moon icon button on the right, empty body below, no console errors (check DevTools console).

- [ ] **Step 6: Commit**

```bash
cd /Users/im-woojin/cv-website
git add index.html styles.css main.js assets/ .gitignore
git commit -m "Add base HTML shell, design tokens, and self-hosted font"
```

---

### Task 2: Hero section

**Files:**
- Modify: `/Users/im-woojin/cv-website/index.html` (add section inside `<main>`, after the comment placeholder)
- Modify: `/Users/im-woojin/cv-website/styles.css` (append)

**Interfaces:**
- Consumes: design tokens from Task 1 (`--color-*`, `--space-*`, `--font-body`).
- Produces: `.hero` block and `.tag` component class — the `.tag` class is reused as-is in Task 5 (Projects) and must not be redefined there.

- [ ] **Step 1: Add Hero markup**

Replace the `<!-- Sections inserted here by Tasks 2-6 -->` comment in `index.html` with:

```html
    <section id="hero" class="hero">
      <h1>임우진</h1>
      <p class="hero__meta">정보통신공학과 · 명지대학교 (졸업예정 2026.02) · GPA 4.16 (전공 4.15)</p>
      <p class="hero__meta">연계전공: 인공지능 ICT 융합</p>
      <p class="hero__intro">이미지 복원(Image Restoration)과 초해상화(Super-Resolution)를 연구하는 학부생입니다.</p>
      <div class="tag-row">
        <span class="tag">Image Restoration</span>
        <span class="tag">SR Image Processing</span>
      </div>
    </section>

    <!-- Sections inserted here by Tasks 3-6 -->
```

- [ ] **Step 2: Add Hero + tag CSS**

Append to `styles.css`:

```css
/* Hero */
.hero {
  padding: var(--space-5) 0 var(--space-4);
}

.hero h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: var(--space-2);
}

.hero__meta {
  color: var(--color-text-muted);
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.hero__intro {
  font-size: 1.15rem;
  margin-top: var(--space-2);
  max-width: 40ch;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: var(--space-3);
}

.tag {
  display: inline-block;
  padding: 0.3rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  font-size: 0.85rem;
  color: var(--color-accent);
}
```

- [ ] **Step 3: Verify**

```bash
curl -s http://localhost:8811/index.html | grep -c "임우진"
```

Expected: `2` or more (nav name + hero name). Reload the browser tab — the hero should show the name in large type, two meta lines, an intro sentence, and two pill-shaped tags below it.

- [ ] **Step 4: Commit**

```bash
cd /Users/im-woojin/cv-website
git add index.html styles.css
git commit -m "Add hero section"
```

---

### Task 3: About section

**Files:**
- Modify: `/Users/im-woojin/cv-website/index.html`
- Modify: `/Users/im-woojin/cv-website/styles.css`

**Interfaces:**
- Consumes: `--space-*`, `--color-*` tokens, `.tag` class from Task 2.
- Produces: `.section-title` class — reused verbatim by Tasks 4, 5, 6, 7 for every section heading.

- [ ] **Step 1: Add About markup**

Replace the `<!-- Sections inserted here by Tasks 3-6 -->` comment with:

```html
    <section id="about" class="about">
      <h2 class="section-title">About</h2>
      <p>안녕하세요. 교수님.</p>
      <p>교수님께서 보시기에 아직은 제 실력이 부족하다고 느끼실 수 있습니다. 하지만 대학원 과정을 마칠 시점에는 누구보다 깊이 있게 성장한 모습으로 보답드릴 것을 약속드립니다.</p>
      <p>저는 '꾸준함'과 '소신'을 제 삶의 가장 중요한 가치로 삼고 있습니다. 학창 시절 저는 남들보다 조금 느린 학생이었습니다. 그러나 부족함을 인정하고 좌절하기보다, 몇 배의 노력을 기울여 따라잡았고, 그 과정에서 진정한 배움의 의미를 깨달았습니다. 이러한 경험은 저의 강점인 '노력'이라는 키워드로 이어집니다. 학부 시절, 저는 초과 학점을 이수하며 부족한 부분을 스스로 채워나갔고, 새로운 도전을 멈추지 않았습니다. 지금도 제가 다른 학생들보다 부족한 점이 많다고 생각합니다. 하지만 학부 시절 그랬던 것처럼, 대학원 과정에서도 성실하고 꾸준한 노력으로 부족함을 극복하고, 누구보다 깊이 있는 성장을 이룰 것입니다.</p>
      <p>지금까지 부족함을 인정하고 극복해 온 저의 진심 어린 노력이, 앞으로의 연구와 학문적 발전에 큰 밑거름이 되리라 확신합니다.</p>
      <p>제 관심 연구 분야는 아래와 같습니다: <strong>Image Restoration</strong>, <strong>SR Image Processing</strong></p>
    </section>

    <!-- Sections inserted here by Tasks 4-6 -->
```

- [ ] **Step 2: Add About + section-title CSS**

Append to `styles.css`:

```css
/* Shared section heading */
.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: var(--space-3);
  letter-spacing: -0.01em;
}

section {
  padding: var(--space-5) 0;
  border-top: 1px solid var(--color-border);
}

/* About */
.about p {
  margin-bottom: var(--space-2);
  max-width: 68ch;
  color: var(--color-text);
}
```

- [ ] **Step 3: Verify**

```bash
curl -s http://localhost:8811/index.html | grep -c "교수님"
```

Expected: `2` or more. Reload the browser — an "About" heading followed by the full message should render with readable line length (not full-bleed width).

- [ ] **Step 4: Commit**

```bash
cd /Users/im-woojin/cv-website
git add index.html styles.css
git commit -m "Add about section"
```

---

### Task 4: Experience section (bento timeline)

**Files:**
- Modify: `/Users/im-woojin/cv-website/index.html`
- Modify: `/Users/im-woojin/cv-website/styles.css`

**Interfaces:**
- Consumes: `.section-title`, design tokens.
- Produces: `.reveal` class (element starts hidden/translated, JS in Task 9 adds `.reveal--visible` on scroll) — Tasks 5, 6, 7 apply the same `.reveal` class to their own cards.
- Produces: `.card` class — the base card look reused by Task 5 (Projects) and Task 6 (Awards/Certificates).

- [ ] **Step 1: Add Experience markup**

Replace the `<!-- Sections inserted here by Tasks 4-6 -->` comment with:

```html
    <section id="experience" class="experience">
      <h2 class="section-title">Experience</h2>
      <div class="timeline">
        <article class="card reveal">
          <div class="card__header">
            <h3>WE-IT</h3>
            <span class="card__period">2024.02 – 2025.02</span>
          </div>
          <p class="card__org">대학생 연합 동아리</p>
          <ul>
            <li>대학생 연합 동아리 IT부문 6위</li>
            <li>운영진 - 총무부장</li>
            <li>데이터 분석 및 머신러닝 Study</li>
            <li>매주 최신 기술 및 취업 관련 아티클 조사 및 공유</li>
          </ul>
        </article>

        <article class="card reveal">
          <div class="card__header">
            <h3>명지대학교 DAN Lab</h3>
            <span class="card__period">2024.04 – 2025.04</span>
          </div>
          <ul>
            <li>밑바닥부터 시작하는 딥러닝 Study</li>
            <li>Backbone paper Review</li>
            <li>2024 하계, 동계 통신학회 참석</li>
            <li>2024 하계 통신학회 아이디어 경진대회 장려상 수상</li>
          </ul>
        </article>

        <article class="card reveal">
          <div class="card__header">
            <h3>SMC MARS Lab</h3>
            <span class="card__period">2025.07 – 2025.11</span>
          </div>
          <ul>
            <li>Task: Signal, Tabular</li>
            <li>Backbone paper Review</li>
            <li>Backbone 활용한 의료 도메인 논문 리뷰</li>
            <li>SMC forum 참석</li>
            <li>하계 인턴 프로젝트 - 심장 초음파 활용 ROSC 진단 보조 시스템</li>
            <li>Paper Review</li>
          </ul>
        </article>

        <article class="card reveal">
          <div class="card__header">
            <h3>GIST IVL Lab</h3>
            <span class="card__period">2025.12 – 2026.02</span>
          </div>
          <ul>
            <li>동계 인턴 프로젝트 - SIDD dataset & Medical Image(CT) Restoration</li>
          </ul>
        </article>
      </div>
    </section>

    <!-- Sections inserted here by Tasks 5-6 -->
```

- [ ] **Step 2: Add card + timeline CSS**

Append to `styles.css`:

```css
/* Card base (shared by Experience, Projects, Awards) */
.card {
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--space-3);
}

.card__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-2);
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.card__header h3 {
  font-size: 1.15rem;
  font-weight: 700;
}

.card__period {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  white-space: nowrap;
}

.card__org {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin-bottom: var(--space-1);
}

.card ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.card li {
  position: relative;
  padding-left: 1rem;
  font-size: 0.95rem;
}

.card li::before {
  content: '·';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: 700;
}

/* Timeline = bento grid, asymmetric */
.timeline {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

.timeline .card:nth-child(3) {
  grid-column: 1 / -1;
}

/* Reveal-on-scroll (JS toggles .reveal--visible in Task 9) */
.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.reveal--visible {
  opacity: 1;
  transform: translateY(0);
}
```

- [ ] **Step 3: Verify**

```bash
curl -s http://localhost:8811/index.html | grep -c "SMC MARS Lab"
```

Expected: `1`. Reload the browser — four cards in a 2-column grid (third card, SMC MARS Lab, spans full width since it has the most bullets), each with a title, period, and bulleted list. Since `main.js` doesn't add `.reveal--visible` yet, cards will currently be invisible/offset — that's expected until Task 9; confirm this by temporarily removing `opacity:0` in devtools, not by editing the file.

- [ ] **Step 4: Commit**

```bash
cd /Users/im-woojin/cv-website
git add index.html styles.css
git commit -m "Add experience section as bento timeline"
```

---

### Task 5: Projects section

**Files:**
- Modify: `/Users/im-woojin/cv-website/index.html`
- Modify: `/Users/im-woojin/cv-website/styles.css`

**Interfaces:**
- Consumes: `.card`, `.card__header`, `.card__period`, `.tag`, `.reveal`, `.section-title`.
- Produces: `.projects` grid class and `.card__desc` text style — no later task depends on these names, but keep them for consistency.

- [ ] **Step 1: Add Projects markup**

Replace the `<!-- Sections inserted here by Tasks 5-6 -->` comment with:

```html
    <section id="projects" class="projects">
      <h2 class="section-title">Projects</h2>
      <div class="projects__grid">
        <article class="card reveal">
          <div class="card__header">
            <h3>M-PICK</h3>
            <span class="card__period">2024.09 – 2024.11</span>
          </div>
          <p class="card__org">렛유인, 명지대 주관 · [팀장] 20, 30세대들을 위한 재테크 관리 매니저</p>
          <p class="card__desc">기여도: 프로젝트 기획 및 데이터 전처리 및 VectorDB 구축, 프롬프트 개발.</p>
          <p class="card__desc">20, 30 세대들의 재테크 방법에 대한 부족함과 금융 리터러시 향상을 통한 재테크 문맹 해소에 기여하고자 수행하게 되었습니다. 기존에 상품 추천 챗봇은 금융권에서 서비스 진행 중이기에 20, 30 세대들의 이목을 끌기 위해 MBTI를 활용하였으며, Langchain 기술과 OpenAI로 LLM의 답변에 신뢰성을 부여하였습니다.</p>
          <div class="tag-row">
            <span class="tag">Langchain</span>
            <span class="tag">OpenAI GPT-4</span>
            <span class="tag">Ollama</span>
            <span class="tag">bge-m3</span>
            <span class="tag">Weaviate DB</span>
          </div>
        </article>

        <article class="card reveal">
          <div class="card__header">
            <h3>ROSC 진단 보조 시스템</h3>
            <span class="card__period">2025.08</span>
          </div>
          <p class="card__org">SMC 응급의학과 주관 · [팀장] 심정지 환자에 대한 ROSC 진단 보조 시스템</p>
          <p class="card__desc">기여도: 프로젝트 기획 및 Segmentation, Classification model 개발 및 통합 파이프라인 구축.</p>
          <p class="card__desc">CPR Ultrasound video(image)를 통한 CAC 기반 Arrest vs ROSC Classification end-to-end 시스템으로, 임상에서 사용 가능한 arrest vs ROSC 진단 보조 시스템 구축을 목표로 수행했습니다. 전체 파이프라인은 Detection-Segmentation-Classification으로 구성되며, 각 단계에서 Yolov12n, SAM2.1-large, GRU를 활용하였습니다.</p>
          <div class="tag-row">
            <span class="tag">YOLOv12n</span>
            <span class="tag">SAM2 Fine-tuning</span>
            <span class="tag">LightGBM</span>
            <span class="tag">1D-CNN</span>
            <span class="tag">GRU</span>
          </div>
        </article>

        <article class="card reveal">
          <div class="card__header">
            <h3>Image Restoration</h3>
            <span class="card__period">2026.02</span>
          </div>
          <p class="card__org">GIST 동계 인턴</p>
          <p class="card__desc">Noise2Void, AP-BSN, C-BSN, LG-BPN 모델들을 활용하여 논문 모델 재현 및 CT 이미지에서의 구현(Implementation) 프로젝트를 수행했습니다.</p>
          <div class="tag-row">
            <span class="tag">Noise2Void</span>
            <span class="tag">AP-BSN</span>
            <span class="tag">C-BSN</span>
            <span class="tag">LG-BPN</span>
            <span class="tag">CT Restoration</span>
          </div>
        </article>
      </div>
    </section>

    <!-- Sections inserted here by Task 6 -->
```

- [ ] **Step 2: Add Projects grid CSS**

Append to `styles.css`:

```css
.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-3);
}

.card__desc {
  font-size: 0.95rem;
  color: var(--color-text);
  margin-bottom: var(--space-1);
}
```

- [ ] **Step 3: Verify**

```bash
curl -s http://localhost:8811/index.html | grep -c "M-PICK"
```

Expected: `1`. Reload — three project cards, each with title/period, org+role line, description paragraph(s), and a tag row with the tech stack pills.

- [ ] **Step 4: Commit**

```bash
cd /Users/im-woojin/cv-website
git add index.html styles.css
git commit -m "Add projects section"
```

---

### Task 6: Awards & Certificates section

**Files:**
- Modify: `/Users/im-woojin/cv-website/index.html`
- Modify: `/Users/im-woojin/cv-website/styles.css`

**Interfaces:**
- Consumes: `.card`, `.section-title`, `.reveal`.
- Produces: `.awards__grid` class.

- [ ] **Step 1: Add Awards & Certificates markup**

Replace the `<!-- Sections inserted here by Task 6 -->` comment with:

```html
    <section id="awards" class="awards">
      <h2 class="section-title">Awards & Certificates</h2>
      <div class="awards__grid">
        <article class="card reveal">
          <h3>Awards</h3>
          <ul>
            <li>2024년도 하계종합학술발표회 아이디어 경진대회 장려상</li>
            <li>2024년도 명지대학교 ChatGPT 기반 AI 실전활용 경진대회 장려상</li>
            <li>2024년도 패스트캠퍼스 아이디어 경진대회 특별상</li>
          </ul>
        </article>

        <article class="card reveal">
          <h3>Certificates</h3>
          <ul>
            <li>SQLD — 한국데이터산업진흥원 · 2025.04</li>
            <li>ADsP — 한국데이터산업진흥원 · 2025.03</li>
            <li>AICE Associate — KT · 한국경제신문 · 2026.03</li>
            <li>빅데이터분석기사 — 한국데이터산업진흥원 · 2026.07</li>
          </ul>
        </article>
      </div>
    </section>
```

- [ ] **Step 2: Add Awards grid CSS**

Append to `styles.css`:

```css
.awards__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

.awards__grid h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: var(--space-2);
}
```

- [ ] **Step 3: Verify**

```bash
curl -s http://localhost:8811/index.html | grep -c "SQLD"
```

Expected: `1`. Reload — two side-by-side cards, "Awards" (3 items) and "Certificates" (4 items).

- [ ] **Step 4: Commit**

```bash
cd /Users/im-woojin/cv-website
git add index.html styles.css
git commit -m "Add awards and certificates section"
```

---

### Task 7: Contact section, footer, and nav smooth-scroll target check

**Files:**
- Modify: `/Users/im-woojin/cv-website/index.html`
- Modify: `/Users/im-woojin/cv-website/styles.css`

**Interfaces:**
- Consumes: `.section-title`, design tokens.
- Produces: none consumed by later tasks (this is the last content section).

- [ ] **Step 1: Add Contact section**

Add a new section right after the Awards `</section>` (still inside `<main>`), before `</main>`:

```html
    <section id="contact" class="contact">
      <h2 class="section-title">Contact</h2>
      <p class="card__desc">연구실 지원 및 협업 문의는 아래 채널로 연락 부탁드립니다.</p>
      <div class="contact__links">
        <a class="contact__link" href="mailto:imwoojin01@naver.com">✉️ imwoojin01@naver.com</a>
        <a class="contact__link" href="https://github.com/WO0j1n" target="_blank" rel="noopener noreferrer">🔗 GitHub</a>
        <a class="contact__link" href="https://velog.io/@dinost" target="_blank" rel="noopener noreferrer">📝 Blog</a>
      </div>
    </section>
```

- [ ] **Step 2: Fill in the footer**

Replace `<!-- Filled in by Task 7 -->` with:

```html
    <p>© 2026 임우진. Built with plain HTML/CSS/JS.</p>
```

- [ ] **Step 3: Add Contact + footer CSS**

Append to `styles.css`:

```css
.contact__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-2);
}

.contact__link {
  padding: 0.6rem 1.1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 0.95rem;
}

.contact__link:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.footer {
  text-align: center;
  padding: var(--space-4) var(--space-3);
  color: var(--color-text-muted);
  font-size: 0.85rem;
  border-top: 1px solid var(--color-border);
}
```

- [ ] **Step 4: Verify**

```bash
curl -s http://localhost:8811/index.html | grep -c "imwoojin01@naver.com"
```

Expected: `1`. Reload — a Contact section with three pill-style links (email/GitHub/Blog), and a one-line footer below it. Click each nav link (About/Experience/Projects/Awards/Contact) and confirm the page smooth-scrolls to the matching section (this works already via `html { scroll-behavior: smooth }` from Task 1 plus the section `id`s from Tasks 2-6).

- [ ] **Step 5: Commit**

```bash
cd /Users/im-woojin/cv-website
git add index.html styles.css
git commit -m "Add contact section and footer"
```

---

### Task 8: Dark mode toggle (JS)

**Files:**
- Modify: `/Users/im-woojin/cv-website/main.js`

**Interfaces:**
- Consumes: `#theme-toggle` button (Task 1), `data-theme` attribute contract on `<html>` (Task 1 CSS).
- Produces: `localStorage` key `"theme"` with value `"light"` or `"dark"` — no other file reads/writes this key.

- [ ] **Step 1: Write the dark mode script**

```javascript
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const STORAGE_KEY = 'theme';

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  applyTheme(initial);

  toggle.addEventListener('click', function () {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  });
})();
```

- [ ] **Step 2: Verify in browser**

Reload `http://localhost:8811`. Click the moon icon in the nav — background/text colors should switch to the dark palette from Task 1's `:root[data-theme="dark"]` tokens, and the icon should flip to ☀️. Reload the page — the chosen theme should persist (read from `localStorage`). Open DevTools console — confirm no errors.

- [ ] **Step 3: Commit**

```bash
cd /Users/im-woojin/cv-website
git add main.js
git commit -m "Add dark mode toggle"
```

---

### Task 9: Scroll-reveal animation (JS)

**Files:**
- Modify: `/Users/im-woojin/cv-website/main.js`

**Interfaces:**
- Consumes: `.reveal` class (Task 4) present on every `.card` across Experience/Projects/Awards.
- Produces: adds/removes `.reveal--visible` — no other script touches this class.

- [ ] **Step 1: Append the scroll-reveal script**

Add to the end of `main.js` (outside the IIFE from Task 8, as its own block):

```javascript
(function () {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
})();
```

- [ ] **Step 2: Verify in browser**

Reload the page. The Experience/Projects/Awards cards should now start faded/offset and fade+slide into place as you scroll them into view (this is the `.reveal` → `.reveal--visible` transition defined in Task 4's CSS). Confirm in DevTools that scrolling near the bottom-most cards still triggers their reveal (threshold 0.15 means ~15% visible).

- [ ] **Step 3: Commit**

```bash
cd /Users/im-woojin/cv-website
git add main.js
git commit -m "Add scroll-reveal animation for cards"
```

---

### Task 10: Responsive pass (mobile/tablet)

**Files:**
- Modify: `/Users/im-woojin/cv-website/styles.css`

**Interfaces:**
- Consumes: all classes from Tasks 1-7 (no new classes introduced, only breakpoint overrides).

- [ ] **Step 1: Add mobile breakpoint overrides**

Append to `styles.css`:

```css
@media (max-width: 640px) {
  .nav__links {
    gap: var(--space-2);
    font-size: 0.85rem;
  }

  .nav__links a:not(:last-of-type) {
    display: none;
  }

  .hero {
    padding: var(--space-4) 0 var(--space-3);
  }

  .timeline,
  .projects__grid,
  .awards__grid {
    grid-template-columns: 1fr;
  }

  .timeline .card:nth-child(3) {
    grid-column: auto;
  }

  section {
    padding: var(--space-4) 0;
  }
}

@media (min-width: 641px) and (max-width: 900px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}
```

Note: on mobile, this hides all nav text links except Contact (`:last-of-type`) to avoid nav overflow — acceptable for a one-page site since all content is one scroll away regardless.

- [ ] **Step 2: Verify with Playwright (webapp-testing skill)**

Use the `webapp-testing` skill to open `http://localhost:8811` at a 375×812 (mobile) viewport and a 1440×900 (desktop) viewport, and screenshot both. Confirm: no horizontal scrollbar at either width, all sections stack to one column below 640px, cards remain readable (no text overflow/clipping), nav bar doesn't wrap awkwardly.

- [ ] **Step 3: Commit**

```bash
cd /Users/im-woojin/cv-website
git add styles.css
git commit -m "Add responsive breakpoints for mobile and tablet"
```

---

### Task 11: Security headers, meta hardening, favicon

**Files:**
- Create: `/Users/im-woojin/cv-website/_headers`
- Modify: `/Users/im-woojin/cv-website/index.html` (head meta additions)

**Interfaces:**
- Produces: `_headers` file consumed by Cloudflare Pages at deploy time (not by the local dev server — Step 3 verifies syntax only, not live enforcement).

- [ ] **Step 1: Create the Cloudflare Pages `_headers` file**

```
/*
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; object-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

- [ ] **Step 2: Add hardening meta tags + favicon reference to `index.html` `<head>`**

Add right after the existing `<meta name="description" ...>` line:

```html
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧑‍🎓</text></svg>">
```

(The favicon is an inline data-URI SVG emoji — zero extra file, zero external request, consistent with the no-external-dependency constraint.)

- [ ] **Step 3: Verify syntax and local behavior**

```bash
cat /Users/im-woojin/cv-website/_headers
curl -sI http://localhost:8811/index.html | grep -i "content-type"
```

The local Python dev server does not apply `_headers` (that's Cloudflare-Pages-specific), so this step only confirms the file exists with correct syntax and the page still loads normally. Real header enforcement is verified post-deploy in the runbook (Task 12).

- [ ] **Step 4: Commit**

```bash
cd /Users/im-woojin/cv-website
git add _headers index.html
git commit -m "Add security headers config and hardening meta tags"
```

---

### Task 12: Full verification pass

**Files:** none (verification only)

- [ ] **Step 1: Restart a clean local server**

```bash
pkill -f "http.server 8811" 2>/dev/null
cd /Users/im-woojin/cv-website && python3 -m http.server 8811 &>/tmp/cv-server.log &
sleep 1
curl -s http://localhost:8811/index.html | grep -c "</section>"
```

Expected: `6` — one `<section>` each for Hero, About, Experience, Projects, Awards, and Contact.

- [ ] **Step 2: Use the `webapp-testing` skill for a full browser pass**

Invoke the `webapp-testing` skill against `http://localhost:8811` and check:
- All 6 sections render with the exact content from the "Reference: Source Content" block above (spot-check a few lines per section against this plan).
- Dark mode toggle works and persists on reload.
- Scroll-reveal triggers for every card, none stuck at `opacity: 0`.
- No console errors or warnings in DevTools.
- Mobile (375px) and desktop (1440px) screenshots both show no horizontal overflow.
- All Contact links have correct `href` values (mailto + both external URLs), and external links open in a new tab (`target="_blank"` with `rel="noopener noreferrer"` present — check via DevTools Elements panel).

Fix anything that fails before proceeding.

- [ ] **Step 3: Stop the local server**

```bash
pkill -f "http.server 8811" 2>/dev/null
```

No commit for this task (verification only, no file changes expected unless Step 2 finds a bug — if it does, fix it as a small follow-up commit: `git commit -m "Fix <specific bug found in verification>"`).

---

### Task 13: Deployment runbook and final commit

**Files:**
- Create: `/Users/im-woojin/cv-website/README.md`

**Interfaces:** none (final documentation task).

- [ ] **Step 1: Write the README**

```markdown
# 임우진 — CV Website

Single-page static CV site. Plain HTML/CSS/JS, no build step, no framework, no external runtime
dependencies (font is self-hosted). See `docs/superpowers/specs/2026-07-24-cv-website-design.md` for the
full design rationale and `docs/superpowers/plans/2026-07-24-cv-website-plan.md` for how it was built.

## Local preview

\`\`\`bash
python3 -m http.server 8811
# open http://localhost:8811
\`\`\`

## Deploy (Cloudflare Pages, connected to this GitHub repo)

1. Push this repo to GitHub:
   \`\`\`bash
   gh repo create cv-website --public --source=. --remote=origin --push
   \`\`\`
   (or create the repo manually on github.com and `git remote add origin <url> && git push -u origin main`)
2. Go to the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select this repo. Build settings: **Framework preset: None**, **Build command: (empty)**,
   **Build output directory: /**.
4. Deploy. Cloudflare gives you a `<project-name>.pages.dev` URL — this is public, HTTPS, and behind
   Cloudflare's edge network (DDoS mitigation + bot protection applied automatically, no extra config).
5. **Verify security headers are actually live:**
   \`\`\`bash
   curl -sI https://<project-name>.pages.dev/ | grep -Ei "content-security-policy|x-frame-options|strict-transport-security"
   \`\`\`
   All three should be present in the response — this confirms the `_headers` file (Task 11) was picked
   up by Cloudflare Pages.
6. Every future `git push` to `main` auto-redeploys.

## Updating content

All content is hardcoded in `index.html` — edit the relevant `<section>` directly, no data file or build
step involved.
```

- [ ] **Step 2: Commit**

```bash
cd /Users/im-woojin/cv-website
git add README.md
git commit -m "Add deployment runbook"
```

- [ ] **Step 3: Final check — full file list**

```bash
cd /Users/im-woojin/cv-website && git log --oneline && git status
```

Expected: a clean working tree (`nothing to commit, working tree clean`) and a commit log showing all 13 tasks' commits in order.
