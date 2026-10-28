---
# Copiá este archivo como <slug>.md (el slug es el nombre del archivo y la URL: /proyectos/<slug>)
# Media en public/projects/<slug>/ — generala con:
#   node scripts/capture.mjs <slug> <url>        -> cover.webp, mobile.webp, mobile-full.webp
#   node scripts/record-scroll.mjs <slug> <url>  -> scroll.webm, scroll.mp4, poster.webp
order: 99            # posición en la grilla (menor = primero)
draft: true          # true = no se publica
featured: false      # true = card a todo el ancho
category: web        # web | mobile | backend | ai
status: live         # live | store | demo | private
title:
  es: Nombre del proyecto
  en: Project name
summary:
  es: Una línea que diga qué resuelve.
  en: One line on what it solves.
role:
  es: Diseño y desarrollo
  en: Design and development
year: "2026"
stack: [ASTRO, TAILWIND]   # claves de src/data/tags.js
links:
  live: https://ejemplo.com
  github: https://github.com/usuario/repo
  # store: link a Play Store / Chrome Web Store
  # related: slug del proyecto hermano (front <-> back)
media:
  poster: /projects/slug/poster.webp
  video: /projects/slug/scroll        # sin extensión: usa scroll.webm y scroll.mp4
  mobile: /projects/slug/mobile-full.webp
  gallery: []
---

<div data-lang="es">

## El desafío

## La solución

## Lo técnico

</div>

<div data-lang="en">

## The challenge

## The solution

## Under the hood

</div>
