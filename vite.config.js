import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel:{
      plugins:[
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }]
      ]
    }
  })],
  server: {
    proxy: {
      '/moon-auth-service': {
        target: "http://localhost:20000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/moon-auth-service/, ''),
      },
    }
  }
})
