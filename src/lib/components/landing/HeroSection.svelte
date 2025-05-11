<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { CaretDown } from 'svelte-radix';
	import { goto } from '$app/navigation';
	import { PUBLIC_COMPANY_NAME } from '$env/static/public';
	import { page } from '$app/state';
	import { heroContent } from '$lib/data/landing';
	
	// export let scrollToServices: () => void;
	interface Props {
		scrollToServices: () => void;
	}
	let { scrollToServices = $bindable() }: Props = $props();
	
	// Get the base URL for absolute links
	const domain = $derived(`${page.url.protocol}//${page.url.host}`);
</script>

<div
	class="absolute left-1/2 top-1/2 mt-12 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center"
>
	<h1 class="text-shadow text-center text-[6vh] font-semibold md:text-[8vw]">
		{PUBLIC_COMPANY_NAME}
	</h1>
	<span
		class="flex flex-wrap justify-center text-center font-[Cantarell] text-lg font-semibold *:bg-primary/40 *:px-3 *:py-1 *:my-1 *:mx-1 *:rounded-md md:text-2xl"
	>
		{#each heroContent.categories as category}
			<span>{category}</span>
		{/each}
	</span>
	<p class="max-w-[80vw] mt-4 text-center font-[Cantarell] text-lg md:text-2xl shadow-text">
		{heroContent.title}
	</p>
	<div class="flex flex-col sm:flex-row gap-4 mt-8">
		<Button
			onclick={() => goto('/contact')}
			aria-label="Get free quote"
			class="text-lg"
			size="lg"
		>
			<a
				href={`${domain}/contact`}
				onclick={(e) => {
					e.preventDefault();
					goto('/contact');
				}}
			>
				Get Free Quote
			</a>
		</Button>
		<Button
			onclick={() => goto('/services')}
			variant="outline"
			aria-label="Our Services"
			class="bg-white/80 text-lg border-white hover:bg-white"
			size="lg"
		>
			<a
				href={`${domain}/services`}
				onclick={(e) => {
					e.preventDefault();
					goto('/services');
				}}
			>
				Our Services
			</a>
		</Button>
	</div>
	<button
		onclick={scrollToServices}
		class="mt-8 flex flex-col items-center text-white"
		aria-label="Scroll down to view more content"
	>
		<span class="text-shadow">Scroll Down</span>
		<CaretDown class="h-6 w-6 animate-bounce" />
	</button>
</div>

<style>
	.text-shadow {
		text-shadow: 2px 3px 9px rgba(0, 0, 0, 0.59);
	}
	
	.shadow-text {
		text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
	}
</style>
