/// <reference types="vitest" />

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    setupFiles: "./tests/setup.ts",
  },
});
