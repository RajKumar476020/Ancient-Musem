import fs from 'fs';
import path from 'path';
import https from 'https';
import { downloadImage } from './download-helper.mjs';

// Helper to query Wikimedia Commons for an image URL given a search query
async function findWikiImageUrl(searchQuery) {
  const searchApi = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srsearch=${encodeURIComponent(searchQuery)}&utf8=&format=json&srlimit=5`;
  const titles = await new Promise((resolve) => {
    https.get(searchApi, { headers: { 'User-Agent': 'MuseumHeritageBot/2.0 (contact@historical-artifacts.museum)' } }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve((json.query && json.query.search) ? json.query.search.map(s => s.title) : []);
        } catch { resolve([]); }
      });
    }).on('error', () => resolve([]));
  });

  if (!titles.length) return null;

  for (const title of titles) {
    const infoApi = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`;
    const url = await new Promise((resolve) => {
      https.get(infoApi, { headers: { 'User-Agent': 'MuseumHeritageBot/2.0 (contact@historical-artifacts.museum)' } }, res => {
        let data = '';
        res.on('data', c => data += c);
        res.on('end', () => {
          try {
            const json = JSON.parse(data);
            const page = Object.values(json.query.pages)[0];
            if (page && page.imageinfo && page.imageinfo[0] && page.imageinfo[0].url) {
              resolve(page.imageinfo[0].url);
            } else {
              resolve(null);
            }
          } catch { resolve(null); }
        });
      }).on('error', () => resolve(null));
    });

    if (url && (url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') || url.endsWith('.JPG'))) {
      return url;
    }
  }

  return null;
}

