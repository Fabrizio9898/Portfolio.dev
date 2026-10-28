---
order: 3
category: ai
status: private
title:
  es: UTNBot — IA para el campus virtual
  en: UTNBot — AI for the virtual campus
summary:
  es: Servidor MCP y bot de Discord con IA que consulta materias, tareas y notas del aula virtual.
  en: MCP server and AI Discord bot that reads courses, assignments and grades from the university LMS.
role:
  es: Desarrollo completo
  en: Full development
year: "2026"
stack: [TYPESCRIPT, NODE, MCP, DISCORD, AI]
media:
  poster: /projects/utn-bot/poster.webp
  video: /projects/utn-bot/scroll
  demo: /projects/utn-bot/demo.mp4
  gallery:
    - /projects/utn-bot/gallery-campus.webp
---

<div data-lang="es">

## El problema

Revisar el aula virtual de la facultad (Moodle) para saber qué materias tengo, qué tareas vencen o qué nota me pusieron implica varios clics por consulta.

## La solución

Un **servidor MCP** (Model Context Protocol) que le da a un agente de IA —Claude, ChatGPT, Cursor o un bot propio de Discord— acceso al aula virtual: materias, foros, tareas con estado y devolución del docente, y lectura de archivos (PDF, Word, PowerPoint, Excel e imágenes).

Sobre eso, **UTNBot**: un bot de Discord al que le preguntás en lenguaje natural "¿qué materias tengo?" o "¿qué nota saqué en el parcial?" y responde con los datos reales del campus.

## Lo técnico

- Tools MCP de lectura y de escritura (publicar en foros, entregar tareas, mandar mensajes), con confirmación del usuario antes de escribir.
- Login al campus automatizado con navegador.
- El bot de Discord expone solo las tools de lectura, por seguridad.
- Proyecto personal, no oficial; extiende un MCP open source para soportar el campus de la Tecnicatura en Videojuegos.

</div>

<div data-lang="en">

## The problem

Checking the university's virtual campus (Moodle) to see my courses, upcoming assignments or grades takes several clicks for every question.

## The solution

An **MCP server** (Model Context Protocol) that gives an AI agent —Claude, ChatGPT, Cursor or a custom Discord bot— access to the virtual campus: courses, forums, assignments with status and teacher feedback, and file reading (PDF, Word, PowerPoint, Excel and images).

On top of it, **UTNBot**: a Discord bot you can ask in plain language "what courses am I taking?" or "what grade did I get on the midterm?" and it answers with real campus data.

## Under the hood

- Read and write MCP tools (forum posts, assignment submissions, messages), with user confirmation before any write.
- Browser-automated campus login.
- The Discord bot only exposes read tools, for safety.
- Personal, unofficial project; it extends an open-source MCP to support the Game Development program's campus.

</div>
