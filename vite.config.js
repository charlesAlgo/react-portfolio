import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages serves the site from /<repo-name>/, so production builds need
  // that prefix on every asset URL. The dev server keeps using "/".
  base: command === 'build' ? '/react-portfolio/' : '/',
}))
