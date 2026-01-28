This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Estructura del proyecto y contenido del portfolio

He añadido recomendaciones y archivos de contenido para facilitar la integración del texto del portfolio (listo para copiar/pegar). Sigue estas indicaciones:

- **Contenido listo**: [src/content/portfolio-content.md](src/content/portfolio-content.md) — todos los textos listos por sección (HERO, PROYECTOS, SOBRE MÍ, SKILLS, CONTACTO).
- **Componentes**: crea componentes en `src/components/` con nombres en minúsculas y guiones, por ejemplo: [src/components/hero-section.tsx](src/components/hero-section.tsx). Consulta [src/components/README.md](src/components/README.md) para convenciones y estructura.
- **Types**: si quieres añadir tipos TypeScript, consulta [src/types/README.md](src/types/README.md) que incluye sugerencias mínimas.

Cómo usar el contenido:

- Copia el bloque correspondiente desde `src/content/portfolio-content.md` y pégalo en el JSX/TSX de la sección correspondiente. Los textos están pensados para ser mostrados directamente (títulos, párrafos y bullets).
- Mantén los componentes pequeños y usa `use client` sólo cuando necesites interactividad (botones, formularios, animaciones).
- Nombres recomendados de archivos: `hero-section.tsx`, `projects-section.tsx`, `about-section.tsx`, `skills-section.tsx`, `contact-section.tsx`.

Si quieres, puedo crear los componentes TSX scaffold por ti — dímelo y los genero.
