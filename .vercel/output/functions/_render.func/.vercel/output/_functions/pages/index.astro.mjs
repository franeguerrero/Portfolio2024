import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderComponent, g as renderHead, h as renderSlot } from '../chunks/astro/server_CkRWQX1m.mjs';
/* empty css                                 */
import { $ as $$Image } from '../chunks/_astro_assets_B0KaOWVM.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { logo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2><img loading="lazy"${addAttribute(logo, "src")} alt="Logo" class="logo" data-astro-cid-3ef6ksr2></a> <ul class="nav-links" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a href="https://github.com/franeguerrero" target="_blank" data-astro-cid-3ef6ksr2>GitHub</a> </li> <li data-astro-cid-3ef6ksr2> <a href="https://www.linkedin.com/in/franeguerrero/" target="_blank" data-astro-cid-3ef6ksr2>LinkedIn</a> </li> <li data-astro-cid-3ef6ksr2> <a href="mailto:franeguerrero@gmail.com" target="_blank" class="action-btn" data-astro-cid-3ef6ksr2>Ponete en contacto</a> </li> </ul> <label class="hamburger" data-astro-cid-3ef6ksr2> <input type="checkbox" data-astro-cid-3ef6ksr2> <svg viewBox="0 0 32 32" data-astro-cid-3ef6ksr2> <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" data-astro-cid-3ef6ksr2></path> <path class="line" d="M7 16 27 16" data-astro-cid-3ef6ksr2></path> </svg> </label> </nav> <ul class="dropdown-menu" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a href="https://github.com/franeguerrero" target="_blank" data-astro-cid-3ef6ksr2>GitHub</a> </li> <li data-astro-cid-3ef6ksr2> <a href="https://www.linkedin.com/in/franeguerrero/" target="_blank" data-astro-cid-3ef6ksr2>LinkedIn</a> </li> <li data-astro-cid-3ef6ksr2> <a href="mailto:franeguerrero@gmail.com" target="_blank" class="action-btn" data-astro-cid-3ef6ksr2>Ponete en contacto</a> </li> </ul> </header>  `;
}, "C:/Users/frane/Prog/portfolio2024/src/components/Header.astro", void 0);

const logo = new Proxy({"src":"/_astro/logowhite.BX0jezqi.svg","width":221,"height":221,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/frane/Prog/portfolio2024/src/icons/logowhite.svg";
							}
							
							return target[name];
						}
					});

const phone = new Proxy({"src":"/_astro/phone.DryCA-vg.svg","width":100,"height":100,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/frane/Prog/portfolio2024/src/icons/phone.svg";
							}
							
							return target[name];
						}
					});

const mail = new Proxy({"src":"/_astro/mail.DzOLsOrB.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/frane/Prog/portfolio2024/src/icons/mail.svg";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="spacer wave-top" data-astro-cid-sz7xmlte></div> <div class="content" data-astro-cid-sz7xmlte> <div class="social" data-astro-cid-sz7xmlte> <a href="https://wa.me/5492267469421" target="_blank" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Image", $$Image, { "src": phone, "alt": "Tel\xE9fono", "data-astro-cid-sz7xmlte": true })}
+54 9 2267469421
</a> <a href="mailto:franeguerrero@gmail.com" target="_blank" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Image", $$Image, { "src": mail, "alt": "Correo electr\xF3nico", "data-astro-cid-sz7xmlte": true })}
franeguerrero@gmail.com
</a> </div> <p data-astro-cid-sz7xmlte> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "Logo", "class": "logo", "data-astro-cid-sz7xmlte": true })}© 2024 Francisco Guerrero.
      Todos los derechos reservados.
