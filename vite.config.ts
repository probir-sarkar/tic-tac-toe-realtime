import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
      "@/components": "/src/components",
    },
  },
  plugins: [react(), TanStackRouterVite()],
});
