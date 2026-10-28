import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderSlot, a as renderComponent, d as addAttribute, b as createAstro, s as spreadAttributes, e as renderScript, F as Fragment } from './astro/server_gxSWGnP7.mjs';
/* empty css                         */
import { d as $$Mail, e as $$LinkedIn, a as $$Github, T as TAGS, p as projectUrl, b as $$ProjectMedia, $ as $$Localized, S as STATUS_KEYS, g as getProjects, c as $$Layout } from './ProjectMedia_CgnEf_Sd.mjs';
import { atom } from 'nanostores';

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="badge-container" data-astro-cid-vnkj5cct> <div class="badge-content" data-astro-cid-vnkj5cct> ${renderSlot($$result, $$slots["default"])} </div> <div class="badge-overlay" data-astro-cid-vnkj5cct> <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-vnkj5cct> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-vnkj5cct></path> </svg> </div> </div> `;
}, "C:/Users/USUARIO/Portfolio.dev/src/components/icons/Badge.astro", undefined);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between" data-astro-cid-a42nmg7r> <div class="max-w-xl" data-astro-cid-a42nmg7r> <a href="https://linkedin.com/in/fabrizio-andrade" target="_blank" rel="noopener" class="animated-badge inline-flex items-center transition" data-astro-cid-a42nmg7r> ${renderComponent($$result, "Badge", $$Badge, { "data-astro-cid-a42nmg7r": true }, { "default": ($$result2) => renderTemplate`<span data-i18n="HERO_BADGE" data-astro-cid-a42nmg7r>Disponible para trabajar</span>` })} </a> <h1 class="mb-0 mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl" data-i18n="SECTION_HERO_TITLE" data-astro-cid-a42nmg7r>
Hola, soy Fabrizio
</h1> <p class="mt-4 text-pretty text-xl text-gray-700 dark:text-gray-300" data-i18n="HERO_PITCH" data-astro-cid-a42nmg7r>
Desarrollador web fullstack. Diseño y construyo sitios y productos que se ven profesionales y funcionan de verdad.
</p> <p class="mt-2 text-base text-gray-500 dark:text-gray-400" data-i18n="HERO_SERVICES" data-astro-cid-a42nmg7r>
Landings, sistemas de reservas, paneles con CMS, APIs y apps mobile.
</p> <div class="mt-8 flex flex-wrap items-center gap-3" data-astro-cid-a42nmg7r> <a href="#proyectos" class="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2" data-astro-cid-a42nmg7r> <span data-i18n="HERO_CTA_PROJECTS" data-astro-cid-a42nmg7r>Ver proyectos</span> <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-a42nmg7r><path d="M12 5v14M6 13l6 6 6-6" data-astro-cid-a42nmg7r></path></svg> </a> <a href="#contacto" class="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 font-medium text-gray-800 transition hover:bg-black/5 dark:border-white/15 dark:text-gray-100 dark:hover:bg-white/10" data-astro-cid-a42nmg7r> ${renderComponent($$result, "MailIcon", $$Mail, { "class": "size-4", "data-astro-cid-a42nmg7r": true })} <span data-i18n="HERO_CONTACT" data-astro-cid-a42nmg7r>Contáctame</span> </a> <a href="https://www.linkedin.com/in/fabrizio-andrade/" target="_blank" rel="noopener" aria-label="LinkedIn" class="rounded-full p-2.5 text-gray-600 transition hover:bg-black/5 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white" data-astro-cid-a42nmg7r> ${renderComponent($$result, "LinkedInIcon", $$LinkedIn, { "class": "size-5", "data-astro-cid-a42nmg7r": true })} </a> <a href="https://github.com/Fabrizio9898" target="_blank" rel="noopener" aria-label="GitHub" class="rounded-full p-2.5 text-gray-600 transition hover:bg-black/5 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white" data-astro-cid-a42nmg7r> ${renderComponent($$result, "GitHub", $$Github, { "class": "size-5", "data-astro-cid-a42nmg7r": true })} </a> </div> </div> <img class="size-28 shrink-0 rounded-full object-cover shadow-xl ring-4 ring-white dark:ring-slate-800 md:size-44" src="/fotodeperfil.webp" alt="Fabrizio Andrade" width="176" height="176" data-astro-cid-a42nmg7r> </div> `;
}, "C:/Users/USUARIO/Portfolio.dev/src/components/Hero/Hero.astro", undefined);

