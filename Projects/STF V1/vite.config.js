import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Alias path:', path.resolve(__dirname, 'src/Components'));

export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/Components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    }
  },
  server: {
    host: true,
    allowedHosts: ['stfconsulting.uz', 'www.stfconsulting.uz'],
    port: 3000,
  }
});
