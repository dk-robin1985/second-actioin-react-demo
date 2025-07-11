import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '8ebfb0bb041c.mylabserver.com', // Change this to 'localhost' or 'your_custom_hostname' if needed
    port: 3000,      // Change this to your desired port
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
});