const $$Astro$9 = createAstro();
const $$TitleSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$TitleSection;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(`flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white ${Astro2.props.className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </h2>`;
}, "C:/Users/USUARIO/Portfolio.dev/src/components/TitleSection/TitleSection.astro", undefined);

const $$Astro$8 = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "C:/Users/USUARIO/Portfolio.dev/src/components/icons/Code.astro", undefined);

const PORTFOLIO_TITLE$1 = "Fabrizio Andrade Portfolio - Fullstack Developer and Computer Science Student";
const PORTFOLIO_DESCRIPTION$1 = "";
const NAVBAR_ABOUT$1 = "About me";
const NAVBAR_TRAYECTORY$1 = "Background";
const NAVBAR_PROYECTS$1 = "Projects";
const NAVBAR_CONTACT$1 = "Contact";
const NAVBAR_SKILLS$1 = "Skills";
const SECTION_HERO_TITLE$1 = "Hello, I'm Fabrizio";
const HERO_BADGE$1 = "Open to work";
const HERO_CONTACT$1 = "Contact me";
const FOOTER_INICIO$1 = "Home";
const FOOTER_CONTACT$1 = "Contact";
const HERO_TITLE$1 = "Product Engineer | Fullstack & Mobile";
const FIRST_DESCRIPTION$1 = "specialized in building";
const SECOND_HERO_DESCRIPTION$1 = "interactive and scalable solutions";
const LAST_DESCRIPTION$1 = "from";
const HERO_PITCH$1 = "Fullstack web developer. I design and build sites and products that look professional and actually work.";
const HERO_SERVICES$1 = "Landing pages, booking systems, CMS-powered dashboards, APIs and mobile apps.";
const HERO_CTA_PROJECTS$1 = "See projects";
const FILTER_ALL$1 = "All";
const FILTER_WEB$1 = "Web";
const FILTER_MOBILE$1 = "Mobile";
const FILTER_BACKEND$1 = "Backend & APIs";
const FILTER_AI$1 = "AI";
const STATUS_LIVE$1 = "Live";
const STATUS_STORE$1 = "Published";
const STATUS_DEMO$1 = "Demo";
const STATUS_PRIVATE$1 = "Side project";
const PROJECT_VIEW$1 = "View project";
const PROJECT_BACK$1 = "Back to projects";
const PROJECT_LIVE$1 = "Visit site";
const PROJECT_CODE$1 = "Code";
const PROJECT_STACK$1 = "Stack";
const PROJECT_RELATED$1 = "Related project";
const PROJECT_NEXT$1 = "Next project";
const PROJECT_MOBILE$1 = "Mobile version";
const PROJECT_GALLERY$1 = "Screenshots";
const CONTACT_TITLE$1 = "Have a project in mind?";
const CONTACT_TEXT$1 = "Landing page, booking system, admin panel or a custom app: tell me what you need and let's build it.";
const CONTACT_CTA$1 = "Email me";
const EXPERIENCE_TITLE$1 = "Experience";
const EDUCATION_TITLE$1 = "Education";
const CONTACT_EYEBROW$1 = "Contact";
const STATUS_BOOTCAMP$1 = "Bootcamp";
const english = {
  PORTFOLIO_TITLE: PORTFOLIO_TITLE$1,
  PORTFOLIO_DESCRIPTION: PORTFOLIO_DESCRIPTION$1,
  NAVBAR_ABOUT: NAVBAR_ABOUT$1,
  NAVBAR_TRAYECTORY: NAVBAR_TRAYECTORY$1,
  NAVBAR_PROYECTS: NAVBAR_PROYECTS$1,
  NAVBAR_CONTACT: NAVBAR_CONTACT$1,
  NAVBAR_SKILLS: NAVBAR_SKILLS$1,
  SECTION_HERO_TITLE: SECTION_HERO_TITLE$1,
  HERO_BADGE: HERO_BADGE$1,
  HERO_CONTACT: HERO_CONTACT$1,
  FOOTER_INICIO: FOOTER_INICIO$1,
  FOOTER_CONTACT: FOOTER_CONTACT$1,
  HERO_TITLE: HERO_TITLE$1,
  FIRST_DESCRIPTION: FIRST_DESCRIPTION$1,
  SECOND_HERO_DESCRIPTION: SECOND_HERO_DESCRIPTION$1,
  LAST_DESCRIPTION: LAST_DESCRIPTION$1,
  HERO_PITCH: HERO_PITCH$1,
  HERO_SERVICES: HERO_SERVICES$1,
  HERO_CTA_PROJECTS: HERO_CTA_PROJECTS$1,
  FILTER_ALL: FILTER_ALL$1,
  FILTER_WEB: FILTER_WEB$1,
  FILTER_MOBILE: FILTER_MOBILE$1,
  FILTER_BACKEND: FILTER_BACKEND$1,
  FILTER_AI: FILTER_AI$1,
  STATUS_LIVE: STATUS_LIVE$1,
  STATUS_STORE: STATUS_STORE$1,
  STATUS_DEMO: STATUS_DEMO$1,
  STATUS_PRIVATE: STATUS_PRIVATE$1,
  PROJECT_VIEW: PROJECT_VIEW$1,
  PROJECT_BACK: PROJECT_BACK$1,
  PROJECT_LIVE: PROJECT_LIVE$1,
  PROJECT_CODE: PROJECT_CODE$1,
  PROJECT_STACK: PROJECT_STACK$1,
  PROJECT_RELATED: PROJECT_RELATED$1,
  PROJECT_NEXT: PROJECT_NEXT$1,
  PROJECT_MOBILE: PROJECT_MOBILE$1,
  PROJECT_GALLERY: PROJECT_GALLERY$1,
  CONTACT_TITLE: CONTACT_TITLE$1,
  CONTACT_TEXT: CONTACT_TEXT$1,
  CONTACT_CTA: CONTACT_CTA$1,
  EXPERIENCE_TITLE: EXPERIENCE_TITLE$1,
  EDUCATION_TITLE: EDUCATION_TITLE$1,
  CONTACT_EYEBROW: CONTACT_EYEBROW$1,
  STATUS_BOOTCAMP: STATUS_BOOTCAMP$1,
};

