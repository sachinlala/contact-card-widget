import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        dir: './dist',
        entryFileNames: 'designForLifeContactFormWidget.js',
        assetFileNames: 'designForLifeContactFormWidget.css',
        manualChunks: undefined,
      }
    }
  }
})
