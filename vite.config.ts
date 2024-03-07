import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  base: 'https://mypymypy.github.io/hh-test-react-posts/',
  plugins: [
    react(),
  ],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  appType: 'spa',
});