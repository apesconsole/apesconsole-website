import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Served from the custom domain (www.apesconsole.com) at the root, so base is "/".
  base: "/",
});
