import fs from 'fs';
import path from 'path';
import { getAllArtifacts, getAllCategories, getAllEras } from '../src/lib/artifacts';

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function main() {
  const baseUrl = 'https://historical-artifacts-museum.vercel.app';
  const currentDate = new Date().toISOString().split('T')[0];

  const artifacts = getAllArtifacts();
  const categories = getAllCategories();
  const eras = getAllEras();

  console.log(`Generating Ancient Musem XML sitemap with ${artifacts.length} artifacts, ${categories.length} categories, ${eras.length} eras...`);

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<!--
  Ancient Musem — Official XML Search Engine & Image Sitemap
  Target Keywords: Ancient Musem, Ancient Museum, Ancient Artifacts, Historical Relics, Ancient Coins, Sacred Sculpture
  Verified Curatorial Collection: 571 Authenticated Records
-->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- ========================================== -->
  <!-- Ancient Musem Homepage & Prime Landing     -->
  <!-- ========================================== -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.00</priority>
    <image:image>
      <image:loc>${baseUrl}/images/artifacts/chola-nataraja-bronze/primary.webp</image:loc>
      <image:title>Ancient Musem — World Digital Museum of Ancient Historical Artifacts</image:title>
      <image:caption>Ancient Musem is the premier digital archive of ancient historical artifacts, ancient coins, monumental sculptures, Harappan seals, and sacred antiquities.</image:caption>
      <image:geo_location>India</image:geo_location>
    </image:image>
  </url>

  <!-- ========================================== -->
  <!-- Ancient Musem Collection Directory         -->
  <!-- ========================================== -->
  <url>
    <loc>${baseUrl}/artifacts</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
    <image:image>
      <image:loc>${baseUrl}/images/artifacts/ashoka-lion-capital-sarnath/primary.webp</image:loc>
      <image:title>Ancient Musem Catalog — Complete Archive of 571 Ancient Artifacts</image:title>
      <image:caption>Explore the comprehensive digital collection of authentic ancient artifacts with multi-attribute filtering at Ancient Musem.</image:caption>
    </image:image>
  </url>

  <!-- ========================================== -->
  <!-- Ancient Musem Curatorial Standards & Ethics -->
  <!-- ========================================== -->
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
    <image:image>
      <image:loc>${baseUrl}/images/artifacts/indus-valley-unicorn-seal/primary.webp</image:loc>
      <image:title>About Ancient Musem — Academic Standards &amp; Curatorial Methodology</image:title>
      <image:caption>Learn about Ancient Musem&apos;s open-access licensing policy, accession registry verification, and scholarly curatorial methodology.</image:caption>
    </image:image>
  </url>
`;

  // Categories
  xml += `\n  <!-- ========================================== -->\n  <!-- Ancient Musem Exhibition Galleries       -->\n  <!-- ========================================== -->\n`;
  for (const cat of categories) {
    xml += `  <url>
    <loc>${baseUrl}/categories/${cat.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>${baseUrl}/images/artifacts/chandragupta-ii-archer-gold-dinar/primary.webp</image:loc>
      <image:title>${escapeXml(cat.title)} — Ancient Musem Exhibition Gallery</image:title>
      <image:caption>${escapeXml(cat.shortDescription)} Curated collection at Ancient Musem.</image:caption>
    </image:image>
  </url>\n`;
  }

  // Eras
  xml += `\n  <!-- ========================================== -->\n  <!-- Ancient Musem Historical Eras Timeline   -->\n  <!-- ========================================== -->\n`;
  for (const era of eras) {
    xml += `  <url>
    <loc>${baseUrl}/eras/${era.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>${baseUrl}/images/artifacts/gupta-standing-vishnu-sculpture/primary.webp</image:loc>
      <image:title>${escapeXml(era.title)} (${escapeXml(era.period)}) — Ancient Musem Era</image:title>
      <image:caption>${escapeXml(era.shortDescription)} Historical period artifacts preserved at Ancient Musem.</image:caption>
    </image:image>
  </url>\n`;
  }

  // Artifacts
  xml += `\n  <!-- ========================================== -->\n  <!-- Ancient Musem 571 Artifacts &amp; Specimen Images -->\n  <!-- ========================================== -->\n`;
  for (const art of artifacts) {
    const primaryImg = art.images.find((i) => i.isPrimary) ?? art.images[0];
    const imgUrl = primaryImg?.src
      ? primaryImg.src.startsWith('http')
        ? primaryImg.src
        : `${baseUrl}${primaryImg.src}`
      : `${baseUrl}/images/artifacts/chola-nataraja-bronze/primary.webp`;

    const lastMod = art.lastReviewed || currentDate;
    const origin = art.origin || art.discoverySite || 'Ancient India';

    xml += `  <url>
    <loc>${baseUrl}/artifacts/${art.slug}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
    <image:image>
      <image:loc>${escapeXml(imgUrl)}</image:loc>
      <image:title>${escapeXml(art.title)} — Ancient Musem</image:title>
      <image:caption>${escapeXml(art.summary)} Preserved in the Ancient Musem digital collection.</image:caption>
      <image:geo_location>${escapeXml(origin)}</image:geo_location>
    </image:image>
  </url>\n`;
  }

  xml += `</urlset>\n`;

  const outputPath = path.resolve(process.cwd(), 'public', 'ancient-musem-sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf-8');
  console.log(`Successfully written ${outputPath} (${(xml.length / 1024).toFixed(1)} KB)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