</p> </div> </footer> `;
}, "C:/Users/frane/Prog/portfolio2024/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/frane/Prog/portfolio2024/node_modules/.pnpm/astro@4.16.13_rollup@4.27.2_typescript@5.6.3/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/logo.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, { "logo": "/logo.svg" })} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/frane/Prog/portfolio2024/src/layouts/Layout.astro", void 0);

const profileImage = new Proxy({"src":"/_astro/profile.BDkjImsf.webp","width":674,"height":706,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/frane/Prog/portfolio2024/src/assets/profile.webp";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-bbe6dxrz> <div class="hero-content" data-astro-cid-bbe6dxrz> <h3 data-astro-cid-bbe6dxrz>¡Hola! Soy Francisco Guerrero,</h3> <h1 data-astro-cid-bbe6dxrz> <span class="ux" data-astro-cid-bbe6dxrz>Diseñador UX/UI</span> <span class="dev-container" data-astro-cid-bbe6dxrz> <span class="dev" data-astro-cid-bbe6dxrz>& Frontend Dev</span> </span> </h1> <p data-astro-cid-bbe6dxrz>
Soy un profesional autodidacta de Argentina con experiencia en diseñar y
      desarrollar experiencias digitales. Me especializo en crear soluciones
      funcionales, accesibles y estéticamente atractivas. En mi trabajo,
      priorizo el uso de buenas prácticas para asegurar los mejores resultados.
      Busco formar parte de un equipo donde pueda aplicar mi creatividad y
      habilidades técnicas para desarrollar proyectos que marquen la diferencia.
</p> <div class="cta-btns" data-astro-cid-bbe6dxrz> <a href="mailto:franeguerrero@gmail.com" target="_blank" class="action-btn" data-astro-cid-bbe6dxrz>Ponete en contacto</a> <a href="/public/Curriculum_Francisco_Guerrero.pdf" download class="cta-alt" data-astro-cid-bbe6dxrz>Descargá mi currículum</a> </div> </div> ${renderComponent($$result, "Image", $$Image, { "src": profileImage, "alt": "Hello, this is me", "loading": "eager", "data-astro-cid-bbe6dxrz": true })} </section> `;
}, "C:/Users/frane/Prog/portfolio2024/src/components/Hero.astro", void 0);

