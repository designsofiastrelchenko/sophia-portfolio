import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig(({ command, isPreview }) => ({
  resolve: { alias: { '@portfolio/i18n': fileURLToPath(new URL('./src/i18n', import.meta.url)) } },
  optimizeDeps: { exclude: ['@portfolio/i18n/jsx-runtime', '@portfolio/i18n/jsx-dev-runtime'] },
  base: command === 'build' || isPreview ? '/portfolio/' : '/',
  plugins: [
    react({ jsxImportSource: '@portfolio/i18n' }),
    {
      name: 'local-jsx-runtime',
      configResolved(config) {
        // Keep the runtime's context shared with the application, not bundled twice.
        config.optimizeDeps.include = config.optimizeDeps.include?.filter(id => !id.startsWith('@portfolio/i18n'))
      },
    },
    ...(command === 'build' ? [{
      name: 'github-pages-spa-fallback',
      closeBundle() {
        copyFileSync('dist/index.html', 'dist/404.html')
      },
    }] : []),
  ],
}))
