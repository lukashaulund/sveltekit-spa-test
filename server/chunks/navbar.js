import { c as create_ssr_component, b as subscribe, d as add_attribute } from "./index.js";
import { p as page } from "./stores.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const onNavigate = /* @__PURE__ */ client_method("on_navigate");
const navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: ".navbar.svelte-1eisij3.svelte-1eisij3{position:relative;color:white;padding:32px calc(8.33vw + 15px) 32px calc(8.33vw + 15px);display:flex;align-items:center;justify-content:space-between}.nav-home.svelte-1eisij3 img.svelte-1eisij3{height:40px;width:auto}.nav-list.svelte-1eisij3.svelte-1eisij3{list-style-type:none;display:flex;gap:48px;padding:0;margin:0;margin-top:20px}.nav-list.svelte-1eisij3 li a.svelte-1eisij3{text-decoration:none;color:#373138;font-family:'Mona Sans';font-size:20px;font-style:normal;font-weight:500;line-height:normal}.nav-list.svelte-1eisij3 li.svelte-1eisij3{position:relative}.nav-list.svelte-1eisij3 li[current='page'].svelte-1eisij3::before{position:absolute;content:'●';font-size:32px;color:#FFA260;left:calc(50% - 8px);bottom:20px;view-transition-name:active-page}.nav-home[current='page'].svelte-1eisij3.svelte-1eisij3::before{position:absolute;content:'●';font-size:32px;color:#ffa26000;left:248px;top:36px;view-transition-name:active-page}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  onNavigate((navigation) => {
    if (!document.startViewTransition)
      return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<nav class="navbar svelte-1eisij3"><a href="/" class="nav-home svelte-1eisij3"${add_attribute("current", $page.url.pathname === "/" ? "page" : void 0, 0)}><img${add_attribute("src", "/img/branding/haulweb_logo_black.svg", 0)} alt="" class="svelte-1eisij3"></a>
    <ul class="nav-list svelte-1eisij3"><li${add_attribute(
    "current",
    $page.url.pathname.includes("cases") ? "page" : void 0,
    0
  )} class="svelte-1eisij3"><a href="/cases" class="svelte-1eisij3">Cases</a></li>
        <li${add_attribute(
    "current",
    $page.url.pathname.includes("about") ? "page" : void 0,
    0
  )} class="svelte-1eisij3"><a href="/about" class="svelte-1eisij3">Ydelser</a></li>
        <li${add_attribute("current", $page.url.pathname.includes("blog") ? "page" : void 0, 0)} class="svelte-1eisij3"><a href="/blog" class="svelte-1eisij3">Blog</a></li>
        <li${add_attribute(
    "current",
    $page.url.pathname.includes("indsigt") ? "page" : void 0,
    0
  )} class="svelte-1eisij3"><a href="/indsigt" class="svelte-1eisij3">Indsigt</a></li>
        <li${add_attribute(
    "current",
    $page.url.pathname.includes("kontakt") ? "page" : void 0,
    0
  )} class="svelte-1eisij3"><a href="/kontakt" class="svelte-1eisij3">Kontakt</a></li>
        <div></div></ul>
 
</nav>`;
});
export {
  Navbar as N
};
