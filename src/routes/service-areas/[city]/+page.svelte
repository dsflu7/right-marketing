<script lang="ts">
	import { onMount } from 'svelte';
	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card';
	import { PageAnimations, shouldEnableAnimations } from '$lib/utils/animations';
	import { page } from '$app/state';
	import type { PageData } from './$types';
	import { services, serviceData } from '$lib/data/services';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	const { serviceArea } = data;
	const domain = $derived(`${page.url.protocol}//${page.url.host}`);

	// Local business data for schema
	const businessHours = [
		"Monday 9:00 AM - 6:00 PM",
		"Tuesday 9:00 AM - 6:00 PM", 
		"Wednesday 9:00 AM - 6:00 PM",
		"Thursday 9:00 AM - 6:00 PM",
		"Friday 9:00 AM - 6:00 PM",
		"Saturday 10:00 AM - 4:00 PM",
		"Sunday Closed"
	];

	onMount(() => {
		if (shouldEnableAnimations()) {
			PageAnimations.animateHero('.city-hero');
			PageAnimations.animateSection('.city-overview');
			PageAnimations.animateSection('.business-types');
			PageAnimations.animateCards('.service-card', { staggerDelay: 0.1 });
			PageAnimations.animateSection('.local-seo-benefits');
			PageAnimations.animateSection('.city-cta');
		}
		
		return () => {
			if (shouldEnableAnimations()) {
				PageAnimations.cleanup();
			}
		};
	});
</script>

