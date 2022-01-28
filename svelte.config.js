// import adapter from '@sveltejs/adapter-vercel'
import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess({})],
	kit: {
		adapter: adapter(),
		target: '#svelte',
		floc: true
	}
}

export default config
