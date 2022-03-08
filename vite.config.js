import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";

import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [vue(), Components({})],
});
