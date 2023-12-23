import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.911733f8.js","_app/immutable/chunks/index.472b9089.js","_app/immutable/chunks/navbar.8d7d9064.js","_app/immutable/chunks/stores.fcb51444.js","_app/immutable/chunks/singletons.85932640.js"];
export const stylesheets = ["_app/immutable/assets/navbar.6fbcb032.css"];
export const fonts = [];
