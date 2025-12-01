import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/portfolio-website/',
    build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gallery: resolve(__dirname, 'art_gallery.html'),
        projects: resolve(__dirname, 'projects.html'), // Changed from sb.html
      }
    }
  }
})