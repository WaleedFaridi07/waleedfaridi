import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Plugin to fix GitHub Pages MIME type issues
const fixGitHubPages = () => {
  return {
    name: 'fix-github-pages',
    generateBundle(options, bundle) {
      // Find the HTML file
      const htmlFile = Object.keys(bundle).find(key => key.endsWith('.html'));
      if (htmlFile && bundle[htmlFile].type === 'asset') {
        let html = bundle[htmlFile].source as string;
        // Remove type="module" to avoid MIME type issues
        html = html.replace(/type="module"\s+crossorigin/g, 'crossorigin');
        html = html.replace(/type="module"/g, '');
        bundle[htmlFile].source = html;
      }
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger(), fixGitHubPages()].filter(Boolean),
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
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
    assetsDir: 'assets',
    sourcemap: false,
    modulePreload: false,
  },
  // Uncomment and adjust if deploying to GitHub Pages with a repository name
  // base: '/your-repo-name/',
}));
