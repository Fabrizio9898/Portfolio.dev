import NextJS from "@/components/icons/NextJS.astro";
import NestJS from "@/components/icons/NestJS.astro";
import Tailwind from "@/components/icons/Tailwind.astro";
import TypeORM from "@/components/icons/TypeORM.astro";
import React from "@/components/icons/React.astro";
import Typescript from "@/components/icons/Typescript.astro";
import JavaScript from "@/components/icons/JavaScript.astro";
import SQL from "@/components/icons/SQL.astro";
import HTML from "@/components/icons/HTML.astro";
import CSS from "@/components/icons/CSS.astro";
import Node from "@/components/icons/Node.astro";

// Las claves se usan en el campo `stack` de cada proyecto (src/content/projects/*.md).
// `icon` es opcional: sin ícono el chip muestra solo el nombre.
export const TAGS = {
  NEST: { name: "Nest.js", icon: NestJS },
  NEXT: { name: "Next.js", icon: NextJS },
  REACT: { name: "React", icon: React },
  REACT_NATIVE: { name: "React Native", icon: React },
  ASTRO: { name: "Astro" },
  TAILWIND: { name: "Tailwind CSS", icon: Tailwind },
  TYPESCRIPT: { name: "TypeScript", icon: Typescript },
  JAVASCRIPT: { name: "JavaScript", icon: JavaScript },
  NODE: { name: "Node.js", icon: Node },
  TYPEORM: { name: "TypeORM", icon: TypeORM },
  SQL: { name: "SQL", icon: SQL },
  POSTGRES: { name: "PostgreSQL", icon: SQL },
  MONGODB: { name: "MongoDB" },
  PAYLOAD: { name: "Payload CMS" },
  HTML: { name: "HTML", icon: HTML },
  CSS: { name: "CSS", icon: CSS },
  DISCORD: { name: "Discord.js" },
  MCP: { name: "MCP" },
  AI: { name: "IA / LLM" },
  STRIPE: { name: "Stripe" },
  SWAGGER: { name: "Swagger" },
};
