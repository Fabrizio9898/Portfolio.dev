/* empty css                                 */
import { e as createComponent, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_Ci-5vGjH.mjs';
import { $ as $$App } from '../chunks/App_rvmTNNGk.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "App", $$App, {})}`;
}, "/home/fabrizio/Escritorio/Portfolio/src/pages/index.astro", undefined);

const $$file = "/home/fabrizio/Escritorio/Portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
