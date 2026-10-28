import { Artifact } from '@/types/artifact';

export const kushanKanishkaGoldDinar: Artifact = {
  id: 'art-03',
  slug: 'kushan-kanishka-gold-dinar',
  title: 'Kushan Gold Dinar of Emperor Kanishka I',
  summary: 'An imperial gold dinar of Kanishka the Great showing the crowned emperor sacrificing at an altar and the Iranian wind god Oado or solar deity on the reverse.',
  categorySlug: 'ancient-coins',
  eraSlug: 'maurya-post-maurya',
  civilization: 'Kushan Empire',
  dynasty: 'Kushan Dynasty',
  dateDisplay: 'c. 127–150 CE',
  dateStart: 127,
  dateEnd: 150,
  material: 'High-purity gold (~98% Au)',
  origin: 'Bactria / Purushapura (modern Peshawar)',
  discoverySite: 'Ahin Posh Stupa deposit and Mathura hoards',
  currentCollection: 'British Museum, London (Accession: 1888,1208.534)',
  dimensions: 'Diameter: 20.0 mm, Weight: 7.95 g',
  description: 'The Kushan Empire was an indispensable geopolitical crossroads linking Han China, Imperial Rome, Parthia, and the Indian subcontinent. Under Kanishka I, Kushan gold coinage achieved imperial perfection, re-melting Roman aurei to finance transcontinental trade along the Silk Road.',
  sections: [
    {
      heading: 'Imperial Iconography and Royal Depiction',
      body: 'On the obverse, Kanishka stands crowned in Central Asian nomad attire: a heavy tailored tunic, trousers, and felt boots. Flames emerge from his shoulders symbolizing divinely sanctioned kingship (khvarenah). With his right hand, he scatters incense over a small fire altar, while holding a royal spear in his left. The inscription in the Bactrian language (using Greek script) proclaims: SHAONANOSHAO KANESHKE KOSHANO ("King of Kings, Kanishka the Kushan").',
    },
    {
      heading: 'Theological Eclecticism on Coin Reverses',
      body: 'Kanishka’s mints demonstrated an unmatched syncretic pantheon, depicting deities from Zoroastrian, Greek, Hindu, and Buddhist traditions. Depending on the issue, reverse types display Oesho (Shiva with trident and bull), Nana (Sumerian-Iranian mother goddess), Mithra/Miiro (sun god), or the earliest labelled depictions of the Buddha (BODDO).',
    },
    {
      heading: 'Monetary Integration and Roman Bullion Flow',
      body: 'Following the Kushan monetary reform under Vima Kadphises and Kanishka, the empire abandoned silver in favor of a bimetallic gold and copper system. The Kushan gold dinar was pegged directly to the Roman aureus (~7.9–8.0 grams), facilitating seamless settlement with Roman merchants trading for Indian spices, textiles, and gemstones.',
    },
    {
      heading: 'Cultural Legacy and the Rabatak Inscription',
      body: 'The discovery of the Rabatak Inscription in northern Afghanistan confirmed that Kanishka discontinued the use of the Greek language in his second year of rule, mandating the "Aryan" (Bactrian) tongue for all administrative decrees and coin legends, consolidating an authentic imperial identity.',
    },
  ],
  quickFacts: [
    { label: 'Emperor', value: 'Kanishka I (The Great)' },
    { label: 'Denomination', value: 'Gold Dinar (~1 Roman Aureus weight)' },
    { label: 'Language & Script', value: 'Bactrian in cursive Greek alphabet' },
    { label: 'Metal & Fineness', value: 'Gold (~98% pure, 7.95g)' },
    { label: 'Regnal Titulature', value: 'Shaonanoshao ("King of Kings")' },
  ],
  timeline: [
    {
      date: 'c. 127 CE',
      title: 'Accession of Kanishka I',
      description: 'Inauguration of the Kanishka Era (widely identified by scholars with the Shaka Era of 78 CE or c. 127 CE).',
    },
    {
      date: 'c. 140 CE',
      title: 'Fourth Buddhist Council',
      description: 'Kanishka convenes Buddhist scholars in Kashmir, commissioning commentary engraved on copper plates.',
    },
  ],
  interestingFacts: [
    'The Kushans melted down vast quantities of imported Roman gold aurei received through maritime trade along the Malabar Coast to mint their own imperial dinars.',
    'Kanishka’s coinage preserves some of the only surviving contemporary visual portraits of the historical Buddha with his name explicitly engraved in Greek letters.',
  ],
  images: [
    {
      src: '/images/artifacts/kushan-kanishka-gold-dinar/primary.jpg',
      alt: 'Kushan gold dinar showing Emperor Kanishka sacrificing at altar and solar deity',
      caption: 'Gold dinar of Emperor Kanishka I in Central Asian royal attire',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:KanishkaCoin3.JPG',
      creator: 'Classical Numismatic Group / Wikimedia Commons',
      institution: 'British Museum',
      license: 'Public Domain / CC BY-SA 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
      attribution: 'Wikimedia Commons / Classical Numismatic Group',
      isPrimary: true,
    },
  ],
  sources: [
    {
      title: 'The Kushan World: An Introduction to Central Asian Archaeology and History',
      publisher: 'Routledge',
      url: 'https://www.routledge.com',
      accessedAt: '2026-10-28',
    },
    {
      title: 'Coins of the Kushans and Later Kushans',
      publisher: 'Archaeological Survey of India',
      url: 'https://asi.nic.in',
      accessedAt: '2026-10-28',
    },
  ],
  relatedArtifactSlugs: [
    'indo-greek-menander-silver-coin',
    'samudragupta-lyrist-gold-dinar',
    'kushan-gajalakshmi-sculpture',
  ],
  status: 'published',
  lastReviewed: '2026-10-28',
};
