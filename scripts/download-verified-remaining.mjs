import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const itemsToDownload = [
  {
    slug: 'samudragupta-lyrist-gold-dinar',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/26/SamudraguptaCoin.png',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:SamudraguptaCoin.png',
    author: 'Classical Numismatic Group / Wikimedia Commons',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  {
    slug: 'chola-nataraja-bronze',
    url: 'https://images.metmuseum.org/CRDImages/as/web-large/DT240.jpg',
    sourceUrl: 'https://www.metmuseum.org/art/collection/search/39328',
    author: 'The Metropolitan Museum of Art (Met Accession: 1989.236.1)',
    license: 'Public Domain / CC0 Open Access',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/'
  },
  {
    slug: 'gupta-standing-vishnu-sculpture',
    url: 'https://openaccess-cdn.clevelandart.org/1963.580/1963.580_web.jpg',
    sourceUrl: 'https://www.clevelandart.org/art/1963.580',
    author: 'Cleveland Museum of Art (CMA Accession: 1963.580)',
    license: 'Public Domain / CC0 Open Access',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/'
  },
  {
    slug: 'kushan-gajalakshmi-sculpture',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Gaja_Lakshmi.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gaja_Lakshmi.jpg',
    author: 'Mathura Museum / Biswarup Ganguly',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
  },
  {
    slug: 'durga-mahishasuramardini-sculpture',
    url: 'https://images.metmuseum.org/CRDImages/as/web-large/DP164319.jpg',
    sourceUrl: 'https://www.metmuseum.org/art/collection/search/39227',
    author: 'The Metropolitan Museum of Art (Met Accession: 1993.477.1)',
    license: 'Public Domain / CC0 Open Access',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/'
  },
  {
    slug: 'hoysala-ganesha-sculpture',
    url: 'https://images.metmuseum.org/CRDImages/as/web-large/DT248.jpg',
    sourceUrl: 'https://www.metmuseum.org/art/collection/search/37397',
    author: 'The Metropolitan Museum of Art (Met Accession: 1982.220.8)',
    license: 'Public Domain / CC0 Open Access',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/'
  },
  {
    slug: 'chola-shiva-sculpture',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/God_Shiva_and_Goddess_Uma_Seated_with_Their_Son%2C_Skanda_%28Somaskanda%29.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:God_Shiva_and_Goddess_Uma_Seated_with_Their_Son,_Skanda_(Somaskanda).jpg',
    author: 'Los Angeles County Museum of Art (LACMA M.86.337)',
    license: 'Public Domain / Open Access',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/'
  },
  {
    slug: 'indus-valley-unicorn-seal',
    url: 'https://images.metmuseum.org/CRDImages/an/web-large/ME_324062.jpg',
    sourceUrl: 'https://www.metmuseum.org/art/collection/search/324062',
    author: 'The Metropolitan Museum of Art (Met Accession: 49.40.1)',
    license: 'Public Domain / CC0 Open Access',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/'
  },
  {
    slug: 'harappan-terracotta-figurine',
    url: 'https://images.metmuseum.org/CRDImages/an/web-large/DP-20228-001.jpg',
    sourceUrl: 'https://www.metmuseum.org/art/collection/search/324704',
    author: 'The Metropolitan Museum of Art (Met Accession: 1987.418.1)',
    license: 'Public Domain / CC0 Open Access',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/'
  },
  {
    slug: 'ashoka-lion-capital-sarnath',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Sarnath_capital.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sarnath_capital.jpg',
    author: 'Archaeological Museum Sarnath / Tejas Prajapati',
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

  for (const item of itemsToDownload) {
    const targetDir = path.join(rootDir, 'public', 'images', 'artifacts', item.slug);
    fs.mkdirSync(targetDir, { recursive: true });
    const localFile = path.join(targetDir, 'primary.jpg');

    console.log(`Downloading ${item.slug} from ${item.url}...`);
    try {
      const res = await fetch(item.url, { headers: { 'User-Agent': USER_AGENT } });
      if (!res.ok) {
        console.warn(`Failed ${item.slug}: status ${res.status}`);
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
      await new Promise(r => setTimeout(r, 600));
    } catch (e) {
      console.error(`Error with ${item.slug}:`, e.message);
    }
  }

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`Updated manifest now has ${Object.keys(manifest).length} items.`);
}

run();
