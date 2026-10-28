import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const targets = [
  {
    slug: 'punch-marked-silver-coin',
    title: 'Punch-Marked Silver Karshapana',
    query: 'punch marked coin silver Taxila'
  },
  {
    slug: 'indo-greek-menander-silver-coin',
    title: 'Indo-Greek Silver Tetradrachm of Menander I',
    query: 'Menander I coin silver'
  },
  {
    slug: 'kushan-kanishka-gold-dinar',
    title: 'Kushan Gold Dinar of Kanishka I',
    query: 'Coin of Kanishka I gold'
  },
  {
    slug: 'samudragupta-lyrist-gold-dinar',
    title: 'Samudragupta Lyrist-Type Gold Dinar',
    query: 'Samudragupta lyrist coin'
  },
  {
    slug: 'chandragupta-ii-archer-gold-dinar',
    title: 'Chandragupta II Archer-Type Gold Dinar',
    query: 'Chandragupta II coin'
  },
  {
    slug: 'kumaragupta-i-silver-coin',
    title: 'Kumaragupta I Silver Drachm',
    query: 'Kumaragupta I coin'
  },
  {
    slug: 'delhi-sultanate-muhammad-tughluq-tanka',
    title: 'Delhi Sultanate Gold Tanka of Muhammad bin Tughluq',
    query: 'Muhammad bin Tughluq coin'
  },
  {
    slug: 'mughal-akbar-gold-mohur',
    title: 'Mughal Gold Mohur of Akbar',
    query: 'Akbar gold coin mohur'
  },
  {
    slug: 'mughal-jahangir-zodiac-rupee',
    title: 'Mughal Zodiac Silver Rupee of Jahangir',
    query: 'Jahangir zodiac coin'
  },
  {
    slug: 'maratha-shivaji-gold-hon',
    title: 'Chhatrapati Shivaji Maharaj Gold Hon',
    query: 'Shivaji coin maratha'
  },
  {
    slug: 'chola-nataraja-bronze',
    title: 'Chola-Period Nataraja Bronze',
    query: 'Nataraja bronze Chola'
  },
  {
    slug: 'gupta-standing-vishnu-sculpture',
    title: 'Gupta Sandstone Standing Vishnu',
    query: 'Standing Vishnu Mathura Gupta'
  },
  {
    slug: 'kushan-gajalakshmi-sculpture',
    title: 'Kushan Gaja-Lakshmi Sandstone Relief',
    query: 'Gajalakshmi Mathura'
  },
  {
    slug: 'durga-mahishasuramardini-sculpture',
    title: 'Durga Mahishasuramardini Relief',
    query: 'Mahishasuramardini Mamallapuram'
  },
  {
    slug: 'hoysala-ganesha-sculpture',
    title: 'Hoysala Chloritic Schist Ganesha',
    query: 'Hoysaleswara temple Ganesha'
  },
  {
    slug: 'chola-shiva-sculpture',
    title: 'Chola Bronze Shiva Sculpture',
    query: 'Chola bronze Shiva'
  },
  {
    slug: 'indus-valley-unicorn-seal',
    title: 'Indus Valley Unicorn Seal',
    query: 'Stamp seal unicorn Indus'
  },
  {
    slug: 'indus-valley-dancing-girl',
    title: 'Mohenjo-daro Bronze Dancing Girl',
    query: 'Dancing Girl of Mohenjo-daro'
  },
  {
    slug: 'harappan-terracotta-figurine',
    title: 'Harappan Terracotta Figurine',
    query: 'Terracotta figurine Mohenjo-daro'
  },
  {
    slug: 'ashoka-lion-capital-sarnath',
    title: 'Ashoka Lion Capital of Sarnath',
    query: 'Sarnath Lion Capital of Ashoka'
  }
];

async function searchAndDownload(item) {
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(item.query)}&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|extmetadata|size&iiurlwidth=800`;
  
  const res = await fetch(apiUrl, { headers: { 'User-Agent': USER_AGENT } });
  if (!res.ok) {
    throw new Error(`API failed: ${res.status}`);
  }
  const data = await res.json();
  if (!data.query || !data.query.pages) {
    throw new Error(`No pages found for ${item.query}`);
  }

  const pages = Object.values(data.query.pages);
  let bestCandidate = null;

  for (const page of pages) {
    if (page.imageinfo && page.imageinfo[0]) {
      const info = page.imageinfo[0];
      const urlToUse = info.thumburl || info.url;
      if (urlToUse) {
        bestCandidate = {
          pageTitle: page.title,
          url: urlToUse,
          originalUrl: info.url,
          sourcePage: info.descriptionurl || `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title)}`,
          meta: info.extmetadata || {}
        };
        break;
      }
    }
  }

  if (!bestCandidate) {
    throw new Error(`No image candidate found for ${item.query}`);
  }

  const targetDir = path.join(rootDir, 'public', 'images', 'artifacts', item.slug);
  fs.mkdirSync(targetDir, { recursive: true });
  const localFile = path.join(targetDir, 'primary.jpg');

  console.log(`Downloading ${bestCandidate.url} for ${item.slug}...`);
  const imgRes = await fetch(bestCandidate.url, { headers: { 'User-Agent': USER_AGENT } });
  if (!imgRes.ok) {
    throw new Error(`Failed to fetch image: ${imgRes.status}`);
  }
  const arrayBuf = await imgRes.arrayBuffer();
  fs.writeFileSync(localFile, Buffer.from(arrayBuf));
  console.log(`✓ Saved ${localFile} (${arrayBuf.byteLength} bytes)`);

  const author = bestCandidate.meta.Artist ? bestCandidate.meta.Artist.value.replace(/<[^>]*>/g, '').trim() : 'Public Domain / Wikimedia Commons';
  const license = bestCandidate.meta.LicenseShortName ? bestCandidate.meta.LicenseShortName.value : 'Public Domain / CC BY-SA';
  const licenseUrl = bestCandidate.meta.LicenseUrl ? bestCandidate.meta.LicenseUrl.value : 'https://creativecommons.org/publicdomain/mark/1.0/';
  const credit = bestCandidate.meta.Credit ? bestCandidate.meta.Credit.value.replace(/<[^>]*>/g, '').trim() : undefined;

  return {
    slug: item.slug,
    localPath: `/images/artifacts/${item.slug}/primary.jpg`,
    sourceUrl: bestCandidate.sourcePage,
    directUrl: bestCandidate.originalUrl,
    author: author || 'Wikimedia Commons',
    license: license || 'Public Domain',
    licenseUrl: licenseUrl,
    credit: credit || 'Wikimedia Commons Contributor'
  };
}

async function main() {
  const manifest = {};
  for (const item of targets) {
    try {
      console.log(`Processing ${item.slug}...`);
      const record = await searchAndDownload(item);
      manifest[item.slug] = record;
      // brief pause to avoid hitting rate limits
      await new Promise(r => setTimeout(r, 600));
    } catch (err) {
      console.error(`Error with ${item.slug}:`, err.message);
    }
  }

  const manifestPath = path.join(rootDir, 'src', 'data', 'image-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`All done! Manifest written to ${manifestPath}`);
}

main();
