import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Plugin to ensure proper build output for GitHub Pages
const fixGitHubPages = () => {
  return {
    name: 'fix-github-pages',
    generateBundle(options, bundle) {
      // Create a comprehensive .htaccess file
      const htaccessContent = `# Force correct MIME types for JavaScript
AddType application/javascript .js
AddType application/javascript .mjs
AddType text/javascript .js
AddType text/javascript .mjs

# Enable CORS for modules
<FilesMatch "\\.(js|mjs)$">
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type"
</FilesMatch>

# Handle client-side routing
RewriteEngine On
RewriteBase /
RewriteRule ^index\\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]`;
      
      this.emitFile({
        type: 'asset',
        fileName: '.htaccess',
        source: htaccessContent
      });
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        format: 'es'
      },
    },
    assetsDir: 'assets',
    sourcemap: false,
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
  },
  // Uncomment and adjust if deploying to GitHub Pages with a repository name
  // base: '/your-repo-name/',
}));
