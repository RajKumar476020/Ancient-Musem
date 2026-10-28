# PROJECT REQUIREMENTS DOCUMENT (PRD)
# The Historical Artifacts Museum — Digital Heritage Website

**Project type:** Responsive historical museum website  
**Primary audience:** Students, history enthusiasts, researchers, and general visitors  
**Initial scope:** Historical artifacts, ancient coins, sculptures, and statues of Hindu deities  
**Design mode:** Light mode only  
**Development approach:** Autonomous implementation by Google Antigravity using the configured Gemini coding model  
**Primary objective:** Build a complete, production-ready website, not merely a design prototype.

---

# 1. PROJECT OVERVIEW

## 1.1 Project vision

Create a premium, minimal, responsive digital museum where visitors can discover historical objects from Indian history.

The website should function like a carefully curated historical publication. Visitors browse a collection of artifacts, select an object, and open a dedicated article containing high-quality photographs, historical information, physical characteristics, cultural significance, a timeline where appropriate, and reliable references.

The website is NOT a 3D virtual museum. Do not build a virtual building, 3D walking environment, or mandatory interactive 3D viewer.

The primary experience is:

**Discover artifacts → Select an artifact → Explore its photographs and history → Discover related artifacts.**

The website should be visually sophisticated, educational, fast, accessible, and easy to expand with additional historical objects.

## 1.2 Core objectives

1. Build a complete and functional historical artifacts museum website.
2. Create a polished, professional user interface that feels human-designed rather than AI-generated.
3. Populate the initial collection with researched historical artifacts.
4. Automatically research and source appropriate artifact images from the internet.
5. Provide detailed, factually responsible articles for individual artifacts.
6. Make every page responsive across mobile, tablet, laptop, and desktop.
7. Optimize pages for search engines and fast loading.
8. Make adding new artifacts straightforward without redesigning the website.
9. Finish implementation, testing, and documentation without stopping after generating a plan.

## 1.3 Scope boundaries

The project will focus on historical objects, including:

- Ancient and medieval Indian coins.
- Sculptures and statues of Hindu deities.
- Archaeological seals and figurines.
- Historic tools, weapons, jewelry, manuscripts, and other significant objects.

**Explicitly excluded from the initial scope:**

- Historical monuments as primary collection entries.
- Monument directories and travel guides.
- Virtual museum buildings or 3D walkthroughs.
- Mandatory 3D models.
- User accounts, social networking, comments, and payments.
- Unnecessary AI chatbots or AI-generated historical interpretations.

Historical buildings may appear incidentally in an artifact's historical context, but monuments must not become the central subject of the collection.

---

# 2. DESIGN SYSTEM

## 2.1 Overall visual direction

Build a minimal, editorial-style digital museum with a light interface, premium typography, excellent photography, generous whitespace, and restrained visual details.

The design should combine the readability of a premium history magazine with the organization of a modern digital archive.

Avoid generic AI-generated website patterns.

### Design principles

- Light mode only.
- Minimal and professional layout.
- Clear visual hierarchy.
- Medium and semibold font weights for interface elements.
- Comfortable reading widths for historical articles.
- Consistent spacing and component dimensions.
- Restrained borders and shadows.
- Subtle transitions rather than excessive animations.
- Photography and historical content must remain the visual focus.

## 2.2 Typography

Use **Plus Jakarta Sans** as the primary interface font.

Load the font through a reliable font provider or a locally hosted font when practical.

| Element | Font weight | Desktop size |
|---|---:|---:|
| Homepage hero heading | 600 | 48–60 px |
| Main page heading | 600 | 36–44 px |
| Section headings | 600 | 24–30 px |
| Artifact card titles | 600 | 18–22 px |
| Navigation | 500 | 14–15 px |
| Buttons | 600 | 14–15 px |
| Article body | 400 | 16–18 px |
| Metadata | 500 | 12–14 px |

Use responsive typography so headings scale down appropriately on smaller screens.

For long articles, use a line height of approximately 1.7. Keep the article reading column around 680–800 px on large screens.

Do not make every element semibold. Body text must remain comfortable for long-form reading.

