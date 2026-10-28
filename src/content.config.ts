import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const localized = z.object({ es: z.string(), en: z.string() });

// Cada proyecto es un .md en src/content/projects/ y su media vive en public/projects/<slug>/.
// Los archivos que empiezan con "_" (como _template.md) se ignoran.
const projects = defineCollection({
  loader: glob({ pattern: "[^_]*.md", base: "./src/content/projects" }),
  schema: z.object({
    order: z.number(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    category: z.enum(["web", "mobile", "backend", "ai"]),
    status: z.enum(["live", "store", "demo", "private", "bootcamp"]),
    title: localized,
    summary: localized,
    role: localized,
    year: z.string(),
    stack: z.array(z.string()),
    links: z
      .object({
        live: z.string().url().optional(),
        github: z.string().url().optional(),
        store: z.string().url().optional(),
        related: z.string().optional(),
        // Varios repositorios (ej. frontend y API de un mismo proyecto)
        repos: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
      })
      .default({}),
    media: z
      .object({
        poster: z.string().optional(),
        video: z.string().optional(),
        demo: z.string().optional(),
        mobile: z.string().optional(),
        gallery: z.array(z.string()).default([]),
        fit: z.enum(["cover", "contain"]).default("cover"),
      })
      .default({}),
  }),
});

export const collections = { projects };
