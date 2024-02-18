import adapter from '@sveltejs/adapter-node'
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: { plugins: [tailwindcss, autoprefixer] },
		}),
	],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
	},
	vite: {
		css: {
			postcss: {
				plugins: [tailwindcss(), autoprefixer()], // <-- here
			},
		},
	},
}

export default config
