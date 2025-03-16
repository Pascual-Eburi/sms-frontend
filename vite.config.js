import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [ vue(),vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@styles/': fileURLToPath(new URL('./src/assets/styles', import.meta.url)),
      '@navigation': fileURLToPath(new URL('./src/components/navigation', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@authViews': fileURLToPath(new URL('./src/views/Auth', import.meta.url))
    },
  },
})
