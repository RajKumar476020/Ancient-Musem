import https from 'https';
import fs from 'fs';
import path from 'path';

export const CANDIDATES_51 = [
  // 1. Kushan Vima Kadphises gold dinar
  { id: 160958, slug: 'cma-kushan-vima-kadphises-dinar', categorySlug: 'ancient-coins', eraSlug: 'maurya-post-maurya' },
  // 2. Kushan Huvishka gold dinar
  { id: 160964, slug: 'cma-kushan-huvishka-gold-dinar', categorySlug: 'ancient-coins', eraSlug: 'maurya-post-maurya' },
  // 3. Kushan Vasudeva I gold dinar
  { id: 160961, slug: 'cma-kushan-vasudeva-gold-dinar', categorySlug: 'ancient-coins', eraSlug: 'maurya-post-maurya' },
  // 4. Kushan Vasudeva II gold dinar
  { id: 169353, slug: 'cma-kushan-vasudeva-ii-dinar', categorySlug: 'ancient-coins', eraSlug: 'maurya-post-maurya' },
  // 5. Indo-Greek Demetrios I silver tetradrachm
  { id: 161219, slug: 'cma-demetrios-tetradrachm', categorySlug: 'ancient-coins', eraSlug: 'maurya-post-maurya' },
  // 6. Greco-Bactrian Eukratides I silver tetradrachm
  { id: 161224, slug: 'cma-eukratides-tetradrachm', categorySlug: 'ancient-coins', eraSlug: 'maurya-post-maurya' },
  // 7. Mauryan punch-marked silver coin
  { id: 143311, slug: 'cma-mauryan-punch-marked-silver', categorySlug: 'ancient-coins', eraSlug: 'maurya-post-maurya' },
  // 8. Gupta Chandragupta II gold archer dinar
  { id: 149134, slug: 'cma-gupta-chandragupta-archer-dinar', categorySlug: 'ancient-coins', eraSlug: 'gupta-period' },

  // 9. Mughal Katar Stabbing Dagger with Gold Damascene
  { id: 152233, slug: 'cma-mughal-katar-dagger', categorySlug: 'medieval-coins', eraSlug: 'mughal-period' },
  // 10. Mughal Khanjar Dagger with Carved Jade Hilt
  { id: 112292, slug: 'cma-mughal-jade-khanjar-dagger', categorySlug: 'medieval-coins', eraSlug: 'mughal-period' },
  // 11. Mughal Gilt Cobalt Blue Glass Hookah Base
  { id: 136970, slug: 'cma-mughal-blue-glass-hookah', categorySlug: 'medieval-coins', eraSlug: 'mughal-period' },
  // 12. Satavahana Repousse Bronze Roundel
  { id: 170080, slug: 'cma-satavahana-bronze-roundel', categorySlug: 'medieval-coins', eraSlug: 'maurya-post-maurya' },

  // 13. Sultanganj Monumental Bronze Buddha (British Museum / Public Domain)
  {
    isSpecial: true,
    slug: 'sultanganj-bronze-buddha',
    categorySlug: 'hindu-deity-sculptures',
    eraSlug: 'gupta-period',
    title: 'The Sultanganj Monumental Bronze Buddha',
    creationDate: 'c. 500–700 CE',
    culture: 'Gupta Period / Early Pala',
    technique: 'Cast copper alloy via lost-wax process',
    dimensions: 'Height: 228 cm, Width: 104 cm, Weight: 500 kg',
    accession: 'BM-1864,1021.1',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/The_Sultanganj_Buddha.jpg'
  },
  // 14. Standing Buddha, Kashmir (brass with silver and copper inlay)
  { id: 142560, slug: 'cma-kashmir-standing-buddha', categorySlug: 'hindu-deity-sculptures', eraSlug: 'early-medieval' },
  // 15. Ganesha, Chola Bronze
  { id: 145407, slug: 'cma-chola-ganesha-bronze', categorySlug: 'hindu-deity-sculptures', eraSlug: 'early-medieval' },
  // 16. Buddha Calling on Earth to Witness, Pala Chloritic Schist
  { id: 114974, slug: 'cma-pala-buddha-calling-earth', categorySlug: 'hindu-deity-sculptures', eraSlug: 'early-medieval' },
  // 17. Shiva and Parvati (Uma-Maheshvara), Viracholapuram Chola Bronze
  { id: 137129, slug: 'cma-chola-shiva-parvati-bronze', categorySlug: 'hindu-deity-sculptures', eraSlug: 'early-medieval' },
  // 18. Vajrapani, Kashmir Bronze with Silver Overlay
  { id: 145930, slug: 'cma-kashmir-vajrapani-bronze', categorySlug: 'hindu-deity-sculptures', eraSlug: 'early-medieval' },
  // 19. Monkey General Hanuman, Chola Bronze
  { id: 150048, slug: 'cma-chola-hanuman-bronze', categorySlug: 'hindu-deity-sculptures', eraSlug: 'early-medieval' },
  // 20. Yoga Narasimha, Vishnu Man-Lion, Late Chola Bronze
  { id: 147449, slug: 'cma-chola-yoga-narasimha-bronze', categorySlug: 'hindu-deity-sculptures', eraSlug: 'early-medieval' },
  // 21. Standing Buddha, Gupta Bronze dated 591 CE
  { id: 144058, slug: 'cma-gupta-standing-buddha-591', categorySlug: 'hindu-deity-sculptures', eraSlug: 'gupta-period' },
  // 22. Akshobhya: the Buddha of the East, Kurkihar Pala Bronze
  { id: 144882, slug: 'cma-kurkihar-pala-akshobhya-bronze', categorySlug: 'hindu-deity-sculptures', eraSlug: 'early-medieval' },
  // 23. Trident with Shiva as Half-Woman (Ardhanarishvara), Chola Bronze
  { id: 144279, slug: 'cma-chola-ardhanarishvara-trident', categorySlug: 'hindu-deity-sculptures', eraSlug: 'early-medieval' },
  // 24. Brahma-Shiva, Chola Granite Sculpture
  { id: 165154, slug: 'cma-chola-brahma-shiva-granite', categorySlug: 'hindu-deity-sculptures', eraSlug: 'early-medieval' },
  // 25. Vishnu Four-Armed Granite Temple Sculpture, Chola
  { id: 138692, slug: 'cma-chola-vishnu-granite', categorySlug: 'hindu-deity-sculptures', eraSlug: 'early-medieval' },
  // 26. Goddess Kali Eight-Armed Dancing Bronze, Chola
  { id: 134215, slug: 'cma-chola-kali-bronze', categorySlug: 'hindu-deity-sculptures', eraSlug: 'early-medieval' },
  // 27. Saiva Saint Manikkavachakar Bronze, Chola
  { id: 143169, slug: 'cma-chola-manikkavachakar-bronze', categorySlug: 'hindu-deity-sculptures', eraSlug: 'early-medieval' },
  // 28. Bodhisattva Manjushri Gilt Bronze, Bengal Pala
  { id: 136420, slug: 'cma-pala-manjushri-bronze', categorySlug: 'hindu-deity-sculptures', eraSlug: 'early-medieval' },
  // 29. Goddess Siddhalakshmi Bronze, Kashmir
  { id: 150998, slug: 'cma-kashmir-siddhalakshmi-bronze', categorySlug: 'hindu-deity-sculptures', eraSlug: 'early-medieval' },
  // 30. Jina (Tirthankara Parshvanatha) Bronze with Silver Inlay, Rajasthan
  { id: 162160, slug: 'cma-rajasthan-jina-parshvanatha', categorySlug: 'hindu-deity-sculptures', eraSlug: 'early-medieval' },

  // 31. Mathura Red Sandstone Corner Railing Pillar with Yakshis
  { id: 149101, slug: 'cma-mathura-kushan-railing-pillar', categorySlug: 'stone-sculptures', eraSlug: 'maurya-post-maurya' },
  // 32. Bharhut Stupa Sandstone Coping Rail
  { id: 146976, slug: 'cma-bharhut-shunga-coping-rail', categorySlug: 'stone-sculptures', eraSlug: 'maurya-post-maurya' },
  // 33. Bharhut Stupa Double-Faced Crossbar
  { id: 150993, slug: 'cma-bharhut-shunga-crossbar', categorySlug: 'stone-sculptures', eraSlug: 'maurya-post-maurya' },
  // 34. Agni, God of Fire Sandstone Sculpture, Uttar Pradesh
  { id: 133111, slug: 'cma-agni-fire-god-sandstone', categorySlug: 'stone-sculptures', eraSlug: 'early-medieval' },
  // 35. Dvarapala Guardian of Shiva, Chloritic Schist, Hoysala Karnataka
  { id: 140437, slug: 'cma-hoysala-guardian-shiva', categorySlug: 'stone-sculptures', eraSlug: 'early-medieval' },
  // 36. Frieze with Dancer and Musicians, Harshagiri Rajasthan
  { id: 144692, slug: 'cma-harshagiri-musicians-frieze', categorySlug: 'stone-sculptures', eraSlug: 'early-medieval' },
  // 37. Gateway Salabhanjika Bracket, Mathura Kushan
  { id: 145942, slug: 'cma-mathura-kushan-gateway-bracket', categorySlug: 'stone-sculptures', eraSlug: 'maurya-post-maurya' },
  // 38. Seated Shakyamuni Buddha in Mottled Red Sandstone, Mathura
  { id: 145408, slug: 'cma-mathura-kushan-seated-buddha', categorySlug: 'stone-sculptures', eraSlug: 'maurya-post-maurya' },
  // 39. River Goddess Ganga on Makara, Mathura Sandstone
  { id: 142284, slug: 'cma-mathura-ganga-river-goddess', categorySlug: 'stone-sculptures', eraSlug: 'early-medieval' },

  // 40. Amorous Couple (Mithuna) Terracotta Plaque, Ahichchatra Gupta
  { id: 145919, slug: 'cma-ahichchhatra-mithuna-terracotta', categorySlug: 'terracotta-figurines', eraSlug: 'gupta-period' },
  // 41. Seated Yaksha Terracotta Plaque, Kaushambi Gupta
  { id: 149033, slug: 'cma-kaushambi-seated-yaksha', categorySlug: 'terracotta-figurines', eraSlug: 'gupta-period' },
  // 42. Nature Divinity (Yakshi) Terracotta Plaque, Shunga
  { id: 147509, slug: 'cma-shunga-nature-yakshi-terracotta', categorySlug: 'terracotta-figurines', eraSlug: 'maurya-post-maurya' },
  // 43. Male Figure Terracotta Plaque, Chandraketugarh Bengal
  { id: 156279, slug: 'cma-chandraketugarh-male-terracotta', categorySlug: 'terracotta-figurines', eraSlug: 'maurya-post-maurya' },
  // 44. Male Head of a Yaksha, Bulandibagh Pataliputra, Maurya
  { id: 153387, slug: 'cma-patna-bulandibagh-yaksha-head', categorySlug: 'terracotta-figurines', eraSlug: 'maurya-post-maurya' },
  // 45. Model Toy Chariot Terracotta, Shunga
  { id: 151991, slug: 'cma-shunga-toy-chariot-terracotta', categorySlug: 'terracotta-figurines', eraSlug: 'maurya-post-maurya' },
  // 46. Seated Ascetics Terracotta Tile, Harwan Kashmir
  { id: 135587, slug: 'cma-harwan-kashmir-ascetics-tile', categorySlug: 'terracotta-figurines', eraSlug: 'gupta-period' },
  // 47. Crouching Dwarf Musician Terracotta, Shunga
  { id: 151533, slug: 'cma-shunga-crouching-musician', categorySlug: 'terracotta-figurines', eraSlug: 'maurya-post-maurya' },

  // 48. Indus Valley Steatite Seal with Two-Horned Bull & Inscription
  { id: 147416, slug: 'cma-indus-bull-seal', categorySlug: 'archaeological-seals', eraSlug: 'indus-valley' },
  // 49. Indus Valley Kaolin Seal with Unicorn & Inscription
  { id: 140095, slug: 'cma-indus-unicorn-seal-kaolin', categorySlug: 'archaeological-seals', eraSlug: 'indus-valley' },
  // 50. Copper Hoard Anthropomorph, Bronze Age India
  { id: 163452, slug: 'cma-copper-hoard-anthropomorph', categorySlug: 'archaeological-seals', eraSlug: 'indus-valley' },
  // 51. Maurya/Shunga Cast Bronze Libation Cup
  { id: 161980, slug: 'cma-maurya-shunga-libation-cup', categorySlug: 'archaeological-seals', eraSlug: 'maurya-post-maurya' }
];

console.log('Total candidate artifacts defined:', CANDIDATES_51.length);

