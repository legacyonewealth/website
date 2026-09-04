import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// Standalone build config that produces one fully self-contained index.html
// (JS, CSS, and images all inlined) for hosting as a static single-file page.
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    outDir: 'dist-singlefile',
    cssCodeSplit: false,
    assetsInlineLimit: 100 * 1024 * 1024, // inline all assets regardless of size
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
