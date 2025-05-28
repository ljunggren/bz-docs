const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

function cleanText(text) {
  return text.replace(/\s+/g, ' ').trim();
}

function tableToMarkdown($table, $) {
  const rows = [];
  $table.find('tr').each((_, row) => {
    const cols = [];
    $(row).find('th, td').each((_, col) => {
      cols.push(cleanText($(col).text()));
    });
    rows.push(cols);
  });

  if (rows.length < 1) return '';

  const header = `| ${rows[0].join(' | ')} |\n`;
  const separator = `| ${rows[0].map(() => '---').join(' | ')} |\n`;
  const body = rows.slice(1).map(row => `| ${row.join(' | ')} |`).join('\n');

  return `${header}${separator}${body}\n\n`;
}

async function fetchAndConvertToMarkdown(url, outputFile = 'output.md') {
  try {
    const { data: html } = await axios.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });

    const $ = cheerio.load(html);
    const title = $('title').text() || 'Untitled Page';
    const main = $('#main-content').length ? $('#main-content') : $('body');

    let markdown = `# ${cleanText(title)}\n\n`;
    markdown += `**Source**: ${url}\n\n`;

    main.find('h1, h2, h3, p, pre, code, ul, ol, li, img, table').each((_, el) => {
      const tag = $(el).get(0).tagName.toLowerCase();

      switch (tag) {
        case 'h1':
        case 'h2':
        case 'h3':
          markdown += `\n## ${cleanText($(el).text())}\n\n`;
          break;
        case 'p':
          markdown += `${cleanText($(el).text())}\n\n`;
          break;
        case 'li':
          markdown += `- ${cleanText($(el).text())}\n`;
          break;
        case 'pre':
        case 'code':
          markdown += `\n\`\`\`\n${$(el).text()}\n\`\`\`\n\n`;
          break;
        case 'img': {
          const alt = $(el).attr('alt') || 'image';
          const src = $(el).attr('src') || '';
          if (src.startsWith('http') || src.startsWith('/')) {
            markdown += `![${alt}](${src})\n\n`;
          }
          break;
        }
        case 'table':
          markdown += tableToMarkdown($(el), $);
          break;
      }
    });

    fs.writeFileSync(outputFile, markdown, 'utf8');
    console.log(`✅ Markdown saved to ${outputFile}`);
  } catch (err) {
    console.error('❌ Failed to fetch or convert:', err.message);
  }
}

// Example usage
fetchAndConvertToMarkdown('https://docs.getxray.app/display/XRAY/Integration+with+Boozang', 'xray-boozang-integration.md');

fetchAndConvertToMarkdown('https://boozang.com', 'boozang-homepage.md');
