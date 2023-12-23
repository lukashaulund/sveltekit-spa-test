import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { N as Navbar } from "../../../chunks/navbar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
    <h1>Cases</h1></main>`;
});
export {
  Page as default
};
