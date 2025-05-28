const crawlAndSave = require('./crawler');

const [,, baseUrl, depthArg] = process.argv;

if (!baseUrl) {
  console.error('Usage: node index.js <base-url> [depth]');
  process.exit(1);
}

const depth = parseInt(depthArg || '2', 10);
const baseDomain = new URL(baseUrl).origin;

crawlAndSave(baseUrl, baseDomain, depth);