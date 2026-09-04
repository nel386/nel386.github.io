# Nelson González — Laboratorio personal

Portfolio personal construido con Next.js, React, TypeScript y Tailwind CSS.

La web funciona como un escaparate de productos, juegos y herramientas. El
contenido editorial vive en [src/content/portfolio-content.md](src/content/portfolio-content.md)
y los datos públicos de los proyectos en [src/lib/constants/projects.ts](src/lib/constants/projects.ts).

## Desarrollo

```bash
npm install
npm run dev
```

## Comprobaciones

```bash
npm run build
npm run lint
```

La publicación se realiza mediante GitHub Actions cuando se solicita y no forma
parte de los cambios editoriales locales.
