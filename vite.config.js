import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Vitee-commercial/",
  server: {
    port: 5173
  }
})
