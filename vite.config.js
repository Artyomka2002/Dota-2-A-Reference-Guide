import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// vite.config.js

export default defineConfig({
  plugins: [react()],
  base: '/Dota-2-A-Reference-Guide/', // Проверьте правильность пути
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: '[name].js', // Убедитесь, что все файлы имеют расширение .js
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});