## 2.3 Color palette

Use the following starting palette:

| Purpose | Color |
|---|---|
| Main background | `#F8F8F5` |
| Card and content surface | `#FFFFFF` |
| Primary text | `#242424` |
| Secondary text | `#6B6B65` |
| Borders | `#E7E5DF` |
| Muted surface | `#F0EFEA` |
| Accent | `#8A6A43` |
| Primary button background | `#242424` |
| Primary button text | `#FFFFFF` |

The bronze accent should be used sparingly for small highlights, active states, and selected labels.

Do not use large gold gradients, excessive beige overlays, bright neon colors, or multiple competing accent colors.

## 2.4 Component styling

- Card radius: approximately 10–14 px.
- Button radius: approximately 8–10 px.
- Borders: thin and subtle.
- Shadows: minimal and used only when useful.
- Image corners: consistent within each component type.
- Hover states: subtle image zoom or a restrained color transition.
- Focus states: clearly visible for keyboard accessibility.

Avoid excessive glassmorphism, floating decorative elements, oversized pill-shaped controls, and unnecessary animations.

---

# 3. WEBSITE ARCHITECTURE

Build the following pages and routes.

## 3.1 Homepage — `/`

The homepage introduces the museum and makes artifact discovery the main activity.

### Required sections

**A. Header**

Include:
- Museum wordmark or typographic logo.
- Home.
- Explore Artifacts.
- Historical Eras.
- Categories.
- Search control.

On mobile, use a compact header and an accessible menu.

**B. Hero section**

Include:
- A concise headline explaining the museum's purpose.
- A short supporting description.
- A primary button: “Explore Artifacts”.
- A secondary action: “Browse Historical Eras”.
- One visually striking, authentic artifact photograph.

Example headline:

“Discover the Stories Behind History's Greatest Artifacts.”

Do not use monument photographs as the primary hero subject.

**C. Featured artifacts**

Display 4–6 selected artifacts using a carefully designed grid.

Each card should include:
- Artifact image.
- Artifact name.
- Approximate period or date.
- Civilization or dynasty.
- One short descriptive sentence.
- A link to the artifact's detail page.

**D. Browse by category**

Display categories such as:
- Ancient Coins.
- Medieval Coins.
- Hindu Deity Sculptures.
- Archaeological Seals.
- Terracotta and Figurines.
- Weapons and Tools.
- Jewelry and Personal Objects.
- Manuscripts and Inscriptions.

Only show categories that contain actual published artifacts.

**E. Explore historical eras**

Provide links to relevant historical periods, with dates and labels verified during research.

Suggested periods:
- Indus Valley Civilization.
- Vedic and Early Historic Periods.
- Maurya and Post-Maurya Periods.
- Gupta Period.
- Early Medieval India.
- Delhi Sultanate.
- Mughal Period.
- Maratha and Regional Kingdoms.

These are discovery categories, not claims that every period has an equally complete collection.

**F. Recently added or editor-selected artifacts**

Show additional objects without duplicating the featured section unnecessarily.

**G. Footer**

Include:
- Museum identity.
- Navigation links.
- About the project.
- Editorial and research standards.
- Image credits and licensing information.
- Privacy policy if analytics or other data collection requires it.
- Copyright notice.

Do not invent an institution's identity or imply official museum affiliation.

## 3.2 Artifact collection — `/artifacts`

This is the central browsing page.

### Required features

- Responsive artifact card grid.
- Search by artifact name and relevant keywords.
- Category filtering.
- Historical era filtering.
- Dynasty or civilization filtering where data is available.
- Sort by newest addition, oldest approximate date, or alphabetical order.
- Pagination or an accessible “Load more” interaction.
- Clear active-filter indicators.
- Reset filters control.
- Empty state when no results match.
- Loading and error states where applicable.

Filters must work together. For example, a visitor should be able to search for coins while filtering to the Gupta period.

Keep filters compact on mobile. Use a collapsible filter panel or a well-designed filter drawer rather than a large permanent sidebar.

Do not display nonfunctional controls.

## 3.3 Category pages — `/categories/[slug]`

Examples:

