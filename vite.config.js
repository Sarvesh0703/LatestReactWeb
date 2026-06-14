import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/LatestReactWeb/',
  theme: {
    extend: {
      keyframes: {
        navbarDown: {
          "0%": {
            transform: "translateY(-70px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        navbarDown: "navbarDown 0.7s ease-in-out forwards",
      },
    },
  },
})
