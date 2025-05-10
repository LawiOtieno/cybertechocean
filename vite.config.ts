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
      "https://cybertechocean.vercel.app/"
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
