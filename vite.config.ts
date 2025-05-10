import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5000,
    strictPort: true,
    hmr: {
      clientPort: 443
    },
    allowedHosts: [
      "78557846-d5be-4f6c-9d62-c35c20684158-00-35sk86o06vbon.spock.replit.dev"
    ]
  },
  preview: {
    host: true,
    port: 5000,
    strictPort: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
