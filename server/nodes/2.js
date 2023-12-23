import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.fd6424d9.js","_app/immutable/chunks/index.472b9089.js","_app/immutable/chunks/navbar.8d7d9064.js","_app/immutable/chunks/stores.fcb51444.js","_app/immutable/chunks/singletons.85932640.js"];
export const stylesheets = ["_app/immutable/assets/2.a30aa4d7.css","_app/immutable/assets/navbar.6fbcb032.css"];
export const fonts = [];
