<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
	import { serviceData } from '$lib/data/services';
	import * as Accordion from '$lib/components/ui/accordion';
	import { contactInfo } from '$lib/data/locations';
	import PhoneCall from '$lib/icons/PhoneCall.svelte';
	import { ArrowRight } from 'svelte-radix';
	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';

	let selectedServiceData = $derived(serviceData[page.params.id]);

	const domain = $derived(`${page.url.protocol}//${page.url.host}`);

	$effect(() => {
		if (!selectedServiceData) {
			goto('/services');
		}
	});

	const formatServiceName = (id: string) => {
		return id
			.split('-')
			.map((x) => x[0].toUpperCase() + x.slice(1))
			.join(' ');
	};
</script>

<svelte:head>
	<title
		>{selectedServiceData?.title || formatServiceName(page.params.id)} | {PUBLIC_COMPANY_NAME}</title
	>
	<meta
		name="description"
		content={selectedServiceData?.shortDescription ||
			`Professional ${formatServiceName(page.params.id)} services from Right Marketing`}
	/>
	<meta
		name="keywords"
		content="{formatServiceName(page.params.id)}, digital marketing, {page.params.id.replace(
			/-/g,
			', '
		)}, professional services, ${selectedServiceData?.keyFeatures?.join(', ')}"
	/>
	<meta
		property="og:title"
		content="{selectedServiceData?.title ||
			formatServiceName(page.params.id)} | {PUBLIC_COMPANY_NAME}"
	/>
	<meta
		property="og:description"
		content={selectedServiceData?.shortDescription ||
			`Professional ${formatServiceName(page.params.id)} services from Right Marketing`}
	/>
	<meta property="og:image" content="/assets/services/{page.params.id}/1.webp" />
	<meta property="og:url" content="https://www.{PUBLIC_DOMAIN}/services/{page.params.id}" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={PUBLIC_COMPANY_NAME} />

	<link rel="canonical" href="https://www.{PUBLIC_DOMAIN}/services/{page.params.id}" />

	{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Service",
			"name": "${selectedServiceData?.title || formatServiceName(page.params.id)}",
			"description": "${selectedServiceData?.description?.replace(/"/g, '\\"').substring(0, 500)}${selectedServiceData?.description?.length > 500 ? '...' : ''}",
			"provider": {
				"@type": "Organization",
				"name": "${PUBLIC_COMPANY_NAME}",
				"url": "${domain}",
				"logo": {
					"@type": "ImageObject",
					"url": "${domain}/assets/logo.png"
				}
			},
			"serviceType": "${selectedServiceData?.title || formatServiceName(page.params.id)}",
			"url": "${domain}/services/${page.params.id}",
			"image": [
				${selectedServiceData?.images?.map((img) => `"${img}"`).join(',')}
			],
			"offers": {
				"@type": "Offer",
				"availability": "https://schema.org/InStock",
				"url": "${domain}/contact",
				"seller": {
					"@type": "Organization",
					"name": "${PUBLIC_COMPANY_NAME}"
				}
			}
		}
	</script>
	`}

	{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			"mainEntity": [
				${selectedServiceData?.faqItems
					?.map(
						(faq) => `
					{
						"@type": "Question",
						"name": "${faq.question.replace(/"/g, '\\"')}",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "${faq.answer.replace(/"/g, '\\"')}"
						}
					}`
					)
					.join(',')}
			]
		}
	</script>
	`}

	{@html `
			<script type="application/ld+json">
				{
					"@context": "https://schema.org",
					"@type": "HowTo",
					"name": "How our ${selectedServiceData?.title || formatServiceName(page.params.id)} process works",
					"description": "Step-by-step process for our ${selectedServiceData?.title || formatServiceName(page.params.id)} service",
					"step": ${JSON.stringify(
						selectedServiceData?.process?.map((step, index) => ({
							'@type': 'HowToStep',
							position: index + 1,
							name: step.title,
							text: step.description
						}))
					)}
				}
			</script>
		`}
