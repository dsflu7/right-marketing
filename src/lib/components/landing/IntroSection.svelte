<script lang="ts">
	import ServiceIcon from './ServiceIcon.svelte';
	import { serviceIcons } from '$lib/data/landing';
</script>

<section class="flex w-full flex-col items-center gap-6 px-4 py-16">
	<h2
		class="mx-auto max-w-4xl text-center text-2xl font-semibold leading-tight md:text-5xl lg:text-4xl"
	>
		Boost Your Brand, Grow Your Business
	</h2>
	<div class="my-4 h-1 w-24 rounded-full bg-primary"></div>
	<p class="mx-auto max-w-3xl text-center text-lg text-muted-foreground">
		Right Marketing empowers small local businesses to gain visibility online through focused digital marketing and social media management. Our turnkey solution combines video production, paid advertising, automation, and SEO into a single, cohesive strategy.
	</p>
	
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 w-full max-w-6xl">
		{#each Object.entries(serviceIcons) as [key, service]}
			<ServiceIcon 
				iconPath={service.path}
				title={service.title}
				description={service.description}
			/>
		{/each}
	</div>
</section>
