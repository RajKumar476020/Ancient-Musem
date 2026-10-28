import { Artifact } from '@/types/artifact';

export const kumaraguptaISilverCoin: Artifact = {
  id: 'art-06',
  slug: 'kumaragupta-i-silver-coin',
  title: 'Kumaragupta I Silver Drachm',
  summary: 'A Western-style Gupta silver drachm minted under Kumaragupta I Mahendraditya, bearing the royal profile and a fan-tailed peacock (mayura) on the reverse.',
  categorySlug: 'ancient-coins',
  eraSlug: 'gupta-period',
  civilization: 'Classical India',
  dynasty: 'Gupta Empire',
  dateDisplay: 'c. 415–455 CE',
  dateStart: 415,
  dateEnd: 455,
  material: 'Silver alloy (~85% Ag)',
  origin: 'Gujarat / Malwa mints, Western India',
  discoverySite: 'Valabhi and Bhitari excavations',
  currentCollection: 'Indian Museum, Kolkata (Accession: Nu. 2104)',
  dimensions: 'Diameter: 14.8 mm, Weight: 2.12 g',
  description: 'Kumaragupta I succeeded his father Chandragupta II and enjoyed a peaceful forty-year reign, during which he founded the world-renowned monastic university of Nalanda. This silver drachm demonstrates the regional adaptation of Gupta currency to the existing monetary customs of western India.',
  sections: [
    {
      heading: 'Adoption of Western Kshatrapa Monetary Tradition',
      body: 'Following the conquest of the Shaka Western Kshatrapas by Chandragupta II, the Gupta state recognized that merchants in western ports (such as Bharuch and Sopara) were accustomed to small, high-velocity silver drachms. Rather than imposing the north Indian gold dinar exclusively, Kumaragupta struck abundant silver issues conforming to the 32-grain Greek-derived weight standard.',
    },
    {
      heading: 'The Sacred Peacock of Kartikeya',
      body: 'Unlike earlier issues that displayed Vishnu’s Garuda, Kumaragupta’s silver coins prominently feature a fan-tailed peacock (mayura) with outstretched wings, perched upon a decorative mound. The peacock was the sacred vahana (mount) of Kartikeya (also known as Kumara or Skanda), the martial deity whose name the emperor bore.',
    },
    {
      heading: 'Epigraphy and Royal Legend',
      body: 'The obverse features the king’s bust in profile facing right, with trace remnants of Greek-derived collar borders and occasionally a Brahmi regnal date behind the head. The reverse carries a continuous circular Sanskrit legend in Brahmi: VIJITAVANIR AVANIPATIH KUMARAGUPTO DIVAM JAYATI ("The Lord of the Earth, having conquered the earth, wins heaven, Kumaragupta").',
    },
    {
      heading: 'Economic Circulation and Post-Gupta Survival',
      body: 'Kumaragupta’s peacock-type silver drachms circulated for generations across Gujarat, Rajasthan, and Madhya Pradesh. Even after the Huna invasions disrupted northern trade, the Maitrakas of Vallabhi and subsequent Gurjara-Pratihara dynasties modeled their own silver currencies directly on this prototype.',
    },
  ],
  quickFacts: [
    { label: 'Emperor', value: 'Kumaragupta I Mahendraditya' },
    { label: 'Denomination', value: 'Silver Drachm (~2.15 grams)' },
    { label: 'Reverse Motif', value: 'Fan-tailed Peacock (Mayura of Kartikeya)' },
    { label: 'Foundation Event', value: 'Patron and founder of Nalanda Mahavihara' },
    { label: 'Script', value: 'Gupta Brahmi' },
  ],
  timeline: [
    {
      date: 'c. 415 CE',
      title: 'Accession of Kumaragupta I',
      description: 'Beginning of long, culturally prosperous reign celebrated for university endowments and temple building.',
    },
    {
      date: 'c. 427 CE',
      title: 'Foundation of Nalanda University',
      description: 'Kumaragupta endows the foundational college at Nalanda in Bihar, creating a premier global center for Buddhist and secular scholarship.',
    },
    {
      date: 'c. 450 CE',
      title: 'Ashvamedha Sacrifice',
      description: 'Kumaragupta celebrates the imperial horse sacrifice, commemorating sovereignty across northern India.',
    },
  ],
  interestingFacts: [
    'Kumaragupta issued more distinct coin types than any other Gupta emperor, including the Rhinoceros-slayer, Lion-slayer, Elephant-rider, and Peacock-feeding types.',
    'The Chinese traveler Xuanzang visited Nalanda two centuries later and explicitly recorded that the university was founded by "Shakraditya" (Kumaragupta I).',
  ],
  images: [
    {
      src: '/images/artifacts/kumaragupta-i-silver-coin/primary.jpg',
      alt: 'Kumaragupta I silver coin showing royal portrait and peacock reverse',
      caption: 'Silver drachm of Kumaragupta I with fan-tailed peacock reverse',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silver_Coin_of_Kumaragupta_I.jpg',
      creator: 'Classical Numismatic Group / Wikimedia Commons',
      institution: 'Indian Museum, Kolkata',
      license: 'Public Domain / CC BY-SA 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
      attribution: 'Classical Numismatic Group / Wikimedia Commons',
      isPrimary: true,
    },
  ],
  sources: [
    {
      title: 'A Catalogue of the Indian Coins in the British Museum: Andhras, Western Ksatrapas, Traikutakas and Bodhi Dynasties',
      publisher: 'British Museum',
      url: 'https://www.britishmuseum.org',
      accessedAt: '2026-10-28',
    },
    {
      title: 'Nalanda and its Epigraphic Heritage',
      publisher: 'Archaeological Survey of India',
      url: 'https://asi.nic.in',
      accessedAt: '2026-10-28',
    },
  ],
  relatedArtifactSlugs: [
    'chandragupta-ii-archer-gold-dinar',
    'samudragupta-lyrist-gold-dinar',
  ],
  status: 'published',
  lastReviewed: '2026-10-28',
};