</svelte:head>

<main class="mt-24 lg:mt-16">
	<!-- Hero Section -->
	<section class="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 px-10 py-20 text-white">
		<!-- Background decorative elements -->
		<div class="absolute top-10 left-10 w-32 h-24 opacity-10">
			{#if page.params.id === 'video-production'}
				<img src="/assets/video-marketing-graphic.svg" alt="" class="w-full h-full filter invert" />
			{:else if page.params.id === 'ad-campaigns'}
				<img src="/assets/success-chart.svg" alt="" class="w-full h-full filter invert" />
			{:else if page.params.id === 'automation'}
				<img src="/assets/automation-workflow.svg" alt="" class="w-full h-full filter invert" />
			{:else}
				<img src="/assets/network-graphic.svg" alt="" class="w-full h-full filter invert" />
			{/if}
		</div>
		<div class="absolute top-20 right-10 w-24 h-20 opacity-10">
			<img src="/assets/floating-dots.svg" alt="" class="w-full h-full filter invert" />
		</div>
		<div class="absolute bottom-10 left-1/4 w-28 h-20 opacity-10">
			<img src="/assets/growth-circle.svg" alt="" class="w-full h-full filter invert" />
		</div>
		<div class="absolute top-1/2 right-20 w-16 h-16 opacity-10 hidden lg:block">
			<img src="/assets/modern-pattern.svg" alt="" class="w-full h-full filter invert" />
		</div>
		
		<div class="relative z-10 mx-auto max-w-4xl text-center">
			<!-- Service category badge -->
			<div class="mb-6 inline-flex">
				<span class="px-4 py-2 bg-white/20 text-white text-sm rounded-full font-medium backdrop-blur-sm border border-white/30">
					{#if page.params.id === 'video-production'}
						Video & Content Creation
					{:else if page.params.id === 'ad-campaigns'}
						Digital Advertising
					{:else if page.params.id === 'automation'}
						Marketing Automation
					{:else if page.params.id === 'local-seo'}
						Local SEO
					{:else if page.params.id === 'social-media'}
						Social Media Marketing
					{:else if page.params.id === 'website-development'}
						Web Development
					{:else}
						Digital Marketing
					{/if}
				</span>
			</div>
			
			<h1 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
				{selectedServiceData.title}
			</h1>
			
			<div class="mx-auto mb-8 h-1 w-24 rounded-full bg-white/50"></div>
			
			<p class="mb-8 text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
				{selectedServiceData.shortDescription}
			</p>
			
			<!-- Service icon with animation -->
			<div class="mb-8 flex justify-center">
				<div class="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 animate-pulse">
					{#if page.params.id === 'video-production'}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
						</svg>
					{:else if page.params.id === 'ad-campaigns'}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
						</svg>
					{:else if page.params.id === 'automation'}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
						</svg>
					{:else if page.params.id === 'local-seo'}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					{:else if page.params.id === 'social-media'}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
						</svg>
					{:else if page.params.id === 'website-development'}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
						</svg>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
						</svg>
					{/if}
				</div>
			</div>
			
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<Button
					on:click={() => goto('/contact')}
					variant="secondary"
					size="lg"
					class="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
				>
					<PhoneCall class="mr-2 h-5 w-5" />
					Get Free Quote
				</Button>
				<a
					href="tel:{contactInfo.phone}"
					class="inline-flex items-center gap-2 text-lg font-medium text-white/90 hover:text-white transition-colors duration-200"
				>
					Call Now: {contactInfo.phone.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}
					<ArrowRight class="h-5 w-5" />
				</a>
			</div>
		</div>
	</section>

	<!-- Available Cities -->
	{#if selectedServiceData.cities && selectedServiceData.cities.length > 0}
		<section class="font-[Cantarell] relative overflow-hidden py-16 px-10">
			<!-- Background decorative elements -->
			<div class="absolute top-4 left-10 w-24 h-16 opacity-5">
				<img src="/assets/floating-dots.svg" alt="" class="w-full h-full" />
			</div>
			<div class="absolute bottom-4 right-10 w-32 h-20 opacity-5">
				<img src="/assets/modern-pattern.svg" alt="" class="w-full h-full" />
			</div>
			
			<div class="relative z-10">
				<h3 class="mb-8 text-center text-2xl font-semibold text-gray-800">Service Areas</h3>
				<div class="flex flex-wrap justify-center gap-4">
					{#each selectedServiceData.cities as city}
						<a
							href="{domain}/locations/{city
								.split(' ')
								.map((v) => v.toLowerCase())
								.join('-')}"
							class="group relative rounded-full bg-gradient-to-r from-primary to-primary/80 px-6 py-3 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
						>
							<span class="relative z-10">{city}</span>
							<div class="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
						</a>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- Service Description -->
	<section class="bg-gray-50 py-16 font-[Cantarell] relative overflow-hidden">
		<!-- Background decorative elements -->
		<div class="absolute top-10 right-10 w-40 h-30 opacity-5">
			<img src="/assets/decorative-wave.svg" alt="" class="w-full h-full" />
		</div>
		<div class="absolute bottom-10 left-10 w-32 h-24 opacity-5">
			<img src="/assets/floating-dots.svg" alt="" class="w-full h-full" />
		</div>
		
		<div class="container mx-auto relative z-10">
			<h3 class="mb-12 text-center text-3xl font-semibold">What We Offer</h3>

			<div class="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
				<div class="space-y-6">
					<p class="text-lg leading-relaxed text-gray-700">
						{selectedServiceData.description}
					</p>
					<Button variant="outline" href="/contact" class="mt-4">Get a Free Quote</Button>
				</div>
				<div class="relative">
					<!-- Main service illustration -->
					<div class="aspect-[4/3] overflow-hidden rounded-lg shadow-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 flex items-center justify-center p-8">
						{#if page.params.id === 'video-production'}
							<img src="/assets/video-marketing-graphic.svg" alt={`${selectedServiceData.title} illustration`} class="w-full h-full object-contain opacity-80" />
						{:else if page.params.id === 'ad-campaigns'}
							<img src="/assets/success-chart.svg" alt={`${selectedServiceData.title} illustration`} class="w-full h-full object-contain opacity-80" />
						{:else if page.params.id === 'automation'}
							<img src="/assets/automation-workflow.svg" alt={`${selectedServiceData.title} illustration`} class="w-full h-full object-contain opacity-80" />
						{:else}
							<img src="/assets/network-graphic.svg" alt={`${selectedServiceData.title} illustration`} class="w-full h-full object-contain opacity-80" />
						{/if}
					</div>
					
					<!-- Secondary illustration -->
					<div class="absolute -bottom-6 -left-6 hidden aspect-[4/3] w-2/3 overflow-hidden rounded-lg shadow-xl lg:flex bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent border border-secondary/20 items-center justify-center p-6">
						<img src="/assets/growth-circle.svg" alt="Growth indicator" class="w-full h-full object-contain opacity-60" />
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
				{#if selectedServiceData.keyFeatures && selectedServiceData.keyFeatures.length > 0}
					<div class="rounded-lg bg-white p-8 shadow-md">
						<h4 class="mb-6 text-xl font-semibold text-primary">Key Features</h4>
						<ul class="space-y-4">
							{#each selectedServiceData.keyFeatures as feature}
								<li class="flex items-start gap-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6 flex-shrink-0 text-primary"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span>{feature}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
				{#if selectedServiceData.benefits && selectedServiceData.benefits.length > 0}
					<div class="rounded-lg bg-white p-8 shadow-md">
						<h4 class="mb-6 text-xl font-semibold text-primary">Benefits</h4>
						<ul class="space-y-4">
							{#each selectedServiceData.benefits as benefit}
								<li class="flex items-start gap-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6 flex-shrink-0 text-primary"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									<span>{benefit}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		</div>
	</section>

	<!-- Phone CTA -->
	<section
		class="relative flex h-[60vh] w-full items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-24 text-primary-foreground overflow-hidden"
	>
		<!-- Background decorative elements -->
		<div class="absolute top-10 left-10 w-40 h-32 opacity-10">
			<img src="/assets/success-chart.svg" alt="" class="w-full h-full filter invert" />
		</div>
		<div class="absolute bottom-10 right-10 w-36 h-28 opacity-10">
			<img src="/assets/network-graphic.svg" alt="" class="w-full h-full filter invert" />
		</div>
		<div class="absolute top-1/3 right-1/4 w-20 h-20 opacity-10 hidden lg:block">
			<img src="/assets/floating-dots.svg" alt="" class="w-full h-full filter invert" />
		</div>
		<div class="absolute bottom-1/3 left-1/4 w-24 h-16 opacity-10 hidden lg:block">
			<img src="/assets/growth-circle.svg" alt="" class="w-full h-full filter invert" />
		</div>
		
		<div class="container mx-auto my-auto text-center relative z-10">
			<div class="mb-6 inline-flex">
				<span class="px-4 py-2 bg-white/20 text-white text-sm rounded-full font-medium backdrop-blur-sm border border-white/30">
					Free Consultation Available
				</span>
			</div>
			<h2 class="mb-4 text-4xl md:text-5xl font-bold leading-tight">Ready to Transform Your Digital Presence?</h2>
			<p class="mb-8 text-xl opacity-90 max-w-2xl mx-auto">Call now for a free consultation and strategy session with our experts</p>
			<a
				href="tel:{contactInfo.phone}"
				class="group inline-flex items-center gap-4 text-[6vw] md:text-[4vw] lg:text-5xl xl:text-6xl font-bold hover:opacity-90 transition-all duration-300 hover:scale-105"
			>
				<PhoneCall
					class="h-auto w-[4vw] md:w-[3vw] lg:w-16 xl:w-20 transition-transform group-hover:scale-110 group-hover:rotate-6"
					color="currentColor"
				/>
				{contactInfo.phone.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
			</a>
			<div class="mt-6 text-lg opacity-80">
				<span class="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">Available 24/7</span>
			</div>
		</div>
	</section>

	<!-- Process Timeline Section -->
	{#if selectedServiceData.process && selectedServiceData.process.length > 0}
		<section class="bg-gradient-to-br from-primary via-primary/95 to-primary/90 px-10 py-16 font-[Cantarell] text-primary-foreground relative overflow-hidden">
			<!-- Background decorative elements -->
			<div class="absolute top-10 right-10 w-40 h-32 opacity-10">
				<img src="/assets/automation-workflow.svg" alt="" class="w-full h-full filter invert" />
			</div>
			<div class="absolute bottom-10 left-10 w-36 h-28 opacity-10">
				<img src="/assets/network-graphic.svg" alt="" class="w-full h-full filter invert" />
			</div>
			<div class="absolute top-1/3 left-1/4 w-24 h-20 opacity-10 hidden lg:block">
				<img src="/assets/floating-dots.svg" alt="" class="w-full h-full filter invert" />
			</div>
			
			<div class="container mx-auto relative z-10">
				<div class="text-center mb-12">
					<div class="mb-4 inline-flex">
						<span class="px-4 py-2 bg-white/20 text-white text-sm rounded-full font-medium backdrop-blur-sm border border-white/30">
							Step-by-Step Process
						</span>
					</div>
					<h3 class="text-3xl md:text-4xl font-bold">Our Process</h3>
					<p class="mt-4 text-xl opacity-90 max-w-2xl mx-auto">We follow a proven methodology to deliver exceptional results</p>
				</div>

				<div class="relative mx-auto max-w-4xl">
					<!-- Timeline Line -->
					<div class="absolute left-[15px] top-0 h-full w-1 bg-white/30 md:left-1/2 md:-ml-0.5"></div>

					<!-- Timeline Items -->
					{#each selectedServiceData.process as step, i}
						<div
							class="mb-8 flex flex-col md:mb-12 {i % 2 === 0
								? 'md:flex-row'
								: 'md:flex-row-reverse'}"
						>
							<div class="ml-8 flex-1 md:ml-0 {i % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'}">
								<div class="rounded-lg bg-white/95 backdrop-blur-sm p-6 shadow-xl border border-white/20">
									<h4 class="mb-3 text-xl font-bold text-primary flex items-center gap-2 {i % 2 === 0 ? 'md:justify-end' : ''}">
										{#if i % 2 !== 0}
											<div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold md:hidden">
												{i + 1}
											</div>
										{/if}
										{step.title}
										{#if i % 2 === 0}
											<div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold md:hidden">
												{i + 1}
											</div>
										{/if}
									</h4>
									<p class="text-gray-700 leading-relaxed">{step.description}</p>
								</div>
							</div>

							<div
								class="absolute left-0 mt-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-lg border-4 border-primary/20 md:left-1/2 md:-ml-5"
							>
								<span class="font-bold text-lg">{i + 1}</span>
							</div>

							<div class="flex-1"></div>
						</div>
					{/each}
				</div>

				{#if selectedServiceData.timeline}
					<div class="mt-12 text-center">
						<div class="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<span class="text-lg font-medium">
								<strong>Typical Timeline:</strong>
								{selectedServiceData.timeline}
							</span>
						</div>
					</div>
				{/if}
			</div>
		</section>
	{/if}

	<!-- FAQ Section -->
	{#if selectedServiceData.faqItems && selectedServiceData.faqItems.length > 0}
		<section class="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-10 font-[Cantarell] relative overflow-hidden">
			<!-- Background decorative elements -->
			<div class="absolute top-10 left-10 w-32 h-24 opacity-5">
				<img src="/assets/decorative-wave.svg" alt="" class="w-full h-full" />
			</div>
			<div class="absolute bottom-10 right-10 w-28 h-20 opacity-5">
				<img src="/assets/modern-pattern.svg" alt="" class="w-full h-full" />
			</div>
			
			<div class="relative z-10 container mx-auto">
				<div class="text-center mb-12">
					<div class="mb-4 inline-flex">
						<span class="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full font-medium border border-primary/20">
							Common Questions
						</span>
					</div>
					<h3 class="text-3xl font-bold text-gray-800">Frequently Asked Questions</h3>
					<p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Get answers to the most common questions about our {selectedServiceData.title.toLowerCase()} services</p>
				</div>
				
				<div class="max-w-4xl mx-auto">
					<Accordion.Root class="w-full space-y-4">
						{#each selectedServiceData.faqItems as faq, index}
							<Accordion.Item value={faq.question} class="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
								<Accordion.Trigger class="text-left text-lg font-semibold p-6 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between w-full">
									<span class="flex items-center gap-3">
										<span class="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
											{index + 1}
										</span>
										{faq.question}
									</span>
								</Accordion.Trigger>
								<Accordion.Content>
									<div class="px-6 pb-6 text-gray-700 leading-relaxed">
										{faq.answer}
									</div>
								</Accordion.Content>
							</Accordion.Item>
						{/each}
					</Accordion.Root>
				</div>
				
				<div class="text-center mt-12">
					<p class="text-lg text-gray-600 mb-4">Still have questions?</p>
					<Button href="/contact" variant="outline" size="lg" class="bg-white border-primary text-primary hover:bg-primary hover:text-white">
						Contact Our Experts
					</Button>
				</div>
			</div>
		</section>
	{/if}
</main>
