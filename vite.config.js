import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env.VITE_DOTCMS_HOST': JSON.stringify("VITE_DOTCMS_HOST_KEY"),
    'process.env.VITE_DOTCMS_AUTH_TOKEN_KEY': JSON.stringify("VITE_DOTCMS_AUTH_TOKEN_KEY"),
    'process.env.VITE_DOTCMS_SITE_ID_KEY': JSON.stringify("VITE_DOTCMS_SITE_ID_KEY"),
  }
});