- `/categories/ancient-coins`
- `/categories/hindu-deity-sculptures`
- `/categories/archaeological-seals`

Each page should contain:
- Category title.
- Short explanatory introduction.
- Relevant artifact grid.
- Search and filters where useful.
- Related categories.

## 3.4 Historical era pages — `/eras/[slug]`

Examples:

- `/eras/indus-valley`
- `/eras/gupta-period`
- `/eras/mughal-period`

Each page should contain:
- Period name and date range.
- Concise historical introduction.
- Important context.
- Relevant artifacts.
- Links to related eras.

Dates must be researched and expressed with appropriate uncertainty. Historical periods may overlap and must not be represented as perfectly rigid boundaries.

## 3.5 Individual artifact page — `/artifacts/[slug]`

This is the most important page template in the entire application.

Every artifact must have a dedicated, shareable, SEO-friendly URL.

### Page structure

**A. Breadcrumbs**

Example:

Home → Artifacts → Ancient Coins → Punch-Marked Silver Coin

**B. Artifact heading**

Include:
- Full artifact name.
- Historical period.
- Civilization or dynasty, when established.
- Approximate date.
- A concise summary.

**C. Main photograph**

Display a large, high-quality image near the top of the page.

Where suitable photographs exist, show the artifact's front and reverse sides for coins, and multiple views for sculptures.

Never label a generic illustration as a photograph of the actual historical object.

**D. Quick facts**

Show a compact information panel containing relevant fields, such as:
- Object type.
- Material.
- Estimated date.
- Cultural or political association.
- Place of origin or discovery, if known.
- Current collection or holding institution, if verified.
- Dimensions, if available.

Hide unavailable information rather than inventing values.

**E. Historical overview**

Explain:
- What the object is.
- When it was made or used.
- Who created, issued, or commissioned it, if known.
- Its historical context.
- Why it matters.

**F. Detailed sections**

Use meaningful headings tailored to each artifact type.

For coins:
- Historical and monetary context.
- Metal, denomination, and minting technique.
- Obverse and reverse imagery.
- Legends, symbols, and inscriptions.
- Circulation and significance.

For Hindu deity sculptures:
- Depicted deity and iconography.
- Material and sculptural technique.
- Artistic style.
- Historical and cultural context.
- Attributes, posture, and symbolism, where supported by reliable references.

For seals:
- Material and manufacturing technique.
- Motifs and inscriptions.
- Archaeological context.
- Current scholarly understanding and uncertainties.

For other artifacts, create appropriate sections rather than forcing every object into the same template.

**G. Additional photographs**

Include a responsive gallery for verified additional views and details.

Provide meaningful alt text. Make images expandable when practical, with accessible controls and keyboard support.

**H. Timeline**

Show relevant historical milestones when enough reliable information is available.

Do not invent a discovery date, excavation event, ownership history, or precise creation date simply to fill a timeline.

**I. Interesting facts**

Include a small number of genuinely useful, sourced facts.

Avoid sensational claims and unsupported superlatives.

**J. Sources and references**

Provide direct links to authoritative sources and relevant object records.

Include image credits and licenses separately from historical citations.

**K. Related artifacts**

Display 3–4 related objects based on historical period, category, dynasty, material, or cultural connection.

Every related artifact card must link to a valid page.

**L. Back-to-collection navigation**

Provide a clear way to return to the collection and preserve useful browsing context where practical.

---

# 4. INITIAL ARTIFACT COLLECTION

The coding agent must populate the website with an initial researched collection of approximately 20 artifacts.

Prioritize Indian historical objects, especially coins, Hindu deity sculptures, and archaeological artifacts.

The following list defines the initial research targets. It does not authorize inventing a particular object's provenance, exact date, inscription, dimensions, or museum location.

## 4.1 Coins

**01. Punch-Marked Silver Coins**

Research early Indian punch-marked coinage, its symbols, silver composition where documented, and the historical context of its circulation.

**02. Indo-Greek Coinage**

Include a documented example of an Indo-Greek ruler's coin, explaining its legends, imagery, and cultural context.

**03. Kushan Gold Coin**

