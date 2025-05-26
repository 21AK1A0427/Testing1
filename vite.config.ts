// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'your-username' and 'your-repo' with your actual GitHub username and repo name
export default defineConfig({
  plugins: [react()],
  base: '/Testing1/' // important for GitHub Pages
})
