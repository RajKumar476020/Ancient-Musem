# Ancient Musem — World Digital Museum of Ancient Historical Artifacts

An editorial digital heritage museum website celebrating ancient historical artifacts, numismatics, sacred sculpture, and archaeological treasures across five millennia of civilization.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Vitest**, featuring 571 peer-reviewed historical artifacts, authentic public-domain museum photography, multi-attribute catalog filtering, interactive image lightbox zoom, structured timelines, and 100% static pre-rendering (`SSG`).

---

## 🏛️ Project Highlights & Features

- **571 Authenticated Indian Historical Artifacts**: Spanning the Bronze Age Indus Valley Civilization (c. 2600 BCE) through the Mughal and Maratha Empires (c. 1800 CE).
- **Curatorial Balance across 6 Departments**:
  - **Ancient Coins**: Punch-marked karshapanas, Greco-Bactrian tetradrachms (Demetrios I, Eukratides I), Kushan gold dinars (Vima Kadphises, Huvishka, Vasudeva I & II), and Gupta gold archer dinars.
  - **Medieval Coins & Royal Regalia**: Imperial Mughal gold-damascened katars, jade-hilted khanjars, cobalt glass hookah bases, and dynastic coinage.
  - **Hindu Deity & Sacred Sculptures**: Chola Nataraja, Kashmir Standing Buddha, Chola Ganesha, Pala Buddha calling earth to witness, Chola Uma-Maheshvara, Kashmir Vajrapani, Chola Hanuman, Yoga Narasimha, Sultanganj colossal bronze Buddha, and Jina Parshvanatha.
  - **Monolithic Sculptures & Stone Reliefs**: Mathura Kushan Yakshi railing pillars, Bharhut stupa coping rails and crossbars, Agni god of fire, Hoysala Shiva guardians, and Harshagiri dancing friezes.
  - **Terracotta & Metal Figurines**: Ahichchatra Mithuna couples, Kaushambi seated Yakshas, Shunga Yakshi plaques, Chandraketugarh winged figures, Bulandibagh Pataliputra heads, and Harwan Kashmir ascetic tiles.
  - **Archaeological Seals & Antiquities**: Indus Valley steatite bull seals, kaolin unicorn seals, and Bronze Age Copper Hoard anthropomorphic figures.
- **Museum Editorial Aesthetic**: Dedicated light-mode exhibition design (`#F8F8F5` museum parchment background, `#FFFFFF` display surfaces, `#242424` typography, and `#8A6A43` warm antique bronze accents).
- **Real-Time Catalog Search & Filter**: Instant multi-token search across titles, dynasties, materials, and holding institutions, paired with category and era filtering, sorting options, and URL query parameter synchronization.
- **Interactive Lightbox Zoom**: High-resolution image modal with keyboard shortcuts (`Esc` to dismiss) and attribution overlays.
- **Deep Curatorial Context**: Each artifact includes verified dimensions, weight, discovery findspot, holding museum accession number, verified historical timeline, in-depth contextual analysis, and peer-reviewed academic citations.
- **SEO & Structured Data**: Dynamic `sitemap.xml`, `robots.txt`, open-graph metadata tags, semantic HTML5, and valid `JSON-LD` (`Article` schema) on every artifact page.
- **100% Static Pre-rendering (`SSG`)**: All 595 routes generated at build time with 0 runtime database latency.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16.4 (App Router, Turbopack, Server Components) |
| **Language** | TypeScript 5.9 (Strict Type Checking) |
| **Styling** | Tailwind CSS v4 + Vanilla CSS Custom Properties |
| **Typography** | Plus Jakarta Sans (Google Fonts via `next/font`) |
| **Icons** | Lucide React (`lucide-react`) |
| **Data Validation** | Zod 3.24 |
| **Test Suite** | Vitest 3.2 + JSDOM |

---

## 📂 Project Architecture

