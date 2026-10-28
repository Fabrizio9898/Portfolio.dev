/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_gxSWGnP7.mjs';
import { $ as $$App } from '../chunks/App_CBDh0V5Z.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "App", $$App, {})}`;
}, "C:/Users/USUARIO/Portfolio.dev/src/pages/en/index.astro", undefined);

const $$file = "C:/Users/USUARIO/Portfolio.dev/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
