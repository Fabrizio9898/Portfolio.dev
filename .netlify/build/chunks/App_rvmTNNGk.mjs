import { e as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderSlot, s as spreadAttributes, h as createAstro, g as addAttribute, i as renderComponent, k as createTransitionScope, l as renderScript, n as renderHead } from './astro/server_Ci-5vGjH.mjs';
/* empty css                         */
import { atom } from 'nanostores';

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="badge-container" data-astro-cid-vnkj5cct> <div class="badge-content" data-astro-cid-vnkj5cct> ${renderSlot($$result, $$slots["default"])} </div> <div class="badge-overlay" data-astro-cid-vnkj5cct> <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-vnkj5cct> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-vnkj5cct></path> </svg> </div> </div> `;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/icons/Badge.astro", undefined);

const $$Astro$j = createAstro();
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-forward" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/icons/Mail.astro", undefined);

const $$Astro$i = createAstro();
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer" role="link" class="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/SocialPill.astro", undefined);

const $$Astro$h = createAstro();
const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/icons/LinkedIn.astro", undefined);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const personalImageAlt = "Fabrizio Andrade";
  return renderTemplate`${maybeRenderHead()}<div class="max-w-xl relative" data-astro-cid-a42nmg7r> <div id="image-badge-container" data-astro-cid-a42nmg7r> <img class="profile-image sm:mt-8 shadow-lg" src="/fotodeperfil.webp"${addAttribute(personalImageAlt, "alt")} data-astro-cid-a42nmg7r> <h1 class="original-text text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl sm:mb-0 dark:text-white mt-0 mb-0" data-i18n="SECTION_HERO_TITLE" data-astro-cid-a42nmg7r></h1> <a href="https://linkedin.com/in/fabrizio-andrade" target="_blank" rel="noopener" class="inline-flex items-center transition md:justify-center animated-badge mt-1" data-astro-cid-a42nmg7r> ${renderComponent($$result, "Badge", $$Badge, { "data-astro-cid-a42nmg7r": true }, { "default": ($$result2) => renderTemplate`<span data-i18n="HERO_BADGE" data-astro-cid-a42nmg7r>Disponible para trabajar</span>` })} </a> </div> <div class="h1-container" data-astro-cid-a42nmg7r> <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white" data-i18n="SECTION_HERO_TITLE" data-astro-cid-a42nmg7r>
Hola! Soy Fabrizio
</h1> </div> <p class="mt-2 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300" data-astro-cid-a42nmg7r> <strong data-astro-cid-a42nmg7r>Fullstack Web Developer</strong> <span data-i18n="FIRST_DESCRIPTION" data-astro-cid-a42nmg7r>y</span> <strong data-i18n="SECOND_HERO_DESCRIPTION" data-astro-cid-a42nmg7r>Estudiante de Ciencias de la Computacion</strong> <span data-i18n="LAST_DESCRIPTION" data-astro-cid-a42nmg7r>de</span> Buenos Aires, Argentina 🇦🇷.
</p> <nav class="flex flex-wrap gap-4 mt-2" data-astro-cid-a42nmg7r> ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "mailto:fabrizioandrade9898@gmail.com", "data-astro-cid-a42nmg7r": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MailIcon", $$Mail, { "class": "size-4", "data-astro-cid-a42nmg7r": true })} <span data-i18n="HERO_CONTACT" data-astro-cid-a42nmg7r>Contáctame</span> ` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com/in/fabrizio-andrade/", "data-astro-cid-a42nmg7r": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LinkedInIcon", $$LinkedIn, { "class": "size-4", "data-astro-cid-a42nmg7r": true })}
LinkedIn
` })} </nav> </div> `;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/Hero/Hero.astro", undefined);

const $$MenuButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="menu-button" class="flex ml-auto mr-2 mt-2" data-astro-cid-ekawp6cd> <div class="bg-black dark:bg-white" data-astro-cid-ekawp6cd></div> <div class="bg-black dark:bg-white" data-astro-cid-ekawp6cd></div> <div class="bg-black dark:bg-white" data-astro-cid-ekawp6cd></div> </button> `;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/icons/MenuButton.astro", undefined);

const $$Astro$g = createAstro();
const $$Sun = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Sun;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path> </svg>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/icons/Sun.astro", undefined);

const $$Astro$f = createAstro();
const $$Moon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Moon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> </svg>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/icons/Moon.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="relative ml-1 mr-1" data-astro-cid-zrysfokl> <button class="theme-toggle-btn appearance-none border-none flex hover:scale-125 transition relative" data-astro-cid-zrysfokl', '> <span class="sr-only" data-astro-cid-zrysfokl>Toggle theme</span> ', " ", ` </button> </div>  <script>
  // Funci\xF3n para obtener la preferencia de tema
  const getThemePreference = () => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") ?? "light"
    }
    return "light"
  }

  // Funci\xF3n para actualizar todos los iconos de tema
  const updateAllIcons = (isDark) => {
    document.querySelectorAll(".theme-light").forEach((element) => {
      element.style.scale = isDark ? "0" : "1"
    })
    document.querySelectorAll(".theme-dark").forEach((element) => {
      element.style.scale = isDark ? "1" : "0"
    })
  }

  // Funci\xF3n para actualizar el tema
  const updateTheme = () => {
    const isDark = getThemePreference() === "dark"
    updateAllIcons(isDark)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }

  // Inicializar el tema
  updateTheme()

  // Configurar los listeners para todos los botones de toggle
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const newTheme = getThemePreference() === "light" ? "dark" : "light"
        localStorage.setItem("theme", newTheme)
        updateTheme()
      })
    })
  })

  // Manejar las transiciones de vista
  document.addEventListener('astro:after-swap', () => {
    updateTheme()
    
    // Volver a a\xF1adir los event listeners despu\xE9s de la transici\xF3n
    document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const newTheme = getThemePreference() === "light" ? "dark" : "light"
        localStorage.setItem("theme", newTheme)
        updateTheme()
      })
    })
    
    window.scrollTo({ left: 0, top: 0, behavior: 'instant' })
  })
