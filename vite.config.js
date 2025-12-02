import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    build: {
      outDir: "dist",
    },
    server: {
      base: "/case-converter/",
    },
    plugins: [react()],
  };
});
