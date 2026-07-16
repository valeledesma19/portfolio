import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Si vas a publicar en GitHub Pages como valeledesma19.github.io/NOMBRE_DEL_REPO,
// descomentá la siguiente línea y reemplazá NOMBRE_DEL_REPO por el nombre real del repositorio.
// base: "/NOMBRE_DEL_REPO/",

export default defineConfig({
  plugins: [react()],
  // base: "/NOMBRE_DEL_REPO/",
});
