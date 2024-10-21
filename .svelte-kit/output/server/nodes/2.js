

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BJez6cjP.js","_app/immutable/chunks/scheduler.BuQihcWJ.js","_app/immutable/chunks/index.DKpYvW2o.js","_app/immutable/chunks/index.BEp7H1z8.js"];
export const stylesheets = [];
export const fonts = [];
