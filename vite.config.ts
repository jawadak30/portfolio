import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,  // dev server will run on http://localhost:3001
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  // allows import from "@/..." instead of relative paths
    },
  },
})