Research a documented Kushan-period gold coin and explain the ruler, iconography, and monetary context.

**04. Samudragupta's Lyrist-Type Gold Coin**

Research an authenticated example of the Gupta ruler Samudragupta's lyrist-type coinage. Explain its imagery and historical interpretation.

**05. Chandragupta II Gold Coin**

Select a documented coin type associated with Chandragupta II and explain its design and historical significance.

**06. Gupta Silver Coin**

Include a documented Gupta silver coin, identifying the ruler or coin type only when supported by the source.

**07. Delhi Sultanate Coin**

Select a documented coin from a named Delhi Sultanate ruler and explain its inscriptions, denomination if known, and monetary context.

**08. Mughal Gold or Silver Coin**

Select a documented coin from the Mughal period, with the ruler, date, metal, and inscription recorded only where verifiable.

**09. Akbar's Coinage**

Research a specific coin issued under Akbar, explaining its design, inscriptions, or monetary reforms when supported by reliable sources.

**10. Shivaji-Era Coinage**

Research a documented coin associated with Shivaji or the Maratha period. Verify the attribution and inscriptions carefully rather than assuming every regional coin belongs to Shivaji.

## 4.2 Hindu deity sculptures and statues

**11. Chola-Period Nataraja Bronze**

Research a documented Nataraja sculpture, its iconography, casting technique, artistic tradition, and historical context.

**12. Vishnu Sculpture**

Select a documented historical sculpture of Vishnu and explain its iconographic features and artistic period.

**13. Lakshmi Sculpture**

Include a documented sculpture or figurine of Lakshmi, with material, style, and dating verified from its collection record or scholarly source.

**14. Durga Mahishasuramardini Sculpture**

Research a documented representation of Durga defeating Mahishasura and explain the relevant iconography.

**15. Ganesha Sculpture**

Select a historically documented Ganesha sculpture and describe its material, artistic style, and cultural context.

**16. Shiva Sculpture**

Include a documented historical sculpture of Shiva, distinguishing the specific form depicted from other forms of the deity.

## 4.3 Other historical artifacts

**17. Indus Valley Unicorn Seal**

Research a documented Indus seal depicting the commonly described unicorn motif. Explain the archaeological context and clearly acknowledge that the Indus script remains undeciphered.

**18. Indus Valley Dancing Girl Figurine**

Research the well-known bronze figurine from Mohenjo-daro. Explain the archaeological context, material, and limitations of what can be inferred about its original purpose.

**19. Harappan Terracotta Figurine**

Select a documented terracotta figurine from an identified Harappan archaeological context. Do not assume its function or religious meaning is definitively known.

**20. Ashoka Lion Capital Sculpture**

Research the surviving historical sculpture associated with the Lion Capital of Ashoka at Sarnath. Explain its original historical context, surviving form, and distinction between the ancient object and modern reproductions.

### Collection requirements

- These 20 objects are the initial research queue, not permission to publish unverified information.
- If a specific example cannot be adequately sourced or illustrated, replace it with a better-documented artifact of the same general category.
- Prefer actual museum object records over generic internet descriptions.
- Do not fabricate accession numbers or claim that a particular object is held by an institution without evidence.
- Do not treat a modern replica as the original object.
- Identify reconstructions and illustrative images explicitly.
- Use respectful, historically grounded language when describing religious objects.
- Clearly separate documented facts from interpretations and unresolved scholarly questions.

---

# 5. IMAGE RESEARCH AND ASSET MANAGEMENT

The coding agent must independently research and obtain appropriate images for the initial collection.

Do not leave the website with placeholder images or ask the user to manually supply every photograph.

## 5.1 Image-source priority

Search in this order where appropriate:

1. Wikimedia Commons, checking the individual file page and license.
2. Museum open-access collections and object records.
3. Government heritage and archaeological collections with suitable reuse permissions.
4. Europeana and other reputable cultural-heritage collections, subject to each item's rights information.
5. Other reliable sources that explicitly permit the intended use.

Potential research sources include the British Museum collection, The Metropolitan Museum of Art's Open Access collection, Smithsonian Open Access, and relevant Indian museum or archaeological collection records.

