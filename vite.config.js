import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass' // Import Dart Sass

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        api: 'legacy', // Continue using the legacy API temporarily
        // Silence the deprecation warning
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  server: {
    host: true,
  },
})