const PORTFOLIO_TITLE = "Portfolio de Fabrizio Andrade - Desarrollador Fullstack y Estudiante de Ciencias de la Computación";
const PORTFOLIO_DESCRIPTION = "";
const NAVBAR_ABOUT = "Sobre mí";
const NAVBAR_TRAYECTORY = "Trayectoria";
const NAVBAR_PROYECTS = "Proyectos";
const NAVBAR_CONTACT = "Contacto";
const NAVBAR_SKILLS = "Habilidades";
const SECTION_HERO_TITLE = "Hola, Soy Fabrizio";
const HERO_BADGE = "Disponible para trabajar";
const HERO_CONTACT = "Contáctame";
const FOOTER_INICIO = "Inicio";
const FOOTER_CONTACT = "Contacto";
const HERO_TITLE = "Ingeniero de Producto | Fullstack & Mobile";
const FIRST_DESCRIPTION = "especializado en crear";
const SECOND_HERO_DESCRIPTION = "soluciones interactivas y escalables";
const LAST_DESCRIPTION = "desde";
const HERO_PITCH = "Desarrollador web fullstack. Diseño y construyo sitios y productos que se ven profesionales y funcionan de verdad.";
const HERO_SERVICES = "Landings, sistemas de reservas, paneles con CMS, APIs y apps mobile.";
const HERO_CTA_PROJECTS = "Ver proyectos";
const FILTER_ALL = "Todos";
const FILTER_WEB = "Web";
const FILTER_MOBILE = "Mobile";
const FILTER_BACKEND = "Backend & APIs";
const FILTER_AI = "IA";
const STATUS_LIVE = "Online";
const STATUS_STORE = "Publicado";
const STATUS_DEMO = "Demo";
const STATUS_PRIVATE = "Proyecto propio";
const PROJECT_VIEW = "Ver proyecto";
const PROJECT_BACK = "Volver a proyectos";
const PROJECT_LIVE = "Ver sitio";
const PROJECT_CODE = "Código";
const PROJECT_STACK = "Stack";
const PROJECT_RELATED = "Proyecto relacionado";
const PROJECT_NEXT = "Siguiente proyecto";
const PROJECT_MOBILE = "Versión mobile";
const PROJECT_GALLERY = "Capturas";
const CONTACT_TITLE = "¿Tenés un proyecto en mente?";
const CONTACT_TEXT = "Landing, sistema de reservas, panel de administración o una app a medida: contame qué necesitás y lo armamos.";
const CONTACT_CTA = "Escribime";
const EXPERIENCE_TITLE = "Experiencia";
const EDUCATION_TITLE = "Educación";
const CONTACT_EYEBROW = "Contacto";
const STATUS_BOOTCAMP = "Bootcamp";
const spanish = {
  PORTFOLIO_TITLE,
  PORTFOLIO_DESCRIPTION,
  NAVBAR_ABOUT,
  NAVBAR_TRAYECTORY,
  NAVBAR_PROYECTS,
  NAVBAR_CONTACT,
  NAVBAR_SKILLS,
  SECTION_HERO_TITLE,
  HERO_BADGE,
  HERO_CONTACT,
  FOOTER_INICIO,
  FOOTER_CONTACT,
  HERO_TITLE,
  FIRST_DESCRIPTION,
  SECOND_HERO_DESCRIPTION,
  LAST_DESCRIPTION,
  HERO_PITCH,
  HERO_SERVICES,
  HERO_CTA_PROJECTS,
  FILTER_ALL,
  FILTER_WEB,
  FILTER_MOBILE,
  FILTER_BACKEND,
  FILTER_AI,
  STATUS_LIVE,
  STATUS_STORE,
  STATUS_DEMO,
  STATUS_PRIVATE,
  PROJECT_VIEW,
  PROJECT_BACK,
  PROJECT_LIVE,
  PROJECT_CODE,
  PROJECT_STACK,
  PROJECT_RELATED,
  PROJECT_NEXT,
  PROJECT_MOBILE,
  PROJECT_GALLERY,
  CONTACT_TITLE,
  CONTACT_TEXT,
  CONTACT_CTA,
  EXPERIENCE_TITLE,
  EDUCATION_TITLE,
  CONTACT_EYEBROW,
  STATUS_BOOTCAMP,
};

