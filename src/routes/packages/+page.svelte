<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { packageCategories, customSolution, packagesFAQ, type Package } from '$lib/data/packages';
	import { Button } from '$lib/components/ui/button';
	import { contactInfo } from '$lib/data/locations';
	import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '$lib/components/ui/collapsible';
	import { ChevronDown, Check, Star, ArrowRight, EnvelopeOpen } from 'svelte-radix';
	import PhoneCall from '$lib/icons/PhoneCall.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import PackagesStructuredData from '$lib/components/PackagesStructuredData.svelte';

	let scrollY = $state(0);
	let innerHeight = $state(0);

	const handleContact = () => {
		goto('/contact');
	};

	const handleCallNow = () => {
		window.location.href = `tel:${contactInfo.phone}`;
	};

	const handleEmailNow = () => {
		window.location.href = `mailto:${contactInfo.email}`;
	};

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Hero section animation
		gsap.fromTo('.hero-content', 
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
		);

		// Recommended package animation
		gsap.fromTo('.recommended-package',
			{ opacity: 0, y: 80, scale: 0.9 },
			{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 0.8,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.recommended-package',
					start: 'top 80%'
				}
			}
		);

		// Package cards animations
		gsap.fromTo('.package-card',
			{ opacity: 0, y: 60 },
			{
				opacity: 1,
				y: 0,
				duration: 0.6,
				stagger: 0.2,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.packages-section',
					start: 'top 70%'
				}
			}
		);

		// Custom solutions animation
		gsap.fromTo('.custom-solutions',
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.custom-solutions',
					start: 'top 80%'
				}
			}
		);

		// FAQ animations
		gsap.fromTo('.faq-section .group',
			{ opacity: 0, x: -30 },
			{
				opacity: 1,
				x: 0,
				duration: 0.5,
				stagger: 0.1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.faq-section',
					start: 'top 75%'
				}
			}
		);

		// CTA section animation
		gsap.fromTo('.cta-section',
			{ opacity: 0, y: 40 },
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.cta-section',
					start: 'top 85%'
				}
			}
		);
	});
</script>

<svelte:window bind:scrollY bind:innerHeight />

