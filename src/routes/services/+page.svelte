<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { services, serviceData } from '$lib/data/services';
	import { Button } from '$lib/components/ui/button';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription,
		CardFooter
	} from '$lib/components/ui/card';
	import { page } from '$app/state';
	import { PageAnimations, shouldEnableAnimations } from '$lib/utils/animations';
	// import { serviceImagesDict } from '$lib/icons/services/service_images';

	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';

	const formatServiceName = (id: string) => {
		return id
			.split('-')
			.map((x) => x[0].toUpperCase() + x.slice(1))
			.join(' ');
	};

	const domain = $derived(`${page.url.protocol}//${page.url.host}`);
	
	onMount(() => {
		if (shouldEnableAnimations()) {
			// Animate hero section
			PageAnimations.animateHero('.services-hero');
			
			// Animate service cards with stagger - target the grid items
			PageAnimations.animateCards('.services-grid > *');
			
			// Animate CTA section
			PageAnimations.animateSection('.services-cta');
		}
		
		return () => {
			if (shouldEnableAnimations()) {
				PageAnimations.cleanup();
			}
		};
	});
</script>

<svelte:head>
	<title>Services | {PUBLIC_COMPANY_NAME}</title>
	<meta
		name="description"
		content="Discover Right Marketing's comprehensive digital marketing services including video production, ad campaigns, automation, website development, SEO, and social media management."
	/>
	<meta
		name="keywords"
		content="video production, ad campaigns, marketing automation, website development, SEO, social media marketing, local SEO, digital marketing services"
	/>
	<meta property="og:title" content="Services | {PUBLIC_COMPANY_NAME}" />
	<meta
		property="og:description"
		content="Comprehensive digital marketing services that help small businesses gain visibility and grow their customer base through professional video, strategic advertising, and powerful automation."
	/>
	<meta property="og:image" content="/assets/logo.png" />
	<meta property="og:url" content="https://www.{PUBLIC_DOMAIN}/services" />
	<meta property="og:type" content="website" />
	<link rel="canonical" href="https://www.{PUBLIC_DOMAIN}/services" />
	
	{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			"name": "Digital Marketing Services | ${PUBLIC_COMPANY_NAME}",
			"description": "Discover Right Marketing's comprehensive digital marketing services including video production, ad campaigns, automation, website development, SEO, and social media management.",
			"publisher": {
				"@type": "Organization",
				"name": "${PUBLIC_COMPANY_NAME}",
				"logo": {
					"@type": "ImageObject",
					"url": "${domain}/assets/logo.png"
				}
			},
			"mainEntity": {
				"@type": "ItemList",
				"itemListElement": [
					${services.map((serviceId, index) => `
						{
							"@type": "ListItem",
							"position": ${index + 1},
							"item": {
								"@type": "Service",
								"name": "${serviceData[serviceId]?.title || formatServiceName(serviceId)}",
								"description": "${serviceData[serviceId]?.shortDescription.replace(/"/g, '\\"')}",
								"url": "${domain}/services/${serviceId}"
							}
						}${index < services.length - 1 ? ',' : ''}`
					).join('')}
				]
			}
		}
	</script>
	`}

	{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Services | ${PUBLIC_COMPANY_NAME}",
			"description": "Comprehensive digital marketing services that help small businesses gain visibility and grow their customer base through professional video, strategic advertising, and powerful automation.",
			"url": "${domain}/services",
			"provider": {
				"@type": "Organization",
				"name": "${PUBLIC_COMPANY_NAME}",
				"url": "${domain}",
				"logo": {
					"@type": "ImageObject",
					"url": "${domain}/assets/logo.png"
				}
			},
			"offers": {
				"@type": "AggregateOffer",
				"offerCount": "${services.length}",
				"highPrice": "",
				"lowPrice": "",
				"priceCurrency": "USD",
				"offers": [
					${services.map(serviceId => `
						{
							"@type": "Offer",
							"itemOffered": {
								"@type": "Service",
								"name": "${serviceData[serviceId]?.title || formatServiceName(serviceId)}",
								"description": "${serviceData[serviceId]?.shortDescription.replace(/"/g, '\\"')}",
								"url": "${domain}/services/${serviceId}"
							}
						}`
					).join(',')}
				]
			}
		}
	</script>
	`}