<svelte:head>
	<title>{serviceArea.seoTitle} | {PUBLIC_COMPANY_NAME}</title>
	<meta name="description" content={serviceArea.seoDescription} />
	<meta name="keywords" content={serviceArea.seoKeywords.join(', ')} />
	<meta property="og:title" content="{serviceArea.seoTitle} | {PUBLIC_COMPANY_NAME}" />
	<meta property="og:description" content={serviceArea.seoDescription} />
	<meta property="og:image" content="/assets/logo.png" />
	<meta property="og:url" content="https://www.{PUBLIC_DOMAIN}/service-areas/{serviceArea.id}" />
	<meta property="og:type" content="website" />
	<link rel="canonical" href="https://www.{PUBLIC_DOMAIN}/service-areas/{serviceArea.id}" />
	
	<!-- Geo meta tags for local SEO -->
	<meta name="geo.region" content="CA-BC" />
	<meta name="geo.placename" content="{serviceArea.name}, BC" />
	{#if serviceArea.coordinates}
		<meta name="geo.position" content="{serviceArea.coordinates.lat};{serviceArea.coordinates.lng}" />
		<meta name="ICBM" content="{serviceArea.coordinates.lat}, {serviceArea.coordinates.lng}" />
	{/if}
	
	{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "LocalBusiness",
			"name": "${PUBLIC_COMPANY_NAME}",
			"description": "${serviceArea.seoDescription}",
			"url": "${domain}/service-areas/${serviceArea.id}",
			"logo": "${domain}/assets/logo.png",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "${serviceArea.name}",
				"addressRegion": "${serviceArea.province}",
				"addressCountry": "CA"
			},
			${serviceArea.coordinates ? `
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": ${serviceArea.coordinates.lat},
				"longitude": ${serviceArea.coordinates.lng}
			},` : ''}
			"areaServed": {
				"@type": "City",
				"name": "${serviceArea.name}",
				"addressRegion": "${serviceArea.province}",
				"addressCountry": "CA"
			},
			"serviceArea": {
				"@type": "GeoCircle",
				"geoMidpoint": {
					"@type": "GeoCoordinates",
					"latitude": ${serviceArea.coordinates?.lat || 49.2827},
					"longitude": ${serviceArea.coordinates?.lng || -123.1207}
				},
				"geoRadius": "25000"
			},
			"priceRange": "$$",
			"telephone": "+1-604-XXX-XXXX",
			"email": "info@rightmarketing.ca",
			"openingHours": [
				"Mo-Fr 09:00-18:00",
				"Sa 10:00-16:00"
			],
			"paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Online Payment"],
			"currenciesAccepted": "CAD"
		}
	</script>
	`}

	{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Service",
			"name": "Digital Marketing Services in ${serviceArea.name}",
			"description": "${serviceArea.seoDescription}",
			"provider": {
				"@type": "Organization",
				"name": "${PUBLIC_COMPANY_NAME}",
				"url": "${domain}",
				"logo": "${domain}/assets/logo.png"
			},
			"areaServed": {
				"@type": "City",
				"name": "${serviceArea.name}",
				"addressRegion": "${serviceArea.province}",
				"addressCountry": "CA"
			},
			"serviceType": "Digital Marketing",
			"offers": {
				"@type": "AggregateOffer",
				"priceCurrency": "CAD",
				"offerCount": "${services.length}",
				"offers": [
					${services.map(serviceId => `
						{
							"@type": "Offer",
							"name": "${serviceData[serviceId]?.title || serviceId} in ${serviceArea.name}",
							"description": "${serviceData[serviceId]?.shortDescription || ''} - Serving ${serviceArea.name}, ${serviceArea.province}",
							"url": "${domain}/services/${serviceId}",
							"areaServed": {
								"@type": "City",
								"name": "${serviceArea.name}",
								"addressRegion": "${serviceArea.province}",
								"addressCountry": "CA"
							}
						}`
					).join(',')}
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
			"name": "${serviceArea.seoTitle}",
			"description": "${serviceArea.seoDescription}",
			"url": "${domain}/service-areas/${serviceArea.id}",
			"mainEntity": {
				"@type": "Place",
				"name": "${serviceArea.name}, ${serviceArea.province}",
				"description": "${serviceArea.description}",
				${serviceArea.coordinates ? `
				"geo": {
					"@type": "GeoCoordinates",
					"latitude": ${serviceArea.coordinates.lat},
					"longitude": ${serviceArea.coordinates.lng}
				},` : ''}
				"containedInPlace": {
					"@type": "AdministrativeArea",
					"name": "${serviceArea.region === 'metro-vancouver' ? 'Metro Vancouver' : 'Fraser Valley'}",
					"containedInPlace": {
						"@type": "State",
						"name": "British Columbia",
						"containedInPlace": {
							"@type": "Country",
							"name": "Canada"
						}
					}
				}
			},
			"breadcrumb": {
				"@type": "BreadcrumbList",
				"itemListElement": [
					{
						"@type": "ListItem",
						"position": 1,
						"name": "Home",
						"item": "${domain}"
					},
					{
						"@type": "ListItem",
						"position": 2,
						"name": "Service Areas",
						"item": "${domain}/service-areas"
					},
					{
						"@type": "ListItem",
						"position": 3,
						"name": "${serviceArea.name}",
						"item": "${domain}/service-areas/${serviceArea.id}"
					}
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

	<!-- Breadcrumb -->
	<nav class="mb-8" aria-label="Breadcrumb">
		<ol class="flex items-center space-x-2 text-sm text-muted-foreground">
			<li><a href="/" class="hover:text-primary transition-colors">Home</a></li>
			<li><span class="mx-2">/</span></li>
			<li><a href="/service-areas" class="hover:text-primary transition-colors">Service Areas</a></li>
			<li><span class="mx-2">/</span></li>
			<li class="text-primary font-medium">{serviceArea.name}</li>
		</ol>
	</nav>

	<!-- Hero Section -->
	<section class="city-hero mb-16 relative z-10">
		<div class="text-center mb-12">
			<h1 class="mb-6 text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
				Digital Marketing in {serviceArea.name}, {serviceArea.province}
			</h1>
			<div class="mx-auto mb-8 h-1 w-24 rounded-full bg-primary"></div>
			<p class="mx-auto mb-8 max-w-3xl text-center text-lg font-[Cantarell] text-muted-foreground">
				{serviceArea.description} Partner with Right Marketing to leverage our expertise in local SEO, video production, and digital marketing strategies designed specifically for {serviceArea.name} businesses.
			</p>
			<div class="flex flex-wrap justify-center gap-2 mb-8">
				{#each serviceArea.seoKeywords.slice(0, 4) as keyword}
					<span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">{keyword}</span>
				{/each}
			</div>
		</div>
	</section>

	<!-- City Overview -->
	<section class="city-overview mb-16">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="mb-6 text-3xl font-bold text-primary">Why Choose Local Marketing in {serviceArea.name}?</h2>
				<div class="space-y-4 text-muted-foreground">
					<p>
						{serviceArea.name} represents a unique market opportunity in {serviceArea.region === 'metro-vancouver' ? 'Metro Vancouver' : 'the Fraser Valley'}. 
						With its diverse business landscape and growing digital presence, local businesses need targeted marketing strategies that connect with the community.
					</p>
					<p>
						Our team understands the local market dynamics, consumer behavior, and competition in {serviceArea.name}. 
						This local expertise allows us to create marketing campaigns that resonate with your target audience and drive real business results.
					</p>
				</div>
				
				<div class="mt-8">
					<h3 class="mb-4 text-xl font-semibold text-primary">Key Market Features:</h3>
					<ul class="space-y-2">
						{#each serviceArea.keyFeatures as feature}
							<li class="flex items-start">
								<svg class="w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
								<span class="text-muted-foreground">{feature}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
			
			<div class="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg">
				<h3 class="mb-4 text-xl font-semibold text-primary">Local Landmarks & Areas We Serve</h3>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{#each serviceArea.localLandmarks as landmark}
						<div class="flex items-center">
							<svg class="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
							</svg>
							<span class="text-sm text-muted-foreground">{landmark}</span>
						</div>
					{/each}
				</div>
				
				{#if serviceArea.neighboringCities.length > 0}
					<div class="mt-6">
						<h4 class="mb-2 font-medium text-primary">Neighboring Cities We Serve:</h4>
						<p class="text-sm text-muted-foreground">
							{serviceArea.neighboringCities.join(', ')}
						</p>
					</div>
				{/if}
			</div>
		</div>
	</section>

	<!-- Business Types Section -->
	<section class="business-types mb-16">
		<div class="text-center mb-12">
			<h2 class="mb-4 text-3xl font-bold text-primary">Industries We Serve in {serviceArea.name}</h2>
			<p class="mx-auto max-w-2xl text-center text-muted-foreground">
				Our digital marketing expertise spans across various industries, helping businesses of all sizes succeed in the {serviceArea.name} market.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each serviceArea.businessTypes as businessType}
				<Card class="text-center p-6 hover:shadow-md transition-shadow">
					<CardContent class="pt-0">
						<div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
							<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
							</svg>
						</div>
						<h3 class="font-semibold text-primary">{businessType}</h3>
					</CardContent>
				</Card>
			{/each}
		</div>
	</section>

	<!-- Services Grid -->
	<section class="mb-16">
		<div class="text-center mb-12">
			<h2 class="mb-4 text-3xl font-bold text-primary">Our Services in {serviceArea.name}</h2>
			<p class="mx-auto max-w-2xl text-center text-muted-foreground">
				Comprehensive digital marketing solutions tailored for {serviceArea.name} businesses to increase visibility, attract customers, and drive growth.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each services.slice(0, 6) as serviceId}
				{#if serviceData[serviceId]}
					<Card class="service-card group hover:shadow-lg transition-all duration-300 h-full">
						<CardHeader>
							<CardTitle class="text-lg font-bold text-primary flex items-center">
								<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
								{serviceData[serviceId].title} in {serviceArea.name}
							</CardTitle>
							<CardDescription class="text-sm">
								{serviceData[serviceId].shortDescription} - Specifically optimized for {serviceArea.name} businesses.
							</CardDescription>
						</CardHeader>
						<CardContent class="flex-1">
							<p class="text-sm text-muted-foreground mb-4">
								{serviceData[serviceId].description.substring(0, 100).replace(/<[^>]*>/g, '')}... 
								Perfect for {serviceArea.name} businesses looking to expand their digital presence.
							</p>
							<Button href="/services/{serviceId}" size="sm" class="w-full">
								Learn More
							</Button>
						</CardContent>
					</Card>
				{/if}
			{/each}
		</div>
	</section>

	<!-- Local SEO Benefits -->
	<section class="local-seo-benefits mb-16">
		<div class="bg-gradient-to-r from-primary/5 to-primary/10 p-8 lg:p-12 rounded-lg">
			<h2 class="mb-6 text-3xl font-bold text-primary text-center">Local SEO Benefits for {serviceArea.name} Businesses</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<div class="text-center">
					<div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</div>
					<h3 class="mb-2 font-semibold text-primary">Local Search Visibility</h3>
					<p class="text-sm text-muted-foreground">
						Appear when {serviceArea.name} residents search for your services locally
					</p>
				</div>
				
				<div class="text-center">
					<div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
					</div>
					<h3 class="mb-2 font-semibold text-primary">Google Maps Presence</h3>
					<p class="text-sm text-muted-foreground">
						Dominate local map results for {serviceArea.name} area searches
					</p>
				</div>
				
				<div class="text-center">
					<div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
						</svg>
					</div>
					<h3 class="mb-2 font-semibold text-primary">Increased Revenue</h3>
					<p class="text-sm text-muted-foreground">
						Convert more {serviceArea.name} visitors into paying customers
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Section divider -->
	<div class="w-full h-8 flex justify-center items-center py-8 mb-8">
		<img src="/assets/section-divider.svg" alt="" class="w-full max-w-4xl h-full opacity-20" />
	</div>

	<!-- Call to Action -->
	<section class="city-cta mb-16 rounded-lg bg-gradient-to-r from-primary to-primary/90 p-8 shadow-lg relative overflow-hidden">
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
			<h2 class="mb-4 text-3xl font-bold">Ready to Grow Your {serviceArea.name} Business?</h2>
			<p class="mb-6 text-lg opacity-90">
				Get started with a free consultation and discover how our local digital marketing strategies can help your {serviceArea.name} business attract more customers and increase revenue.
			</p>
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Button href="/contact" variant="secondary" size="lg" class="font-medium">
					Get Your Free {serviceArea.name} Marketing Audit
				</Button>
				<Button href="/services" variant="outline" size="lg" class="border-white text-white hover:bg-white hover:text-primary">
					View All Services
				</Button>
			</div>
			<p class="mt-4 text-sm opacity-75">
				Serving {serviceArea.name} and surrounding areas including {serviceArea.neighboringCities.slice(0, 3).join(', ')}
			</p>
		</div>
	</section>
</main>

<style>
	/* Hide elements initially for GSAP animations */
	.city-hero,
	.city-overview,
	.business-types,
	.service-card,
	.local-seo-benefits,
	.city-cta {
		opacity: 0;
	}
	
	/* Prevent layout shift during animation loading */
	@media (prefers-reduced-motion: reduce) {
		.city-hero,
		.city-overview,
		.business-types,
		.service-card,
		.local-seo-benefits,
		.city-cta {
			opacity: 1 !important;
		}
	}
</style>