const LANGUAGES = {
  ESPAÑOL: "es",
  ENGLISH: "en"
};
const getI18 = ({
  currentLocale = "es"
}) => {
  if (currentLocale === LANGUAGES.ESPAÑOL) return spanish;
  if (currentLocale === LANGUAGES.ENGLISH) return english;
  return spanish;
};
const LANGUAGE_CODES = Object.values(LANGUAGES);

const currentLanguage = atom(LANGUAGE_CODES[0] || "es");

const $$Astro$7 = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(id, "data-section")}${addAttribute(`section ${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl `, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/USUARIO/Portfolio.dev/src/components/Section_Container.astro", undefined);

const $$Astro$6 = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project, eager } = Astro2.props;
  const { title, summary, stack, status, featured, category } = project.data;
  const stackNames = stack.map((key) => TAGS[key]?.name ?? key);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(projectUrl(project.id), "href")}${addAttribute([
    "project-card group flex flex-col gap-4 rounded-2xl p-2 transition duration-300",
    "hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:hover:bg-white/[0.04]",
    featured && "md:col-span-2"
  ], "class:list")}${addAttribute(category, "data-category")}> <div class="transition duration-500 ease-out md:group-hover:-translate-y-1 md:group-hover:shadow-xl rounded-xl"> ${renderComponent($$result, "ProjectMedia", $$ProjectMedia, { "project": project, "aspect": featured ? "aspect-[16/9]" : "aspect-[16/10]", "eager": eager })} </div> <div class="flex flex-col gap-2 px-1 pb-2"> <div class="flex items-start justify-between gap-3"> <h3 class="text-lg font-semibold leading-snug text-gray-900 dark:text-white md:text-xl"> ${renderComponent($$result, "Localized", $$Localized, { "text": title })} </h3> <span class="mt-1 shrink-0 rounded-full border border-black/10 px-2 py-0.5 text-[11px] font-medium text-gray-600 dark:border-white/15 dark:text-gray-300"${addAttribute(STATUS_KEYS[status], "data-i18n")}> ${status} </span> </div> <p class="text-pretty text-sm text-gray-600 dark:text-gray-400 md:text-base"> ${renderComponent($$result, "Localized", $$Localized, { "text": summary })} </p> <div class="mt-1 flex items-center justify-between gap-3"> <ul class="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-gray-500 dark:text-gray-500"> ${stackNames.slice(0, 4).map((name) => renderTemplate`<li>${name}</li>`)} </ul> <span class="flex shrink-0 items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400"> <span data-i18n="PROJECT_VIEW">Ver proyecto</span> <svg class="size-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg> </span> </div> </div> </a>`;
}, "C:/Users/USUARIO/Portfolio.dev/src/components/Projects/ProjectCard.astro", undefined);

