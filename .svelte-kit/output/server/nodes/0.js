import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BagtH8Uu.js","_app/immutable/chunks/scheduler.BuQihcWJ.js","_app/immutable/chunks/index.DKpYvW2o.js"];
export const stylesheets = ["_app/immutable/assets/0.ByCt3OuL.css"];
export const fonts = [];
