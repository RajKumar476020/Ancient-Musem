# Architectural Design Specification: The Historical Artifacts Museum — Digital Heritage Website

**Date:** 2026-10-28  
**Project:** The Historical Artifacts Museum  
**Document Status:** Approved  
**PRD Source:** [prd.md](file:///d:/Websites/Musem/prd.md)  

---

## 1. Executive Summary & Core Principles
The Historical Artifacts Museum is a digital heritage publication presenting ancient and medieval Indian historical objects (coins, Hindu deity sculptures, Indus Valley seals/figurines, and historic tools/monuments).
- **Aesthetic:** Editorial magazine quality, light mode only, generous whitespace, restrained borders, subtle micro-interactions.
- **Core Loop:** Discover artifacts → Select artifact → Explore rich visual photographs and verified history → Discover related artifacts.
- **Strict Scope Boundaries:** No 3D virtual tour / virtual building; no user accounts or paywalls; no generic AI-hallucinated texts; authentic museum/heritage references and verified image provenance only.

---

## 2. Design System & Tokens
### 2.1 Color Palette
- Main Background: `#F8F8F5`
- Card & Surface: `#FFFFFF`
- Primary Text: `#242424`
- Secondary Text: `#6B6B65`
- Border: `#E7E5DF`
- Muted Surface: `#F0EFEA`
- Bronze Accent: `#8A6A43`
- Button Primary: `#242424` (Hover: `#3A3A34`), Text: `#FFFFFF`
- Card Radius: `12px` (`rounded-xl`), Button Radius: `8px` (`rounded-lg`)

### 2.2 Typography
- Primary Font: **Plus Jakarta Sans** (Google Fonts `next/font/google`)
- Heading Weights: `600` (Hero: 48-60px, Page: 36-44px, Section: 24-30px, Card: 18-22px)
- Interface & Navigation: `500` (14-15px)
- Article Body: `400` (16-18px, Line-height: `1.75`, max reading column width: `760px`)

---

## 3. Tech Stack & Architecture
- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript 5+ (Strict mode)
- **Styling:** Tailwind CSS with custom design tokens mapped in Tailwind config / CSS variables
- **Content:** Strongly-typed TypeScript / Zod validated data layer (`src/data/artifacts/`, `src/data/categories.ts`, `src/data/eras.ts`)
- **Icons:** `lucide-react`
- **Validation:** `zod`
- **Testing:** `vitest` / `@testing-library/react` for unit & component tests

---

## 4. Content Model & Schema
```typescript
// src/types/artifact.ts
import { z } from 'zod';

export const ArtifactImageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
  sourceUrl: z.string(),
  creator: z.string().optional(),
  institution: z.string().optional(),
  license: z.string().default('Public Domain / Fair Use / Open Access'),
  licenseUrl: z.string().optional(),
  attribution: z.string().optional(),
  isPrimary: z.boolean().default(false),
});

export const ArtifactSectionSchema = z.object({
  heading: z.string(),
  body: z.string(),
});

export const ArtifactFactSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const ArtifactTimelineMilestoneSchema = z.object({
  date: z.string(),
  title: z.string(),
  description: z.string(),
});

export const ArtifactSourceSchema = z.object({
  title: z.string(),
  publisher: z.string(),
  url: z.string(),
  accessedAt: z.string().optional(),
});

export const ArtifactSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  categorySlug: z.string(),
  eraSlug: z.string(),
  civilization: z.string().optional(),
  dynasty: z.string().optional(),
  dateDisplay: z.string(),
  dateStart: z.number(),
  dateEnd: z.number(),
  material: z.string().optional(),
  origin: z.string().optional(),
  discoverySite: z.string().optional(),
  currentCollection: z.string().optional(),
  dimensions: z.string().optional(),
  description: z.string(),
  sections: z.array(ArtifactSectionSchema),
  quickFacts: z.array(ArtifactFactSchema),
  timeline: z.array(ArtifactTimelineMilestoneSchema).optional(),
  interestingFacts: z.array(z.string()).optional(),
  images: z.array(ArtifactImageSchema).min(1),
  sources: z.array(ArtifactSourceSchema).min(1),
  relatedArtifactSlugs: z.array(z.string()).default([]),
  status: z.enum(['draft', 'published']).default('published'),
  lastReviewed: z.string(),
});

export type Artifact = z.infer<typeof ArtifactSchema>;
export type ArtifactImage = z.infer<typeof ArtifactImageSchema>;
export type ArtifactSection = z.infer<typeof ArtifactSectionSchema>;
export type ArtifactFact = z.infer<typeof ArtifactFactSchema>;
export type ArtifactTimelineMilestone = z.infer<typeof ArtifactTimelineMilestoneSchema>;
export type ArtifactSource = z.infer<typeof ArtifactSourceSchema>;
```

---

## 5. Website Navigation & Route Structure
1. **Homepage (`/`)**:
   - Header with wordmark, nav links, quick search trigger.
   - Editorial Hero: Headline, subtext, primary CTA ("Explore Artifacts"), secondary CTA ("Browse Historical Eras"), featured artifact highlight.
   - Featured Artifacts Grid (6 curated items).
   - Browse by Category Grid (with object counts).
   - Explore Historical Eras (horizontal chronological cards).
   - Editor's Selection / Recent Additions.
   - Comprehensive Footer with project ethos, research standards, image rights, navigation.
2. **Collection Catalog (`/artifacts`)**:
   - Search bar (multi-field matching title, alternative names, keywords, dynasty).
   - Filter drawer/controls: Category filter, Era filter, Material filter.
   - Sort dropdown: Date (Oldest first / Newest first), Alphabetical (A-Z).
   - Active filter tags with single-click dismissal & "Reset Filters" action.
   - Responsive grid with animated cards & empty result fallback.
3. **Artifact Detail (`/artifacts/[slug]`)**:
   - Breadcrumb navigation (`Home > Artifacts > [Category] > [Title]`).
   - Header with period badge, dynasty, date.
   - Primary Image with high-resolution lightbox & obverse/reverse side-by-side or multi-angle gallery.
   - Quick Facts panel with sticky metadata.
   - Long-form article with structured sections (monetary history, iconography, technique, archaeological context).
   - Historical Timeline (milestones where verified).
   - Sourced interesting facts.
   - Academic Sources & Verified References list with outbound links.
   - Image Rights & Citation Panel (license, creator, institution).
   - Related Artifacts (3-4 linked cards).
4. **Category Detail (`/categories/[slug]`)**:
   - Category title, description, and filtered artifact grid.
5. **Historical Era Detail (`/eras/[slug]`)**:
   - Era title, date span, historical context overview, and era artifacts.
6. **About Page (`/about`)**:
   - Museum vision, curatorial principles, sourcing standards, open access policy.
7. **Not Found (`/not-found.tsx`)**:
   - Clean 404 with search & return home actions.

---

## 6. The 20 Initial Researched Artifacts
The 20 artifacts specified in PRD Section 4 are:
1. **Punch-Marked Silver Karshapana** (`punch-marked-silver-coin`) - Maurya Period / Mahajanapadas
2. **Indo-Greek Silver Tetradrachm of Menander I** (`indo-greek-menander-silver-coin`) - Indo-Greek Kingdom
3. **Kushan Gold Dinar of Kanishka I** (`kushan-kanishka-gold-dinar`) - Kushan Empire
4. **Samudragupta Lyrist-Type Gold Dinar** (`samudragupta-lyrist-gold-dinar`) - Gupta Empire
5. **Chandragupta II Archer-Type Gold Dinar** (`chandragupta-ii-archer-gold-dinar`) - Gupta Empire
6. **Kumaragupta I Silver Drachm** (`kumaragupta-i-silver-coin`) - Gupta Empire
7. **Delhi Sultanate Gold Tanka of Muhammad bin Tughluq** (`delhi-sultanate-muhammad-tughluq-tanka`) - Delhi Sultanate
8. **Mughal Gold Mohur of Akbar** (`mughal-akbar-gold-mohur`) - Mughal Empire
9. **Mughal Zodiac Silver Rupee of Jahangir** (`mughal-jahangir-zodiac-rupee`) - Mughal Empire
10. **Chhatrapati Shivaji Maharaj Gold Hon** (`maratha-shivaji-gold-hon`) - Maratha Empire
11. **Chola Nataraja Bronze Sculpture** (`chola-nataraja-bronze`) - Chola Dynasty
12. **Gupta Sandstone Standing Vishnu** (`gupta-standing-vishnu-sculpture`) - Gupta Period (Mathura)
13. **Kushan Gaja-Lakshmi Sandstone Relief** (`kushan-gajalakshmi-sculpture`) - Kushan Period (Mathura)
14. **Pallava Durga Mahishasuramardini Relief** (`durga-mahishasuramardini-sculpture`) - Pallava / Early Medieval
15. **Hoysala Chloritic Schist Ganesha** (`hoysala-ganesha-sculpture`) - Hoysala Empire (Halebidu)
16. **Chola Sadashiva / Maheshamurti Bronze** (`chola-shiva-sculpture`) - Chola Dynasty
17. **Indus Valley Pashupati & Unicorn Steatite Seals** (`indus-valley-unicorn-seal`) - Mature Harappan Phase
18. **Mohenjo-daro Bronze Dancing Girl** (`indus-valley-dancing-girl`) - Mature Harappan Phase
19. **Harappan Terracotta Mother Goddess Figurine** (`harappan-terracotta-figurine`) - Indus Valley Civilization
20. **Ashoka Lion Capital of Sarnath** (`ashoka-lion-capital-sarnath`) - Maurya Dynasty

---

## 7. Performance, SEO & Accessibility Gates
- Target Lighthouse 95+ in Accessibility, Best Practices, and SEO.
- Full Open Graph, Twitter cards, JSON-LD Schema (`Article`, `BreadcrumbList`).
- Semantic HTML (`main`, `article`, `section`, `nav`, `header`, `footer`).
- Keyboard navigable controls, visible focus rings, ARIA dialog for image lightbox.
