import { Artifact } from '@/types/artifact';

export const indusValleyUnicornSeal: Artifact = {
  id: 'art-17',
  slug: 'indus-valley-unicorn-seal',
  title: 'Indus Valley Steatite Unicorn Stamp Seal',
  summary: 'A carved and glazed steatite stamp seal from Mohenjo-daro depicting a single-horned mythical creature and undeciphered Indus script symbols.',
  categorySlug: 'archaeological-seals',
  eraSlug: 'indus-valley',
  civilization: 'Indus Valley (Harappan) Civilization',
  dynasty: 'Mature Harappan Phase',
  dateDisplay: 'c. 2500–1900 BCE',
  dateStart: -2500,
  dateEnd: -1900,
  material: 'Carved steatite (Soapstone) with fired alkali glaze',
  origin: 'Mohenjo-daro / Harappa, Indus Valley',
  discoverySite: 'Mohenjo-daro excavations (DK Area)',
  currentCollection: 'The Metropolitan Museum of Art, New York (Accession: 49.40.1)',
  dimensions: 'Height: 3.8 cm, Width: 3.8 cm, Thickness: 1.1 cm',
  description: 'Among the tens of thousands of archaeological artifacts recovered from the bronze age cities of the Indus Valley, square steatite stamp seals are the most enigmatic and visually sophisticated. By far the most pervasive motif is the so-called "unicorn" animal—a graceful, single-horned creature depicted above a two-tiered ritual stand.',
  sections: [
    {
      heading: 'The Mythical "Unicorn" Animal Motif',
      body: 'Although labeled a "unicorn" in early 20th-century archaeological reports, scholars debate whether the animal depicts a profile view of a two-horned bull (Bos indicus / aurochs) or a genuinely mythical creature combining attributes of the bull, antelope, and rhinoceros. The creature possesses a muscular torso, curved horn arching forward and upward, decorative blanket folds over its shoulders, and a long tail.',
    },
    {
      heading: 'The Enigmatic Sacred Vessel or "Incense Burner"',
      body: 'Beneath the animal’s lowered head stands an ornate, two-tiered apparatus consisting of a lower conical base supporting a perforated upper bowl. Archaeologists have hypothesized this object to be an incense burner, a sacred feeding trough, or a filter for ritual soma beverage. Its invariable presence beneath the unicorn points to an institutionalized civic or religious ritual.',
    },
    {
      heading: 'Intricate Steatite Carving and Pyrotechnology',
      body: 'Indus artisans demonstrated extraordinary pyrotechnological sophistication. Soft steatite was carved with microscopic precision using copper burins and chert drill-bits. The engraved seal was then coated with an alkali chemical slurry and baked in kilns to temperatures exceeding 1000°C. This firing induced a phase transformation of the mineral into enstatite, producing a lustrous, scratch-resistant white porcelain-like glaze.',
    },
    {
      heading: 'Commercial Function and the Undeciphered Script',
      body: 'On the reverse face, each seal possesses a pierced boss (knob) through which cord could be threaded. Archaeological excavations at Lothal and Mesopotamian cities (such as Ur and Kish) revealed clay sealings (terracotta tags) stamped with these seals affixed to bales of cotton textiles, timber, and lapis lazuli. The line of five Indus signs carved along the upper margin remains undeciphered, though scholars widely consider them to denote personal merchant names, guilds, or administrative offices.',
    },
  ],
  quickFacts: [
    { label: 'Artifact Type', value: 'Square Steatite Stamp Seal with perforated boss' },
    { label: 'Archaeological Period', value: 'Mature Harappan Phase (c. 2600–1900 BCE)' },
    { label: 'Primary Medium', value: 'Carved steatite with fired white alkali glaze' },
    { label: 'Script Status', value: 'Undeciphered Indus Script (~400 distinct signs)' },
    { label: 'Commercial Role', value: 'Merchant stamp for sealing bales of maritime cargo' },
  ],
  timeline: [
    {
      date: 'c. 2600 BCE',
      title: 'Emergence of Standardized Seals',
      description: 'Harappan urban centers standardize square steatite seal sizes, scripts, and animal iconography.',
    },
    {
      date: 'c. 2350 BCE',
      title: 'Meluhha Trade with Mesopotamia',
      description: 'Akkadian records under King Sargon document docking of ships from "Meluhha" (the Indus Valley) carrying stamped goods.',
    },
    {
      date: 'c. 1900 BCE',
      title: 'Decline of Urban Centers',
      description: 'De-urbanization leads to the cessation of seal carving and writing traditions.',
    },
  ],
  interestingFacts: [
    'Over 60% of all Indus stamp seals ever discovered feature this single-horned creature, suggesting it served as the civic heraldry of the ruling merchant class or dominant clan.',
    'Indus seals found in archaeological strata in Iraq and Oman prove that Indian merchants had established overseas trade colonies in the Persian Gulf over four thousand years ago.',
  ],
  images: [
    {
      src: '/images/artifacts/indus-valley-unicorn-seal/primary.jpg',
      alt: 'Steatite stamp seal from Indus Valley showing unicorn creature with sacred incense burner and inscription',
      caption: 'Harappan steatite seal depicting unicorn and Indus script',
      sourceUrl: 'https://www.metmuseum.org/art/collection/search/324062',
      creator: 'Harappan Master Seal Engraver',
      institution: 'The Metropolitan Museum of Art (Met Accession: 49.40.1)',
      license: 'Public Domain / CC0 Open Access',
      licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
      attribution: 'The Metropolitan Museum of Art Open Access',
      isPrimary: true,
    },
  ],
  sources: [
    {
      title: 'The Indus Civilization: A Contemporary Perspective by Gregory L. Possehl',
      publisher: 'Rowman Altamira',
      url: 'https://www.worldcat.org',
      accessedAt: '2026-10-28',
    },
    {
      title: 'Deciphering the Indus Script by Asko Parpola',
      publisher: 'Cambridge University Press',
      url: 'https://www.cambridge.org',
      accessedAt: '2026-10-28',
    },
  ],
  relatedArtifactSlugs: [
    'indus-valley-dancing-girl',
    'harappan-terracotta-figurine',
    'punch-marked-silver-coin',
  ],
  status: 'published',
  lastReviewed: '2026-10-28',
};
