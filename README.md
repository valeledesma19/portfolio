# Portafolio — Valentina Ledesma

Proyecto en **React + Vite + Tailwind CSS**. Sin backend: es 100% frontend estático.

## Correr en local

```bash
npm install
npm run dev
```

Abrí el link que te muestra la terminal (por defecto `http://localhost:5173`).

## Editar contenido

- **Proyectos**: `src/components/Projects.jsx` — ahí está la descripción de
  "Sports Booking Platform" puesta como estimación; ajustala con el detalle real.
- **Stack**: `src/components/Stack.jsx`
- **Sobre mí**: `src/components/About.jsx`
- **Contacto**: `src/components/Contact.jsx`
- **CV descargable**: reemplazá `public/CV_Valentina_Ledesma_ES.pdf` por tu versión
  más actualizada (mismo nombre de archivo, o actualizá el link en `Nav.jsx`).

## Publicar gratis

### Opción A — GitHub Pages (recomendada)

1. Creá un repo nuevo en GitHub, por ejemplo `portfolio`.
2. Subí este proyecto:
   ```bash
   git init
   git add .
   git commit -m "Portafolio inicial"
   git branch -M main
   git remote add origin https://github.com/valeledesma19/portfolio.git
   git push -u origin main
   ```
3. En `vite.config.js`, descomentá la línea `base: "/portfolio/"` (reemplazando
   `portfolio` por el nombre real de tu repo).
4. Instalá `gh-pages` (ya está en `package.json`) y publicá:
   ```bash
   npm run deploy
   ```
5. En GitHub → Settings → Pages, elegí la rama `gh-pages` como fuente.
6. Tu portafolio va a quedar en `https://valeledesma19.github.io/portfolio/`.

### Opción B — Vercel / Netlify

1. Subí el proyecto a GitHub (pasos 1-2 de arriba).
2. Entrá a [vercel.com](https://vercel.com) o [netlify.com](https://netlify.com),
   conectá tu cuenta de GitHub e importá el repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output: `dist`.
4. Deploy — te da un dominio gratis tipo `portfolio-valentina.vercel.app`.
