import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
  plugins: [
    react(),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      presets: [
        ['@babel/preset-env', {
          targets: '> 0.25%, not dead, not op_mini all',
          useBuiltIns: 'entry',
          corejs: 3,
        }],
        '@babel/preset-react'
      ]
    })
  ],
});