These sources are research starting points, not guarantees that every object or image is freely reusable.

## 5.2 Image verification

For every published image:

- Verify that it depicts the intended artifact or is clearly labeled as an illustration.
- Prefer the actual object photograph when available.
- Check the individual image's license and reuse conditions.
- Store the original image-source URL.
- Store the image creator or photographer when credited.
- Store the license name and license URL when available.
- Include required attribution and modification notices.
- Avoid watermarked images and unauthorized copies.
- Do not bypass paywalls or access restrictions.
- Do not use an image solely because it appears in search results.

If an image cannot be verified or legally reused, find a suitable alternative.

If an authentic image is unavailable, use a legally reusable illustration with an explicit label, or omit the image rather than misleading visitors.

## 5.3 Local image handling

Where permitted, download and optimize images for the project.

Recommended asset organization:

`public/images/artifacts/[artifact-slug]/`

Store a separate image manifest or associated metadata containing:

- Artifact slug.
- Image filename.
- Original source URL.
- Creator or institution.
- License.
- Attribution text.
- Whether the image was cropped or modified.
- Alt text.

Use descriptive filenames, such as:

`gupta-gold-coin-obverse.webp`

Do not use filenames such as `image1.webp` or `download-final-new.webp`.

Convert images to efficient formats such as WebP or AVIF where appropriate, retaining sufficient quality for detailed artifact viewing.

Provide responsive image sizes and avoid loading full-resolution originals into small card thumbnails.

If remote hosting is necessary, use stable, permitted image URLs and configure the application safely. Do not depend on fragile third-party hotlinks without a fallback.

## 5.4 Image sourcing completion criteria

The agent must verify that:

- Every published artifact has at least one appropriate image, unless the artifact is explicitly marked as awaiting imagery.
- All image credits and rights metadata are recorded.
- All image paths or remote URLs work.
- No image is accidentally reused for an unrelated artifact.
- Broken-image states have a polished fallback.
- Image alt text describes the actual content accurately.

---

# 6. HISTORICAL RESEARCH AND CONTENT QUALITY

Historical credibility is a core product requirement.

## 6.1 Source hierarchy

Prioritize:

1. Museum collection records.
2. Archaeological and government heritage institutions.
3. Peer-reviewed academic publications and university research.
4. Reputable reference works and established scholarly resources.
5. Other reliable sources that provide traceable evidence.

Do not rely exclusively on search-result snippets, unsourced blogs, social media posts, or generated AI answers.

## 6.2 Article writing

Write original, clear, educational prose.

Each article should normally contain approximately 600–1,200 words when enough reliable material is available. This is a guideline, not a requirement to pad short or poorly documented entries.

Use:
- Short paragraphs.
- Descriptive subheadings.
- Lists for technical specifications.
- Tables where they genuinely improve comprehension.
- Clearly explained historical terminology.
- Direct citations for important claims.

Avoid:
- Repetitive introductions.
- Empty sections.
- Unsubstantiated superlatives.
- Invented quotations.
- Fake citations.
- Unsupported religious, political, or historical claims.
- Treating uncertain interpretations as established facts.

## 6.3 Handling historical uncertainty

Where dates or interpretations are disputed:

- State the approximate date range.
- Identify the uncertainty.
- Explain competing interpretations only when supported by sources.
- Avoid presenting a modern reconstruction as definitive evidence of the past.

For religious statues, distinguish traditional religious interpretation, historical iconographic interpretation, and archaeological evidence when relevant.

## 6.4 Editorial metadata

Each artifact record should support:

- Publication status.
- Last reviewed date.
- Historical sources.
- Image rights information.
- Notes about uncertain claims.
- Editorial review status.

The public site should display relevant references without exposing internal editorial notes or unpublished drafts.

---

# 7. TECHNICAL ARCHITECTURE

Use a modern, maintainable stack suitable for a content-rich website.

## 7.1 Required stack

- **Framework:** Next.js using the App Router.
- **Language:** TypeScript with strict type checking.
- **Styling:** Tailwind CSS.
- **Typography:** Plus Jakarta Sans.
- **Content:** Markdown/MDX or structured local content files.
- **Icons:** Lucide icons, used consistently.
- **Image handling:** Next.js Image or an equivalent optimized image pipeline.
- **Deployment target:** Vercel-compatible production build.

