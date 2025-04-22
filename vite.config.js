import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@stores': path.resolve(__dirname, 'src/stores'),
      '@': path.resolve(__dirname, 'src'),
    }
  }
})

