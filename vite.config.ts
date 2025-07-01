import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true, // Optional: if you want to use `describe`, `it`, etc. globally
    setupFiles: './src/setupTests.ts' // Optional: for jest-dom or custom setup
  }
})