Use stable, mutually compatible package versions available at implementation time. Do not assume a deprecated package or nonexistent API is valid.

## 7.2 Initial architecture

Start with a static-first architecture. Do not add a database, separate backend, or authentication system unless a demonstrated requirement justifies it.

Suggested structure:

```text
src/
  app/
    page.tsx
    artifacts/
      page.tsx
      [slug]/
        page.tsx
    categories/
      [slug]/
        page.tsx
    eras/
      [slug]/
        page.tsx
    about/
      page.tsx
    not-found.tsx/
  components/
    layout/
      Header.tsx
      Footer.tsx
      MobileNavigation.tsx
    artifacts/
      ArtifactCard.tsx
      ArtifactGrid.tsx
      ArtifactGallery.tsx
      ArtifactFacts.tsx
      ArtifactFilters.tsx
      RelatedArtifacts.tsx
    ui/
  content/
    artifacts/
    categories/
    eras/
  lib/
    artifacts.ts
    search.ts
    metadata.ts
  types/
    artifact.ts
  styles/
    globals.css

public/
  images/
    artifacts/
  favicon.ico
  robots.txt
```

Adjust this structure if a more appropriate organization improves maintainability. Keep content, data-access logic, and presentation separate.

Ensure every route is implemented correctly. A not-found route must use Next.js conventions rather than an invalid directory structure.

## 7.3 Content data model

Create a typed artifact schema with fields such as:

```ts
type Artifact = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  era?: string;
  civilization?: string;
  dynasty?: string;
  dateDisplay: string;
  dateStart?: number;
  dateEnd?: number;
  material?: string;
  origin?: string;
  discoverySite?: string;
  currentCollection?: string;
  dimensions?: string;
  description: string;
  sections: {
    heading: string;
    body: string;
  }[];
  facts: {
    label: string;
    value: string;
  }[];
  images: {
    src: string;
    alt: string;
    caption?: string;
    sourceUrl: string;
    creator?: string;
    license?: string;
    licenseUrl?: string;
    attribution?: string;
  }[];
  sources: {
    title: string;
    publisher: string;
    url: string;
    accessedAt?: string;
  }[];
  relatedArtifactSlugs: string[];
  status: "draft" | "published";
  lastReviewed?: string;
};
```

This is a starting schema. Adapt it to support accurate date ranges, artifact-specific sections, optional facts, and required licensing metadata.

Use a schema validator such as Zod if useful. Validate content at build time so malformed records do not silently break public pages.

Use structured fields for search, filtering, and metadata instead of parsing the article body.

## 7.4 Search and filtering

Implement client-side search and filtering for the initial collection.

Search should include:
- Artifact title.
- Alternative names.
- Category.
- Civilization and dynasty.
- Relevant keywords.

Normalize search input to make ordinary differences in capitalization and whitespace irrelevant.

Use URL query parameters for filters when practical, so visitors can share a filtered collection URL.

Avoid unnecessary external search services for a 20-item initial collection.

## 7.5 Future content management

Structure the content layer so a CMS or database can be added later.

Do not build a complicated administration dashboard in the initial version. The immediate priority is a complete public-facing museum with a maintainable artifact collection.

---

# 8. RESPONSIVE DESIGN

Use a mobile-first approach.

## 8.1 Desktop

- Maximum content width around 1,200–1,300 px.
- Three-column artifact grid where appropriate.
- Spacious header and clearly separated sections.
- Large artifact photography.
- Article content with a comfortable reading width.
- Optional compact table of contents for long articles.

## 8.2 Tablet

- Two-column artifact grid where space allows.
- Reduced horizontal padding.
- Compact filter controls.
- Appropriate image and typography scaling.

## 8.3 Mobile

- Single-column artifact grid.
- Compact header with accessible navigation.
- Full-width hero and artifact images.
- Touch-friendly controls.
- Collapsible filters.
- Readable article typography.
- No horizontal page overflow.
- No tiny metadata or inaccessible hover-only interactions.

