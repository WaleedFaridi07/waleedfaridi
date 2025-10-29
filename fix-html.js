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

// Create a dynamic loader that handles MIME type issues
const htmlPath = path.join(process.cwd(), 'dist', 'index.html');
if (fs.existsSync(htmlPath)) {
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Get the script src
  const scriptMatch = html.match(/<script[^>]*src="([^"]*)"[^>]*>/);
  const scriptSrc = scriptMatch ? scriptMatch[1] : null;
  
  if (scriptSrc) {
    // Remove the original script tag
    html = html.replace(/<script[^>]*src="[^"]*"[^>]*><\/script>/g, '');
    
    // Add simple script tag (IIFE format doesn't need modules)
    const scriptTag = `<script crossorigin src="${scriptSrc}"></script>
  </body>`;
    
    html = html.replace('</body>', scriptTag);
  }
  
  fs.writeFileSync(htmlPath, html);
  console.log('✓ Added dynamic script loader for GitHub Pages compatibility');
}

console.log('✓ Build post-processing completed');