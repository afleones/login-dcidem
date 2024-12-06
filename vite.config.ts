import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';  // Asegúrate de importar tailwindcss
import autoprefixer from 'autoprefixer'; // Asegúrate de importar autoprefixer
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    tailwindcss(),  // Usa tailwindcss como un plugin
    autoprefixer(), // Usa autoprefixer como un plugin
    svgr(),
  ],
});