</svelte:head>

<main class="mt-24 p-10 lg:mt-16 lg:p-32 relative">
	<!-- Background decorative elements -->
	<div class="absolute top-20 left-10 w-32 h-24 opacity-5 hidden lg:block">
		<img src="/assets/network-graphic.svg" alt="" class="w-full h-full" />
	</div>
	<div class="absolute top-40 right-20 w-28 h-20 opacity-5 hidden lg:block">
		<img src="/assets/automation-workflow.svg" alt="" class="w-full h-full" />
	</div>
	<div class="absolute bottom-40 left-20 w-24 h-16 opacity-5 hidden lg:block">
		<img src="/assets/floating-dots.svg" alt="" class="w-full h-full" />
	</div>
	
	<section class="services-hero mb-16 relative z-10">
		<div class="text-center mb-12">
			<h1 class="mb-6 text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Our Services</h1>
			<div class="mx-auto mb-8 h-1 w-24 rounded-full bg-primary"></div>
			<p class="mx-auto mb-12 max-w-3xl text-center text-lg font-[Cantarell] text-muted-foreground">
				Right Marketing offers a full suite of digital marketing services that work together as an integrated package. Our goal is to handle everything from creative content to technical setup so you can focus on running your business.
			</p>
		</div>

		<div class="services-grid grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each services as serviceId}
				{#if serviceData[serviceId]}
					<Card class="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-lg group">
						<CardHeader class="p-0">
							<div class="aspect-video w-full overflow-hidden relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-b border-primary/20">
								<!-- Main SVG graphic background -->
								<div class="absolute inset-0 flex items-center justify-center p-8">
									{#if serviceId === 'video-production'}
										<img src="/assets/video-marketing-graphic.svg" alt={`${serviceData[serviceId].title} illustration`} class="w-full h-full object-contain transition-all duration-500 ease-in-out group-hover:scale-110 opacity-80 group-hover:opacity-100" />
									{:else if serviceId === 'ad-campaigns'}
										<img src="/assets/success-chart.svg" alt={`${serviceData[serviceId].title} illustration`} class="w-full h-full object-contain transition-all duration-500 ease-in-out group-hover:scale-110 opacity-80 group-hover:opacity-100" />
									{:else if serviceId === 'automation'}
										<img src="/assets/automation-workflow.svg" alt={`${serviceData[serviceId].title} illustration`} class="w-full h-full object-contain transition-all duration-500 ease-in-out group-hover:scale-110 opacity-80 group-hover:opacity-100" />
									{:else}
										<img src="/assets/network-graphic.svg" alt={`${serviceData[serviceId].title} illustration`} class="w-full h-full object-contain transition-all duration-500 ease-in-out group-hover:scale-110 opacity-80 group-hover:opacity-100" />
									{/if}
								</div>
								
								<!-- Decorative pattern overlay -->
								<div class="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
									<img src="/assets/modern-pattern.svg" alt="" class="w-full h-full object-cover" />
								</div>
								
								<!-- Service category badge -->
								<div class="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
									<span class="px-3 py-1 bg-primary text-white text-xs rounded-full font-medium shadow-lg">
										{#if serviceId === 'video-production'}
											Video & Content
										{:else if serviceId === 'ad-campaigns'}
											Digital Advertising
										{:else if serviceId === 'automation'}
											Automation Tools
										{:else if serviceId === 'local-seo'}
											Local SEO
										{:else if serviceId === 'social-media'}
											Social Media
										{:else if serviceId === 'website-development'}
											Web Development
										{:else}
											Marketing Services
										{/if}
									</span>
								</div>
								
								<!-- Floating animation elements -->
								<div class="absolute top-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-40 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
									<img src="/assets/floating-dots.svg" alt="" class="w-full h-full" />
								</div>
								
								<!-- Growth indicator -->
								<div class="absolute bottom-3 right-3 w-8 h-8 opacity-0 group-hover:opacity-50 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
									<img src="/assets/growth-circle.svg" alt="" class="w-full h-full" />
								</div>
							</div>
						</CardHeader>
						<CardContent class="flex flex-1 flex-col p-6">
							<div class="flex items-start gap-3 mb-3">
								<!-- Service icon -->
								<div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
									{#if serviceId === 'video-production'}
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
										</svg>
									{:else if serviceId === 'ad-campaigns'}
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
										</svg>
									{:else if serviceId === 'automation'}
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
										</svg>
									{:else if serviceId === 'local-seo'}
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
										</svg>
									{:else if serviceId === 'social-media'}
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
										</svg>
									{:else if serviceId === 'website-development'}
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
										</svg>
									{:else}
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
										</svg>
									{/if}
								</div>
								<CardTitle class="text-xl font-bold flex-1">{serviceData[serviceId].title}</CardTitle>
							</div>
							<CardDescription class="mb-4 text-base font-medium text-primary">{serviceData[serviceId].shortDescription}</CardDescription>
							<div class="mb-4 flex-1">
								<p class="line-clamp-3 text-muted-foreground">
									{serviceData[serviceId].description.substring(0, 120).replace(/<[^>]*>/g, '')}...
								</p>
							</div>
							
							{#if serviceData[serviceId].keyFeatures && serviceData[serviceId].keyFeatures.length > 0}
								<div class="mb-4">
									<h4 class="mb-2 text-sm font-semibold text-primary">Key Features:</h4>
									<ul class="space-y-1">
										{#each serviceData[serviceId].keyFeatures.slice(0, 3) as feature}
											<li class="flex items-center text-sm text-muted-foreground">
												<svg class="mr-2 h-3 w-3 flex-shrink-0 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
												</svg>
												<span class="line-clamp-1">{feature}</span>
											</li>
										{/each}
									</ul>
								</div>
							{/if}
						</CardContent>
						<CardFooter class="pt-0">
							<Button on:click={() => goto(`/services/${serviceId}`)} variant="default" class="w-full">
								<a
									href={`${domain}/services/${serviceId}`}
									onclick={(e) => {
										e.preventDefault();
										goto(`/services/${serviceId}`);
									}}
								>
									Learn More
								</a>
							</Button>
						</CardFooter>
					</Card>
				{/if}
			{/each}
		</div>
	</section>

	<!-- Section divider -->
	<div class="w-full h-8 flex justify-center items-center py-8 mb-8">
		<img src="/assets/section-divider.svg" alt="" class="w-full max-w-4xl h-full opacity-20" />
	</div>

	<!-- Call to action -->
	<section class="services-cta mb-16 rounded-lg bg-gradient-to-r from-primary to-primary/90 p-8 shadow-lg relative overflow-hidden">
		<!-- Background decorative elements -->
		<div class="absolute top-4 right-4 w-16 h-12 opacity-20">
			<img src="/assets/success-chart.svg" alt="" class="w-full h-full filter invert" />
		</div>
		<div class="absolute bottom-4 left-4 w-12 h-8 opacity-20 hidden sm:block">
			<img src="/assets/growth-circle.svg" alt="" class="w-full h-full filter invert" />
		</div>
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-24 opacity-10">
			<img src="/assets/floating-dots.svg" alt="" class="w-full h-full filter invert" />
		</div>
		
		<div class="mx-auto max-w-4xl text-center text-primary-foreground relative z-10">
			<h2 class="mb-4 text-3xl font-bold">Ready to Transform Your Digital Presence?</h2>
			<p class="mb-6 text-lg opacity-90">
				Contact us today for a free consultation and discover how our integrated marketing services can help you reach more customers.
			</p>
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Button href={`${domain}/contact`} variant="secondary" size="lg" class="font-medium">
					Get a Free Consultation
				</Button>
				<Button href={`${domain}/contact`} variant="outline" size="lg" class="border-white text-white hover:bg-white hover:text-primary">
					View Our Portfolio
				</Button>
			</div>
		</div>
	</section>
</main>

<style>
	/* Hide elements initially for GSAP animations */
	.services-hero,
	.services-grid > :global(*),
	.services-cta {
		opacity: 0;
	}
	
	/* Prevent layout shift during animation loading */
	@media (prefers-reduced-motion: reduce) {
		.services-hero,
		.services-grid > :global(*),
		.services-cta {
			opacity: 1 !important;
		}
	}
</style>