<\/script>`])), maybeRenderHead(), addAttribute(createTransitionScope($$result, "2tnocktu"), "data-astro-transition-persist"), renderComponent($$result, "SunIcon", $$Sun, { "class": "theme-toggle-icon theme-light size-5 transition-all", "data-astro-cid-zrysfokl": true }), renderComponent($$result, "MoonIcon", $$Moon, { "class": "theme-toggle-icon theme-dark absolute size-5 transition-all", "data-astro-cid-zrysfokl": true }));
}, "/home/fabrizio/Escritorio/Portfolio/src/components/ThemeToggle/ThemeToggle.astro", "self");

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const navItems = [
    {
      title: "Proyectos",
      label: "proyectos",
      url: "/#proyectos",
      data: "NAVBAR_PROYECTS"
    },
    {
      title: "Trayectoria",
      label: "trayectoria",
      url: "/#trayectoria",
      data: "NAVBAR_TRAYECTORY"
    },
    {
      title: "Sobre m\xED",
      label: "sobre-mi",
      url: "/#sobre-mi",
      data: "NAVBAR_ABOUT"
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "mailto:fabrizioandrade9898@gmail.com",
      data: "NAVBAR_CONTACT"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header id="mainHeader" class="fixed top-0 z-10 flex items-center justify-between w-full mx-auto mt-2" data-astro-cid-2w66rqv5> <nav id="main-navbar" class="hidden px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center mx-auto" data-astro-cid-2w66rqv5> ${navItems.map((link, index) => renderTemplate`<a class="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500"${addAttribute(link.label, "aria-label")}${addAttribute(link.url, "href")}${addAttribute(link.data, "data-i18n")} data-astro-cid-2w66rqv5> ${link.title} </a>`)} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-2w66rqv5": true })} </nav> ${renderComponent($$result, "MenuButton", $$MenuButton, { "data-astro-cid-2w66rqv5": true })} <!-- Mobile Menu Overlay --> <div id="mobile-menu" class="fixed inset-0 z-20 invisible opacity-0 bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out overflow-y-auto" data-astro-cid-2w66rqv5> <div class="flex h-16 items-center justify-between px-4" data-astro-cid-2w66rqv5> <span class="text-lg font-semibold uppercase" data-astro-cid-2w66rqv5>Menú</span> <div class="flex justify-center mr-14" data-astro-cid-2w66rqv5> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-2w66rqv5": true })} </div> </div> <hr class="w-full border-t-2 border-blue-700" data-astro-cid-2w66rqv5> <nav data-astro-cid-2w66rqv5> <ul class="flex flex-col gap-6 py-6" data-astro-cid-2w66rqv5> ${navItems.map((link, index) => renderTemplate`<li class="flex justify-center" data-astro-cid-2w66rqv5> <a class="text-lg font-semibold"${addAttribute(link.url, "href")}${addAttribute(link.data, "data-i18n")} data-astro-cid-2w66rqv5> ${link.title} </a> </li>`)} </ul> </nav> <hr class="w-full border-t-2 border-blue-700" data-astro-cid-2w66rqv5> <footer class="flex flex-col items-center justify-between gap-4 py-4" data-astro-cid-2w66rqv5> <span class="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90" data-astro-cid-2w66rqv5>© ${currentYear}
Fabrizio Andrade
</span> <hr class="w-full border-t-2 border-blue-700" data-astro-cid-2w66rqv5> <nav data-astro-cid-2w66rqv5> <ul class="flex" data-astro-cid-2w66rqv5> <li data-astro-cid-2w66rqv5> <a href="mailto:fabrizioandrade9898@gmail.com" target="_blank" rel="noopener noreferrer" role="link" class="inline-flex items-center justify-center gap-2 px-2 py-1 max-w-fit" data-astro-cid-2w66rqv5> ${renderComponent($$result, "LinkedInIcon", $$LinkedIn, { "class": "size-8", "data-astro-cid-2w66rqv5": true })}</a> </li> <li data-astro-cid-2w66rqv5> <a href="mailto:fabrizioandrade9898@gmail.com" target="_blank" rel="noopener noreferrer" role="link" class="inline-flex items-center justify-center gap-2 px-2 py-1 max-w-fit" data-astro-cid-2w66rqv5> ${renderComponent($$result, "MailIcon", $$Mail, { "class": "size-8", "data-astro-cid-2w66rqv5": true })}</a> </li> </ul> </nav> </footer> </div> </header> ${renderScript($$result, "/home/fabrizio/Escritorio/Portfolio/src/components/Header/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/Header/Header.astro", undefined);

const $$Astro$e = createAstro();
const $$Languages = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Languages;
  const LANGUAGES = [
    {
      name: "Espa\xF1ol",
      abbreviation: "ES",
      code: "es"
    },
    {
      name: "English",
      abbreviation: "EN",
      code: "en"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="z-20 font-medium tracking-wide text-secondary absolute start-2 top-0 md:start-10" data-astro-cid-nyfyskaa> <ul id="lista-menu" class="hidden" data-astro-cid-nyfyskaa> <a href="#" class="language-link-desktop" data-code="es" data-abbreviation="ES" data-astro-cid-nyfyskaa> <li class="flex h-16 items-center justify-center px-10 duration-200 opacity-90 dark:bg-[#333] selected-language transition hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black" style="clip-path:polygon(3% 0%, 0% 100%, 100% 97%, 90% 0);" data-language-name="Español" data-astro-cid-nyfyskaa>
Español
</li> </a> <a href="#" class="language-link-desktop" data-code="en" data-abbreviation="EN" data-astro-cid-nyfyskaa> <li class="flex h-16 items-center justify-center px-10 duration-200 opacity-90 dark:bg-[#333] selected-language transition hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black" style="clip-path: polygon(0% 0%, 10% 97%, 99% 100%, 100% 0%);" data-language-name="English" data-astro-cid-nyfyskaa>
English
</li> </a> </ul> <div id="menu-desplegable" class="relative inline-block" data-astro-cid-nyfyskaa> <div class="relative cursor-pointer" id="languages-menu-btn" data-astro-cid-nyfyskaa> <div class="flex h-16 min-w-[175px] items-center justify-center gap-2 bg-[#183749] dark:bg-[#183749] px-10" style="clip-path: polygon(3% 0%, 0% 100%, 100% 100%, 90% 0);" id="selected-language-mobile" data-astro-cid-nyfyskaa>
Español <svg role="img" fill="currentColor" id="locale-caret" class="size-4 shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none rotate-180" data-astro-cid-nyfyskaa><symbol viewBox="0 0 256 256" id="a:1" data-astro-cid-nyfyskaa> <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" data-astro-cid-nyfyskaa></path> </symbol><use href="#a:1" data-astro-cid-nyfyskaa></use></svg> </div> <ul id="locale-options" role="listbox" class="absolute left-0 top-full z-10 max-h-80 w-full overflow-auto scrollbar-hide hidden" data-current-language="es" data-astro-cid-nyfyskaa> ${LANGUAGES.filter((lang) => lang.code !== "es").map((lang) => renderTemplate`<a href="#" class="language-link-mobile"${addAttribute(lang.code, "data-code")}${addAttribute(lang.abbreviation, "data-abbreviation")} data-astro-cid-nyfyskaa> <li class="languages-menu-option flex h-16 items-center justify-center px-10 transition-opacity duration-200 motion-reduce:transition-none hover:opacity-90 dark:bg-[#333]" style="clip-path: polygon(0% 0%, 10% 100%, 90% 100%, 100% 0%);"${addAttribute(lang.name, "data-language-name")} data-astro-cid-nyfyskaa> ${lang.name} </li> </a>`)} </ul> </div> </div> </nav>  ${renderScript($$result, "/home/fabrizio/Escritorio/Portfolio/src/components/Languages/Languages.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/Languages/Languages.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center"> <div class="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4"> <span class="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">© ${currentYear} . Fabrizio Andrade
</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"> <li> <a href="/#" class="hover:underline me-4 md:me-6" data-i18n="FOOTER_INICIO">Inicio</a> </li> <li> <a id="contacto" href="mailto:fabrizioandrade9898@gmail.com" class="hover:underline" data-i18n="FOOTER_CONTACT">Contacto</a> </li> </ul> </div> </footer>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/Footer/Footer.astro", undefined);

const $$Astro$d = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, showHeader = true } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="initial-scale=1, width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="relative text-black dark:text-white"> <div class="fixed inset-0 z-[-2]"> <!-- Modo claro (predeterminado) --> <div class="relative h-full w-full bg-white dark:hidden"> <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]"></div> </div> <!-- Modo oscuro --> <div class="relative h-full w-full bg-slate-950"> <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]"></div> </div> </div> ${renderComponent($$result, "Languages", $$Languages, {})} ${showHeader && renderTemplate`${renderComponent($$result, "Header", $$Header, {})}`} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/layouts/Layout.astro", undefined);

const $$Astro$c = createAstro();
const $$TitleSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$TitleSection;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(`flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white ${Astro2.props.className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </h2>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/TitleSection/TitleSection.astro", undefined);

const $$Astro$b = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/icons/Code.astro", undefined);

const PORTFOLIO_TITLE$1 = "Fabrizio Andrade Portfolio - Fullstack Developer and Computer Science Student";
const PORTFOLIO_DESCRIPTION$1 = "";
const NAVBAR_ABOUT$1 = "About me";
const NAVBAR_TRAYECTORY$1 = "Background";
const NAVBAR_PROYECTS$1 = "Proyects";
const NAVBAR_CONTACT$1 = "Contact";
const SECTION_HERO_TITLE$1 = "Hello, I'm Fabrizio";
const HERO_BADGE$1 = "Open to work";
const FIRST_DESCRIPTION$1 = "and";
const SECOND_HERO_DESCRIPTION$1 = "Computer Science Student";
const LAST_DESCRIPTION$1 = "from";
const HERO_CONTACT$1 = "Contact me";
const ABOUT_1$1 = "I consider myself a";
const ABOUT2$1 = "good person";
const ABOUT3$1 = "with a close-knit and trustworthy group of friends. I'm also good at";
const ABOUT5$1 = "connecting with others";
const ABOUT6$1 = "which is key in environments where teamwork is";
const ABOUT7$1 = "essential";
const ABOUT8$1 = "to achieve a goal";
const ABOUT9$1 = "Creating this";
const ABOUT10$1 = "portfolio";
const ABOUT11$1 = "was a great first step to gain visibility and showcase some of the things i have done in";
const ABOUT12$1 = "development";
const ABOUT13$1 = "in less than a year. Beyond that, seeing it makes me realize everything i have";
const ABOUT14$1 = "learned";
const ABOUT15$1 = "and what I still need to learn, which motivates me a lot";
const ABOUT16$1 = "My";
const ABOUT17$1 = "strength";
const ABOUT18$1 = "is in the";
const ABOUT19$1 = "backend";
const ABOUT20$1 = "though I also feel comfortable with the";
const ABOUT21$1 = "frontend";
const ABOUT22$1 = "My favourite languages are JavaScript/TypeScript, and in the future, I would like to dive into game development.";
const FOOTER_INICIO$1 = "Home";
const FOOTER_CONTACT$1 = "Contact";
const PROYECT1$1 = "Active - Sports Centers Management";
const PROYECT2$1 = "Sports centers management and court booking platform";
const PROYECT3$1 = "Active Api";
const PROYECT4$1 = "RESTful API that allows you to manage users, sports centers and court reservations.";
const PROYECT5$1 = "September 2024";
const PROYECT11$1 = "2010-2018";
const PROYECT6$1 = "3-month internship in which I put into practice a large technology stack and which gave me a good programming base";
const PROYECT7$1 = "English proficiency at level c2 with advanced oral and written communication skills";
const PROYECT8$1 = "";
const PROYECT9$1 = "";
const PROYECT10$1 = "";
const TRAYECTORIA1$1 = "";
const TRAYECTORIA2$1 = "";
const english = {
  PORTFOLIO_TITLE: PORTFOLIO_TITLE$1,
  PORTFOLIO_DESCRIPTION: PORTFOLIO_DESCRIPTION$1,
  NAVBAR_ABOUT: NAVBAR_ABOUT$1,
  NAVBAR_TRAYECTORY: NAVBAR_TRAYECTORY$1,
  NAVBAR_PROYECTS: NAVBAR_PROYECTS$1,
  NAVBAR_CONTACT: NAVBAR_CONTACT$1,
  SECTION_HERO_TITLE: SECTION_HERO_TITLE$1,
  HERO_BADGE: HERO_BADGE$1,
  FIRST_DESCRIPTION: FIRST_DESCRIPTION$1,
  SECOND_HERO_DESCRIPTION: SECOND_HERO_DESCRIPTION$1,
  LAST_DESCRIPTION: LAST_DESCRIPTION$1,
  HERO_CONTACT: HERO_CONTACT$1,
  ABOUT_1: ABOUT_1$1,
  ABOUT2: ABOUT2$1,
  ABOUT3: ABOUT3$1,
  ABOUT5: ABOUT5$1,
  ABOUT6: ABOUT6$1,
  ABOUT7: ABOUT7$1,
  ABOUT8: ABOUT8$1,
  ABOUT9: ABOUT9$1,
  ABOUT10: ABOUT10$1,
  ABOUT11: ABOUT11$1,
  ABOUT12: ABOUT12$1,
  ABOUT13: ABOUT13$1,
  ABOUT14: ABOUT14$1,
  ABOUT15: ABOUT15$1,
  ABOUT16: ABOUT16$1,
  ABOUT17: ABOUT17$1,
  ABOUT18: ABOUT18$1,
  ABOUT19: ABOUT19$1,
  ABOUT20: ABOUT20$1,
  ABOUT21: ABOUT21$1,
  ABOUT22: ABOUT22$1,
  FOOTER_INICIO: FOOTER_INICIO$1,
  FOOTER_CONTACT: FOOTER_CONTACT$1,
  PROYECT1: PROYECT1$1,
  PROYECT2: PROYECT2$1,
  PROYECT3: PROYECT3$1,
  PROYECT4: PROYECT4$1,
  PROYECT5: PROYECT5$1,
  PROYECT11: PROYECT11$1,
  PROYECT6: PROYECT6$1,
  PROYECT7: PROYECT7$1,
  PROYECT8: PROYECT8$1,
  PROYECT9: PROYECT9$1,
  PROYECT10: PROYECT10$1,
  TRAYECTORIA1: TRAYECTORIA1$1,
  TRAYECTORIA2: TRAYECTORIA2$1,
};

const PORTFOLIO_TITLE = "Portfolio de Fabrizio Andrade - Desarrollador Fullstack y Estudiante de Ciencias de la Computación";
const PORTFOLIO_DESCRIPTION = "";
const NAVBAR_ABOUT = "Sobre mí";
const NAVBAR_TRAYECTORY = "Trayectoria";
const NAVBAR_PROYECTS = "Proyectos";
const NAVBAR_CONTACT = "Contacto";
const SECTION_HERO_TITLE = "Hola, Soy Fabrizio";
const HERO_BADGE = "Disponible para trabajar";
const FIRST_DESCRIPTION = "y";
const SECOND_HERO_DESCRIPTION = "Estudiante de Ciencias de la Computación";
const LAST_DESCRIPTION = "de";
const HERO_CONTACT = "Contáctame";
const ABOUT_1 = "Me considero una";
const ABOUT2 = "buena persona";
const ABOUT3 = "con un grupo cercano y confiable de amigos. Además, se me da bien";
const ABOUT5 = "relacionarme con otros";
const ABOUT6 = "lo cual es clave en entornos donde el trabajo en equipo es";
const ABOUT7 = "fundamental";
const ABOUT8 = "para alcanzar un objetivo";
const ABOUT9 = "Crear este";
const ABOUT10 = "portfolio";
const ABOUT11 = "fue un gran primer paso para ganar visibilidad y mostrar algunas de las cosas que he hecho en el";
const ABOUT12 = "desarrollo";
const ABOUT13 = "desde hace menos de un año. Más allá de eso, verlo me hace darme cuenta de todo lo que he";
const ABOUT14 = "aprendido";
const ABOUT15 = "y lo que aún me falta por aprender, lo que me motiva mucho";
const ABOUT16 = "Mi";
const ABOUT17 = "fuerte";
const ABOUT18 = "está en el";
const ABOUT19 = "backend";
const ABOUT20 = "aunque también me siento cómodo con el";
const ABOUT21 = "frontend";
const ABOUT22 = "Mis lenguajes favoritos son JavaScript/TypeScript, y en un futuro me gustaria adentrarme en el desarrollo de videojuegos.";
const FOOTER_INICIO = "Inicio";
const FOOTER_CONTACT = "Contacto";
const PROYECT1 = "Active - Gestion de Centros Deportivos";
const PROYECT2 = "Plataforma para gestionar centros deportivos y reservar canchas.";
const PROYECT3 = "Active Api";
const PROYECT4 = "API RESTful que permite gestionar usuarios, centros deportivos y reservas de canchas.";
const PROYECT5 = "Septiembre 2024";
const PROYECT11 = "2010-2018";
const PROYECT6 = "Pasantia de 3 meses en la que puse en practica un stack de tecnologia amplio y que me dio una buena base de programación";
const PROYECT7 = "Dominio del inglés a nivel C2, con habilidades avanzadas en comunicación oral y escrita.";
const PROYECT8 = "";
const PROYECT9 = "";
const PROYECT10 = "";
const TRAYECTORIA1 = "";
const TRAYECTORIA2 = "";
const spanish = {
  PORTFOLIO_TITLE,
  PORTFOLIO_DESCRIPTION,
  NAVBAR_ABOUT,
  NAVBAR_TRAYECTORY,
  NAVBAR_PROYECTS,
  NAVBAR_CONTACT,
  SECTION_HERO_TITLE,
  HERO_BADGE,
  FIRST_DESCRIPTION,
  SECOND_HERO_DESCRIPTION,
  LAST_DESCRIPTION,
  HERO_CONTACT,
  ABOUT_1,
  ABOUT2,
  ABOUT3,
  ABOUT5,
  ABOUT6,
  ABOUT7,
  ABOUT8,
  ABOUT9,
  ABOUT10,
  ABOUT11,
  ABOUT12,
  ABOUT13,
  ABOUT14,
  ABOUT15,
  ABOUT16,
  ABOUT17,
  ABOUT18,
  ABOUT19,
  ABOUT20,
  ABOUT21,
  ABOUT22,
  FOOTER_INICIO,
  FOOTER_CONTACT,
  PROYECT1,
  PROYECT2,
  PROYECT3,
  PROYECT4,
  PROYECT5,
  PROYECT11,
  PROYECT6,
  PROYECT7,
  PROYECT8,
  PROYECT9,
  PROYECT10,
  TRAYECTORIA1,
  TRAYECTORIA2,
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

const $$Astro$a = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(id, "data-section")}${addAttribute(`section ${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl `, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/Section_Container.astro", undefined);

const $$Astro$9 = createAstro();
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a target="_blank"${addAttribute(href, "href")} role="link" class="inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/LinkButton/LinkButton.astro", undefined);

const $$Astro$8 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Link;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/icons/Link.astro", undefined);

const $$Astro$7 = createAstro();
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/icons/Github.astro", undefined);

const $$Astro$6 = createAstro();
const $$NextJS = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NextJS;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="256" height="256" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <defs> <linearGradient id="c" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"> <stop offset="0%" stop-color="#FFF"></stop> <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop> </linearGradient> <linearGradient id="d" x1="50%" x2="49.953%" y1="0%" y2="73.438%"> <stop offset="0%" stop-color="#FFF"></stop> <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop> </linearGradient> <circle id="a" cx="128" cy="128" r="128"></circle> </defs> <mask id="b" fill="#fff"> <use xlink:href="#a"></use> </mask> <g mask="url(#b)"> <circle cx="128" cy="128" r="128"></circle> <path fill="url(#c)" d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"></path> <path fill="url(#d)" d="M163.556 76.8h17.067v102.4h-17.067z"></path> </g> </svg>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/icons/NextJS.astro", undefined);

const $$Astro$5 = createAstro();
const $$NestJS = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$NestJS;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 264.6 255.6" xmlns="http://www.w3.org/2000/svg"><path d="M153.3 4.2c-1.8 0-3.5.4-5 1 3.3 2.1 5.1 5 6 8.3 0 .5.2.8.3 1.3l.1 1.1c.3 5.7-1.5 6.4-2.7 9.8-1.9 4.3-1.4 9 .9 12.7.2.5.4 1 .8 1.4-2.5-16.3 11.1-18.8 13.7-23.9.2-4.4-3.5-7.4-6.4-9.5a14.3 14.3 0 0 0-7.7-2.2zM174 8c-.3 1.5 0 1.1-.1 1.9l-.2 1.7-.4 1.5-.5 1.6-.8 1.5-.5.7-.4.6c-.3.5-.6 1-1 1.3-.3.4-.6.9-1 1.2l-1.3 1c-1.4 1.1-3 1.9-4.3 2.9-.5.3-1 .5-1.3 1-.5.2-.9.6-1.3 1l-1.1 1.2-1 1.3-.9 1.3-.7 1.5-.5 1.5a21 21 0 0 0-.5 1.6l-.1.9-.1.7-.1 1.7v1.1l.3 1.6c0 .6.1 1 .3 1.6l.5 1.5.4 1-14.8-5.8-7.5-2-4-1a120 120 0 0 0-11.8-1.7h-.4A115.5 115.5 0 0 0 87 34.9l-3 .6c-2 .3-3.9.8-5.7 1.2l-3 .8-2.7 1.2-2.2 1-.3.1-1.8 1-.5.1-2 1-1.2.7-.6.3-1.7 1-1.6 1-1.3.9-.1.1-1.3 1H58l-1 .8-.4.3-1 .8c0 .2-.1.2-.2.3l-1.2 1v.2c-.5.3-.9.7-1.2 1.1l-.2.1-1 1c0 .2-.3.3-.4.5l-1 1.1-.4.3-1.4 1.6-.2.2a38.1 38.1 0 0 1-7 6 48.9 48.9 0 0 1-12.1 6c-2.7.5-5.5 1.6-7.9 1.8l-1.6.2-1.6.4-1.6.6-1.5.7-1.4.9c-.5.3-1 .7-1.3 1.1-.5.3-1 .8-1.3 1.2l-1.1 1.3-1 1.4-.9 1.5-.7 1.7-.6 1.7-.3 1.5v.2L6 86.2v2.1a6.9 6.9 0 0 0 .7 2.4l.7 1.2.8 1.2a17.1 17.1 0 0 0 2.4 2c1.5 1.4 1.9 1.9 3.9 2.9l1 .5h.2v.4a13.3 13.3 0 0 0 1 3.1l.5 1.2.1.3a28.3 28.3 0 0 0 1.8 2.8l1 1.2 1.3 1.1h.1a14.2 14.2 0 0 0 5.4 3l.3.1.8.2c-.2 3.5-.3 6.8.3 8 .5 1.2 3.4-2.7 6.2-7.2-.4 4.4-.6 9.7 0 11.2.7 1.6 4.6-3.4 8-9a74.7 74.7 0 0 1 92 65.8c-.8-7-9.4-10.8-13.4-9.9-2 4.8-5.2 11-10.5 14.8.4-4.3.2-8.7-.7-13-1.4 6-4.2 11.5-8 16.3a18 18 0 0 1-15.5-7l-.5-.8-.5-1.4-.4-1.3V176c0-.5.1-1 .3-1.4 0-.4.2-.9.4-1.3l.8-1.4c1-3 1-5.6-1-7l-1.1-.7-.9-.3-.5-.2-1.4-.3a5 5 0 0 0-1.3-.2l-1.4-.1h-1l-1.4.2-1.4.3-1.3.4-1.3.6-1.3.7c-15 9.8-6 32.8 4.2 39.5-3.8.7-7.8 1.5-8.9 2.3l-.1.2a60.9 60.9 0 0 0 19.2 7.4 61.5 61.5 0 0 0 72.6-51.3l.4 1.7c.2 1.2.5 2.4.6 3.7l.2 1.7v.3l.2 1.6.1 2.2v5.4l-.1.8v1.5c-.2.2-.2.4-.2.5 0 .6 0 1-.2 1.5v.6c0 .7-.2 1.2-.3 1.9v.1l-.4 1.8v.2c0 .6-.2 1.2-.4 1.8v.2l-.5 1.8v.2l-.5 1.8v.1l-.6 2-.7 1.8-.8 1.9-.7 1.9c-.4.5-.6 1.2-1 1.8l-.1.4s0 .2-.2.2a61.2 61.2 0 0 1-18.1 21.7l-1.6 1.1c0 .2-.3.2-.4.4l-1.4 1 .2.3 2.7-.4h.1a137.7 137.7 0 0 0 6.5-1.2l.9-.2 1.3-.3 1.2-.3c6.4-1.5 12.7-3.7 18.7-6.2-10.2 14-24 25.3-40.1 32.8a103.2 103.2 0 0 0 83.1-52.6c-2.7 15-8.6 29.1-17.4 41.5a101.7 101.7 0 0 0 44.5-69.2c2.2 10.2 2.8 20.7 1.8 31.1 46.7-65 4-132.5-14-150.3l-.1-.3v.1l-.1-.1-.2 2.3a87 87 0 0 1-.6 4.3l-1.1 4.3a53.7 53.7 0 0 1-3.5 8 44 44 0 0 1-9.9 12l-1.5 1.4a36 36 0 0 1-7.4 4.7l-4 1.8a45.5 45.5 0 0 1-8.6 2.3l-4.4.6a49.7 49.7 0 0 1-11.9-.8l-4.3-1.1a48 48 0 0 0 20.7-6.8l3.6-2.6 3.3-2.9 3-3.2c1-1.1 1.9-2.3 2.7-3.5.2-.1.3-.4.4-.6l1.9-3.1a44.5 44.5 0 0 0 3.5-8c.4-1.4.8-2.9 1-4.3.3-1.5.6-2.9.7-4.3l.3-4.4-.1-3.1-.6-4.3c-.2-1.5-.5-3-1-4.4-.4-1.3-.8-2.7-1.4-4.1-.5-1.4-1.1-2.7-1.8-4l-2.2-3.8a71.3 71.3 0 0 0-5.5-6.9 40.4 40.4 0 0 0-12-8.6C178 9.3 176 8.6 174 8z" fill="#e0234e" fill-rule="evenodd"></path></svg>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/icons/NestJS.astro", undefined);

const $$Astro$4 = createAstro();
const $$Tailwind = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h54v32.4H0z"></path></clipPath></defs></svg>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/icons/Tailwind.astro", undefined);

const $$Astro$3 = createAstro();
const $$TypeORM = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TypeORM;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 233"> <path d="M138.63 32.23a5.67 5.67 0 0 1 5.66 5.52V102.74a5.67 5.67 0 0 1-5.52 5.67H85.75a5.67 5.67 0 0 1-5.66-5.52V37.9a5.67 5.67 0 0 1 5.52-5.67h53.02Zm0 2.52H85.75a3.15 3.15 0 0 0-3.14 3.03V102.74c0 1.7 1.35 3.09 3.03 3.15h52.99c1.7 0 3.09-1.35 3.15-3.03V37.9a3.15 3.15 0 0 0-3.15-3.15ZM93.31 92.67v3.77h-3.78v-3.77h3.78Zm42.18 0v3.77h-40.3v-3.77h40.3ZM93.3 76.3v3.78h-3.78V76.3h3.78Zm42.18 0v3.78h-40.3V76.3h40.3ZM93.3 60.56v3.78h-3.78v-3.78h3.78Zm42.18 0v3.78h-40.3v-3.78h40.3Zm0-14.48v3.78H89.53v-3.78h45.96ZM138.63 121.62v.04a5.67 5.67 0 0 1 5.66 5.48V192.13a5.67 5.67 0 0 1-5.52 5.66H85.75a5.67 5.67 0 0 1-5.66-5.49V127.3a5.67 5.67 0 0 1 5.52-5.67h53.02Zm0 2.52H85.75a3.15 3.15 0 0 0-3.14 3.03V192.13c0 1.7 1.35 3.09 3.03 3.15h52.99c1.7 0 3.07-1.34 3.15-3.02V127.31c0-1.7-1.35-3.09-3.04-3.15h-.11v-.02Zm-45.32 57.93v3.78h-3.78v-3.78h3.78Zm42.18.03v3.72h-40.3v-3.72h40.3ZM93.3 165.7v3.78h-3.78v-3.77h3.78Zm42.18.03v3.72h-40.3v-3.72h40.3ZM93.3 149.97v3.78h-3.78v-3.78h3.78Zm42.18.03v3.72h-40.3V150h40.3Zm0-14.5v3.77H89.53v-3.78h45.96ZM153.88 70.32v3.14h18.88v85.53h-18.88v3.15H175.91V70.32h-3.15z" fill="#8E8F8F"></path> <path d="M19.33 14.8c3.73-6.11 9.86-9.67 16.05-11.74l.85-.28.84-.25 1.27-.35.83-.21.42-.1.83-.2.41-.08.82-.17.8-.15.8-.14.8-.13.77-.11.76-.1.74-.1.73-.08.7-.07 1.03-.09.97-.07.92-.05 1-.04.92-.03h.56l.52-.01H54.76l.35.01.63.03.28.01v15.11c-13.37-1.27-19.33 2.77-21.96 7.07l-.24.4c-.34.61-.62 1.22-.84 1.82l-.15.4a14 14 0 0 0-.06.2l-.12.38-.11.38-.1.38-.04.19-.08.36-.03.18-.06.35-.05.34-.04.33-.05.47-.03.44-.02.34v.87l.01.23.02.28.03.33v5.56l-.03 11.33-.04 8.17-.05 6.87-.05 5.81-.05 4.57-.06 4.46-.06 3.8-.07 4.01-.05 2.1-.05 1.98-.07 2.2-.02.7v2.05l-.02.53-.02.8-.03.77-.02.47-.04.47-.03.47-.07.72-.06.47-.06.48-.07.47-.04.24-.08.48-.05.24-.1.47-.1.48-.13.47-.13.47-.15.47-.16.46-.17.47c-1.94 5-6.32 9.45-16.25 11.52 9.66 2 14.07 6.27 16.09 11.1l.18.46c.18.46.34.93.47 1.4l.14.47.23.95.1.48.04.24.08.48.08.48.06.47.06.48.05.48.04.47.04.48.04.7.03.48.02.79.01.52.01.51v.77l.01 1.27.07 2.21.06 2.34.05 2.5.06 2.66.05 3.25.07 5.38.05 4.55.03 2.57.05 6.54.06 9.71.04 10.52.02-.01v9.32l-.02.13-.02.2v.18l-.02.33V202.9l.01.34.03.44.03.3.06.48.05.34.06.34.07.36.04.18.08.37.05.18.1.38.12.38.07.2.14.39.15.4.17.39c2.1 4.7 7.64 9.8 21.96 8.63l.79-.07v15.11l-.4.02-.75.02-.61.01H53l-.6-.01-.63-.02-.82-.04-.58-.02-.6-.04-.63-.04-.64-.05-.67-.06-.68-.07-.7-.08-.72-.08-.74-.1-.37-.05-.76-.12a60.7 60.7 0 0 1-.38-.06l-.77-.13-.39-.07-.79-.15-.4-.08-.8-.17-.8-.19-.8-.2-.82-.21c-7.5-2.05-15.36-6.08-19.41-14 .88-9.71 4.87-18 12.06-23.16.33-.24.68-.47 1.02-.7l.4-.24c-.5.3-.97.62-1.44.95-7.17 5.15-11.16 13.44-12.04 23.12a26.57 26.57 0 0 1-2.76-11.7l-.1-4.17-.1-5.05-.16-5.91-.2-7.54-.18-6.53-.25-8.56-.28-9.17-.48-14.42-.11-3.35c-.29-7.57-3.32-11.26-6.49-13.04l-.37-.2a11.7 11.7 0 0 0-.19-.1l-.37-.17-.37-.16-.37-.14c-.12-.05-.24-.1-.36-.13l-.37-.12-.35-.1-.29-.08-.27-.06-.28-.06-.27-.06-.39-.06-.25-.04-.24-.03-.36-.04h-.31l-.64-.01H0v-17.7c.83.02 1.57 0 2.3-.03l.35-.04.24-.03.25-.04.4-.07.26-.05.28-.06.27-.07.29-.07.35-.1.37-.12.36-.13c3.68-1.38 7.83-4.91 8.16-13.82l.43-12.8.33-10.47.18-5.94.27-9.53.19-6.62.13-5.05.16-6.76.1-4.2.07-3.33c.1-5.25 1.4-9.5 3.46-12.97l.13-.22v-.01Zm180.64.37V.05l.41-.02.57-.02h.36l.65-.01h1.03l.83.02 1.06.04.57.03.6.03.93.07.64.05.67.06.68.07.7.07.72.1.74.1.74.1.76.12.38.07.78.13.78.16.8.16.8.18.8.2 1.21.31.82.23c7.6 2.24 15.43 6.6 19.1 15.03 1.4 3.3 2.14 6.84 2.16 10.42l.1 4.17.1 5.05.1 3.38.12 5.06.18 6.66.14 4.89.25 8.55.28 9.17.48 14.42.11 3.35c.29 7.7 3.43 11.38 6.65 13.12l.37.2.18.09.37.17.37.15.19.07.36.13.18.06.36.11.18.05.53.14.34.08.33.06.33.06.25.03.24.04.36.04c.62.03 1.26.04 1.94.03l.35-.01v17.72a25.2 25.2 0 0 0-2.3.02l-.23.03-.24.03-.37.05-.4.07-.26.05-.28.06-.27.07-.29.07-.17.05-.36.11-.19.06-.36.13-.19.07-.37.16c-3.52 1.52-7.28 5.13-7.6 13.59l-.43 12.8-.33 10.47-.18 5.94-.27 9.52-.19 6.63-.13 5.05-.16 6.75-.1 4.2-.07 3.33a27.7 27.7 0 0 1-1.63 9.14l-.13.34v.03c-3.76 9.74-12.88 14.31-21.3 16.44l-.82.2-.41.1-.82.18-.4.08-.81.16-.4.08-.79.13-.39.07-.77.12-.76.1-.74.1-.73.09-.71.07-.7.07-1 .08-.63.05-.92.05-.86.04-1.05.03h-.6l-.54.01H201l-.47-.02-.4-.02h-.15V216.7c14 1.33 19.88-3.16 22.31-7.68l.21-.4.2-.4.17-.4.15-.4.15-.4.13-.4.05-.19.11-.38.1-.38.08-.37.07-.36.06-.35.05-.34.04-.33.05-.47.02-.3.03-.48v-.87l-.01-.23-.01-.2-.03-.28-.01-.13v-8.29l.02-7.72.04-7.96.04-6.71.06-6.85.07-6.15.05-3.57.04-2.88.06-3.3.05-2.1.04-1.98.05-1.88.07-2.16v-2.05l.02-.52v-.53l.04-.8.02-.53.03-.47.04-.48.04-.48.05-.48.05-.48.07-.48.03-.24.08-.48.09-.48.1-.48.1-.48c.13-.56.29-1.11.47-1.66l.16-.47c.23-.63.49-1.24.8-1.85l.23-.45c2.29-4.2 6.73-7.8 15.36-9.6-10.89-2.25-15.1-7.38-16.74-12.96l-.14-.47-.23-.95-.1-.47-.04-.24-.08-.48-.08-.48-.06-.48-.06-.47-.05-.48-.04-.48-.04-.47-.04-.71-.03-.47-.02-.79-.01-.52-.01-.52v-.76l-.01-1.27-.05-1.48-.05-1.88-.06-2.41-.05-2.58-.05-2.7-.06-3.8-.07-5.44-.05-5.09-.05-5.9-.06-10.48-.04-11.36c.86-.47 1.7-1 2.5-1.56 4-2.87 7.01-6.73 9.05-11.28l.14-.32a27.51 27.51 0 0 1-9.2 11.6c-.68.48-1.37.92-2.08 1.33l-.43.24V30.9l.02-.13.02-.2v-.17l.02-.34V29.2l-.01-.34-.02-.29-.04-.45-.06-.48-.05-.34-.06-.34-.07-.36-.04-.18-.08-.36-.05-.2-.1-.37-.12-.38-.07-.2-.14-.39-.15-.39-.17-.4c-2.1-4.7-7.64-9.79-21.96-8.62l-.79.07Z" fill="#FE0902"></path> <path d="m31.17 36.1.46.3.47.3v-5.55l-.01-.13-.02-.2-.01-.18-.02-.33V29.44l.02-.34.02-.29.02-.3.04-.32.04-.33.05-.34.06-.35.07-.36.04-.18.09-.38.1-.38.06-.19.12-.39a14 14 0 0 1 .06-.2l.15-.39c.22-.6.5-1.2.84-1.81l.24-.4c2.63-4.31 8.6-8.35 21.96-7.08V.3l-.28-.01-.48-.02-.32-.01-.8-.01h-.99l-.85.02-.78.02-.85.04-.92.05-.97.07-.68.06-1.05.1-.73.08-.74.1-.76.1-.78.11-.78.13-.8.14-.81.15-.82.17-.41.09-.83.19-.42.1-.83.21-1.27.35-.84.25-.85.28c-6.2 2.07-12.32 5.63-16.05 11.74 1.2 8.91 5.14 16.51 11.84 21.3Zm24.86 195.95v-15.11c-14.63 1.39-20.4-3.57-22.62-8.28l-.19-.4-.24-.6-.14-.4-.07-.2-.12-.39-.1-.38-.1-.38-.08-.37-.08-.36-.06-.35-.05-.34-.04-.33-.05-.47-.03-.44-.01-.34v-1.1l.02-.2.02-.28.02-.14v-9.31c-.53.32-1.05.66-1.55 1.02-7.19 5.16-11.18 13.45-12.06 23.17 4.05 7.9 11.91 11.94 19.4 13.99l.82.21.81.2.8.19.8.17.8.15.4.08.77.14.38.06.76.12.38.06.74.1.37.05.71.08.7.08.7.07.66.06.64.05.63.04.6.04.86.04.54.02.64.02H53l.54.01H54.88l.49-.02.66-.03ZM238.1 17.33C234.2 8.36 225.6 4 217.55 1.9l-.8-.2-.8-.19-.4-.09-.79-.16-.39-.08-.77-.15-.77-.14-.76-.12-.74-.11-.73-.1-.72-.1-.7-.07-.68-.07-.67-.06-.97-.08-.91-.06-.87-.05-.82-.03-.5-.02-.62-.01h-.57l-.52-.01h-.88l-.5.02-.38.02-.32.01v15.12c14.63-1.4 20.4 3.56 22.62 8.28l.19.4.24.6.14.4.07.2.12.38.1.39.1.37.08.37.08.36.06.35.05.34.04.33.05.47.03.44.01.34v1.1l-.02.28-.04.34v8.43c.86-.48 1.7-1 2.5-1.56 6.5-4.65 10.39-11.91 11.72-20.45Zm-11.08 177.26c-1-.71-2.04-1.35-3.12-1.92v8.29l.01.13.02.2.01.18.02.33V202.66l-.03.5-.02.3-.05.46-.04.33-.05.34-.06.35-.07.36-.08.37-.1.38-.1.38-.06.2-.13.39-.15.4-.15.4-.18.4-.19.4-.2.4c-2.44 4.52-8.33 9.01-22.32 7.68v15.11l.22.01.65.03.79.01H202.95l.6-.01.66-.02.81-.03.87-.05.6-.04.95-.07.66-.06.68-.06.69-.08.71-.08.72-.1.74-.1.75-.12.38-.06.77-.13.78-.15.39-.08.79-.17.4-.08.8-.2c8.55-2.06 17.96-6.63 21.8-16.56-1.51-7.93-5.35-14.64-11.47-19.02Z" fill="#FFAB00"></path> </svg>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/icons/TypeORM.astro", undefined);

const TAGS = {
    NEST: { name: "Nest.js", class: "bg-black text-white", icon: $$NestJS },
    NEXT: {
      name: "Next.js",
      class: "bg-black text-white",
      icon: $$NextJS,
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "bg-[#003159] text-white",
      icon: $$Tailwind,
    },
    TYPEORM:{
      name:"TypeORM",
      class:"bg-black text-white",
      icon:$$TypeORM
    }
  };
  const PROJECTS = [
    {
      title: "Active - Gestion de Centros Deportivos",
      description:
        "Plataforma para gestionar centros deportivos y reservar canchas.",
      link: "https://frontend-actives-projects-11ce1f6a.vercel.app/",
      github: "https://github.com/Active04-star/Frontend",
      image: "/svgl1.webp",
      tags: [TAGS.NEXT, TAGS.TAILWIND],
      id:"Active",
      data:1,
      fullDescription:"Plataforma desarrollada desde cero para conectar centros deportivos con jugadores. Permite a los propietarios de instalaciones deportivas publicar y gestionar sus canchas, atrayendo clientes y optimizando sus reservas. Por otro lado, los usuarios pueden explorar centros deportivos, verificar disponibilidad y alquilar canchas de forma rápida y sencilla. La aplicación está diseñada para mejorar la experiencia de ambos públicos, ofreciendo una interfaz intuitiva y un proceso de reserva eficiente.",
      images:[],
      dinamicPage:"http://localhost:4321/Active"
    },

    {
      title: "Active API",
      description:
        "API RESTful que permite gestionar usuarios, centros deportivos y reservas de canchas.",
      link: "https://backend-rl4f.onrender.com",
      github: "https://github.com/Active04-star/Backend",
      image: "/svgl2.webp",
      data:2,
      tags: [TAGS.NEXT, TAGS.TYPEORM],
    }
  ];

const $$Proyects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="article-container flex flex-col gap-y-16" data-astro-cid-qow4z5a7> ${PROJECTS.map(({ data, image, title, description, tags, link, github, dinamicPage }) => renderTemplate`<article class="flex flex-col space-x-0 space-y-8  md:flex-row md:space-x-8 md:space-y-0" data-astro-cid-qow4z5a7> <div class="w-full md:w-1/2" data-astro-cid-qow4z5a7> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl 
          md:hover:-translate-y-1 md:hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50" data-astro-cid-qow4z5a7> <img alt="Recién llegado vs 5 años en Nueva Zelanda" class=" object-top w-full h-[13rem] transition duration-500  md:scale-110 md:hover:scale-105" loading="eager"${addAttribute(image, "src")} data-astro-cid-qow4z5a7> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg" data-astro-cid-qow4z5a7> <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100"${addAttribute(`${data === 1 ? "PROYECT1" : "PROYECT3"}`, "data-i18n")} data-astro-cid-qow4z5a7> ${title} </h3> <div class="flex flex-wrap mt-2" data-astro-cid-qow4z5a7> <ul class="flex flex-wrap mb-2 gap-x-2 gap-y-2" data-astro-cid-qow4z5a7> ${tags.map((tag) => renderTemplate`<li data-astro-cid-qow4z5a7> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `, "class")} data-astro-cid-qow4z5a7> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4", "data-astro-cid-qow4z5a7": true })} ${tag.name} </span> </li>`)} </ul> <div class="mt-2 text-gray-700 dark:text-gray-400"${addAttribute(`${data === 1 ? "PROYECT2" : "PROYECT4"}`, "data-i18n")} data-astro-cid-qow4z5a7> ${description}  </div> <footer class="flex items-end justify-start mt-2 gap-x-4" data-astro-cid-qow4z5a7> ${github && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": github, "data-astro-cid-qow4z5a7": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHub", $$Github, { "class": "size-6", "data-astro-cid-qow4z5a7": true })}
