import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		prerender: {
			// handleHttpError: 'warn'
		},
		adapter: adapter({
			images: {
				sizes: [480, 640, 828, 1200, 1920, 3840],
				formats: ['image/avif', 'image/webp'],
				minimumCacheTTL: 300,
				domains: ['<URL>', 'www.<URL>'],
			}
		})
	}
};

export default config;
