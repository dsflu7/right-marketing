<script lang="ts">
	import { onMount } from 'svelte';
	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';
	import { serviceAreas, getServiceAreasByRegion } from '$lib/data/service-areas';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card';
	import { PageAnimations, shouldEnableAnimations } from '$lib/utils/animations';
	import { page } from '$app/state';

	const metroVancouverAreas = getServiceAreasByRegion('metro-vancouver');
	const fraserValleyAreas = getServiceAreasByRegion('fraser-valley');
	const domain = $derived(`${page.url.protocol}//${page.url.host}`);

	onMount(() => {
		if (shouldEnableAnimations()) {
			PageAnimations.animateHero('.service-areas-hero');
			PageAnimations.animateSection('.metro-vancouver-section');
			PageAnimations.animateSection('.fraser-valley-section');
			PageAnimations.animateCards('.service-area-card', { staggerDelay: 0.1 });
			PageAnimations.animateSection('.service-areas-cta');
		}
		
		return () => {
			if (shouldEnableAnimations()) {
				PageAnimations.cleanup();
			}
		};
	});
</script>

<svelte:head>
	<title>Service Areas | Digital Marketing Metro Vancouver & Fraser Valley | {PUBLIC_COMPANY_NAME}</title>
	<meta
		name="description"
		content="Professional digital marketing services across Metro Vancouver and Fraser Valley. Local SEO, video production, and social media marketing for businesses in Vancouver, Surrey, Burnaby, Richmond, Abbotsford, Langley, and more."
	/>
	<meta
		name="keywords"
		content="digital marketing Metro Vancouver, Fraser Valley marketing agency, Vancouver SEO, Surrey marketing, Burnaby digital marketing, Richmond SEO, Abbotsford marketing, Langley SEO, local SEO BC"
	/>
	<meta property="og:title" content="Service Areas | Digital Marketing Metro Vancouver & Fraser Valley | {PUBLIC_COMPANY_NAME}" />
	<meta
		property="og:description"
		content="Leading digital marketing agency serving Metro Vancouver and Fraser Valley. Expert local SEO, video production, and social media marketing services for businesses across BC."
	/>
	<meta property="og:image" content="/assets/logo.png" />
	<meta property="og:url" content="https://www.{PUBLIC_DOMAIN}/service-areas" />
	<meta property="og:type" content="website" />
	<link rel="canonical" href="https://www.{PUBLIC_DOMAIN}/service-areas" />
	
	{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "LocalBusiness",
			"name": "${PUBLIC_COMPANY_NAME}",
			"description": "Professional digital marketing services across Metro Vancouver and Fraser Valley. Local SEO, video production, and social media marketing.",
			"url": "${domain}/service-areas",
			"logo": "${domain}/assets/logo.png",
			"areaServed": [
				${serviceAreas.map(area => `
					{
						"@type": "City",
						"name": "${area.name}",
						"addressRegion": "${area.province}",
						"addressCountry": "CA"
					}`
				).join(',')}
			],
			"serviceArea": {
				"@type": "GeoCircle",
				"geoMidpoint": {
					"@type": "GeoCoordinates",
					"latitude": 49.2827,
					"longitude": -123.1207
				},
				"geoRadius": "100000"
			},
			"priceRange": "$$",
			"telephone": "+1-604-XXX-XXXX",
			"email": "info@rightmarketing.ca"
		}
	</script>
	`}

	{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Service Areas | ${PUBLIC_COMPANY_NAME}",
			"description": "Professional digital marketing services across Metro Vancouver and Fraser Valley. Local SEO, video production, and social media marketing for businesses in Vancouver, Surrey, Burnaby, Richmond, Abbotsford, Langley, and more.",
			"url": "${domain}/service-areas",
			"mainEntity": {
				"@type": "ItemList",
				"itemListElement": [
					${serviceAreas.map((area, index) => `
						{
							"@type": "ListItem",
							"position": ${index + 1},
							"item": {
								"@type": "Place",
								"name": "${area.name}, ${area.province}",
								"description": "${area.description}",
								"url": "${domain}/service-areas/${area.id}",
								"geo": {
									"@type": "GeoCoordinates",
									"latitude": ${area.coordinates?.lat || 0},
									"longitude": ${area.coordinates?.lng || 0}
								}
							}
						}${index < serviceAreas.length - 1 ? ',' : ''}`
					).join('')}
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
		<img src="/assets/growth-circle.svg" alt="" class="w-full h-full" />
	</div>
	<div class="absolute bottom-40 left-20 w-24 h-16 opacity-5 hidden lg:block">
		<img src="/assets/floating-dots.svg" alt="" class="w-full h-full" />
	</div>

	<!-- Hero Section -->
	<section class="service-areas-hero mb-16 relative z-10">
		<div class="text-center mb-12">
			<h1 class="mb-6 text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
				Service Areas
			</h1>
			<div class="mx-auto mb-8 h-1 w-24 rounded-full bg-primary"></div>
			<p class="mx-auto mb-8 max-w-3xl text-center text-lg font-[Cantarell] text-muted-foreground">
				Right Marketing proudly serves businesses across Metro Vancouver and the Fraser Valley with professional digital marketing services tailored to local markets.
			</p>
			<div class="flex flex-wrap justify-center gap-2 mb-8">
				<span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Local SEO</span>
				<span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Video Production</span>
				<span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Social Media Marketing</span>
				<span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Website Development</span>
			</div>
		</div>
	</section>

	<!-- Metro Vancouver Section -->
	<section class="metro-vancouver-section mb-16">
		<div class="text-center mb-12">
			<h2 class="mb-4 text-3xl md:text-4xl font-bold text-primary">Metro Vancouver</h2>
			<p class="mx-auto max-w-2xl text-center text-muted-foreground">
				Serving the heart of British Columbia's business community with comprehensive digital marketing solutions.
			</p>
		</div>
		
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
			{#each metroVancouverAreas as area}
				<Card class="service-area-card group hover:shadow-lg transition-all duration-300 h-full">
					<CardHeader>
						<div class="flex items-center justify-between mb-2">
							<CardTitle class="text-xl font-bold text-primary">{area.name}</CardTitle>
							<span class="text-sm text-muted-foreground">{area.province}</span>
						</div>
						<CardDescription class="text-base">{area.description}</CardDescription>
					</CardHeader>
					<CardContent class="flex-1">
						<div class="mb-4">
							<h4 class="font-semibold mb-2 text-primary">Key Business Types:</h4>
							<div class="flex flex-wrap gap-1">
								{#each area.businessTypes.slice(0, 3) as businessType}
									<span class="px-2 py-1 bg-primary/10 text-primary rounded text-xs">{businessType}</span>
								{/each}
								{#if area.businessTypes.length > 3}
									<span class="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">+{area.businessTypes.length - 3} more</span>
								{/if}
							</div>
						</div>
						
						<div class="mb-4">
							<h4 class="font-semibold mb-2 text-primary">Local Landmarks:</h4>
							<ul class="text-sm text-muted-foreground space-y-1">
								{#each area.localLandmarks.slice(0, 3) as landmark}
									<li class="flex items-center">
										<svg class="w-3 h-3 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
										</svg>
										{landmark}
									</li>
								{/each}
							</ul>
						</div>
						
						<div class="mt-auto">
							<Button href="/service-areas/{area.id}" class="w-full group-hover:bg-primary/90 transition-colors">
								Learn More About {area.name}
							</Button>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</section>

	<!-- Fraser Valley Section -->
	<section class="fraser-valley-section mb-16">
		<div class="text-center mb-12">
			<h2 class="mb-4 text-3xl md:text-4xl font-bold text-primary">Fraser Valley</h2>
			<p class="mx-auto max-w-2xl text-center text-muted-foreground">
				Supporting growing communities in the Fraser Valley with targeted digital marketing strategies that drive local business growth.
			</p>
		</div>
		
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
			{#each fraserValleyAreas as area}
				<Card class="service-area-card group hover:shadow-lg transition-all duration-300 h-full">
					<CardHeader>
						<div class="flex items-center justify-between mb-2">
							<CardTitle class="text-xl font-bold text-primary">{area.name}</CardTitle>
							<span class="text-sm text-muted-foreground">{area.province}</span>
						</div>
						<CardDescription class="text-base">{area.description}</CardDescription>
					</CardHeader>
					<CardContent class="flex-1">
						<div class="mb-4">
							<h4 class="font-semibold mb-2 text-primary">Key Business Types:</h4>
							<div class="flex flex-wrap gap-1">
								{#each area.businessTypes.slice(0, 3) as businessType}
									<span class="px-2 py-1 bg-primary/10 text-primary rounded text-xs">{businessType}</span>
								{/each}
								{#if area.businessTypes.length > 3}
									<span class="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">+{area.businessTypes.length - 3} more</span>
								{/if}
							</div>
						</div>
						
						<div class="mb-4">
							<h4 class="font-semibold mb-2 text-primary">Local Landmarks:</h4>
							<ul class="text-sm text-muted-foreground space-y-1">
								{#each area.localLandmarks.slice(0, 3) as landmark}
									<li class="flex items-center">
										<svg class="w-3 h-3 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
										</svg>
										{landmark}
									</li>
								{/each}
							</ul>
						</div>
						
						<div class="mt-auto">
							<Button href="/service-areas/{area.id}" class="w-full group-hover:bg-primary/90 transition-colors">
								Learn More About {area.name}
							</Button>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</section>

	<!-- Section divider -->
	<div class="w-full h-8 flex justify-center items-center py-8 mb-8">
		<img src="/assets/section-divider.svg" alt="" class="w-full max-w-4xl h-full opacity-20" />
	</div>

	<!-- Call to Action -->
	<section class="service-areas-cta mb-16 rounded-lg bg-gradient-to-r from-primary to-primary/90 p-8 shadow-lg relative overflow-hidden">
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
			<h2 class="mb-4 text-3xl font-bold">Ready to Dominate Your Local Market?</h2>
			<p class="mb-6 text-lg opacity-90">
				Get started with our proven local SEO and digital marketing strategies designed specifically for Metro Vancouver and Fraser Valley businesses.
			</p>
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Button href="/contact" variant="secondary" size="lg" class="font-medium">
					Get Your Free Local SEO Audit
				</Button>
				<Button href="/services" variant="outline" size="lg" class="border-white text-white hover:bg-white hover:text-primary">
					View Our Services
				</Button>
			</div>
		</div>
	</section>
</main>

<style>
	/* Hide elements initially for GSAP animations */
	.service-areas-hero,
	.metro-vancouver-section,
	.fraser-valley-section,
	.service-area-card,
	.service-areas-cta {
		opacity: 0;
	}
	
	/* Prevent layout shift during animation loading */
	@media (prefers-reduced-motion: reduce) {
		.service-areas-hero,
		.metro-vancouver-section,
		.fraser-valley-section,
		.service-area-card,
		.service-areas-cta {
			opacity: 1 !important;
		}
	}
</style>