Test the site at approximately 360 px, 390 px, 768 px, 1024 px, and 1440 px viewport widths.

Do not simply shrink the desktop layout. Adapt component arrangements to the available screen size.

---

# 9. SEO AND DISCOVERABILITY

Implement proper SEO for the homepage, artifact pages, category pages, and era pages.

Requirements:

- Unique page titles and meta descriptions.
- Canonical URLs.
- Open Graph metadata.
- Social-sharing images where available.
- XML sitemap.
- Robots.txt.
- Semantic HTML.
- Logical heading hierarchy.
- Descriptive image alt text.
- Internal links between related artifacts.
- Breadcrumb navigation.
- Appropriate structured data, such as Article or BreadcrumbList where valid.
- Appropriate image dimensions and responsive delivery.

Use stable, descriptive URLs such as:

`/artifacts/indus-valley-unicorn-seal`

Do not create duplicate routes or duplicate pages for the same object.

Use historical keywords naturally. Do not generate keyword-stuffed titles or metadata.

---

# 10. ACCESSIBILITY AND PERFORMANCE

## 10.1 Accessibility

Target WCAG 2.2 AA principles where practical.

Implement:
- Keyboard-accessible navigation.
- Visible focus indicators.
- Adequate text contrast.
- Meaningful alt text.
- Accessible form labels.
- Correct button and link semantics.
- Screen-reader-friendly filter controls.
- Reduced-motion support.
- Accessible image gallery controls.
- Useful empty and error states.

Do not communicate information using color alone.

## 10.2 Performance

- Use server rendering or static generation where appropriate.
- Keep client-side JavaScript limited to genuinely interactive components.
- Lazy-load below-the-fold images.
- Prioritize the main above-the-fold image.
- Use responsive image sizes.
- Avoid unnecessary UI libraries.
- Prevent layout shifts by reserving image dimensions.
- Avoid downloading all full-size artifact photographs on the collection page.
- Use caching appropriately.

Aim for Lighthouse scores of 90 or above in Performance, Accessibility, Best Practices, and SEO where feasible. Treat these as targets to measure, not scores to claim without running tests.

---

# 11. FUNCTIONAL REQUIREMENTS

The website is not complete until these workflows work end to end.

### Homepage
- Header links navigate correctly.
- Featured artifact cards open the correct pages.
- Category and era links work.
- Search opens or performs a real search.

### Collection
- All published artifacts appear.
- Search returns relevant results.
- Filters work individually and in combination.
- Sorting works.
- Reset filters restores the collection.
- Empty states are informative.
- Pagination or loading more items works if implemented.

### Artifact detail
- The correct title, facts, photographs, and article appear.
- All source links work.
- Image credits are visible where required.
- Related artifacts exist and link correctly.
- Missing optional data does not leave broken labels or blank sections.
- Invalid artifact URLs display a proper 404 page.

### Responsive behavior
- Navigation works on mobile.
- Images remain within their containers.
- Article content remains readable.
- Controls are usable by touch and keyboard.
- No horizontal overflow is present.

### Technical behavior
- The production build completes successfully.
- TypeScript checks pass.
- Linting passes, or any unavoidable warnings are documented.
- No critical browser-console errors remain.
- No broken internal links remain.
- No critical accessibility failures remain.

---

# 12. IMPLEMENTATION WORKFLOW FOR ANTIGRAVITY

Operate autonomously and complete the project in the following sequence.

## Phase 1 — Inspect and initialize

1. Inspect the current workspace.
2. Determine whether a project already exists.
3. Preserve useful existing work if present.
4. Initialize the Next.js application if needed.
5. Configure TypeScript, Tailwind CSS, fonts, linting, and required dependencies.
6. Create the core design tokens and content schema.

Do not overwrite unrelated files or credentials.

## Phase 2 — Research the artifacts

1. Research all 20 initial artifact targets.
2. Find credible historical references.
3. Locate appropriate artifact images.
4. Verify image rights and attribution requirements.
5. Record source metadata.
6. Write the artifact content.
7. Validate dates, attributions, and uncertainties.
8. Replace poorly documented examples where necessary.

