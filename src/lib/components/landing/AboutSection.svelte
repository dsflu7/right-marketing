<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Image from '$lib/components/Image.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { aboutContent } from '$lib/data/landing';
	
	// Get the base URL for absolute links
	const domain = $derived(`${page.url.protocol}//${page.url.host}`);
</script>

<section class="container mx-auto max-w-6xl 2xl:max-w-[90rem] flex flex-col items-center gap-8 px-4 py-16 lg:flex-row rounded-xl relative overflow-hidden">
	<!-- Background decorative element -->
	<div class="absolute top-0 right-0 w-72 h-48 opacity-5 hidden lg:block">
		<img src="/assets/testimonials-graphic.svg" alt="" class="w-full h-full" />
	</div>
	<div class="absolute bottom-10 left-10 w-32 h-32 opacity-5">
		<img src="/assets/modern-pattern.svg" alt="" class="w-full h-full" />
	</div>
	
	<div class="w-full lg:w-1/2 relative z-10">
		<img src="/assets/landing/undraw_predictive-analytics_6vi1.svg" class="w-full h-[60vh] rounded-lg object-contain" alt="">
		<!-- <Image
			url="/assets/landing/team.jpg"
			description="The Right Marketing team of digital marketing experts"
			class="h-[60vh] w-full rounded-lg object-cover shadow-xl"
			width="800"
			height="600"
		/> -->
	</div>
	<div class="w-full space-y-6 lg:w-1/2 lg:pl-8 relative z-10">
		<h2 class="text-3xl font-semibold">
			{aboutContent.title}
		</h2>
		<div class="h-1 w-20 rounded-full bg-primary"></div>
		
		{#each aboutContent.paragraphs as paragraph}
			<p class="text-muted-foreground">{paragraph}</p>
		{/each}
		
		<div class="flex flex-wrap gap-6 mt-8 pt-4">
			{#each aboutContent.stats as stat}
				<div class="flex flex-col items-center">
					<div class="text-3xl font-bold text-primary">{stat.value}</div>
					<div class="text-sm text-muted-foreground">{stat.label}</div>
				</div>
			{/each}
		</div>
		
		<div class="pt-4 flex flex-col sm:flex-row gap-4">
			<Button onclick={() => goto('/contact')} class="min-h-[44px] min-w-[44px]">
				<a
					href={`${domain}/contact`}
					onclick={(e) => {
						e.preventDefault();
						goto('/contact');
					}}
					class="flex h-full w-full items-center justify-center"
				>
					Schedule a Free Consultation
				</a>
			</Button>
			<Button onclick={() => goto('/our-story')} variant="outline" class="min-h-[44px] min-w-[44px]">
				<a
					href={`${domain}/our-story`}
					onclick={(e) => {
						e.preventDefault();
						goto('/our-story');
					}}
					class="flex h-full w-full items-center justify-center"
				>
					Our Story
				</a>
			</Button>
		</div>
	</div>
</section>
