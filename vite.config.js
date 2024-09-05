import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// vite.config.js

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Убедитесь, что выходная директория правильная
    rollupOptions: {
      output: {
        // Проверьте, чтобы настройки здесь были корректные
      },
    },
  },
});