<svelte:head>
	
	<!-- Primary Meta Tags -->
	<title>Marketing Packages | Digital Marketing Solutions | Right Marketing Canada</title>
	<meta name="title" content="Marketing Packages | Digital Marketing Solutions | Right Marketing Canada" />
	<meta name="description" content="Choose from our comprehensive marketing packages: Adverts Packages for rapid lead generation and Brand & Website Packages for long-term growth. Custom video production, automation, and SEO included. Serving Surrey, Vancouver, and British Columbia." />
	<meta name="keywords" content="marketing packages, digital marketing solutions, advertising packages, website packages, video marketing, marketing automation, SEO packages, small business marketing, lead generation packages, brand development packages, Surrey marketing, Vancouver marketing, BC marketing, Canadian marketing agency" />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<meta name="author" content="Right Marketing" />
	<link rel="canonical" href="https://www.rightmarketing.ca/packages" />
	
	<!-- Language and Locale -->
	<meta name="language" content="en-CA" />
	<!-- <html lang="en-CA" /> -->
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.rightmarketing.ca/packages" />
	<meta property="og:title" content="Marketing Packages | Right Marketing Canada" />
	<meta property="og:description" content="Comprehensive marketing packages designed for small businesses. From rapid lead generation to long-term brand building. Serving Surrey, Vancouver & BC." />
	<meta property="og:image" content="https://www.rightmarketing.ca/assets/logo.png" />
	<meta property="og:site_name" content="Right Marketing" />
	<meta property="og:locale" content="en_CA" />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.rightmarketing.ca/packages" />
	<meta property="twitter:title" content="Marketing Packages | Right Marketing Canada" />
	<meta property="twitter:description" content="Comprehensive marketing packages for small businesses. Choose from Adverts Packages or Brand & Website Packages. Get results fast!" />
	<meta property="twitter:image" content="https://www.rightmarketing.ca/assets/logo.png" />
	
	<!-- Additional Meta Tags -->
	<meta name="theme-color" content="#E3C099" />
	<meta name="msapplication-TileColor" content="#E3C099" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="default" />
	<meta name="format-detection" content="telephone=yes" />
	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="revisit-after" content="7 days" />
	
	<!-- Preconnect for Performance -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	
	<!-- DNS Prefetch -->
	<link rel="dns-prefetch" href="//www.google-analytics.com" />
	<link rel="dns-prefetch" href="//www.googletagmanager.com" />
	<link rel="dns-prefetch" href="//unpkg.com" />
	
	<!-- Preload Critical Resources -->
	<link rel="preload" href="/assets/logo.png" as="image" type="image/png" />
	
	<!-- Alternative Pages -->
	<link rel="alternate" hreflang="en-ca" href="https://www.rightmarketing.ca/packages" />
	<link rel="alternate" hreflang="en" href="https://www.rightmarketing.ca/packages" />
	<link rel="alternate" hreflang="x-default" href="https://www.rightmarketing.ca/packages" />
	
	<!-- RSS Feed (if applicable) -->
	<!-- <link rel="alternate" type="application/rss+xml" title="Right Marketing Blog" href="https://www.rightmarketing.ca/blog/rss.xml" /> -->
	
	<!-- Geo Tags for Local SEO -->
	<meta name="geo.region" content="CA-BC" />
	<meta name="geo.placename" content="Surrey, British Columbia" />
	<meta name="geo.position" content="49.1913;-122.8490" />
	<meta name="ICBM" content="49.1913, -122.8490" />
	
	<!-- Business Information -->
	<meta name="contact" content="info@rightmarketing.ca" />
	<meta name="reply-to" content="info@rightmarketing.ca" />
	<meta name="owner" content="Right Marketing" />
	<meta name="url" content="https://www.rightmarketing.ca" />
	<meta name="identifier-URL" content="https://www.rightmarketing.ca" />
	<meta name="category" content="Digital Marketing, Advertising, SEO, Web Development" />
	<meta name="coverage" content="Worldwide" />
	<meta name="distribution" content="Global" />
	<meta name="rating" content="General" />
</svelte:head>

<PackagesStructuredData />

