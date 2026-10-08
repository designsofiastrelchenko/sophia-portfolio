import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { defineConfig } from 'vite'

export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? '/sophia-portfolio/' : '/',
  plugins: [
    react(),
    ...(command === 'build' ? [{
      name: 'github-pages-spa-fallback',
      closeBundle() {
        copyFileSync('dist/index.html', 'dist/404.html')
      },
    }] : []),
  ],
}))
