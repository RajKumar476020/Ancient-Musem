# Historical Artifacts Museum Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, production-ready, light-mode responsive digital heritage museum website showcasing 20 authentically researched Indian historical artifacts with high-resolution imagery and editorial articles.

**Architecture:** Static-First Next.js App Router with TypeScript and Zod-validated data models. Content is structured in typed data modules, rendered as fast static HTML with responsive client islands for multi-attribute search/filtering, modal galleries, and mobile navigation.

**Tech Stack:** Next.js 15+, TypeScript, Tailwind CSS, Plus Jakarta Sans, Lucide React, Zod, Vitest.

**Spec:** [docs/superpowers/specs/2026-10-28-museum-design.md](file:///d:/Websites/Musem/docs/superpowers/specs/2026-10-28-museum-design.md)

## Global Constraints
- **Design Mode:** Light mode only (no dark mode toggle; backgrounds strictly `#F8F8F5` and `#FFFFFF`).
- **Color Palette:** Background `#F8F8F5`, Surface `#FFFFFF`, Text `#242424`, Secondary `#6B6B65`, Border `#E7E5DF`, Accent Bronze `#8A6A43`.
- **Typography:** Plus Jakarta Sans across all headings and text. Comfortable reading column width (680–800px) for articles.
- **Content Boundaries:** Focus strictly on coins, Hindu deity statues, Harappan archaeological objects, and historical tools. No monuments as primary entries; no 3D virtual tour.
- **Authenticity:** All 20 artifacts must have verified historical sources and authenticated public domain / open access image citations. No placeholder images.

---

### Task 1: Initialize Project & Core Dependencies

**Files:**
- Create/Modify: `package.json`, `tsconfig.json`, `next.config.ts`, `vitest.config.ts`, `.gitignore`

**Interfaces:**
- Produces: Project foundation with Next.js App Router, TypeScript, Tailwind CSS, Lucide icons, Zod, and Vitest.

- [ ] **Step 1: Initialize Git and Next.js project**
Initialize git repository and scaffold Next.js App Router structure in `d:/Websites/Musem` non-interactively.
- [ ] **Step 2: Install dependencies**
Install `lucide-react`, `zod`, and dev dependencies `vitest`, `@testing-library/react`, `@testing-library/dom`, `jsdom`.
- [ ] **Step 3: Setup Vitest test runner configuration**
Create `vitest.config.ts` configured for React/TypeScript testing.
- [ ] **Step 4: Run smoke test to verify Vitest**
Verify test suite runs and passes.

---

### Task 2: Configure Design System & Typography

**Files:**
- Create/Modify: `src/app/globals.css`, `src/app/layout.tsx`, `tailwind.config.ts`

**Interfaces:**
- Produces: Global design tokens (colors `#F8F8F5`, `#FFFFFF`, `#242424`, `#6B6B65`, `#E7E5DF`, `#8A6A43`), Plus Jakarta Sans font loader, and responsive base layouts.

- [ ] **Step 1: Configure Tailwind CSS tokens**
Set up custom colors and font families in Tailwind configuration.
- [ ] **Step 2: Implement Plus Jakarta Sans font in root layout**
Import `Plus_Jakarta_Sans` via `next/font/google` in `src/app/layout.tsx`.
- [ ] **Step 3: Style base elements in `globals.css`**
Set body background to `#F8F8F5` and color to `#242424` with smooth scrolling and focus rings.

---

### Task 3: Content Model & Schema Implementation

**Files:**
- Create: `src/types/artifact.ts`, `src/types/category.ts`, `src/types/era.ts`
- Test: `tests/unit/schema.test.ts`

**Interfaces:**
- Produces: Zod schemas (`ArtifactSchema`, `CategorySchema`, `EraSchema`) and TypeScript types ensuring data integrity.

- [ ] **Step 1: Write unit tests for schema validation**
Create test cases for valid artifact records and invalid records (missing required fields, negative dates, invalid URLs).
- [ ] **Step 2: Implement Zod schemas and TypeScript types**
Implement `ArtifactSchema`, `CategorySchema`, `EraSchema` in `src/types/`.
- [ ] **Step 3: Run Vitest and verify tests pass**
Run `npx vitest run tests/unit/schema.test.ts`.

---

### Task 4: Categories & Historical Eras Datasets

**Files:**
- Create: `src/data/categories.ts`, `src/data/eras.ts`
- Test: `tests/unit/taxonomy.test.ts`

**Interfaces:**
- Produces: Full catalog of 6 categories and 7 historical eras verified with dates and historical introductions.

- [ ] **Step 1: Write taxonomy validation tests**
Verify unique slugs, valid date bounds, and correct descriptions.
- [ ] **Step 2: Implement `categories.ts` and `eras.ts`**
Populate comprehensive historical data for ancient coins, medieval coins, deity statues, archaeological seals, etc.
- [ ] **Step 3: Verify tests pass**
Run `npx vitest run tests/unit/taxonomy.test.ts`.

---

### Task 5: Researched 20 Artifacts & Image Asset Pipeline

**Files:**
- Create: `src/data/artifacts/*.ts`, `src/data/artifacts/index.ts`
- Create: `public/images/artifacts/*/*` (optimized webp/png/jpg images)
- Test: `tests/unit/artifacts-data.test.ts`

**Interfaces:**
- Produces: 20 complete, verified historical artifact entries with detailed sections (monetary history, iconography, technique, archaeological context), quick facts, verified citations, and image attribution manifests.

- [ ] **Step 1: Write data completeness and image verification test**
Ensure each artifact passes `ArtifactSchema`, has at least 1 verified image, valid sources, and non-empty sections.
- [ ] **Step 2: Research and author the 20 artifact modules**
Write detailed, academically grounded entries for all 20 artifacts specified in PRD Section 4.
- [ ] **Step 3: Source and verify authentic images**
Procure high-resolution images from Wikimedia Commons / Open Access museum records with exact credits and licenses.
- [ ] **Step 4: Run test to confirm all 20 artifacts pass validation**
Run `npx vitest run tests/unit/artifacts-data.test.ts`.

---

### Task 6: Data Access & Filtering Library

**Files:**
- Create: `src/lib/artifacts.ts`, `src/lib/search.ts`
- Test: `tests/unit/artifacts-lib.test.ts`

**Interfaces:**
- Produces: Helper functions `getAllArtifacts`, `getArtifactBySlug`, `getArtifactsByCategory`, `getArtifactsByEra`, `getRelatedArtifacts`, and search/filter functions.

- [ ] **Step 1: Write unit tests for data access and search helpers**
Test slug retrieval, category filtering, era filtering, related artifacts scoring, and keyword matching.
- [ ] **Step 2: Implement data access & search utilities**
Implement `src/lib/artifacts.ts` and `src/lib/search.ts`.
- [ ] **Step 3: Verify all tests pass**
Run `npx vitest run tests/unit/artifacts-lib.test.ts`.

---

### Task 7: Layout Components (Header, Footer, MobileNav, Breadcrumbs)

**Files:**
- Create: `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/components/layout/MobileNav.tsx`, `src/components/ui/Breadcrumbs.tsx`

**Interfaces:**
- Produces: Responsive navigation with mobile menu drawer, breadcrumb trail, and accessible footer with museum research standards.

- [ ] **Step 1: Implement Header with desktop links & mobile toggle**
- [ ] **Step 2: Implement MobileNav drawer with keyboard trap & accessible controls**
- [ ] **Step 3: Implement Breadcrumbs component with schema support**
- [ ] **Step 4: Implement Footer with project vision, licensing, and standards**

---

### Task 8: Artifact UI Components

**Files:**
- Create: `src/components/artifacts/ArtifactCard.tsx`, `src/components/artifacts/ArtifactGrid.tsx`, `src/components/artifacts/ArtifactFacts.tsx`, `src/components/artifacts/ArtifactGallery.tsx`, `src/components/artifacts/ArtifactTimeline.tsx`, `src/components/artifacts/RelatedArtifacts.tsx`

**Interfaces:**
- Produces: Modular presentation components for cards, sticky facts panel, image gallery with modal lightbox, and timeline.

- [ ] **Step 1: Build `ArtifactCard` with subtle hover zoom, date badges, and dynasty tag**
- [ ] **Step 2: Build `ArtifactFacts` key-value specification panel**
- [ ] **Step 3: Build `ArtifactGallery` with thumbnail selector and accessible image modal**
- [ ] **Step 4: Build `ArtifactTimeline` for verified historical milestones**
- [ ] **Step 5: Build `RelatedArtifacts` grid**

---

### Task 9: Search & Filter Engine Component

**Files:**
- Create: `src/components/artifacts/ArtifactCatalog.tsx`, `src/components/artifacts/FilterDrawer.tsx`

**Interfaces:**
- Produces: Real-time search by keyword, category, era, and material with URL query string sync (`?q=...&category=...`) and active filter pills.

- [ ] **Step 1: Build `ArtifactCatalog` client island with search input, sort selector, and filter state**
- [ ] **Step 2: Implement filter tags with one-click clear and "Reset Filters" action**
- [ ] **Step 3: Implement empty state with helpful suggestion prompts**

---

### Task 10: Homepage Implementation (`/`)

**Files:**
- Create: `src/app/page.tsx`, `src/components/home/Hero.tsx`, `src/components/home/CategoryBrowse.tsx`, `src/components/home/EraBrowse.tsx`

**Interfaces:**
- Produces: Full editorial homepage with hero section, featured artifacts, category cards, era timeline, and editor's choice.

- [ ] **Step 1: Build editorial Hero section with striking artifact visual & CTAs**
- [ ] **Step 2: Build Category Browse grid with item counts**
- [ ] **Step 3: Build Historical Eras showcase**
- [ ] **Step 4: Assemble Homepage in `src/app/page.tsx`**

---

### Task 11: Artifact Collection Catalog (`/artifacts`)

**Files:**
- Create: `src/app/artifacts/page.tsx`

**Interfaces:**
- Produces: Complete collection browsing experience powered by `ArtifactCatalog`.

- [ ] **Step 1: Implement `/artifacts/page.tsx` with Suspense boundary for `useSearchParams`**
- [ ] **Step 2: Test filtering combinations (category + era + query)**

---

### Task 12: Artifact Detail Pages (`/artifacts/[slug]`)

**Files:**
- Create: `src/app/artifacts/[slug]/page.tsx`

**Interfaces:**
- Produces: Long-form editorial article page with breadcrumbs, high-res photography, quick facts, structured sections, sources, image credits, and JSON-LD schema.

- [ ] **Step 1: Implement `generateStaticParams` for all 20 artifacts**
- [ ] **Step 2: Implement `generateMetadata` for dynamic Open Graph & SEO tags**
- [ ] **Step 3: Render complete article sections, facts, sources, image credits, and related items**

---

### Task 13: Category & Era Routes

**Files:**
- Create: `src/app/categories/[slug]/page.tsx`, `src/app/eras/[slug]/page.tsx`

**Interfaces:**
- Produces: Contextual category and era detail pages with intro text and relevant artifact grids.

- [ ] **Step 1: Implement `/categories/[slug]` with `generateStaticParams`**
- [ ] **Step 2: Implement `/eras/[slug]` with `generateStaticParams`**

---

### Task 14: About Page, Sitemap & SEO Optimization

**Files:**
- Create: `src/app/about/page.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/not-found.tsx`

**Interfaces:**
- Produces: About page detailing curatorial criteria, XML sitemap generator, robots.txt, and 404 page.

- [ ] **Step 1: Build `/about` page with research methodology & image rights**
- [ ] **Step 2: Build `sitemap.ts` and `robots.ts`**
- [ ] **Step 3: Build customized `not-found.tsx`**

---

### Task 15: Production Build, Testing & Documentation

**Files:**
- Create: `README.md`
- Run: Full test suite, Next.js build, and accessibility/link verification.

- [ ] **Step 1: Run all unit & component tests**
- [ ] **Step 2: Execute `npm run build` and ensure 0 errors**
- [ ] **Step 3: Inspect responsive behavior and verify all 20 detail pages**
- [ ] **Step 4: Create comprehensive `README.md` with setup, architecture, and extension guide**
