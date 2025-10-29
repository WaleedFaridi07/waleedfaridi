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

// Ensure the HTML keeps type="module" for React 18 compatibility
const htmlPath = path.join(process.cwd(), 'dist', 'index.html');
if (fs.existsSync(htmlPath)) {
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Debug: log the current HTML
  console.log('Current script tag:', html.match(/<script[^>]*>/g));
  
  // Make sure script has type="module" for React 18
  html = html.replace(/<script crossorigin/g, '<script type="module" crossorigin');
  
  // Debug: log the updated HTML
  console.log('Updated script tag:', html.match(/<script[^>]*>/g));
  
  fs.writeFileSync(htmlPath, html);
  console.log('✓ Ensured script has type="module" for React 18 compatibility');
}

console.log('✓ Build post-processing completed');