Code
` })}`} ${link && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": link, "data-astro-cid-qow4z5a7": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$Link, { "class": "size-4", "data-astro-cid-qow4z5a7": true })}
Preview
` })}`} </footer> </div> </div> </article>`)} </div> `;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/Proyects/Proyects.astro", undefined);

const $$Astro$2 = createAstro();
const $$ProfileCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProfileCheck;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M15 19l2 2l4 -4"></path></svg>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/icons/ProfileCheck.astro", undefined);

const $$Astro$1 = createAstro();
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, company, description, date, stack, data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4] " data-astro-cid-dlmyfogk> <div class="relative pb-12 md:col-span-2" data-astro-cid-dlmyfogk> <div class="sticky top-0" data-astro-cid-dlmyfogk> <span class="text-yellow-400 -left-[42px] absolute rounded-full text-5xl" data-astro-cid-dlmyfogk>&bull;</span> <h3 class="text-xl font-bold text-yellow-400" data-astro-cid-dlmyfogk>${title}</h3> <h4 class="font-semibold text-xl text-gray-600 dark:text-white" data-astro-cid-dlmyfogk>${company}</h4> <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80"${addAttribute(`${data === 1 ? "PROYECT5" : "PROYECT11"}`, "data-i18n")} data-astro-cid-dlmyfogk>${date}</time> </div> </div> <div class="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"${addAttribute(`${data === 1 ? "PROYECT6" : "PROYECT7"}`, "data-i18n")} data-astro-cid-dlmyfogk> ${description} <br data-astro-cid-dlmyfogk> ${stack && renderTemplate`<nav class="flex flex-wrap gap-1 mt-2" data-astro-cid-dlmyfogk> <spam class="stack border-b border-black dark:border-white" data-astro-cid-dlmyfogk>Stack:</spam>${stack.map((tech) => renderTemplate`<img height="25" width="25"${addAttribute(tech.url, "src")}${addAttribute(tech.alt, "alt")}${addAttribute(tech.title, "title")} data-astro-cid-dlmyfogk>`)} </nav>`} </div> </div> `;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/Experience/ExperienceItem.astro", undefined);

const StackUrls = [
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    alt: "HTML5 logo",
    title: "HTML",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    alt: "CSS3 logo",
    title: "CSS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JavaScript logo",
    title: "JavaScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node.js logo",
    title: "Node.js",
  },
  {
    url: "https://icongr.am/devicon/postgresql-original.svg?color=currentcolor",
    alt: "PostgreSQL logo",
    title: "PostgreSQL",
  },
  {
    url: "https://icongr.am/devicon/react-original.svg?color=currentColor",
    alt: "React logo",
    title: "React",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    alt: "Tailwind CSS",
    title: "Tailwind CSS",
  },
  {
    url: "  https://devicons.railway.com/i/nextjs-dark.svg",
    alt: "NextJS logo",
    title: "NextJS",
  },
  {
    url: "https://devicons.railway.com/i/nestjs.svg",
    alt: "NestJS logo",
    title: "NestJS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "TypeScript logo",
    title: "TypeScript",
  },
  {
    url: "https://devicons.railway.com/i/mongodb.svg",
    alt: "MongoDB logo",
    title: "MongoDB",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg",
    alt: "Docker logo",
    title: "Docker",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    alt: "Git logo",
    title: "Git",
  },
];

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const EXPERIENCE = [
    {
      date: "Septiembre 2024",
      title: "Web developer",
      company: "SoyHenry",
      description: "Pasantia de 3 meses en la que puse en practica un stack de tecnologia amplio y que me dio una buena base de programaci\xF3n",
      stack: StackUrls,
      data: 1
    },
    {
      date: "2010-2018",
      title: "C2 Proficient Level",
      company: "Denver",
      description: "Dominio del ingl\xE9s a nivel C2, con habilidades avanzadas en comunicaci\xF3n oral y escrita.",
      data: 2
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class=" ranking-list relative mt-6" data-astro-cid-vjov3bg6> ${EXPERIENCE.map((experience) => renderTemplate`<li class="" data-astro-cid-vjov3bg6> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experience, "data-astro-cid-vjov3bg6": true })} </li>`)} </ol> `;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/Experience/Experience.astro", undefined);

