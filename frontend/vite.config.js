import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This file configures Vite — the tool that runs React during development.
// The react() plugin allows Vite to understand JSX syntax (React's HTML-in-JS format).

export default defineConfig({
  plugins: [react()],
})
