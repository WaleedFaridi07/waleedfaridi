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

// Inline the JavaScript directly into the HTML for GitHub Pages
const htmlPath = path.join(process.cwd(), 'dist', 'index.html');
if (fs.existsSync(htmlPath)) {
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Get the script src
  const scriptMatch = html.match(/<script[^>]*src="([^"]*)"[^>]*>/);
  const scriptSrc = scriptMatch ? scriptMatch[1] : null;
  
  if (scriptSrc) {
    // Read the JavaScript file
    const jsPath = path.join(process.cwd(), 'dist', scriptSrc);
    if (fs.existsSync(jsPath)) {
      const jsContent = fs.readFileSync(jsPath, 'utf8');
      
      // Remove the original script tag
      html = html.replace(/<script[^>]*src="[^"]*"[^>]*><\/script>/g, '');
      
      // Inline the JavaScript
      const inlineScript = `<script>${jsContent}</script>
  </body>`;
      
      html = html.replace('</body>', inlineScript);
      
      // Remove the external JS file since it's now inlined
      fs.unlinkSync(jsPath);
      
      fs.writeFileSync(htmlPath, html);
      console.log('✓ Inlined JavaScript for GitHub Pages compatibility');
    }
  }
}

console.log('✓ Build post-processing completed');