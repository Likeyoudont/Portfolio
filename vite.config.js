import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // The site is served from https://likeyoudont.github.io/Portfolio/,
  // so every asset path must start with /Portfolio/ instead of /
  base: '/Portfolio/',
})