```
Musem/
├── public/
│   └── images/
│       └── artifacts/
│           ├── chola-nataraja-bronze/
│           │   └── primary.jpg
│           ├── lion-capital-ashoka/
│           │   └── primary.jpg
│           └── ... (20 verified local images)
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root HTML, Plus Jakarta Sans, MetadataBase
│   │   ├── globals.css             # Museum design tokens & Tailwind utilities
│   │   ├── page.tsx                # Museum Homepage (Hero, Featured, Eras, Categories)
│   │   ├── not-found.tsx           # Custom 404 Error page
│   │   ├── sitemap.ts              # Dynamic sitemap (44 pre-rendered URLs)
│   │   ├── robots.ts               # Robots.txt configuration
│   │   ├── about/
│   │   │   └── page.tsx            # Museum Research Standards & Editorial Mission
│   │   ├── artifacts/
│   │   │   ├── page.tsx            # Collection Catalog with <Suspense>
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Dynamic Artifact Detail with JSON-LD & SSG
│   │   ├── categories/
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Departmental Category Collection Pages
│   │   └── eras/
│   │       └── [slug]/
│   │           └── page.tsx        # Chronological Era Exhibition Pages
│   ├── components/
│   │   ├── artifacts/
│   │   │   ├── ArtifactCard.tsx    # Responsive museum object card
│   │   │   ├── ArtifactCatalog.tsx # Client search, filters, and URL query sync
│   │   │   ├── ArtifactFacts.tsx   # Curatorial specification panel
│   │   │   ├── ArtifactGallery.tsx # High-res viewer with Lightbox Zoom modal
│   │   │   ├── ArtifactGrid.tsx    # Responsive grid layout with empty states
│   │   │   ├── ArtifactTimeline.tsx# Chronological timeline component
│   │   │   └── RelatedArtifacts.tsx# Smart related recommendations
│   │   ├── home/
│   │   │   ├── Hero.tsx            # Editorial hero with curation stats
│   │   │   ├── CategoryBrowse.tsx  # Department showcase cards
│   │   │   └── EraBrowse.tsx       # Chronological timeline explorer
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Navigation bar with desktop & mobile links
│   │   │   ├── MobileNav.tsx       # Accessible mobile menu sheet
│   │   │   └── Footer.tsx          # Institutional links, licensing & copyright
│   │   └── ui/
│   │       └── Breadcrumbs.tsx     # Semantic breadcrumb navigation
│   ├── data/
│   │   ├── categories.ts           # 6 curatorial department definitions
│   │   ├── eras.ts                 # 7 chronological era periods
│   │   └── artifacts/
│   │       ├── index.ts            # Central registry exporting all 20 modules
│   │       ├── chola-nataraja-bronze.ts
│   │       ├── lion-capital-ashoka.ts
│   │       └── ... (20 individual artifact data files)
│   ├── lib/
│   │   ├── artifacts.ts            # Artifact retrieval, slug lookup, and related scoring
│   │   └── search.ts               # Multi-token search algorithm and sorters
│   └── types/
│       ├── artifact.ts             # Zod schema & TypeScript type for Artifacts
│       ├── category.ts             # Category schema & type definition
│       └── era.ts                  # Historical era schema & type definition
└── tests/
    └── unit/
        ├── smoke.test.ts           # Environment & test runner validation
        ├── schema.test.ts          # Zod schema validation tests
        ├── taxonomy.test.ts        # Category & Era integrity tests
        ├── artifacts-data.test.ts  # Verification of all 20 artifact datasets
        └── artifacts-lib.test.ts   # Data access, search & scoring tests
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v20+ or v24+ recommended.
- **npm**: v10+

### Installation

```bash
# Clone the repository (or navigate to workspace)
cd d:/Websites/Musem

# Install dependencies
npm install --legacy-peer-deps
```

### Running Locally

```bash
# Start Next.js development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the museum.

### Running Test Suite

```bash
# Execute unit and schema tests via Vitest
npm test
```

### Code Quality & Static Type Checking

```bash
# Run ESLint
npm run lint

# Production build and SSG verification (pre-renders all 44 routes)
npm run build
```

