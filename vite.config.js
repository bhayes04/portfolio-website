import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export default defineConfig({
    base: '/portfolio-website/',
    build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gallery: resolve(__dirname, 'art_gallery.html'),
        projects: resolve(__dirname, 'projects.html'),
      }
    }
  }
})