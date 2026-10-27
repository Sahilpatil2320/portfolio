import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
// base: './' allows the built site to work cleanly on both Vercel and GitHub Pages project subpaths
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || './',
});