const $$ProjectsGrid = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getProjects();
  const FILTERS = [
    { value: "all", key: "FILTER_ALL", label: "Todos" },
    { value: "web", key: "FILTER_WEB", label: "Web" },
    { value: "mobile", key: "FILTER_MOBILE", label: "Mobile" },
    { value: "backend", key: "FILTER_BACKEND", label: "Backend & APIs" },
    { value: "ai", key: "FILTER_AI", label: "IA" }
  ].filter((f) => f.value === "all" || projects.some((p) => p.data.category === f.value));
  return renderTemplate`${maybeRenderHead()}<div class="filter-bar" role="group" aria-label="Filtrar proyectos" data-astro-cid-vue4krci> ${FILTERS.map((f, i) => renderTemplate`<button${addAttribute(["filter-btn", i === 0 && "active"], "class:list")}${addAttribute(f.value, "data-filter")}${addAttribute(f.key, "data-i18n")}${addAttribute(i === 0 ? "true" : "false", "aria-pressed")} type="button" data-astro-cid-vue4krci> ${f.label} </button>`)} </div> <div id="projects-grid" class="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2" data-astro-cid-vue4krci> ${projects.map((project, i) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "project": project, "eager": i < 2, "data-astro-cid-vue4krci": true })}`)} </div>  ${renderScript($$result, "C:/Users/USUARIO/Portfolio.dev/src/components/Projects/ProjectsGrid.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/USUARIO/Portfolio.dev/src/components/Projects/ProjectsGrid.astro", undefined);

const $$Astro$5 = createAstro();
const $$ProfileCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ProfileCheck;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M15 19l2 2l4 -4"></path></svg>`;
}, "C:/Users/USUARIO/Portfolio.dev/src/components/icons/ProfileCheck.astro", undefined);

const $$Astro$4 = createAstro();
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, company, date, description, stack } = Astro2.props;
  const hasDetails = Boolean(description || stack);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "relative mx-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]",
    hasDetails ? "pb-12" : "pb-4"
  ], "class:list")}> <div${addAttribute(["relative md:col-span-2", hasDetails && "pb-12"], "class:list")}> <div class="sticky top-0"> <span class="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">&bull;</span> <h3 class="text-xl font-bold text-yellow-400"> ${renderComponent($$result, "Localized", $$Localized, { "text": title })} </h3> <h4 class="font-semibold text-xl text-gray-600 dark:text-white"> ${renderComponent($$result, "Localized", $$Localized, { "text": company })} </h4> <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80"> ${renderComponent($$result, "Localized", $$Localized, { "text": date })} </time> </div> </div> ${hasDetails && renderTemplate`<div class="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"> ${description && renderTemplate`<p>${renderComponent($$result, "Localized", $$Localized, { "text": description })}</p>`} ${stack && renderTemplate`<ul class="mt-2 flex flex-wrap gap-2"> ${stack.map((tech) => renderTemplate`<li class="rounded-full border border-black/10 px-2.5 py-1 text-xs dark:border-white/15">${tech}</li>`)} </ul>`} </div>`} </div>`;
}, "C:/Users/USUARIO/Portfolio.dev/src/components/Experience/ExperienceItem.astro", undefined);

