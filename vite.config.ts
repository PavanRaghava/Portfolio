import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages project URL: https://<user>.github.io/Portfolio/
  // Use / in dev; use /Portfolio/ for production builds so assets resolve.
  base: command === 'build' ? '/Portfolio/' : '/',
}))

