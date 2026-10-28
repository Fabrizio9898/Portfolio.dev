import { getCollection, type CollectionEntry } from "astro:content";

export type Project = CollectionEntry<"projects">;

export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection("projects", ({ data }) => !data.draft);
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export const projectUrl = (id: string) => `/proyectos/${id}`;

export const hostname = (url?: string) =>
  url ? new URL(url).hostname.replace(/^www\./, "") : undefined;

// Claves de i18n (src/i18n/*.json) para el badge de estado de cada proyecto
export const STATUS_KEYS = {
  live: "STATUS_LIVE",
  store: "STATUS_STORE",
  demo: "STATUS_DEMO",
  private: "STATUS_PRIVATE",
  bootcamp: "STATUS_BOOTCAMP",
} as const;