const $$Astro$3 = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Experience;
  const EXPERIENCE = [
    {
      date: { es: "Nov 2024 \u2014 Actualidad", en: "Nov 2024 \u2014 Present" },
      title: { es: "Desarrollador Web Freelance", en: "Freelance Web Developer" },
      company: { es: "Independiente", en: "Self-employed" },
      description: {
        es: "Dise\xF1o y desarrollo sitios y sistemas a medida para clientes: landings, sistemas de reservas, paneles con CMS y APIs. Me encargo del proceso completo, desde entender qu\xE9 necesita el negocio hasta el deploy y el mantenimiento.",
        en: "I design and build custom websites and systems for clients: landing pages, booking systems, CMS-powered dashboards and APIs. I handle the whole process, from understanding what the business needs to deployment and maintenance."
      },
      stack: ["Astro", "Next.js", "NestJS", "Payload CMS", "React Native", "TypeScript"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="ranking-list relative mt-6" data-astro-cid-vjov3bg6> ${EXPERIENCE.map((experience) => renderTemplate`<li class="mb-10 ms-6" data-astro-cid-vjov3bg6> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experience, "data-astro-cid-vjov3bg6": true })} </li>`)} </ol> `;
}, "C:/Users/USUARIO/Portfolio.dev/src/components/Experience/Experience.astro", undefined);

const $$Astro$2 = createAstro();
const $$Adjustment = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Adjustment;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"></path> </svg>`;
}, "C:/Users/USUARIO/Portfolio.dev/src/components/icons/Adjustment.astro", undefined);

const $$Astro$1 = createAstro();
const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AboutMe;
  const PARAGRAPHS = [
    {
      es: "Soy desarrollador web fullstack. Me gusta **convertir ideas en productos** que la gente realmente use, desde la primera charla con el cliente hasta el deploy.",
      en: "I'm a fullstack web developer. I enjoy **turning ideas into products** people actually use, from the first conversation with the client to deployment."
    },
    {
      es: "Trabajo con **JavaScript y TypeScript** en todo el stack: Astro y Next.js en el frontend, NestJS y Node en el backend, y React Native para mobile. Me importa tanto **c\xF3mo se ve** como **c\xF3mo funciona por dentro**.",
      en: "I work with **JavaScript and TypeScript** across the stack: Astro and Next.js on the frontend, NestJS and Node on the backend, and React Native for mobile. I care as much about **how it looks** as about **how it works under the hood**."
    },
    {
      es: "Hoy estudio **Ingenier\xEDa en Inform\xE1tica** en la UNAJ y **Desarrollo de Videojuegos** en la UTN, donde exploro interacci\xF3n, gameplay y sistemas en tiempo real.",
      en: "I'm currently studying **Computer Engineering** at UNAJ and **Video Game Development** at UTN, where I explore interaction, gameplay and real-time systems."
    }
  ];
  const toWords = (text) => {
    let highlight = false;
    return text.split(/\s+/).map((raw) => {
      const isHighlight = highlight || raw.startsWith("**");
      if ((raw.match(/\*\*/g) ?? []).length % 2 === 1) highlight = !highlight;
      return { word: raw.replaceAll("**", ""), highlight: isHighlight };
    });
  };
  return renderTemplate`${maybeRenderHead()}<div class="about-text flex flex-col gap-8" data-astro-cid-ibmv6mrd> ${PARAGRAPHS.map(
    (paragraph) => ["es", "en"].map((lang) => renderTemplate`<p${addAttribute(lang, "data-lang")} class="text-pretty text-2xl font-medium leading-snug tracking-tight text-gray-900 dark:text-white md:text-[2rem] md:leading-tight" data-astro-cid-ibmv6mrd> ${toWords(paragraph[lang]).map(({ word, highlight }) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-ibmv6mrd": true }, { "default": ($$result2) => renderTemplate` <span${addAttribute(["reveal-word", highlight && "is-highlight"], "class:list")} data-astro-cid-ibmv6mrd>${word}</span>${" "}` })}`)} </p>`)
  )} </div> `;
}, "C:/Users/USUARIO/Portfolio.dev/src/components/About/AboutMe.astro", undefined);

const $$Education = createComponent(($$result, $$props, $$slots) => {
  const EDUCATION = [
    {
      date: { es: "2026 \u2014 Actualidad", en: "2026 \u2014 Present" },
      title: { es: "Ingenier\xEDa en Inform\xE1tica", en: "Computer Engineering" },
      company: { es: "Universidad Nacional Arturo Jauretche (UNAJ)", en: "Universidad Nacional Arturo Jauretche (UNAJ)" }
    },
    {
      date: { es: "2026 \u2014 Actualidad", en: "2026 \u2014 Present" },
      title: {
        es: "Tecnicatura en Desarrollo y Producci\xF3n de Videojuegos",
        en: "Associate Degree in Video Game Development and Production"
      },
      company: { es: "Universidad Tecnol\xF3gica Nacional (UTN)", en: "National Technological University (UTN)" }
    },
    {
      date: { es: "2022 \u2014 2023", en: "2022 \u2014 2023" },
      title: { es: "Bootcamp Full Stack", en: "Full Stack Bootcamp" },
      company: { es: "Formaci\xF3n intensiva", en: "Intensive training" },
      description: {
        es: "M\xE1s de 800 horas de pr\xE1ctica en desarrollo web fullstack, con proyectos en equipo que simulaban entornos de trabajo reales.",
        en: "800+ hours of hands-on fullstack web development, with team projects simulating real work environments."
      }
    },
    {
      date: { es: "2010 \u2014 2022", en: "2010 \u2014 2022" },
      title: { es: "Ingl\xE9s nivel C2 (Proficient)", en: "English C2 (Proficient)" },
      company: { es: "Denver Institute", en: "Denver Institute" }
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="ranking-list relative mt-6" data-astro-cid-uywsagrj> ${EDUCATION.map((item) => renderTemplate`<li class="mb-10 ms-6" data-astro-cid-uywsagrj> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...item, "data-astro-cid-uywsagrj": true })} </li>`)} </ol> `;
}, "C:/Users/USUARIO/Portfolio.dev/src/components/Experience/Education.astro", undefined);

