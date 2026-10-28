import { Artifact } from '@/types/artifact';

export const mughalAkbarGoldMohur: Artifact = {
  id: 'art-08',
  slug: 'mughal-akbar-gold-mohur',
  title: 'Mughal Gold Mohur of Emperor Akbar the Great',
  summary: 'A round gold mohur of Jalal al-Din Muhammad Akbar struck at Agra, bearing the Kalima and the royal title in exquisite Nastaliq script.',
  categorySlug: 'medieval-coins',
  eraSlug: 'mughal-period',
  civilization: 'Mughal Empire / Indo-Persian',
  dynasty: 'Mughal Dynasty',
  dateDisplay: 'c. 1556–1605 CE (AH 985 / c. 1577 CE)',
  dateStart: 1556,
  dateEnd: 1605,
  material: 'Near-pure gold (99.5% Au)',
  origin: 'Dar al-Khilafat Agra Mint, Mughal Empire',
  discoverySite: 'Agra Imperial Treasury and LACMA Collection',
  currentCollection: 'Los Angeles County Museum of Art (Accession: M.77.55.11)',
  dimensions: 'Diameter: 22.5 mm, Thickness: 1.8 mm, Weight: 10.88 g',
  description: 'Under Emperor Akbar, the Mughal Empire established one of early modern history’s most rigorously standardized and trusted monetary systems. The gold mohur of 11 grams of virtually unadulterated gold served as an imperial store of wealth and the international benchmark for Eurasian diplomatic and high-value trade.',
  sections: [
    {
      heading: 'The Tri-Metallic Monetary Foundation',
      body: 'Building upon Sher Shah Suri’s initial reforms, Akbar established a strict tri-metallic currency: the gold mohur (muhr), the silver rupee (rupiya, 11.5g), and the copper dam (20.5g). Operating on a free-coinage principle, any merchant or foreign trader could bring bullion to royal mints and receive stamped coin for a nominal minting fee (rusum), fostering immense commercial confidence.',
    },
    {
      heading: 'Calligraphic Elegance and Religious Formulary',
      body: 'Earlier mohurs bear the Islamic creed within a central cartouche: LA ILAHA ILLA ALLAH MUHAMMAD RASUL ALLAH ("There is no deity but God, Muhammad is the Messenger of God"), surrounded by the names and virtues of the four Rashidun Caliphs (Abu Bakr, Umar, Uthman, and Ali). The reverse features Akbar’s imperial titulature: JALAL AL-DIN MUHAMMAD AKBAR BADSHAH GHAZI with the mint formula DAR AL-KHILAFAT AGRA.',
    },
    {
      heading: 'The Din-i Ilahi and Ilahi Regnal Year Innovations',
      body: 'Following his spiritual and philosophical deliberations in the Ibadat Khana at Fatehpur Sikri, Akbar introduced in regnal year 29 (1584 CE) his new Ilahi (Divine) solar calendar and replaced traditional Islamic formulas with the non-sectarian phrase: ALLAHU AKBAR, JALLA JALALUHU ("God is Greatest, Splendid is His Glory"), reflecting his ethos of Sulh-i Kul (Universal Peace).',
    },
    {
      heading: 'Decentralized Mint Network and Imperial Standardisation',
      body: 'Akbar operated over eighty mints strategically positioned along riverways and land routes—including Agra, Delhi, Lahore, Ahmedabad, Patna, and Burhanpur. Under the supervision of Master of the Mint Khwaja Abdus Samad (also a renowned Persian miniature master), the artistic precision and weight uniformity of the mohur remained uncompromised throughout his half-century reign.',
    },
  ],
  quickFacts: [
    { label: 'Emperor', value: 'Jalal al-Din Muhammad Akbar' },
    { label: 'Denomination', value: '1 Gold Mohur (~10.9 grams)' },
    { label: 'Mint of Issue', value: 'Dar al-Khilafat Agra' },
    { label: 'Gold Purity', value: '99.5% pure (24 karats)' },
    { label: 'Script', value: 'Persian in refined Nastaliq & Naskh' },
  ],
  timeline: [
    {
      date: '1556 CE',
      title: 'Accession of Akbar',
      description: 'Ascends the Mughal throne at age 13 after the sudden death of Humayun; wins the Second Battle of Panipat.',
    },
    {
      date: '1577 CE',
      title: 'Mint Standardization Edict',
      description: 'Appoints artist Khwaja Abdus Samad as Master of the Imperial Mint to enforce aesthetic and weight rigor.',
    },
    {
      date: '1584 CE',
      title: 'Inauguration of Ilahi Era',
      description: 'Introduces the solar calendar and reformulates coin legends with the Ilahi motto.',
    },
  ],
  interestingFacts: [
    'Akbar also minted square-shaped coins known as Chahar-gosha, which symbolised the four cardinal directions of the empire.',
    'Akbar’s court historian Abu’l-Fazl devotes several meticulous chapters of the Ain-i-Akbari to detailing the exact alloy recipes, touchstone assays, and daily accounts of the imperial mints.',
  ],
  images: [
    {
      src: '/images/artifacts/mughal-akbar-gold-mohur/primary.jpg',
      alt: 'Mughal gold mohur struck under Emperor Akbar with fine Persian calligraphy',
      caption: 'Gold mohur struck at Agra by Mughal Emperor Akbar the Great',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mohur_of_Akbar_(r._1556-1605)_LACMA_M.77.55.11_(2_of_2).jpg',
      creator: 'Los Angeles County Museum of Art',
      institution: 'LACMA',
      license: 'Public Domain / CC0 Open Access',
      licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
      attribution: 'LACMA Open Access / Wikimedia Commons',
      isPrimary: true,
    },
  ],
  sources: [
    {
      title: 'The Imperial Monetary System of Mughal India',
      publisher: 'Oxford University Press',
      url: 'https://www.worldcat.org/title/imperial-monetary-system-of-mughal-india',
      accessedAt: '2026-10-28',
    },
    {
      title: 'Ain-i-Akbari by Abu’l-Fazl Allami (Trans. H. Blochmann)',
      publisher: 'Asiatic Society of Bengal',
      url: 'https://archive.org',
      accessedAt: '2026-10-28',
    },
  ],
  relatedArtifactSlugs: [
    'mughal-jahangir-zodiac-rupee',
    'delhi-sultanate-muhammad-tughluq-tanka',
  ],
  status: 'published',
  lastReviewed: '2026-10-28',
};
