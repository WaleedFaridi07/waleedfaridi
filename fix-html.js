import fs from 'fs';
import path from 'path';

// Copy additional server config files to dist
const publicFiles = [
  { src: 'public/_headers', dest: 'dist/_headers' },
  { src: 'public/.htaccess', dest: 'dist/.htaccess' },
  { src: 'vercel.json', dest: 'dist/vercel.json' },
  { src: 'netlify.toml', dest: 'dist/netlify.toml' }
];

publicFiles.forEach(({ src, dest }) => {
  const srcPath = path.join(process.cwd(), src);
  const destPath = path.join(process.cwd(), dest);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✓ Copied ${src} to ${dest}`);
  }
});

// Ensure regular script tags (no modules) for GitHub Pages
const htmlPath = path.join(process.cwd(), 'dist', 'index.html');
if (fs.existsSync(htmlPath)) {
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Remove type="module" if present
  html = html.replace(/type="module"\s+/g, '');
  
  fs.writeFileSync(htmlPath, html);
  console.log('✓ Ensured regular script tags for GitHub Pages compatibility');
}

console.log('✓ Build post-processing completed');