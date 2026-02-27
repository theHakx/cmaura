import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // allow overriding path through environment variable (Netlify or Vercel)
  // default to root for typical deployments
  base: process.env.VITE_BASE_PATH || '/'
})
