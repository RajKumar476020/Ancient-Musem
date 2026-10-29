import https from 'https';

export async function fetchCmaArtwork(id) {
  return new Promise((resolve) => {
    https.get(`https://openaccess-api.clevelandart.org/api/artworks/${id}`, {
      headers: { 'User-Agent': 'MuseumHeritageBot/2.0' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json.data || null);
        } catch {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}
