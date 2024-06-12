import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    target: ['chrome39'],
  },
  optimizeDeps: {
    include: ['core-js/stable', 'regenerator-runtime/runtime']
  }
});