const $$Astro = createAstro();
const $$School = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$School;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path></svg>`;
}, "C:/Users/USUARIO/Portfolio.dev/src/components/icons/School.astro", undefined);

const $$App = createComponent(($$result, $$props, $$slots) => {
  const i18n = getI18({ currentLocale: currentLanguage.get() });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n?.PORTFOLIO_TITLE, "description": "Fabrizio Andrade \u2014 desarrollador web fullstack. Landings, sistemas de reservas, CMS, APIs y apps." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "inicio", "class": "pb-16 pt-24 md:py-36" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ` })} <div class="space-y-24"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "proyectos" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CodeIcon", $$Code, { "class": "size-7" })} <span data-i18n="NAVBAR_PROYECTS">Proyectos</span> ` })} ${renderComponent($$result3, "ProjectsGrid", $$ProjectsGrid, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "trayectoria" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Adjustment", $$Adjustment, { "class": "size-8" })} <span data-i18n="NAVBAR_TRAYECTORY">Trayectoria</span> ` })} ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "educacion" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "School", $$School, { "class": "size-8" })} <span data-i18n="EDUCATION_TITLE">Educación</span> ` })} ${renderComponent($$result3, "Education", $$Education, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "sobre-mi" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "ProfileCheck", $$ProfileCheck, { "class": "size-8" })} <span data-i18n="NAVBAR_ABOUT"> Sobre mí </span> ` })} ${renderComponent($$result3, "AboutMe", $$AboutMe, {})} ` })} </div> </main> ` })}`;
}, "C:/Users/USUARIO/Portfolio.dev/src/components/App.astro", undefined);

export { $$App as $ };