const $$SpacerSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-ekmaqe42> <div class="spacer wave-top" data-astro-cid-ekmaqe42></div> <div class="content" data-astro-cid-ekmaqe42> ${renderSlot($$result, $$slots["default"])} </div> <div class="spacer wave-bottom" data-astro-cid-ekmaqe42></div> </section> `;
}, "C:/Users/frane/Prog/portfolio2024/src/layouts/SpacerSection.astro", void 0);

const projects = [
	{
		titulo: "Mariana Guerrero",
		imagen: "src/assets/proyecto1.webp",
		descripcion: "Desarrollé el diseño y frontend de una galería de arte utilizando Figma y Astro, asegurando una experiencia visual atractiva y completamente responsiva. Pude crear una interfaz que se adaptaba a diversos dispositivos, manteniendo la calidad estética y funcional en pantallas de diferentes tamaños. Para la gestión de contenido, utilicé Strapi, aunque el proyecto fue interrumpido debido a problemas técnicos en el deploy del CMS, y se decidió seguir con otro enfoque. A pesar de los desafíos, este proyecto me permitió profundizar en el diseño responsivo y en la implementación de soluciones modernas de desarrollo web.",
		figma: "https://www.figma.com/design/mL3Hzs2n3i7tf8tfCe8S8u/Portfolio?node-id=1-3&t=EwoVZDx5zkowwqe3-1",
		github: "https://github.com/adminEGArt/marianaguerrero-front"
	},
	{
		titulo: "Hugo Gassioles",
		imagen: "src/assets/proyecto2.webp",
		descripcion: "Actualmente, estoy desarrollando el diseño para un nuevo proyecto web, siguiendo un enfoque similar al anterior, pero con un estilo visual más 'criollo' y adaptado a las necesidades específicas del cliente. Estoy en la fase inicial, enfocándome en crear una interfaz responsiva que mantenga la calidad en dispositivos de todos los tamaños. La implementación está prevista con Astro para optimizar la estructura del frontend, mientras que para la gestión del contenido integraré Strapi, esta vez con un mejor entendimiento del deploy, lo que permitirá una administración flexible y eficiente del contenido. Además, en este proyecto seré el encargado de redactar todo el contenido.",
		figma: "https://www.figma.com/design/mL3Hzs2n3i7tf8tfCe8S8u/Portfolio?node-id=79-2&t=EwoVZDx5zkowwqe3-1"
	}
];

const figmaIcon = new Proxy({"src":"/_astro/figma.CT4whHgW.svg","width":128,"height":128,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/frane/Prog/portfolio2024/src/icons/figma.svg";
							}
							
							return target[name];
						}
					});

const githubIcon = new Proxy({"src":"/_astro/github.mo8YlSip.svg","width":128,"height":128,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/frane/Prog/portfolio2024/src/icons/github.svg";
							}
							
							return target[name];
						}
					});

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SpacerSection", $$SpacerSection, { "data-astro-cid-amng4zvp": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 data-astro-cid-amng4zvp>Mis proyectos</h2> ${projects.map((project, index) => renderTemplate`<article${addAttribute(index % 2 === 1 ? "reverse" : "", "class")} data-astro-cid-amng4zvp> <img${addAttribute(project.imagen, "src")}${addAttribute(`Proyecto ${project.titulo}`, "alt")} loading="lazy" data-astro-cid-amng4zvp> <div class="content" data-astro-cid-amng4zvp> <h3 data-astro-cid-amng4zvp>${project.titulo}</h3> <p data-astro-cid-amng4zvp>${project.descripcion}</p> <div class="links" data-astro-cid-amng4zvp> ${project.figma && renderTemplate`<a${addAttribute(project.figma, "href")} target="_blank" class="figma" data-astro-cid-amng4zvp> ${renderComponent($$result2, "Image", $$Image, { "src": figmaIcon, "alt": "Logo Figma", "data-astro-cid-amng4zvp": true })}
Ver en Figma
</a>`} ${project.github && renderTemplate`<a${addAttribute(project.github, "href")} target="_blank" class="github" data-astro-cid-amng4zvp> ${renderComponent($$result2, "Image", $$Image, { "src": githubIcon, "alt": "Logo GitHub", "data-astro-cid-amng4zvp": true })}
Ver en GitHub
</a>`} </div> </div> </article>`)}` })} `;
}, "C:/Users/frane/Prog/portfolio2024/src/components/Projects.astro", void 0);

const skills = [
	{
		nombre: "Figma",
		imagen: "src/icons/figma.svg"
	},
	{
		nombre: "Astro",
		imagen: "src/icons/astro.svg"
	},
	{
		nombre: "Typescript",
		imagen: "src/icons/typescript.svg"
	},
	{
		nombre: "Javascript",
		imagen: "src/icons/javascript.svg"
	},
	{
		nombre: "CSS",
		imagen: "src/icons/css.svg"
	},
	{
		nombre: "HTML",
		imagen: "src/icons/html.svg"
	},
	{
		nombre: "Tailwind",
		imagen: "src/icons/tailwind.svg"
	},
	{
		nombre: "React",
		imagen: "src/icons/reactjs.svg"
	},
	{
		nombre: "Git",
		imagen: "src/icons/git.svg"
	},
	{
		nombre: "NodeJS",
		imagen: "src/icons/nodejs.svg"
	},
	{
		nombre: "NestJS",
		imagen: "src/icons/nestjs.svg"
	},
	{
		nombre: "PostgreSQL",
		imagen: "src/icons/postgresql.svg"
	},
	{
		nombre: "MongoDB",
		imagen: "src/icons/mongodb.svg"
	},
	{
		nombre: "Postman",
		imagen: "src/icons/postman.svg"
	}
];

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-ab4ihpzs> <h2 data-astro-cid-ab4ihpzs>Mi stack</h2> <div class="container" data-astro-cid-ab4ihpzs> ${skills.map((skill) => renderTemplate`<article data-astro-cid-ab4ihpzs> <img loading="lazy"${addAttribute(skill.imagen, "src")}${addAttribute(`${skill.nombre} logo`, "alt")} data-astro-cid-ab4ihpzs> <h6 data-astro-cid-ab4ihpzs>${skill.nombre}</h6> </article>`)} </div> </section> `;
}, "C:/Users/frane/Prog/portfolio2024/src/components/Skills.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Francisco Guerrero" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ` })}`;
}, "C:/Users/frane/Prog/portfolio2024/src/pages/index.astro", void 0);

const $$file = "C:/Users/frane/Prog/portfolio2024/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