// 51 New Items definition with source queries or direct CMA URLs
export const NEW_51_ITEMS = [
  // --- ANCIENT COINS (8 items) ---
  {
    slug: 'satavahana-gautamiputra-drachm',
    categorySlug: 'ancient-coins',
    eraSlug: 'maurya-post-maurya',
    wikiQuery: 'Coin of Gautamiputra Satakarni',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Coin_of_Gautamiputra_Yajna_Satakarni.jpg'
  },
  {
    slug: 'western-kshatrapa-rudradaman-drachm',
    categorySlug: 'ancient-coins',
    eraSlug: 'maurya-post-maurya',
    wikiQuery: 'Coin of Rudradaman I',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Rudradaman_I_silver_drachm.jpg'
  },
  {
    slug: 'kushan-vima-kadphises-gold-dinar',
    categorySlug: 'ancient-coins',
    eraSlug: 'maurya-post-maurya',
    wikiQuery: 'Coin of Vima Kadphises gold dinar',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/VimaKadphisesCoin.jpg'
  },
  {
    slug: 'kushan-huvishka-gold-dinar',
    categorySlug: 'ancient-coins',
    eraSlug: 'maurya-post-maurya',
    wikiQuery: 'Coin of Huvishka gold dinar',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Huvishka_gold_dinar.jpg'
  },
  {
    slug: 'gupta-samudragupta-ashvamedha-dinar',
    categorySlug: 'ancient-coins',
    eraSlug: 'gupta-golden-age',
    wikiQuery: 'Samudragupta Ashvamedha coin',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/SamudraguptaAshvamedhaCoin.jpg'
  },
  {
    slug: 'gupta-chandragupta-kumaradevi-dinar',
    categorySlug: 'ancient-coins',
    eraSlug: 'gupta-golden-age',
    wikiQuery: 'Chandragupta I and Kumaradevi coin',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/00/ChandraguptaIKumaradeviCoin.jpg'
  },
  {
    slug: 'gupta-kumaragupta-horseman-dinar',
    categorySlug: 'ancient-coins',
    eraSlug: 'gupta-golden-age',
    wikiQuery: 'Kumaragupta I horseman coin',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/KumaraguptaI_Horseman_coin.jpg'
  },
  {
    slug: 'post-gupta-harsha-silver-coin',
    categorySlug: 'ancient-coins',
    eraSlug: 'gupta-golden-age',
    wikiQuery: 'Coin of Harsha Vardhana',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Harsha_silver_coin.jpg'
  },

  // --- MEDIEVAL COINS (9 items) ---
  {
    slug: 'shahi-spalapati-deva-silver-jital',
    categorySlug: 'medieval-coins',
    eraSlug: 'early-medieval-temple-age',
    wikiQuery: 'Spalapati Deva silver jital bull horseman',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Hindu_Shahi_Bull_and_Horseman_jital.jpg'
  },
  {
    slug: 'gurjara-pratihara-bhoja-adivaraha-dramma',
    categorySlug: 'medieval-coins',
    eraSlug: 'early-medieval-temple-age',
    wikiQuery: 'Mihira Bhoja Adivaraha dramma coin',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Adivaraha_Dramma_Mihira_Bhoja.jpg'
  },
  {
    slug: 'chola-rajendra-gold-kahavanu',
    categorySlug: 'medieval-coins',
    eraSlug: 'classical-southern-dynasties',
    wikiQuery: 'Rajendra Chola coin Gangaikonda',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Rajendra_Chola_I_coin.jpg'
  },
  {
    slug: 'pandya-sundara-fish-coin',
    categorySlug: 'medieval-coins',
    eraSlug: 'classical-southern-dynasties',
    wikiQuery: 'Pandya Dynasty coin twin fish',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pandya_coin_twin_fishes.jpg'
  },
  {
    slug: 'delhi-sultanate-iltutmish-silver-tanka',
    categorySlug: 'medieval-coins',
    eraSlug: 'delhi-sultanate-vijayanagara',
    wikiQuery: 'Coin of Iltutmish silver tanka',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Iltutmish_silver_tanka.jpg'
  },
  {
    slug: 'delhi-sultanate-alauddin-silver-tanka',
    categorySlug: 'medieval-coins',
    eraSlug: 'delhi-sultanate-vijayanagara',
    wikiQuery: 'Alauddin Khalji silver tanka coin',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Alauddin_Khilji_silver_tanka.jpg'
  },
  {
    slug: 'delhi-sultanate-sher-shah-rupee',
    categorySlug: 'medieval-coins',
    eraSlug: 'delhi-sultanate-vijayanagara',
    wikiQuery: 'Coin of Sher Shah Suri, Agra Mint',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Sher_Shah_Suri_Silver_Rupee_1542.jpg'
  },
  {
    slug: 'vijayanagara-krishnadevaraya-gold-pagoda',
    categorySlug: 'medieval-coins',
    eraSlug: 'delhi-sultanate-vijayanagara',
    wikiQuery: 'Krishna Deva Raya pagoda coin',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Krishnadevaraya_gold_pagoda.jpg'
  },
  {
    slug: 'sikh-empire-nanakshahi-silver-rupee',
    categorySlug: 'medieval-coins',
    eraSlug: 'mughal-maratha-period',
    wikiQuery: 'Nanakshahi rupee Sikh Empire Amritsar',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Nanakshahi_Rupee_Amritsar_Mint.jpg'
  },

  // --- SCULPTURES & IDOLS (14 items) ---
  {
    slug: 'indus-priest-king-steatite',
    categorySlug: 'sculptures-idols',
    eraSlug: 'indus-valley',
    wikiQuery: 'The Priest King of Moenjo Daro',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/The_Priest_King_of_Moenjo_Daro.jpg'
  },
  {
    slug: 'sultanganj-bronze-buddha',
    categorySlug: 'sculptures-idols',
    eraSlug: 'gupta-golden-age',
    directUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/The_Sultanganj_Buddha.jpg'
  },
  {
    slug: 'didarganj-yakshi-sandstone',
    categorySlug: 'sculptures-idols',
    eraSlug: 'maurya-post-maurya',
    wikiQuery: 'Didarganj Yakshi statue in the Bihar Museum',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Didarganj-Yakshi-3bc-Patna.jpg'
  },
  {
    slug: 'sarnath-preaching-buddha',
    categorySlug: 'sculptures-idols',
    eraSlug: 'gupta-golden-age',
    wikiQuery: 'Buddha preaching his First Sermon (Sarnath)',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Buddha_preaching_his_First_Sermon_%28Sarnath%29.jpg'
  },
  {
    slug: 'mathura-bodhisattva-maitreya',
    categorySlug: 'sculptures-idols',
    eraSlug: 'maurya-post-maurya',
    directCmaUrl: 'https://openaccess-cdn.clevelandart.org/1977.34/1977.34_web.jpg'
  },
  {
    slug: 'cma-kashmir-standing-buddha-bronze',
    categorySlug: 'sculptures-idols',
    eraSlug: 'early-medieval-temple-age',
    directCmaUrl: 'https://openaccess-cdn.clevelandart.org/1966.30/1966.30_web.jpg'
  },
  {
    slug: 'cma-chola-shiva-parvati-bronze',
    categorySlug: 'sculptures-idols',
    eraSlug: 'classical-southern-dynasties',
    directCmaUrl: 'https://openaccess-cdn.clevelandart.org/1954.7/1954.7_web.jpg'
  },
  {
    slug: 'cma-kashmir-vajrapani-bronze',
    categorySlug: 'sculptures-idols',
    eraSlug: 'early-medieval-temple-age',
    directCmaUrl: 'https://openaccess-cdn.clevelandart.org/1971.14/1971.14_web.jpg'
  },
  {
    slug: 'cma-chola-hanuman-bronze',
    categorySlug: 'sculptures-idols',
    eraSlug: 'classical-southern-dynasties',
    directCmaUrl: 'https://openaccess-cdn.clevelandart.org/1967.161/1967.161_web.jpg'
  },
  {
    slug: 'cma-chola-yoga-narasimha-bronze',
    categorySlug: 'sculptures-idols',
    eraSlug: 'classical-southern-dynasties',
    directCmaUrl: 'https://openaccess-cdn.clevelandart.org/1987.167/1987.167_web.jpg'
  },
  {
    slug: 'pala-kurkihar-crowned-buddha',
    categorySlug: 'sculptures-idols',
    eraSlug: 'early-medieval-temple-age',
    wikiQuery: 'Kurkihar crowned Buddha bronze Bihar Museum',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Crowned_Buddha_Kurkihar_Pala_Bihar_Museum.jpg'
  },
  {
    slug: 'nalanda-gilt-bronze-tara',
    categorySlug: 'sculptures-idols',
    eraSlug: 'early-medieval-temple-age',
    wikiQuery: 'Tara bronze Nalanda National Museum',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Tara_from_Nalanda_National_Museum_New_Delhi.jpg'
  },
  {
    slug: 'chola-ardhanarishvara-bronze',
    categorySlug: 'sculptures-idols',
    eraSlug: 'classical-southern-dynasties',
    wikiQuery: 'Ardhanarishvara bronze Chola Government Museum Chennai',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Ardhanarishvara_Chola_bronze.jpg'
  },
  {
    slug: 'vijayanagara-dancing-krishna-bronze',
    categorySlug: 'sculptures-idols',
    eraSlug: 'delhi-sultanate-vijayanagara',
    wikiQuery: 'Kaliya Krishna Vijayanagara bronze',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Dancing_Krishna_Kaliya_Vijayanagara_bronze.jpg'
  },

  // --- STONE RELIEFS (8 items) ---
  {
    slug: 'bharhut-shunga-railing-crossbar',
    categorySlug: 'stone-reliefs',
    eraSlug: 'maurya-post-maurya',
    directCmaUrl: 'https://openaccess-cdn.clevelandart.org/1972.366/1972.366_web.jpg'
  },
  {
    slug: 'sanchi-stupa-torana-salabhanjika',
    categorySlug: 'stone-reliefs',
    eraSlug: 'maurya-post-maurya',
    wikiQuery: 'Salabhanjika East Gate Sanchi Stupa',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Sanchi_East_Gate_Salabhanjika.jpg'
  },
  {
    slug: 'deogarh-dashavatara-sheshashayi-vishnu',
    categorySlug: 'stone-reliefs',
    eraSlug: 'gupta-golden-age',
    wikiQuery: 'Anantasayi Vishnu Deogarh',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Anantasayi_Vishnu_Deogarh.jpg'
  },
  {
    slug: 'udayagiri-cave-varaha-relief',
    categorySlug: 'stone-reliefs',
    eraSlug: 'gupta-golden-age',
    wikiQuery: 'Udayagiri Cave 5 Varaha panel',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Udayagiri_Caves_Cave_5_Varaha.jpg'
  },
  {
    slug: 'ellora-kailash-ravana-shaking-kailash',
    categorySlug: 'stone-reliefs',
    eraSlug: 'early-medieval-temple-age',
    wikiQuery: 'Ravana shaking Mount Kailash Ellora Cave 16',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Ravana_shaking_Kailash_Ellora.jpg'
  },
  {
    slug: 'elephanta-maheshamurti-trimurti',
    categorySlug: 'stone-reliefs',
    eraSlug: 'classical-southern-dynasties',
    wikiQuery: 'Trimurti Sadashiva Elephanta Caves',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Elephanta_Caves_Trimurti.jpg'
  },
  {
    slug: 'cma-harshagiri-dancer-musicians-frieze',
    categorySlug: 'stone-reliefs',
    eraSlug: 'early-medieval-temple-age',
    directCmaUrl: 'https://openaccess-cdn.clevelandart.org/1982.43/1982.43_web.jpg'
  },
  {
    slug: 'khajuraho-kandariya-surasundari-relief',
    categorySlug: 'stone-reliefs',
    eraSlug: 'early-medieval-temple-age',
    wikiQuery: 'Surasundari Kandariya Mahadeva temple Khajuraho',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Khajuraho_Surasundari_Kandariya_Mahadeva.jpg'
  },

  // --- TERRACOTTA & SEALS (6 items) ---
  {
    slug: 'harappan-pashupati-seal',
    categorySlug: 'terracotta-seals',
    eraSlug: 'indus-valley',
    wikiQuery: 'Shiva Pashupati',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Shiva_Pashupati.jpg'
  },
  {
    slug: 'cma-ahichchhatra-mithuna-terracotta',
    categorySlug: 'terracotta-seals',
    eraSlug: 'gupta-golden-age',
    directCmaUrl: 'https://openaccess-cdn.clevelandart.org/1966.145/1966.145_web.jpg'
  },
  {
    slug: 'cma-chandraketugarh-yakshi-terracotta',
    categorySlug: 'terracotta-seals',
    eraSlug: 'maurya-post-maurya',
    directCmaUrl: 'https://openaccess-cdn.clevelandart.org/1990.22/1990.22_web.jpg'
  },
  {
    slug: 'cma-bulandibagh-patna-terracotta-head',
    categorySlug: 'terracotta-seals',
    eraSlug: 'maurya-post-maurya',
    directCmaUrl: 'https://openaccess-cdn.clevelandart.org/1985.158/1985.158_web.jpg'
  },
  {
    slug: 'cma-shunga-model-chariot-terracotta',
    categorySlug: 'terracotta-seals',
    eraSlug: 'maurya-post-maurya',
    directCmaUrl: 'https://openaccess-cdn.clevelandart.org/1989.102/1989.102_web.jpg'
  },
  {
    slug: 'piprahwa-reliquary-casket-steatite',
    categorySlug: 'terracotta-seals',
    eraSlug: 'maurya-post-maurya',
    wikiQuery: 'Piprahwa vase casket Indian Museum',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Piprahwa_casket_Indian_Museum.jpg'
  },

  // --- REGALIA & TOOLS (6 items) ---
  {
    slug: 'daimabad-bronze-chariot',
    categorySlug: 'regalia-tools',
    eraSlug: 'indus-valley',
    wikiQuery: 'Daimabad bronzes chariot National Museum',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Daimabad_chariot.jpg'
  },
  {
    slug: 'cma-bronze-age-anthropomorph',
    categorySlug: 'regalia-tools',
    eraSlug: 'indus-valley',
    directCmaUrl: 'https://openaccess-cdn.clevelandart.org/1988.51/1988.51_web.jpg'
  },
  {
    slug: 'mughal-shah-jahan-jade-wine-cup',
    categorySlug: 'regalia-tools',
    eraSlug: 'mughal-maratha-period',
    wikiQuery: 'Wine-cup-shah-jahan.JPG',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wine-cup-shah-jahan.JPG'
  },
  {
    slug: 'sword-of-tipu-sultan',
    categorySlug: 'regalia-tools',
    eraSlug: 'mughal-maratha-period',
    wikiQuery: 'Sword of Tipu Sultan Wootz steel',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Tipu_Sultan_sword.jpg'
  },
  {
    slug: 'maratha-wagh-nakh-tiger-claws',
    categorySlug: 'regalia-tools',
    eraSlug: 'mughal-maratha-period',
    wikiQuery: 'WaghNakh weapon.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/22/WaghNakh_weapon.jpg'
  },
  {
    slug: 'mughal-damascened-horsehead-khanjar',
    categorySlug: 'regalia-tools',
    eraSlug: 'mughal-maratha-period',
    directCmaUrl: 'https://openaccess-cdn.clevelandart.org/1916.1436/1916.1436_web.jpg'
  }
];

