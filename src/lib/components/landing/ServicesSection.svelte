<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import * as Accordion from '$lib/components/ui/accordion';
	import Image from '$lib/components/Image.svelte';
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
	class="flex scroll-mt-32 flex-col items-center gap-12 px-4 py-16 bg-gradient-to-b from-transparent to-primary/80 grain-overlay lg:gap-16 rounded-b-xl"
	id="services"
	bind:this={instance}
>
	<div class="text-center max-w-3xl mx-auto">
		<h2 class="text-center text-4xl md:text-5xl font-semibold leading-tight">Complete Marketing Solutions</h2>
		<div class="my-4 h-1 w-24 rounded-full bg-primary mx-auto"></div>
		<p class="text-lg text-muted-foreground mb-8">We offer an integrated approach that combines strategy, creativity, and technology to help your business thrive in the digital landscape.</p>
	</div>

	<div class="grid w-full items-stretch gap-6 lg:grid-cols-3 max-w-6xl 2xl:max-w-[90rem]">
		{#each Object.keys(serviceData) as serviceKey, i}
			{#if !$isMobile}
				{@render desktopServiceBlock(serviceKey, i)}
			{:else}
				{@render mobileServiceBlock(serviceKey, i)}
			{/if}
		{/each}
	</div>
	
	<div class="mt-12 flex flex-col sm:flex-row gap-4 items-center">
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
		<Button onclick={() => goto('/contact')} variant="outline" size="lg" class="min-h-[44px] min-w-[44px]">
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
			class="aspect-video w-full overflow-hidden rounded-lg"
			aria-label={`Learn more about ${service.title}`}
		>
			<Image
				url={`/assets/services/${serviceKey}/1.webp`}
				description={`${service.title} service by ${PUBLIC_COMPANY_NAME}`}
				class="h-full w-full object-cover transition-all duration-500 ease-in-out hover:scale-110"
				width="480"
				height="270"
				quality={75}
			/>
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
					<div class="aspect-video h-48 max-h-48 w-full overflow-hidden rounded-lg">
						<Image
							url={`/assets/services/${serviceKey}/1.webp`}
							description={`${service.title} service by ${PUBLIC_COMPANY_NAME}`}
							class="h-full w-full object-cover"
							width="400"
							height="225"
							quality={60}
						/>
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
