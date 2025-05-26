<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { isMobile, servicesPageNavigating } from '$lib/utils/stores';
	import type { Review } from '$lib/types/reviews';
	import type { PageData } from './$types';
	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';
	import Image from '$lib/components/Image.svelte';

	// Import components for each section
	import {
		HeroSection,
		IntroSection,
		AboutSection,
		ServicesSection,
		CTASection,
		TestimonialsSection,
		FAQSection
	} from '$lib/components/landing';
	import { faqItems } from '$lib/data/landing';
	import { contactInfo } from '$lib/data/locations';

	let { data }: { data: PageData } = $props();

	$inspect(data);

	let reviews: Review[] = $state([]);
	let rating: number = $state(0);
	let userRatingCount: number = $state(0);
	let isLoadingReviews = $state(false);
	let reviewsLoaded = $state(false);

	let initScroll = $state(0);
	let servicesSection: HTMLElement | null = $state(null);
	let reviewsSection: HTMLElement | null = $state(null);

	// Get the base URL for absolute links
	const domain = $derived(`${page.url.protocol}//${page.url.host}`);

	onMount(() => {
		if (page.url.toString().includes('services')) {
			servicesSection?.scrollIntoView({ behavior: 'smooth' });
		}

		// Create intersection observer for reviews section
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !reviewsLoaded && !isLoadingReviews) {
						loadReviews();
					}
				});
			},
			{ threshold: 0.1 } // Trigger when at least 10% of the element is visible
		);

		// Start observing the reviews section
		if (reviewsSection) {
			observer.observe(reviewsSection);
		}

		return () => {
			// Clean up observer on component unmount
			if (reviewsSection) {
				observer.unobserve(reviewsSection);
			}
		};
	});

	async function loadReviews() {
		isLoadingReviews = true;
		try {
			const response = await fetch('/api/reviews');
			if (!response.ok) {
				throw new Error('Failed to fetch reviews');
			}
			const data = await response.json();
			reviews = data.reviews || [];
			rating = data.rating || 0;
			userRatingCount = data.userRatingCount || 0;
			reviewsLoaded = true;
		} catch (error) {
			console.error('Error loading reviews:', error);
		} finally {
			isLoadingReviews = false;
		}
	}

	$effect(() => {
		if ($servicesPageNavigating || page.url.toString().includes('services')) {
			$servicesPageNavigating = false;
			console.log('services page navigating');
		}
	});

	function scrollToServices() {
		servicesSection?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<svelte:head>
	<title>{PUBLIC_COMPANY_NAME} | Digital Marketing Agency For Small Businesses</title>
	<meta
		name="description"
		content="Right Marketing delivers complete digital marketing solutions for small businesses. Professional video production, strategic advertising, powerful automation tools, and data-driven SEO to boost your online visibility and growth."
	/>
	<meta
		name="keywords"
		content="digital marketing agency, small business marketing, video production, paid advertising, Google Ads, Facebook Ads, marketing automation, SEO, social media marketing, online visibility, lead generation, website optimization, local SEO, content marketing"
	/>
	<meta name="author" content={PUBLIC_COMPANY_NAME} />
	<meta name="robots" content="index, follow" />

	<!-- Open Graph / Facebook -->
	<meta
		property="og:title"
		content="{PUBLIC_COMPANY_NAME} | Digital Marketing That Delivers Results"
	/>
	<meta
		property="og:description"
		content="Transforming small businesses with strategic video content, targeted advertising, powerful automation, and data-driven SEO - all in one cohesive solution."
	/>
	<meta property="og:image" content="https://www.{PUBLIC_DOMAIN}/assets/social-share.jpg" />
	<meta property="og:url" content="https://www.{PUBLIC_DOMAIN}" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={PUBLIC_COMPANY_NAME} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta
		property="twitter:title"
		content="{PUBLIC_COMPANY_NAME} | Complete Digital Marketing Solutions"
	/>
	<meta
		property="twitter:description"
		content="Video production, ad campaigns, automation tools, and SEO strategies designed to help small businesses grow online."
	/>
	<meta property="twitter:image" content="https://www.{PUBLIC_DOMAIN}/assets/social-share.jpg" />

	<!-- Canonical URL -->
	<!-- <link rel="canonical" href="https://www.{PUBLIC_DOMAIN}" /> -->

	<!-- Preload critical resources -->
	<!-- <link rel="preload" href="/assets/landing/1.webp" as="image" fetchpriority="high" />
	<link rel="preload" href="/assets/fonts/main.woff2" as="font" type="font/woff2" crossorigin /> -->

	{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			"mainEntity": [
				${faqItems
					.map(
						(faq, index, array) => `
					{
						"@type": "Question",
						"name": "${faq.question}",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "${faq.answer}"
						}
					}${index < array.length - 1 ? ',' : ''}`
					)
					.join('')}
			]
		}
	</script>
	`}

	{@html `<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": '${PUBLIC_COMPANY_NAME}",
			"url": "https://www.${PUBLIC_DOMAIN}",
			"logo": 'https://www.${PUBLIC_DOMAIN}/assets/logo.png",
			"description": "Right Marketing empowers small local businesses with professional video production, strategic advertising, automation tools, and SEO to gain visibility and grow online.",
			"contactPoint": {
				"@type": "ContactPoint",
				"telephone": "${contactInfo.phone}",
				"contactType": "customer service",
				"email": "${contactInfo.email}"
			},
			"sameAs": [
				"${contactInfo.facebook}",
				"${contactInfo.instagram}",
			]
		}
	</script>`}
</svelte:head>

<svelte:window bind:scrollY={initScroll} />

<main class="flex w-full flex-col items-center gap-16 pb-48 lg:gap-16">
	<!-- Hero Section -->
	<section
		class="relative flex h-[90vh] w-full flex-row justify-evenly gap-0 overflow-hidden object-cover text-background"
	>
		<!-- Enhanced gradient background with decorative elements -->
		<div class="absolute inset-0 overflow-hidden">
			<img src="/assets/Gradient.png" alt="" class="h-full w-full object-cover" />
			<!-- Floating dots animation -->
			<div class="absolute top-10 right-10 w-32 h-32 opacity-30">
				<img src="/assets/floating-dots.svg" alt="" class="w-full h-full" />
			</div>
			<div class="absolute bottom-20 left-20 w-24 h-24 opacity-20">
				<img src="/assets/floating-dots.svg" alt="" class="w-full h-full" />
			</div>
			<!-- Growth circle graphic -->
			<div class="absolute top-1/4 left-10 w-40 h-40 opacity-10">
				<img src="/assets/growth-circle.svg" alt="" class="w-full h-full" />
			</div>
		</div>
		
		<HeroSection {scrollToServices} />
	</section>

	<!-- Intro Section -->
	<section class="relative">
		<!-- Add decorative wave at the top -->
		<div class="absolute top-0 left-0 w-full h-16 opacity-20">
			<img src="/assets/decorative-wave.svg" alt="" class="w-full h-full" />
		</div>
		<IntroSection />
	</section>

	<!-- About Section -->
	<section class="relative">
		<!-- Add network graphic as decoration -->
		<div class="absolute top-10 right-10 w-64 h-48 opacity-5 hidden lg:block">
			<img src="/assets/network-graphic.svg" alt="" class="w-full h-full" />
		</div>
		<AboutSection />
		<!-- Section divider -->
		<div class="w-full h-8 flex justify-center items-center py-8">
			<img src="/assets/section-divider.svg" alt="" class="w-full max-w-4xl h-full" />
		</div>
	</section>

	<!-- Services Section -->
	<ServicesSection bind:instance={servicesSection} />

	<!-- CTA Section -->
	<CTASection />

	<!-- Testimonials Section -->
	<section class="relative">
		<!-- Add success chart graphic -->
		<div class="absolute top-20 left-10 w-48 h-36 opacity-5 hidden lg:block">
			<img src="/assets/success-chart.svg" alt="" class="w-full h-full" />
		</div>
		<TestimonialsSection
			bind:instance={reviewsSection}
			{reviews}
			{rating}
			{userRatingCount}
			{isLoadingReviews}
			{reviewsLoaded}
		/>
	</section>
</main>

<!-- FAQ Section -->
<FAQSection />