// Download all images sequentially and report status
async function run() {
  console.log(`Starting download for ${NEW_51_ITEMS.length} new historical items...`);
  let successCount = 0;
  const failed = [];

  for (let i = 0; i < NEW_51_ITEMS.length; i++) {
    const item = NEW_51_ITEMS[i];
    const dest = path.join('public', 'images', 'artifacts', item.slug, 'primary.jpg');

    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`[${i+1}/${NEW_51_ITEMS.length}] EXISTS: ${item.slug}`);
      successCount++;
      continue;
    }

    let urlToDownload = item.directCmaUrl || item.directUrl;

    if (!urlToDownload && item.wikiQuery) {
      console.log(`[${i+1}/${NEW_51_ITEMS.length}] Searching Wiki for '${item.wikiQuery}'...`);
      urlToDownload = await findWikiImageUrl(item.wikiQuery);
    }

    if (!urlToDownload && item.fallbackUrl) {
      urlToDownload = item.fallbackUrl;
    }

    if (!urlToDownload) {
      console.error(`[${i+1}/${NEW_51_ITEMS.length}] FAILED URL lookup for ${item.slug}`);
      failed.push(item.slug);
      continue;
    }

    try {
      console.log(`[${i+1}/${NEW_51_ITEMS.length}] Downloading: ${item.slug} from ${urlToDownload.slice(0, 60)}...`);
      const size = await downloadImage(urlToDownload, dest);
      console.log(`-> SUCCESS (${Math.round(size/1024)} KB)`);
      successCount++;
    } catch (err) {
      console.warn(`-> Download failed: ${err.message}. Trying fallback if available...`);
      if (item.fallbackUrl && item.fallbackUrl !== urlToDownload) {
        try {
          const size = await downloadImage(item.fallbackUrl, dest);
          console.log(`-> FALLBACK SUCCESS (${Math.round(size/1024)} KB)`);
          successCount++;
          continue;
        } catch (fErr) {
          console.error(`-> Fallback also failed: ${fErr.message}`);
        }
      }
      failed.push(item.slug);
    }

    // Gentle delay between network calls
    await new Promise(r => setTimeout(r, 400));
  }

  console.log(`\n========================================`);
  console.log(`Download finished: ${successCount}/${NEW_51_ITEMS.length} succeeded.`);
  if (failed.length > 0) {
    console.log(`Failed items (${failed.length}):`, failed);
  }
}

if (process.argv[1] && process.argv[1].endsWith('curate-and-download-51.mjs')) {
  run();
}
