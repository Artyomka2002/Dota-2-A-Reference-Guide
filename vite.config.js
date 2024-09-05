import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// vite.config.js

export default defineConfig({
  plugins: [react()],
  base: '/Dota-2-A-Reference-Guide/', // Убедитесь, что путь правильный
  build: {
    outDir: "dist", // Убедитесь, что выходная директория правильная
    rollupOptions: {
      output: {
        // Ваши другие настройки здесь
      },
    },
  },
});

