import { Artifact } from '@/types/artifact';

export const indoGreekMenanderSilverCoin: Artifact = {
  id: 'art-02',
  slug: 'indo-greek-menander-silver-coin',
  title: 'Indo-Greek Silver Tetradrachm of King Menander I',
  summary: 'A bilingual Greco-Indian silver tetradrachm struck by King Menander I Soter, featuring a naturalistic royal portrait and bilingual Greek and Kharosthi inscriptions.',
  categorySlug: 'ancient-coins',
  eraSlug: 'maurya-post-maurya',
  civilization: 'Greco-Bactrian / Indo-Greek Kingdom',
  dynasty: 'Euthydemid Dynasty',
  dateDisplay: 'c. 155–130 BCE',
  dateStart: -155,
  dateEnd: -130,
  material: 'High-purity silver (~95% Ag)',
  origin: 'Sagala (modern Sialkot) / Gandhara region',
  discoverySite: 'Mir Zakah Hoard and Begram excavations',
  currentCollection: 'British Museum, London (Accession: 1888,1208.204)',
  dimensions: 'Diameter: 26.5 mm, Thickness: 2.1 mm, Weight: 9.80 g',
  description: 'King Menander I (known in classical Buddhist texts as King Milinda) was the most prominent of the Indo-Greek monarchs. This silver tetradrachm exemplifies the profound cross-cultural synthesis of the Hellenistic Silk Road, pairing expressive Greek naturalism with Indian administrative titles in the Kharosthi script.',
  sections: [
    {
      heading: 'Historical Context and Buddhist Dialogue',
      body: 'Menander ruled an expansive realm stretching from the Kabul Valley across Punjab to the Yamuna River. In the renowned Pali text Milinda Panha ("The Questions of King Milinda"), Menander is recorded engaging in profound philosophical disputation with the Buddhist sage Nagasena, culminating in the king embracing the Dharma and patronizing Buddhist sanghas.',
    },
    {
      heading: 'Obverse Imagery: Hellenistic Portraiture',
      body: 'The obverse displays a lifelike right-facing bust of Menander wearing the royal Greek diadem with fluttering ribbons, and a heavy aegis over his shoulder. The surrounding Greek legend reads: BASILEOS SOTEROS MENANDROU ("Of King Menander the Saviour"), executed in crisp classical epigraphy.',
    },
    {
      heading: 'Reverse Design: Athena Alkidemos and Kharosthi Legend',
      body: 'The reverse depicts Athena Alkidemos (Defender of the City) advancing leftwards with her shield raised and thunderbolt held aloft, accompanied by an imperial mint monogram. Encircling the figure is the Prakrit translation in Kharosthi script: MAHARAJASA TRATARASA MENANDRASA ("Of the Great King, the Saviour, Menander").',
    },
    {
      heading: 'Monetary Impact on North Indian Coinage',
      body: 'Menander introduced an adjusted Indian weight standard (drachm of ~2.45g and tetradrachm of ~9.8g) tailored to align with local Indian commercial habits. This bilingual format became the undisputed standard for all subsequent Indo-Scythian, Indo-Parthian, and early Western Kshatrapa issues for centuries.',
    },
  ],
  quickFacts: [
    { label: 'Ruler', value: 'Menander I Soter (King Milinda)' },
    { label: 'Denomination', value: 'Silver Tetradrachm' },
    { label: 'Obverse Script', value: 'Attic Greek (Basileos Soteros Menandrou)' },
    { label: 'Reverse Script', value: 'Kharosthi (Maharajasa Tratarasa Menandrasa)' },
    { label: 'Reverse Deity', value: 'Athena Alkidemos with thunderbolt' },
  ],
  timeline: [
    {
      date: 'c. 165 BCE',
      title: 'Indo-Greek Expansion',
      description: 'Greco-Bactrian forces cross the Hindu Kush into Gandhara and the Punjab plains.',
    },
    {
      date: 'c. 155–130 BCE',
      title: 'Reign of Menander I',
      description: 'Establishment of the capital at Sagala; compilation of dialogues recorded in Milinda Panha.',
    },
  ],
  interestingFacts: [
    'Plutarch records that upon Menander’s death in camp, cities across his realm vied for his cremated remains and raised stupas over them, mirroring the funeral rites accorded to the historical Buddha.',
    'Menander’s coins circulated so widely that they were still changing hands in the bustling ports of Gujarat more than two centuries later, as noted by the author of the Periplus of the Erythraean Sea.',
  ],
  images: [
    {
      src: '/images/artifacts/indo-greek-menander-silver-coin/primary.jpg',
      alt: 'Silver coin of Indo-Greek King Menander I with diadem portrait and Athena reverse',
      caption: 'Indo-Greek silver tetradrachm of Menander I Soter',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Menander_coin_collected_by_Charles_Masson.jpg',
      creator: 'Charles Masson Collection / British Museum',
      institution: 'British Museum',
      license: 'Public Domain / Open Access',
      licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
      attribution: 'British Museum / Wikimedia Commons',
      isPrimary: true,
    },
  ],
  sources: [
    {
      title: 'The Greeks in Bactria and India',
      publisher: 'Cambridge University Press',
      url: 'https://www.cambridge.org/core/books/greeks-in-bactria-and-india',
      accessedAt: '2026-10-28',
    },
    {
      title: 'Catalogue of Coins in the British Museum: The Greeks and Scythic Kings of Bactria and India',
      publisher: 'British Museum Press',
      url: 'https://www.britishmuseum.org',
      accessedAt: '2026-10-28',
    },
  ],
  relatedArtifactSlugs: [
    'punch-marked-silver-coin',
    'kushan-kanishka-gold-dinar',
  ],
  status: 'published',
  lastReviewed: '2026-10-28',
};
