import fs from 'fs';
import path from 'path';

const htmlPath = path.join(process.cwd(), 'dist', 'index.html');

if (fs.existsSync(htmlPath)) {
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Remove type="module" from script tags to avoid MIME type issues
  html = html.replace(/type="module"\s+crossorigin/g, 'crossorigin');
  html = html.replace(/type="module"/g, '');
  
  fs.writeFileSync(htmlPath, html);
  console.log('✓ Fixed HTML script tags for GitHub Pages compatibility');
} else {
  console.log('❌ dist/index.html not found');
}