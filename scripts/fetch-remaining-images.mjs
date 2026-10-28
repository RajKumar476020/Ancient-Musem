import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const directList = [
  {
    slug: 'samudragupta-lyrist-gold-dinar',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Samudragupta_lyrist_coin.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Samudragupta_lyrist_coin.jpg',
    author: 'Classical Numismatic Group / Wikimedia Commons',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  {
    slug: 'chola-nataraja-bronze',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Shiva_as_the_Lord_of_Dance_%28Nataraja%29_LACMA_M.75.1.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Shiva_as_the_Lord_of_Dance_(Nataraja)_LACMA_M.75.1.jpg',
    author: 'Los Angeles County Museum of Art (LACMA)',
    license: 'Public Domain / Open Access',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/'
  },
  {
    slug: 'gupta-standing-vishnu-sculpture',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Standing_Vishnu_Mathura_Gupta_5th_century_National_Museum_New_Delhi.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Standing_Vishnu_Mathura_Gupta_5th_century_National_Museum_New_Delhi.jpg',
    author: 'National Museum, New Delhi / Biswarup Ganguly',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  {
    slug: 'kushan-gajalakshmi-sculpture',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Gajalakshmi_Mathura_Kushan_National_Museum_New_Delhi.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gajalakshmi_Mathura_Kushan_National_Museum_New_Delhi.jpg',
    author: 'National Museum, New Delhi / Biswarup Ganguly',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  {
    slug: 'durga-mahishasuramardini-sculpture',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Mahishasuramardini_Mamallapuram.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mahishasuramardini_Mamallapuram.jpg',
    author: 'G41rn8 / Wikimedia Commons',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  {
    slug: 'hoysala-ganesha-sculpture',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Hoysaleswara_temple_Ganesha.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hoysaleswara_temple_Ganesha.jpg',
    author: 'Dineshkannambadi / Wikimedia Commons',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  {
    slug: 'chola-shiva-sculpture',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Chola_bronze_Shiva.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Chola_bronze_Shiva.jpg',
    author: 'Guimet Museum / Wikimedia Commons',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  {
    slug: 'indus-valley-unicorn-seal',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Stamp_seal_with_%22unicorn%22_and_inscription_LACMA_M.86.309.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Stamp_seal_with_%22unicorn%22_and_inscription_LACMA_M.86.309.jpg',
    author: 'Los Angeles County Museum of Art (LACMA)',
    license: 'Public Domain / Open Access',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/'
  },
  {
    slug: 'indus-valley-dancing-girl',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Dancing_Girl_of_Mohenjo-daro.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dancing_Girl_of_Mohenjo-daro.jpg',
    author: 'National Museum, New Delhi / Joe Ravi',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  {
    slug: 'harappan-terracotta-figurine',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Terracotta_figurine_Mohenjo-daro_National_Museum_New_Delhi.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Terracotta_figurine_Mohenjo-daro_National_Museum_New_Delhi.jpg',
    author: 'National Museum, New Delhi / Biswarup Ganguly',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  {
    slug: 'ashoka-lion-capital-sarnath',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Sarnath_Lion_Capital_of_Ashoka.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sarnath_Lion_Capital_of_Ashoka.jpg',
    author: 'Archaeological Museum, Sarnath / Tejas Prajapati',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  }
];

async function run() {
  const manifestPath = path.join(rootDir, 'src', 'data', 'image-manifest.json');
  let manifest = {};
  if (fs.existsSync(manifestPath)) {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  }

  for (const item of directList) {
    const targetDir = path.join(rootDir, 'public', 'images', 'artifacts', item.slug);
    fs.mkdirSync(targetDir, { recursive: true });
    const localFile = path.join(targetDir, 'primary.jpg');

    console.log(`Downloading direct image for ${item.slug} from ${item.url}...`);
    try {
      const res = await fetch(item.url, { headers: { 'User-Agent': USER_AGENT } });
      if (!res.ok) {
        console.warn(`Failed ${item.url}: status ${res.status}`);
        continue;
      }
      const buf = await res.arrayBuffer();
      fs.writeFileSync(localFile, Buffer.from(buf));
      console.log(`✓ Saved ${localFile} (${buf.byteLength} bytes)`);

      manifest[item.slug] = {
        slug: item.slug,
        localPath: `/images/artifacts/${item.slug}/primary.jpg`,
        sourceUrl: item.sourceUrl,
        directUrl: item.url,
        author: item.author,
        license: item.license,
        licenseUrl: item.licenseUrl,
        credit: item.author
      };
      await new Promise(r => setTimeout(r, 1200));
    } catch (e) {
      console.error(`Error fetching ${item.slug}:`, e.message);
    }
  }

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`Updated manifest with ${Object.keys(manifest).length} items.`);
}

run();
