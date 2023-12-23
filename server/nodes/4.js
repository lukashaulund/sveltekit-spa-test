import * as universal from '../entries/pages/cases/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cases/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/cases/+page.js";
export const imports = ["_app/immutable/nodes/4.ac8d5c8f.js","_app/immutable/chunks/index.472b9089.js","_app/immutable/chunks/navbar.8d7d9064.js","_app/immutable/chunks/stores.fcb51444.js","_app/immutable/chunks/singletons.85932640.js"];
export const stylesheets = ["_app/immutable/assets/navbar.6fbcb032.css"];
export const fonts = [];
