export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Mona-Sans.woff","fonts/Mona-Sans.woff2","img/branding/haulweb_logo_black.svg","img/branding/haulweb_logo_white.svg"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff",".woff2":"font/woff2",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.e67014b2.js","app":"_app/immutable/entry/app.d3c81ea8.js","imports":["_app/immutable/entry/start.e67014b2.js","_app/immutable/chunks/index.472b9089.js","_app/immutable/chunks/singletons.85932640.js","_app/immutable/entry/app.d3c81ea8.js","_app/immutable/chunks/index.472b9089.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/cases",
				pattern: /^\/cases\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
