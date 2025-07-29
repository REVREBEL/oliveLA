// extract-from-css.js

import fs from 'fs';
import path from 'path';

const globalCssPath = path.resolve('./src/devlink/components/global.css');
const outputJsonPath = path.resolve('../figma/tokens.json');

function extractTokens(cssContent) {
  const rootMatch = cssContent.match(/:root\s*{([\s\S]*?)}/);
  if (!rootMatch) throw new Error(':root block not found');

  const varLines = rootMatch[1].match(/--([a-zA-Z0-9-_]+):\s*([^;]+);/g) || [];
  const tokens = { color: {}, dimension: {} };

  for (const line of varLines) {
    const [_, name, value] = line.match(/--([a-zA-Z0-9-_]+):\s*([^;]+);/);

    if (/^#|rgba?|hsla?|color-mix/.test(value)) {
      tokens.color[name] = { value, type: 'color' };
    } else if (/^[\d.]+(px|rem|em|%)$/.test(value)) {
      tokens.dimension[name] = { value, type: 'dimension' };
    }
  }

  return Object.fromEntries(Object.entries(tokens).filter(([_, v]) => Object.keys(v).length > 0));
}

function run() {
  if (!fs.existsSync(globalCssPath)) {
    console.error('❌ global.css not found at', globalCssPath);
    process.exit(1);
  }

  const cssContent = fs.readFileSync(globalCssPath, 'utf-8');
  const tokens = extractTokens(cssContent);

  fs.writeFileSync(outputJsonPath, JSON.stringify(tokens, null, 2));
  console.log('✅ Tokens extracted and saved to', outputJsonPath);
}

run();
