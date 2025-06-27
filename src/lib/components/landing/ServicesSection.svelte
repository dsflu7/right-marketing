<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import * as Accordion from '$lib/components/ui/accordion';
	import { serviceData } from '$lib/data/services';
	import { isMobile } from '$lib/utils/stores';
	import { PUBLIC_COMPANY_NAME } from '$env/static/public';
	
	interface Props {
		instance: any;
	}

	let { instance = $bindable() }: Props = $props();

	// Get the base URL for absolute links
	const domain = $derived(`${page.url.protocol}//${page.url.host}`);
</script>

<section
	class="flex scroll-mt-32 flex-col items-center gap-12 px-4 py-16 bg-gradient-to-b from-transparent to-primary/80 grain-overlay relative overflow-hidden lg:gap-16 rounded-b-xl"
	id="services"
	bind:this={instance}
>
	<!-- Background decorative elements -->
	<div class="absolute top-10 left-10 w-48 h-32 opacity-5 hidden lg:block">
		<img src="/assets/video-marketing-graphic.svg" alt="" class="w-full h-full" />
	</div>
	<div class="absolute bottom-20 right-20 w-40 h-24 opacity-5 hidden lg:block">
		<img src="/assets/automation-workflow.svg" alt="" class="w-full h-full" />
	</div>
	<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-48 opacity-3">
		<img src="/assets/network-graphic.svg" alt="" class="w-full h-full" />
	</div>
	
	<div class="text-center max-w-3xl mx-auto relative z-10">
		<h2 class="text-center text-4xl md:text-5xl font-semibold leading-tight">Complete Marketing Solutions</h2>
		<div class="my-4 h-1 w-24 rounded-full bg-primary mx-auto"></div>
		<p class="text-lg text-muted-foreground mb-8">We offer an integrated approach that combines strategy, creativity, and technology to help your business thrive in the digital landscape.</p>
	</div>

	<div class="grid w-full items-stretch gap-6 lg:grid-cols-3 max-w-6xl 2xl:max-w-[90rem] relative z-10">
		{#each Object.keys(serviceData) as serviceKey, i}
			{#if !$isMobile}
				{@render desktopServiceBlock(serviceKey, i)}
			{:else}
				{@render mobileServiceBlock(serviceKey, i)}
			{/if}
		{/each}
	</div>
	
	<div class="mt-12 flex flex-col sm:flex-row gap-4 items-center relative z-10">
		<Button onclick={() => goto('/services')} size="lg" class="min-h-[44px] min-w-[44px]">
			<a
				href={`${domain}/services`}
				onclick={(e) => {
					e.preventDefault();
					goto('/services');
				}}
				class="flex h-full w-full items-center justify-center"
			>
				View All Services
			</a>
		</Button>
		<Button onclick={() => goto('/packages')} variant="outline" size="lg" class="min-h-[44px] min-w-[44px]">
			<a
				href={`${domain}/packages`}
				onclick={(e) => {
					e.preventDefault();
					goto('/packages');
				}}
				class="flex h-full w-full items-center justify-center"
			>
				View Packages
			</a>
		</Button>
		<Button onclick={() => goto('/contact')} variant="secondary" size="lg" class="min-h-[44px] min-w-[44px]">
			<a
				href={`${domain}/contact`}
				onclick={(e) => {
					e.preventDefault();
					goto('/contact');
				}}
				class="flex h-full w-full items-center justify-center"
			>
				Request Custom Package
			</a>
		</Button>
	</div>
</section>

{#snippet desktopServiceBlock(serviceKey: string, i: number)}
	{@const service = serviceData[serviceKey]}
	<div class="flex h-full flex-col gap-4 rounded-xl border border-primary/20 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
		<div class="flex items-center gap-3">
			<div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
				{#if serviceKey === 'video-production'}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
					</svg>
				{:else if serviceKey === 'ad-campaigns'}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
					</svg>
				{:else if serviceKey === 'automation'}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				{/if}
			</div>
			<h3 class="font-[Alatsi] text-2xl">{service.title}</h3>
		</div>

		<div
			class="aspect-video w-full overflow-hidden rounded-lg relative group bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20"
			aria-label={`Learn more about ${service.title}`}
		>
			<!-- Main SVG graphic background -->
			<div class="absolute inset-0 flex items-center justify-center p-8">
				{#if serviceKey === 'video-production'}
					<img src="/assets/video-marketing-graphic.svg" alt={`${service.title} illustration`} class="w-full h-full object-contain transition-all duration-500 ease-in-out group-hover:scale-110 opacity-80 group-hover:opacity-100" />
				{:else if serviceKey === 'ad-campaigns'}
					<img src="/assets/success-chart.svg" alt={`${service.title} illustration`} class="w-full h-full object-contain transition-all duration-500 ease-in-out group-hover:scale-110 opacity-80 group-hover:opacity-100" />
				{:else if serviceKey === 'automation'}
					<img src="/assets/automation-workflow.svg" alt={`${service.title} illustration`} class="w-full h-full object-contain transition-all duration-500 ease-in-out group-hover:scale-110 opacity-80 group-hover:opacity-100" />
				{:else}
					<img src="/assets/network-graphic.svg" alt={`${service.title} illustration`} class="w-full h-full object-contain transition-all duration-500 ease-in-out group-hover:scale-110 opacity-80 group-hover:opacity-100" />
				{/if}
			</div>
			
			<!-- Decorative pattern overlay -->
			<div class="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
				<img src="/assets/modern-pattern.svg" alt="" class="w-full h-full object-cover" />
			</div>
			
			<!-- Floating animation elements -->
			<div class="absolute top-2 right-2 w-6 h-6 opacity-0 group-hover:opacity-40 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
				<img src="/assets/floating-dots.svg" alt="" class="w-full h-full" />
			</div>
			
			<!-- Growth indicator in corner -->
			<div class="absolute bottom-2 right-2 w-8 h-8 opacity-0 group-hover:opacity-50 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
				<img src="/assets/growth-circle.svg" alt="" class="w-full h-full" />
			</div>
			
			<!-- Hover effect: Show service category badge -->
			<div class="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
				<span class="px-2 py-1 bg-primary text-white text-xs rounded-full font-medium shadow-lg">
					{#if serviceKey === 'video-production'}
						Video & Content
					{:else if serviceKey === 'ad-campaigns'}
						Digital Advertising
					{:else if serviceKey === 'automation'}
						Automation Tools
					{:else}
						SEO & Analytics
					{/if}
				</span>
			</div>
		</div>

		<p class="flex-grow font-[Cantarell] text-muted-foreground">{service.shortDescription}</p>
		
		{#if service.keyFeatures && service.keyFeatures.length > 0}
			<ul class="mt-2 space-y-1">
				{#each service.keyFeatures.slice(0, 3) as feature}
					<li class="flex items-center text-sm text-muted-foreground">
						<svg class="mr-2 h-4 w-4 flex-shrink-0 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
						{feature}
					</li>
				{/each}
			</ul>
		{/if}
		
		<Button
			onclick={() => goto(`/services/${serviceKey}`)}
			variant="default"
			class="mt-4 w-full"
		>
			<a
				href={`${domain}/services/${serviceKey}`}
				onclick={(e) => {
					e.preventDefault();
					goto(`/services/${serviceKey}`);
				}}
			>
				Learn More
			</a>
		</Button>
	</div>
{/snippet}

{#snippet mobileServiceBlock(serviceKey: string, i: number)}
	{@const service = serviceData[serviceKey]}
	<Accordion.Root class="mb-2 w-[90vw]" value={!i ? [serviceKey] : []}>
		<Accordion.Item value={serviceKey} class="rounded-lg border border-primary/20 bg-white">
			<Accordion.Trigger class="group relative w-full rounded-t-lg bg-white px-4 py-4 text-left hover:bg-primary/5">
				<div class="flex w-full items-center">
					<div class="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
						{#if serviceKey === 'video-production'}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
							</svg>
						{:else if serviceKey === 'ad-campaigns'}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
							</svg>
						{:else if serviceKey === 'automation'}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
							</svg>
						{:else}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
						{/if}
					</div>
					<h3 class="font-[Alatsi] text-xl">
						{service.title}
					</h3>
				</div>
			</Accordion.Trigger>
			<Accordion.Content class="rounded-b-lg bg-white px-4 pb-4 pt-2">
				<div class="flex flex-col gap-3">
					<div class="aspect-video h-48 max-h-48 w-full overflow-hidden rounded-lg relative group bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
						<!-- Main SVG graphic -->
						<div class="absolute inset-0 flex items-center justify-center p-6">
							{#if serviceKey === 'video-production'}
								<img src="/assets/video-marketing-graphic.svg" alt={`${service.title} illustration`} class="w-full h-full object-contain transition-all duration-300 ease-in-out group-hover:scale-105 opacity-80" />
							{:else if serviceKey === 'ad-campaigns'}
								<img src="/assets/success-chart.svg" alt={`${service.title} illustration`} class="w-full h-full object-contain transition-all duration-300 ease-in-out group-hover:scale-105 opacity-80" />
							{:else if serviceKey === 'automation'}
								<img src="/assets/automation-workflow.svg" alt={`${service.title} illustration`} class="w-full h-full object-contain transition-all duration-300 ease-in-out group-hover:scale-105 opacity-80" />
							{:else}
								<img src="/assets/network-graphic.svg" alt={`${service.title} illustration`} class="w-full h-full object-contain transition-all duration-300 ease-in-out group-hover:scale-105 opacity-80" />
							{/if}
						</div>
						
						<!-- Subtle background pattern -->
						<div class="absolute inset-0 opacity-3">
							<img src="/assets/modern-pattern.svg" alt="" class="w-full h-full object-cover" />
						</div>
						
						<!-- Service icon overlay for mobile -->
						<div class="absolute top-2 right-2 w-6 h-6 bg-white/90 rounded-full p-1 shadow-sm">
							{#if serviceKey === 'video-production'}
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
								</svg>
							{:else if serviceKey === 'ad-campaigns'}
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
								</svg>
							{:else if serviceKey === 'automation'}
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
								</svg>
							{:else}
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>
							{/if}
						</div>
						
						<!-- Category badge for mobile -->
						<div class="absolute bottom-2 left-2">
							<span class="px-2 py-1 bg-primary/90 text-white text-xs rounded-full font-medium shadow-sm">
								{#if serviceKey === 'video-production'}
									Video
								{:else if serviceKey === 'ad-campaigns'}
									Ads
								{:else if serviceKey === 'automation'}
									Automation
								{:else}
									SEO
								{/if}
							</span>
						</div>
						
						<!-- Growth indicator -->
						<div class="absolute bottom-2 right-2 w-4 h-4 opacity-30">
							<img src="/assets/growth-circle.svg" alt="" class="w-full h-full" />
						</div>
					</div>
					<p class="py-1 font-[Cantarell] text-sm text-muted-foreground">{service.shortDescription}</p>
					
					{#if service.keyFeatures && service.keyFeatures.length > 0}
						<ul class="mt-2 space-y-1">
							{#each service.keyFeatures.slice(0, 2) as feature}
								<li class="flex items-center text-xs text-muted-foreground">
									<svg class="mr-2 h-3 w-3 flex-shrink-0 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									{feature}
								</li>
							{/each}
						</ul>
					{/if}
					
					<div class="mt-3 flex justify-between gap-2">
						<Button
							variant="default"
							size="sm"
							onclick={() => goto(`/services/${serviceKey}`)}
							class="min-h-[44px] min-w-[44px] flex-1"
						>
							<a
								href={`${domain}/services/${serviceKey}`}
								onclick={(e) => {
									e.preventDefault();
									goto(`/services/${serviceKey}`);
								}}
								class="flex h-full w-full items-center justify-center"
							>
								Learn More
							</a>
						</Button>
						<Button
							size="sm"
							variant="outline"
							onclick={() => goto('/contact')}
							class="min-h-[44px] min-w-[44px] flex-none"
						>
							<a
								href={`${domain}/contact`}
								onclick={(e) => {
									e.preventDefault();
									goto('/contact');
								}}
								class="flex h-full w-full items-center justify-center"
							>
								Get Quote
							</a>
						</Button>
					</div>
				</div>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
{/snippet}