<main class="min-h-screen bg-gradient-to-b from-white to-gray-50">
	<!-- Breadcrumb Navigation -->
	<nav aria-label="Breadcrumb" class="bg-white border-b border-gray-200">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<ol class="flex items-center space-x-2 py-4 text-sm">
				<li>
					<a href="/" class="text-primary hover:text-primary/80 transition-colors">Home</a>
				</li>
				<li class="text-gray-400">/</li>
				<li class="text-gray-600 font-medium" aria-current="page">Packages</li>
			</ol>
		</div>
	</nav>

	<!-- Hero Section -->
	<section class="relative overflow-hidden bg-gradient-to-br from-primary to-primary/90 px-4 py-20 text-white sm:px-6 lg:px-8 mt-20" role="banner" itemscope itemtype="https://schema.org/WPHeader">
		<div class="absolute inset-0 bg-black/10"></div>
		<div class="relative mx-auto max-w-7xl hero-content">
			<header class="text-center">
				<h1 class="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" itemprop="headline">
					Choose Your <span class="text-secondary">Perfect Marketing Package</span> in Surrey & Vancouver
				</h1>
				<p class="mx-auto mb-8 max-w-3xl text-xl text-white/90 sm:text-2xl" itemprop="description">
					Flexible digital marketing solutions designed specifically for Canadian small businesses. Get a proven path to digital growth with our comprehensive packages trusted by 500+ businesses across British Columbia.
				</p>
				<div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
					<Button
						onclick={handleContact}
						size="lg"
						variant="secondary"
						class="text-lg font-semibold hover:scale-105 transition-transform duration-200"
						aria-label="Get free consultation for marketing packages"
						itemprop="potentialAction"
						itemscope
						itemtype="https://schema.org/Action"
					>
						<span itemprop="name">Get Free Consultation</span>
						<ArrowRight class="ml-2 h-5 w-5" aria-hidden="true" />
					</Button>
					<Button
						onclick={handleCallNow}
						size="lg"
						variant="outline"
						class="border-white bg-transparent text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-200"
						aria-label="Call Right Marketing now"
						itemprop="potentialAction"
						itemscope
						itemtype="https://schema.org/Action"
					>
						<div class="mr-2 h-5 w-5" aria-hidden="true">
							<PhoneCall color="currentColor" />
						</div>
						<span itemprop="name">Call Now</span>
					</Button>
				</div>
			</header>
		</div>
	</section>

	<!-- Recommended Package Highlight -->
	<section class="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="recommended-heading">
		<div class="mx-auto max-w-7xl">
			<header class="mb-12 text-center">
				<div class="inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
					<Star class="mr-2 h-4 w-4 fill-current" aria-hidden="true" />
					Most Popular Choice
				</div>
				<h2 id="recommended-heading" class="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
					Recommended for Most Businesses
				</h2>
			</header>
			
			{#each packageCategories as category}
				{#each category.packages as pkg, index}
					{#if pkg.isRecommended}
						<article class="mx-auto max-w-2xl" itemscope itemtype="https://schema.org/Product">
							<div class="recommended-package relative overflow-hidden rounded-2xl border-2 border-secondary bg-white p-8 shadow-2xl transform transition-all duration-500 hover:scale-105">
								<div class="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-secondary/10" aria-hidden="true"></div>
								<div class="absolute -left-8 -bottom-8 h-16 w-16 rounded-full bg-primary/10" aria-hidden="true"></div>
								
								<div class="relative">
									<header class="mb-4 flex items-center justify-between">
										<div>
											<h3 class="text-2xl font-bold text-gray-900" itemprop="name">{pkg.name}</h3>
											<p class="text-gray-600" itemprop="description">{pkg.tagline}</p>
										</div>
										<div class="rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-white">
											Recommended
										</div>
									</header>
									
									<ul class="mb-6 space-y-3" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
										{#each pkg.highlights as highlight}
											<li class="flex items-start gap-3">
												<Check class="mt-1 h-5 w-5 flex-shrink-0 text-secondary" aria-hidden="true" />
												<span class="text-gray-700">{highlight}</span>
											</li>
										{/each}
									</ul>
									
									<div class="flex flex-col gap-3 sm:flex-row">
										<Button onclick={handleContact} class="flex-1 hover:scale-105 transition-transform duration-200" aria-label="Get started with {pkg.name}">
											Get Started Today
										</Button>
										<Button onclick={handleCallNow} variant="outline" class="flex-1 hover:scale-105 transition-transform duration-200" aria-label="Call to discuss {pkg.name}">
											<div class="mr-2 h-4 w-4" aria-hidden="true">
												<PhoneCall color="currentColor" />
											</div>
											Discuss This Package
										</Button>
									</div>
								</div>
							</div>
						</article>
					{/if}
				{/each}
			{/each}
		</div>
	</section>

	<!-- Adverts Packages -->
	<section class="px-4 py-16 sm:px-6 lg:px-8 bg-white packages-section" aria-labelledby="adverts-heading">
		<div class="mx-auto max-w-7xl">
			<header class="mb-12 text-center">
				<div class="inline-block rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
					OUR SERVICE PACKAGES: ADVERTS
				</div>
				<h2 id="adverts-heading" class="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
					Advertising Packages for Surrey & Vancouver Businesses
				</h2>
				<p class="mt-4 text-xl text-gray-600 italic">
					Designed for rapid lead generation and sales through targeted paid advertising campaigns. Serving small businesses across British Columbia.
				</p>
			</header>

			<div class="grid gap-8 lg:grid-cols-3" role="list">
				{#each packageCategories[0].packages as pkg, index}
					<article class="package-card group relative overflow-hidden rounded-xl border border-gray-200 bg-[#E8C5A0] p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col" role="listitem" itemscope itemtype="https://schema.org/Product">
						<div class="flex-1">
							<header class="mb-6">
								<h3 class="text-2xl font-bold text-gray-900 mb-2" itemprop="name">{pkg.name}</h3>
								{#if pkg.isRecommended}
									<div class="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-white mb-2">
										Most Popular
									</div>
								{/if}
								<p class="text-gray-700" itemprop="description">{pkg.tagline}</p>
							</header>

							<ul class="mb-8 space-y-4" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
								{#each pkg.highlights as highlight}
									<li class="flex items-start gap-3">
										<div class="mt-1 h-2 w-2 rounded-full bg-gray-900 flex-shrink-0" aria-hidden="true"></div>
										<span class="text-gray-800 text-sm leading-relaxed">{highlight}</span>
									</li>
								{/each}
							</ul>

							{#if pkg.note}
								<aside class="mb-6 rounded-lg bg-gray-900/5 p-4">
									<p class="text-sm text-gray-700 italic">
										<strong>Note:</strong> {pkg.note}
									</p>
								</aside>
							{/if}
						</div>

						<footer class="flex flex-col gap-3 mt-auto">
							<Button onclick={handleContact} class="w-full hover:scale-105 transition-transform duration-200" aria-label="Get {pkg.name} package">
								Get This Package
							</Button>
							<Button onclick={handleCallNow} variant="outline" class="w-full hover:scale-105 transition-transform duration-200" aria-label="Call to discuss {pkg.name}">
								<div class="mr-2 h-4 w-4" aria-hidden="true">
									<PhoneCall color="currentColor" />
								</div>
								Discuss Details
							</Button>
						</footer>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- Brand & Website Packages -->
	<section class="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50 packages-section" aria-labelledby="brand-website-heading">
		<div class="mx-auto max-w-7xl">
			<header class="mb-12 text-center">
				<div class="inline-block rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
					OUR SERVICE PACKAGES: BRAND & WEBSITE
				</div>
				<h2 id="brand-website-heading" class="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
					Brand &amp; Website Packages
				</h2>
				<p class="mt-4 text-xl text-gray-600 italic">
					Establish or enhance your online presence and achieve long-term organic visibility
				</p>
			</header>

			<div class="grid gap-8 lg:grid-cols-3" role="list">
				{#each packageCategories[1].packages as pkg, index}
					<article class="package-card group relative overflow-hidden rounded-xl border border-gray-200 bg-[#E8C5A0] p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col" role="listitem" itemscope itemtype="https://schema.org/Product">
						<div class="flex-1">
							<header class="mb-6">
								<h3 class="text-2xl font-bold text-gray-900 mb-2" itemprop="name">{pkg.name}</h3>
								<p class="text-gray-700" itemprop="description">{pkg.tagline}</p>
							</header>

							<ul class="mb-8 space-y-4" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
								{#each pkg.highlights as highlight}
									<li class="flex items-start gap-3">
										<div class="mt-1 h-2 w-2 rounded-full bg-gray-900 flex-shrink-0" aria-hidden="true"></div>
										<span class="text-gray-800 text-sm leading-relaxed">{highlight}</span>
									</li>
								{/each}
							</ul>
						</div>

						<footer class="flex flex-col gap-3 mt-auto">
							<Button onclick={handleContact} class="w-full hover:scale-105 transition-transform duration-200" aria-label="Get {pkg.name} package">
								Get This Package
							</Button>
							<Button onclick={handleCallNow} variant="outline" class="w-full hover:scale-105 transition-transform duration-200" aria-label="Call to discuss {pkg.name}">
								<div class="mr-2 h-4 w-4" aria-hidden="true">
									<PhoneCall color="currentColor" />
								</div>
								Discuss Details
							</Button>
						</footer>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- Custom Solutions -->
	<section class="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/90 text-white custom-solutions">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="mb-6 text-3xl font-bold sm:text-4xl">Custom Solutions</h2>
			<p class="mb-8 text-xl text-white/90">
				For businesses with unique or highly aggressive scaling objectives, we offer bespoke, full-service marketing strategies tailored to your specific advanced needs.
			</p>
			
			<div class="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{#each customSolution.highlights as highlight, index}
					<div class="rounded-lg bg-white/10 p-4">
						<Check class="mx-auto mb-2 h-6 w-6 text-secondary" />
						<p class="text-sm font-medium">{highlight}</p>
					</div>
				{/each}
			</div>

			<div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
				<Button onclick={handleContact} size="lg" variant="secondary" class="hover:scale-105 transition-transform duration-200">
					Discuss Custom Solutions
				</Button>
				<Button onclick={handleCallNow} size="lg" variant="outline" class="border-white bg-transparent text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-200">
					<div class="mr-2 h-5 w-5">
						<PhoneCall color="currentColor" />
					</div>
					Call for Consultation
				</Button>
			</div>
			
			<div class="mt-8 text-center">
				<p class="text-white/80 italic">
					(Note on Custom Solutions: For businesses with unique, advanced needs, we offer custom solutions tailored to aggressive scaling objectives.)
				</p>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="px-4 py-16 sm:px-6 lg:px-8 bg-white faq-section" aria-labelledby="faq-heading">
		<div class="mx-auto max-w-4xl">
			<header class="mb-12 text-center">
				<h2 id="faq-heading" class="text-3xl font-bold text-gray-900 sm:text-4xl">
					Frequently Asked Questions
				</h2>
				<p class="mt-4 text-xl text-gray-600">
					Everything you need to know about our packages
				</p>
			</header>

			<div class="space-y-4" role="list">
				{#each packagesFAQ as faq, index}
					<Collapsible class="group faq-item" role="listitem">
						<CollapsibleTrigger 
							class="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-6 text-left transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
							aria-expanded="false"
							aria-controls="faq-answer-{index}"
						>
							<span class="font-semibold text-gray-900">{faq.question}</span>
							<ChevronDown class="h-5 w-5 text-gray-500 transition-transform group-data-[state=open]:rotate-180" aria-hidden="true" />
						</CollapsibleTrigger>
						<CollapsibleContent class="overflow-hidden" id="faq-answer-{index}">
							<div class="border-l-2 border-primary/20 bg-gray-50/50 p-6 pt-4">
								<p class="text-gray-700 leading-relaxed">{faq.answer}</p>
							</div>
						</CollapsibleContent>
					</Collapsible>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/90 text-white cta-section" itemscope itemtype="https://schema.org/ContactPoint">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="mb-6 text-3xl font-bold sm:text-4xl">
				Ready to Grow Your Business in Surrey & Vancouver?
			</h2>
			<p class="mb-8 text-xl text-white/90">
				Join 500+ successful Canadian businesses who chose Right Marketing for their digital growth. We serve Surrey, Vancouver, Richmond, Burnaby, and all of British Columbia.
			</p>
			
			<div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
				<Button 
					onclick={handleContact} 
					size="lg" 
					variant="secondary" 
					class="hover:scale-105 transition-transform duration-200"
					aria-label="Get free marketing consultation for your business"
				>
					Get Free Consultation
					<ArrowRight class="ml-2 h-5 w-5" aria-hidden="true" />
				</Button>
				<Button 
					onclick={handleCallNow} 
					size="lg" 
					variant="outline" 
					class="border-white bg-transparent text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-200"
					aria-label="Call Right Marketing at {contactInfo.phone}"
					itemprop="telephone"
				>
					<div class="mr-2 h-5 w-5">
						<PhoneCall color="currentColor" />
					</div>
					Call {contactInfo.phone}
				</Button>
				<Button 
					onclick={handleEmailNow} 
					size="lg" 
					variant="outline" 
					class="border-white bg-transparent text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-200"
					aria-label="Email Right Marketing for package information"
				>
					<EnvelopeOpen class="mr-2 h-5 w-5" aria-hidden="true" />
					Email Us
				</Button>
			</div>
			
			<div class="mt-8 text-center">
				<p class="text-white/80 text-sm">
					<strong>Local Service Areas:</strong> Surrey • Vancouver • Richmond • Burnaby • Langley • Delta • White Rock • New Westminster • Coquitlam • Port Coquitlam • All of British Columbia
				</p>
			</div>
		</div>
	</section>
</main>

<style>
	/* Additional hover effects for package cards */
	.package-card:hover {
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	}
	
	/* Smooth transitions for all interactive elements */
	.package-card,
	.recommended-package {
		will-change: transform;
	}
	
	/* Hide elements initially for GSAP animations */
	.hero-content,
	.recommended-package,
	.package-card,
	.custom-solutions,
	.cta-section {
		opacity: 0;
	}
</style>
