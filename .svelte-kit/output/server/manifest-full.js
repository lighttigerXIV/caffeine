export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","svelte.svg","tauri.svg","vite.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.2czQToVw.js","app":"_app/immutable/entry/app.DmAwloY7.js","imports":["_app/immutable/entry/start.2czQToVw.js","_app/immutable/chunks/entry.DOOYqU2S.js","_app/immutable/chunks/scheduler.BuQihcWJ.js","_app/immutable/chunks/index.BEp7H1z8.js","_app/immutable/entry/app.DmAwloY7.js","_app/immutable/chunks/scheduler.BuQihcWJ.js","_app/immutable/chunks/index.DKpYvW2o.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
