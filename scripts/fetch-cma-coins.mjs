import fs from 'fs';

async function fetchAllCoins() {
  console.log('Fetching coins from CMA...');
  const allCoins = [];
  let skip = 0;
  let total = 644;
  while (skip < total) {
    const url = `https://openaccess-api.clevelandart.org/api/artworks/?q=coin&has_image=1&limit=100&skip=${skip}`;
    const res = await fetch(url);
    const data = await res.json();
    total = data.info.total;
    for (const c of data.data) {
      if (c.images?.web?.url) {
        allCoins.push({
          id: c.id,
          accession_number: c.accession_number,
          title: c.title,
          creation_date: c.creation_date,
          culture: c.culture,
          type: c.type,
          technique: c.technique,
          department: c.department,
          image_url: c.images.web.url,
          dimensions: c.dimensions,
          description: c.description || '',
          fun_fact: c.did_you_know || '',
        });
      }
    }
    console.log(`Fetched ${allCoins.length}/${total}...`);
    skip += 100;
  }
  fs.writeFileSync('scripts/cma-all-coins.json', JSON.stringify(allCoins, null, 2), 'utf8');
  console.log(`Saved ${allCoins.length} coins to scripts/cma-all-coins.json`);
}

fetchAllCoins();

