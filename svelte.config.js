import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	extensions: ['.svelte'],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		// vite: () => ({ hmr: { overlay: false } })
		target: '#svelte',
		amp: false
	}
};

export default config;