const $$Astro = createAstro();
const $$Adjustment = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Adjustment;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"></path> </svg>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/icons/Adjustment.astro", undefined);

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const personalImageAlt = "Fabrizio Andrade";
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row"> <div class="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"> <p> <span data-i18n="ABOUT_1">Me considero una</span> <strong data-i18n="ABOUT2">muy buena persona</strong>, <span data-i18n="ABOUT3">con un grupo cerrado y confiable de amigos. Además, se me da bien</span> <strong data-i18n="ABOUT5">relacionarme con otros</strong>, <span data-i18n="ABOUT6">lo cual es clave en un espacio como este, donde el trabajo en grupo es</span> <strong data-i18n="ABOUT7">fundamental</strong> <span data-i18n="ABOUT8">para alcanzar un objetivo</span>.
</p> <p> <span data-i18n="ABOUT9">Hacer este</span> <strong data-i18n="ABOUT10">portfolio</strong> <span data-i18n="ABOUT11">fue un gran primer paso para ganar visibilidad y mostrar algunas de las cosas que he hecho en el</span> <strong data-i18n="ABOUT12">desarrollo</strong> <span data-i18n="ABOUT13">hace menos de un año. Más allá de eso, verlo me hace darme cuenta de todo lo que he</span> <strong data-i18n="ABOUT14">aprendido</strong> <span data-i18n="ABOUT15">y lo que aún me falta por aprender, lo que me motiva muchísimo</span>.
</p> <p> <span data-i18n="ABOUT16">Mi</span> <strong data-i18n="ABOUT17">fuerte</strong> <span data-i18n="ABOUT18">es en el</span> <strong data-i18n="ABOUT19">backend</strong>, <span data-i18n="ABOUT20">aunque me siento igualmente cómodo con tareas en el</span> <strong data-i18n="ABOUT21">frontend</strong>.
<span data-i18n="ABOUT22"> Mi lenguaje favorito es JavaScript/TypeScript, y en un futuro me gustaria adentrarme en el desarrollo de videojuegos.</span> </p> </div> <img width="200" height="200" src="/me.webp"${addAttribute(personalImageAlt, "alt")} class="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 " style="object-position: 50% 50%"> </article>`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/About/AboutMe.astro", undefined);

const $$App = createComponent(($$result, $$props, $$slots) => {
  const i18n = getI18({ currentLocale: currentLanguage.get() });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n?.PORTFOLIO_TITLE, "description": "El catalogo de componentes de nuestro portfolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "inicio", "class": "pb-16 pt-36 md:py-36" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ` })} </main> <div class="space-y-24"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "proyectos" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CodeIcon", $$Code, { "class": "size-7" })} <span data-i18n="NAVBAR_PROYECTS">Proyectos</span> ` })} ${renderComponent($$result3, "Projects", $$Proyects, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "trayectoria" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Adjustment", $$Adjustment, { "class": "size-8" })} <span data-i18n="NAVBAR_TRAYECTORY">Trayectoria</span> ` })} ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "sobre-mi" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "ProfileCheck", $$ProfileCheck, { "class": "size-8" })} <span data-i18n="NAVBAR_ABOUT"> Sobre mí </span> ` })} ${renderComponent($$result3, "AboutMe", $$AboutMe, {})} ` })} </div> ` })}`;
}, "/home/fabrizio/Escritorio/Portfolio/src/components/App.astro", undefined);

export { $$App as $ };