Do not fabricate research results to complete the list faster.

## Phase 3 — Build the design system

Implement reusable components for:
- Header and footer.
- Artifact cards.
- Image galleries.
- Category labels.
- Fact panels.
- Filters.
- Search.
- Breadcrumbs.
- Related artifacts.
- Article sections.
- Empty, loading, and error states.

Follow the design system defined in this PRD.

## Phase 4 — Build all pages

Implement the homepage, collection, individual artifact pages, category pages, era pages, and About page.

Ensure pages share a consistent layout and data model.

Do not build isolated mockups that fail to connect to real content.

## Phase 5 — Populate and verify

Load the researched artifact records into the content layer.

Verify that every published entry has valid data, working images, appropriate image credits, and useful sources.

Ensure the initial collection contains approximately 20 genuinely researched entries, subject to the documented replacement rule.

## Phase 6 — Test

Run the applicable project checks, including:

- Dependency and build checks.
- TypeScript validation.
- Linting.
- Route verification.
- Search and filter testing.
- Image verification.
- Responsive testing.
- Accessibility checks.
- SEO and metadata checks.
- Browser-console inspection.

Fix issues rather than merely listing them in a report.

## Phase 7 — Finish and document

Create a README that explains:
- Project structure.
- How to install dependencies.
- How to run the development server.
- How to build and test the website.
- How to add a new artifact.
- How to add and credit images.
- How to update historical sources.
- How to deploy the application.

Finish with a concise implementation report describing what was built, the tests that were run, any known limitations, and the deployment steps.

Do not claim that an operation succeeded unless it was actually verified.

---

# 13. DEPLOYMENT REQUIREMENTS

Prepare the project for deployment on Vercel or another compatible hosting platform.

Requirements:
- Production build succeeds.
- No secrets are committed to source control.
- No unnecessary environment variables are required.
- Image paths and remote-image configuration are correct.
- Metadata and sitemap generation work.
- The site functions without an external database.
- Deployment instructions are documented.

Do not claim the website has been deployed unless deployment was actually completed and verified.

---

# 14. DEFINITION OF DONE

The project is complete only when all of the following are true:

- [ ] A complete homepage is implemented.
- [ ] The artifact collection page works.
- [ ] All required artifact detail routes work.
- [ ] Category and historical era pages work.
- [ ] Approximately 20 researched artifact entries are published.
- [ ] Artifact images are relevant, accessible, and properly credited.
- [ ] Historical claims have reliable references.
- [ ] Search, filters, sorting, and navigation work.
- [ ] The website follows the specified light-mode design system.
- [ ] Plus Jakarta Sans is implemented with the specified weights.
- [ ] Desktop, tablet, and mobile layouts have been tested.
- [ ] SEO metadata, sitemap, and robots.txt are implemented.
- [ ] Accessibility and performance have been checked.
- [ ] The production build succeeds.
- [ ] Documentation is complete.
- [ ] Remaining limitations are disclosed honestly.

---

# 15. FINAL INSTRUCTIONS TO THE CODING AGENT

Act as the lead developer, UI designer, content researcher, and quality-assurance engineer for this project.

The user expects a working, complete website—not a wireframe, static screenshot, incomplete prototype, or plan for future development.

Make reasonable implementation decisions independently using this PRD as the source of truth.

If web research tools are available, use them to research historical artifacts, obtain image sources, verify licensing, and check historical claims. If a source is inaccessible, find a reliable alternative or clearly disclose the limitation.

Do not invent citations, image licenses, dates, dimensions, historical attributions, or test results.

Prioritize the following in order:

1. Historical accuracy and responsible sourcing.
2. A polished, consistent, professional user interface.
3. Complete functionality.
4. Mobile responsiveness and accessibility.
5. Performance and SEO.
6. Maintainability and ease of future expansion.

Do not add monuments as the main collection items, do not introduce a 3D virtual building, and do not add unrelated features that increase complexity.

**Begin by inspecting the workspace, then execute the entire implementation workflow. Continue until the working website is built, tested, documented, and ready for deployment.**