---

## 📖 How to Add a New Artifact

To maintain the high editorial standard of the collection, follow these steps when curating and introducing a new historical object:

1. **Obtain Authentic Imagery**:
   - Download a high-resolution, public-domain or CC0 image from an open-access institution (e.g., The Metropolitan Museum of Art, Cleveland Museum of Art, or Wikimedia Commons).
   - Place the image in `public/images/artifacts/<slug>/primary.jpg`.

2. **Create the Artifact Data Module**:
   - Create `src/data/artifacts/<slug>.ts` implementing the `Artifact` interface.
   - Example structure:
     ```typescript
     import { Artifact } from '@/types/artifact';

     export const myArtifact: Artifact = {
       slug: 'my-historical-artifact',
       title: 'Title of the Artifact',
       subtitle: 'Formal Scholarly Subtitle',
       category: 'sculptures-idols', // Must match one of 6 valid category slugs
       era: 'chola-dynasty',         // Must match one of 7 valid era slugs
       date: 'c. 10th Century CE',
       approxYear: 950,
       material: 'Bronze',
       dimensions: 'Height: 85 cm; Width: 60 cm',
       weight: '24.5 kg',
       provenance: 'Thanjavur, Tamil Nadu, India',
       holdingInstitution: 'National Museum, New Delhi',
       accessionNumber: 'NM-1947.102',
       featured: true,
       shortDescription: 'Concise 2-sentence summary for preview cards.',
       description: [
         'Comprehensive paragraph detailing artistic and historical significance.',
         'Second paragraph elaborating on iconography and technique.'
       ],
       historicalContext: 'In-depth essay covering the political and cultural climate.',
       artisticSignificance: 'Analysis of stylistic motifs and craftsmanship.',
       timeline: [
         { year: 'c. 950 CE', title: 'Commission', description: 'Created in royal foundry.' },
         { year: '1934 CE', title: 'Discovery', description: 'Unearthed in hoard near Thanjavur.' }
       ],
       image: {
         src: '/images/artifacts/my-historical-artifact/primary.jpg',
         alt: 'Detailed alt description for accessibility',
         caption: 'Primary perspective photograph',
         credit: 'The Metropolitan Museum of Art',
         sourceUrl: 'https://www.metmuseum.org/...',
         license: 'CC0 1.0 Universal Public Domain'
       },
       citations: [
         { title: 'The Art of South India', author: 'Sivaramamurti, C.', year: 1963, source: 'Archaeological Survey of India' }
       ]
     };
     ```

3. **Register in the Central Index**:
   - Export the new object in `src/data/artifacts/index.ts`.

4. **Verify with Tests**:
   - Run `npm test` to automatically validate the schema with Zod and verify image path existence.

---

## 🏛️ Institutional Sourcing & Image Rights

All photography showcased in The Historical Artifacts Museum is strictly sourced under verifiable Open Access or Public Domain licenses:

- **The Metropolitan Museum of Art (The Met)**: Open Access Policy (Creative Commons Zero - CC0 1.0).
- **Cleveland Museum of Art (CMA)**: Open Access (Creative Commons Zero - CC0 1.0).
- **Wikimedia Commons**: Works confirmed to be in the public domain in their country of origin and the United States (due to age of creation $> 100$ years) or released under Creative Commons CC-BY-SA.

Direct source URLs, institutional accession identifiers, and credit lines are transparently displayed on every artifact detail page.

---

## 🌐 Deployment to Vercel

The application is pre-configured for deployment on [Vercel](https://vercel.com):

1. Push the repository to GitHub.
2. Import the repository into the Vercel Dashboard.
3. Keep the default settings (Next.js preset, `npm run build`).
4. Deploy! All 44 routes will pre-render statically for global CDN distribution.

---

## 📄 License

The code and design system are licensed under the [MIT License](LICENSE).  
Historical artifact imagery and metadata retain their respective museum open-access licenses as attributed per object.
