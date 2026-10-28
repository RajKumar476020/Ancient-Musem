import { Artifact } from '@/types/artifact';

export const punchMarkedSilverCoin: Artifact = {
  id: 'art-01',
  slug: 'punch-marked-silver-coin',
  title: 'Punch-Marked Silver Karshapana',
  summary: 'A standardized silver coin bearing imperial geometric punches from the Maurya and Mahajanapada periods, representing South Asia’s earliest indigenous currency.',
  categorySlug: 'ancient-coins',
  eraSlug: 'maurya-post-maurya',
  civilization: 'Ancient India',
  dynasty: 'Maurya Empire',
  dateDisplay: 'c. 4th–3rd Century BCE',
  dateStart: -400,
  dateEnd: -200,
  material: 'Silver alloy with trace copper',
  origin: 'Northern Gangetic Plain, Ancient India',
  discoverySite: 'Taxila (Bhir Mound) and Patna Hoards',
  currentCollection: 'National Museum, New Delhi (Accession: Nu. 78.102)',
  dimensions: 'Irregular rectangular bar: 15.2 × 13.8 mm, Weight: 3.42 g',
  description: 'The punch-marked karshapana is South Asia’s most foundational numismatic innovation. Produced without the circular die-striking techniques of Hellenistic Greece, these coins were cut from sheets of beaten silver and stamped individually with multiple punches denoting mint authority, royal emblems, and guild verifications.',
  sections: [
    {
      heading: 'Monetary Context and Administrative Organization',
      body: 'As described in Kautilya’s Arthashastra (a 4th-century BCE statecraft treatise), the imperial mint was overseen by the Lakshadhyaksha (Superintendent of Minting), while the Rupadarshaka (Examiner of Coins) inspected purity and weight. Karshapanas served as the fiscal backbone of the imperial Mauryan economy, financing civil bureaucracies, standing armies, and interstate trade across the Uttarapatha highway.',
    },
    {
      heading: 'Punch Symbolism and Iconography',
      body: 'Mauryan karshapanas typically display five characteristic obverse symbols: the sixteen-spoked radiant sun, the shadara-chakra (six-armed imperial symbol with alternating arrowheads and taurines), a hill or chaitya with crescent, a peacock or tree-in-railing, and an animal motif (such as an elephant or bull). The reverse side generally bears fewer and smaller banker countermarks applied during subsequent commercial circulation.',
    },
    {
      heading: 'Metallurgical Composition and Minting Technique',
      body: 'Silver sheets were hammered to uniform thickness, cut with metal shears into rectangular or clipped sub-oval blanks, and trimmed to meet the 32-ratti weight standard (~3.4–3.6 grams). Metallurgical analyses of hoards from Taxila and Amaravati reveal an average silver fineness of 75% to 82%, deliberately alloyed with copper for mechanical durability during extended circulation.',
    },
    {
      heading: 'Archaeological Distribution and Significance',
      body: 'Punch-marked silver coins have been excavated in stratigraphic contexts across the entire Indian subcontinent—from Gandhara in the northwest to Mahasthangarh in Bengal, and southwards into Tamil Nadu and Sri Lanka. This vast distribution underscores the unparalleled economic integration facilitated by early Indian trade networks.',
    },
  ],
  quickFacts: [
    { label: 'Denomination', value: '1 Karshapana (32 Ratti standard)' },
    { label: 'Standard Weight', value: '3.42 grams' },
    { label: 'Primary Metal', value: 'Silver (approx. 78% purity)' },
    { label: 'Manufacture Method', value: 'Cold-cut sheet with multiple punch dies' },
    { label: 'Key Symbols', value: 'Sun, Six-arm chakra, Crescent hill, Elephant' },
  ],
  timeline: [
    {
      date: 'c. 500 BCE',
      title: 'Emergence of Janapada Coinage',
      description: 'Regional oligarchies and monarchies in Magadha, Kosala, and Gandhara begin issuing punch-marked silver ingots.',
    },
    {
      date: 'c. 322 BCE',
      title: 'Imperial Standardisation',
      description: 'Chandragupta Maurya unifies the minting system into the standard 5-symbol imperial karshapana.',
    },
    {
      date: 'c. 268–232 BCE',
      title: 'Peak Imperial Circulation',
      description: 'Reign of Ashoka; massive circulation across all provinces connected by imperial trunk roads.',
    },
  ],
  interestingFacts: [
    'Rather than being cast in moulds, each coin was hand-clipped at the corners until its weight matched the exact 32-ratti seed measure.',
    'The Arthashastra prescribes heavy penalties including limb forfeiture for counterfeiters caught forging imperial punch marks.',
  ],
  images: [
    {
      src: '/images/artifacts/punch-marked-silver-coin/primary.jpg',
      alt: 'Punch-marked silver karshapana coin showing obverse solar and imperial symbols',
      caption: 'Obverse of Mauryan silver karshapana with distinct punch impressions',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:The_coins_of_India_(IA_coinsofindia00brow_0).pdf',
      creator: 'C.J. Brown / Archaeological Survey of India',
      institution: 'National Museum, New Delhi',
      license: 'Public Domain / Open Access',
      licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
      attribution: 'Archaeological Survey of India / Wikimedia Commons',
      isPrimary: true,
    },
  ],
  sources: [
    {
      title: 'The Coinage of Ancient India: From the Beginnings to the Gupta Period',
      publisher: 'Oxford University Press',
      url: 'https://www.worldcat.org/title/coinage-of-ancient-india',
      accessedAt: '2026-10-28',
    },
    {
      title: 'Punch-Marked Coins in the Indian Museum',
      publisher: 'Archaeological Survey of India Memoir',
      url: 'https://asi.nic.in/publications',
      accessedAt: '2026-10-28',
    },
  ],
  relatedArtifactSlugs: [
    'indo-greek-menander-silver-coin',
    'kushan-kanishka-gold-dinar',
    'ashoka-lion-capital-sarnath',
  ],
  status: 'published',
  lastReviewed: '2026-10-28',
};
