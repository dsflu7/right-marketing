import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()],
	optimizeDeps: {
		exclude: [
			'svelte-i18n',
			'@south-asian-canadian-digital-archive/sacda-exhibits-common',
			// Add other problematic dependencies that cause optimization errors
			'gsap',
			'@gsap/core'
		]
	}
});
