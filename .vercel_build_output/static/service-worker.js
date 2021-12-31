const timestamp = 1640908000081
const build = [
	'/_app/start-3dfdf8ba.js',
	'/_app/assets/start-d5b4de3e.css',
	'/_app/pages/__layout.svelte-219553e1.js',
	'/_app/assets/pages/__layout.svelte-bd9540de.css',
	'/_app/error.svelte-760c9fad.js',
	'/_app/pages/index.svelte-d8f5a6e5.js',
	'/_app/chunks/vendor-808be89d.js'
]
const files = [
	'/.DS_Store',
	'/fonts/Inter.woff',
	'/fonts/Inter.woff2',
	'/icon.png',
	'/icons/.DS_Store',
	'/icons/favicon128w.png',
	'/icons/favicon16w.png',
	'/icons/favicon192w.png',
	'/icons/favicon256w.png',
	'/icons/favicon32w.png',
	'/icons/favicon48w.png',
	'/icons/favicon512w.png',
	'/icons/favicon72w.png',
	'/icons/favicon96w.png',
	'/manifest.json',
	'/robots.txt'
]
const worker = self
const FILES = `cache${timestamp}`
const to_cache = build.concat(files)
const staticAssets = new Set(to_cache)
worker.addEventListener('install', (event) => {
	event.waitUntil(
		caches
			.open(FILES)
			.then((cache) => cache.addAll(to_cache))
			.then(() => worker.skipWaiting())
	)
})
worker.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then(async (keys) => {
			for (const key of keys) {
				if (key !== FILES) {
					await caches.delete(key)
				}
			}
			worker.clients.claim()
		})
	)
})
async function fetchAndCache(request) {
	const cache = await caches.open(`offline${timestamp}`)
	try {
		const response = await fetch(request)
		cache.put(request, response.clone())
		return response
	} catch (err) {
		const response = await cache.match(request)
		if (response) {
			return response
		}
		throw err
	}
}
worker.addEventListener('fetch', (event) => {
	if (event.request.method !== 'GET' || event.request.headers.has('range')) {
		return
	}
	const url = new URL(event.request.url)
	const isHttp = url.protocol.startsWith('http')
	const isDevServerRequest =
		url.hostname === self.location.hostname && url.port !== self.location.port
	const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname)
	const skipBecauseUncached = event.request.cache === 'only-if-cached' && !isStaticAsset
	if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
		event.respondWith(
			(async () => {
				const cachedAsset = isStaticAsset && (await caches.match(event.request))
				return cachedAsset || fetchAndCache(event.request)
			})()
		)
	}
})
