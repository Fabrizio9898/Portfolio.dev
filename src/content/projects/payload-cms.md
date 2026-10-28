---
order: 9
category: backend
status: private
title:
  es: CMS con Payload
  en: Payload CMS
summary:
  es: Panel de administración para que el cliente gestione proyectos, imágenes y usuarios de su sitio.
  en: Admin panel so the client can manage their site's projects, images and users.
role:
  es: Desarrollo backend
  en: Backend development
year: "2026"
stack: [PAYLOAD, NEXT, TYPESCRIPT, POSTGRES]
links:
  github: https://github.com/Fabrizio9898/PaylaodCMSforArquitecturePortfolio
  related: arquitecto-davalos
---

<div data-lang="es">

## Qué hace

Es el CMS detrás del [portfolio de arquitectura](/proyectos/arquitecto-davalos). El cliente entra a un panel, carga un proyecto con sus fotos y textos, y el sitio se actualiza solo.

## Lo técnico

- Payload CMS sobre Next.js, con editor de texto enriquecido (Lexical).
- Colecciones de proyectos, media y usuarios con roles.
- Imágenes optimizadas con sharp y almacenadas en Vercel Blob.
- API consumida por el sitio público en Astro.

</div>

<div data-lang="en">

## What it does

It's the CMS behind the [architecture portfolio](/proyectos/arquitecto-davalos). The client logs into a panel, uploads a project with its photos and text, and the site updates on its own.

## Under the hood

- Payload CMS on Next.js, with a rich text editor (Lexical).
- Collections for projects, media and role-based users.
- Images optimized with sharp and stored on Vercel Blob.
- API consumed by the public Astro site.

</div>
