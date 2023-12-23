import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { N as Navbar } from "../../chunks/navbar.js";
const landingHero_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hero-text.svelte-1diuw5b.svelte-1diuw5b{padding:0px calc(16.66vw + 13px) 0px calc(16.66vw + 13px);margin:96px 0px 256px 0px}@media only screen and (max-width: 1265px){.hero-text.svelte-1diuw5b.svelte-1diuw5b{padding:0px 16px 0px 16px}}@media only screen and (max-width: 850px){.hero-text.svelte-1diuw5b h1.svelte-1diuw5b{font-size:5.11vw !important}}.hero-text.svelte-1diuw5b h1.svelte-1diuw5b{font-family:'Unbounded', sans-serif;color:#373138;font-size:48px;font-style:normal;font-weight:400;line-height:normal;margin:0}",
  map: null
};
const Landing_hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="hero-text svelte-1diuw5b"><h1 class="svelte-1diuw5b">Et digitalt bureau i én person<br>
        har sine fordele.
    </h1>
</div>`;
});
const global = '@import"https://fonts.googleapis.com/css2?family=Unbounded:wght@200;300;400;500;600;700;800;900&display=swap";@font-face{font-family:Mona Sans;src:url(/fonts/Mona-Sans.woff2) format("woff2 supports variations"),url(/fonts/Mona-Sans.woff2) format("woff2-variations");font-weight:200 900;font-stretch:75% 125%}body{background-color:#fffbee;margin:0;padding:0}*{transition:all .2s ease-in-out}\n';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
        ${validate_component(Landing_hero, "Hero").$$render($$result, {}, {}, {})}
        <h1>HOME</h1></main>`;
});
export {
  Page as default
};
