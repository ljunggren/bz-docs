const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const TurndownService = require('turndown');
const { URL } = require('url');

const visited = new Set();
const turndownService = new TurndownService();

async function savePageContent(urlStr, baseDomain, depth = 2) {
  if (visited.has(urlStr) || depth < 0) return;
  visited.add(urlStr);

  try {
    const response = await axios.get(urlStr);
    const $ = cheerio.load(response.data);
    const html = $('body').html() || '';
    const markdown = turndownService.turndown(html);

    const safeFileName = urlStr.replace(baseDomain, '').replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'index';
    const filePath = path.join(__dirname, 'pages', `${safeFileName}.md`);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, markdown);
    console.log(`Saved: ${urlStr} -> ${filePath}`);

    $('a').each((_, el) => {
      const href = $(el).attr('href');
      if (href && href.startsWith('/')) {
        const nextUrl = new URL(href, baseDomain).href;
        savePageContent(nextUrl, baseDomain, depth - 1);
      }
    });

  } catch (err) {
    console.error(`Error fetching ${urlStr}: ${err.message}`);
  }
}

(async () => {
  const startUrl = 'https://boozang.com'; // Replace with your target
  const baseDomain = new URL(startUrl).origin;
  await savePageContent(startUrl, baseDomain, 2);
})();

