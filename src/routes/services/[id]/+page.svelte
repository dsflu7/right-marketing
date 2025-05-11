<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import * as Carousel from '$lib/components/ui/carousel';
	import * as Card from '$lib/components/ui/card';
	import { type CarouselAPI } from '$lib/components/ui/carousel/context';
	import { Button } from '$lib/components/ui/button';
	import Autoplay from 'embla-carousel-autoplay';
	import { slide } from 'svelte/transition';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import Image from '$lib/components/Image.svelte';
	import { serviceData } from '$lib/data/services';
	import * as Accordion from '$lib/components/ui/accordion';
	import { contactInfo } from '$lib/data/locations';
	import PhoneCall from '$lib/icons/PhoneCall.svelte';
	import { ArrowRight } from 'svelte-radix';
	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';

	let selectedServiceData = $derived(serviceData[page.params.id]);

	let carouselAPI: CarouselAPI | undefined = $state();
	let currentSlide = $state(0);

	let carouselCaptions: string[] = $derived(
		selectedServiceData && selectedServiceData.benefits
			? selectedServiceData.benefits
			: selectedServiceData && selectedServiceData.keyFeatures
				? selectedServiceData.keyFeatures
				: []
	);

	const domain = $derived(`${page.url.protocol}//${page.url.host}`);

	$effect(() => {
		if (carouselAPI) {
			carouselAPI.on('select', () => {
				if (carouselAPI) currentSlide = carouselAPI.selectedScrollSnap();
			});
		}
	});

	$effect(() => {
		if (!selectedServiceData) {
			goto('/?services');
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
		content="{selectedServiceData?.shortDescription || `Professional ${formatServiceName(page.params.id)} services from Right Marketing`}"
	/>
	<meta
		name="keywords"
		content="{formatServiceName(page.params.id)}, digital marketing, {page.params.id.replace(/-/g, ', ')}, professional services, ${selectedServiceData?.keyFeatures?.join(', ')}"
	/>
	<meta
		property="og:title"
		content="{selectedServiceData?.title || formatServiceName(page.params.id)} | {PUBLIC_COMPANY_NAME}"
	/>
	<meta
		property="og:description"
		content="{selectedServiceData?.shortDescription || `Professional ${formatServiceName(page.params.id)} services from Right Marketing`}"
	/>
	<meta property="og:image" content="/assets/services/{page.params.id}/1.webp" />
	<meta property="og:url" content="https://www.{PUBLIC_DOMAIN}/services/{page.params.id}" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="{PUBLIC_COMPANY_NAME}" />

	<link rel="canonical" href="https://www.{PUBLIC_DOMAIN}/services/{page.params.id}" />
</svelte:head>

<main class="mt-24 *:py-10 lg:mt-16 *:lg:p-32">
	<!-- Carousel -->
	<section
		class="flex flex-col overflow-hidden bg-black text-center text-2xl text-white lg:!pb-16 lg:text-4xl px-10"
	>
		<h1 class="mb-8 font-[Cantarell] lg:mb-16">
			<!-- Why {formatServiceName(page.params.id)}? -->
			{selectedServiceData.shortDescription}
		</h1>

		<Carousel.Root
			plugins={[Autoplay({ delay: 4000 })]}
			class="-mx-10 mb-8 select-none lg:-mx-32"
			bind:api={carouselAPI}
		>
			<Carousel.Content class="ml-[14vw] max-w-[75vw] pr-1 lg:ml-[25vw] lg:max-w-[50vw]">
				{#each selectedServiceData.images as image, idx}
					<Carousel.Item
						onclick={() => carouselAPI?.scrollTo(idx)}
						class="-ml-6 cursor-pointer pl-1 first:ml-auto {currentSlide === idx ||
							'scale-75 lg:scale-90'} transition-all duration-300 ease-in-out"
						aria-label={`View slide ${idx + 1}`}
					>
						<Card.Root class="overflow-hidden !border-black">
							<Card.Content class="lg:aspect-16/9 aspect-9/16 overflow-hidden object-cover p-0">
								<Image
									url={image}
									description={`${formatServiceName(page.params.id)} process demonstration - step ${idx + 1} showing ${carouselCaptions[idx] || 'professional cleaning technique'}`}
									class="lg:aspect-16/9 aspect-9/16 h-[50vh] max-h-[50vh] w-full scale-125 rounded-2xl object-cover object-center lg:h-auto"
								/>
							</Card.Content>
						</Card.Root>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>

		{#if carouselCaptions.length > 0 && currentSlide < carouselCaptions.length}
			{#key currentSlide}
				<h2 transition:slide={{ duration: 1000 }} class="font-[Alatsi] text-2xl font-semibold">
					{carouselCaptions[currentSlide]}
				</h2>
			{/key}
		{/if}

		<div class="pt-8">
			<a
				href="{domain}/contact"
				onclick={(e) => {
					e.preventDefault();
					goto('/contact');
				}}
				class="inline-flex items-center justify-center text-2xl text-primary"
			>
				<PhoneCall class="*:*:stroke-primary mr-2" /> Get Free Quote <ArrowRight size="2rem" class="pt-2" />
			</a>
		</div>
	</section>

	<!-- Available Cities -->
	{#if selectedServiceData.cities && selectedServiceData.cities.length > 0}
		<section class="font-[Cantarell]">
			<h3 class="mb-8 text-center text-2xl font-semibold">Service Areas</h3>
			<div class="flex flex-wrap justify-center gap-4">
				{#each selectedServiceData.cities as city}
					<a
						href="{domain}/locations/{city
							.split(' ')
							.map((v) => v.toLowerCase())
							.join('-')}"
						class="rounded-full bg-black px-4 py-2 text-white">{city}</a
					>
				{/each}
			</div>
		</section>
	{/if}

	<!-- Service Description -->
	<section class="bg-gray-50 py-16 font-[Cantarell]">
		<div class="container mx-auto">
			<h3 class="mb-12 text-center text-3xl font-semibold">What We Offer</h3>

			<div class="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
				<div class="space-y-6">
					<p class="text-lg leading-relaxed text-gray-700">
						{selectedServiceData.description}
					</p>
					<Button variant="outline" href="/contact" class="mt-4">Get a Free Quote</Button>
				</div>
				<div class="relative">
					<div class="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
						<Image
							url={selectedServiceData.images[0]}
							description={`${formatServiceName(page.params.id)} service demonstration`}
							class="h-full w-full object-cover"
						/>
					</div>
					<div
						class="absolute -bottom-6 -left-6 hidden aspect-[4/3] w-2/3 overflow-hidden rounded-lg shadow-xl lg:block"
					>
						<Image
							url={selectedServiceData.images[1] || selectedServiceData.images[0]}
							description={`${formatServiceName(page.params.id)} service detail`}
							class="h-full w-full object-cover"
						/>
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
	<section class="relative flex h-[60vh] w-full items-center justify-center bg-primary py-24 text-primary-foreground">
		<div class="container mx-auto my-auto text-center">
			<h2 class="mb-4 text-4xl font-semibold">Ready to Transform Your Digital Presence?</h2>
			<p class="mb-8 text-xl opacity-90">Call now for a free consultation and strategy session</p>
			<a
				href="tel:{contactInfo.phone}"
				class="group inline-flex items-center gap-4 text-[8vw] font-bold hover:opacity-90"
			>
				<PhoneCall
					class="h-auto w-[6vw] transition-transform group-hover:scale-110"
					color="currentColor"
				/>
				{contactInfo.phone.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
			</a>
		</div>
	</section>

	<!-- Process Timeline Section -->
	{#if selectedServiceData.process && selectedServiceData.process.length > 0}
		<section class="bg-primary font-[Cantarell] px-10 py-16 text-primary-foreground">
			<div class="container mx-auto">
				<h3 class="mb-12 text-center text-3xl font-semibold">Our Process</h3>
				
				<div class="relative mx-auto max-w-4xl">
					<!-- Timeline Line -->
					<div class="absolute left-[15px] top-0 h-full w-1 bg-white md:left-1/2 md:-ml-0.5"></div>
					
					<!-- Timeline Items -->
					{#each selectedServiceData.process as step, i}
						<div class="mb-8 flex flex-col md:mb-0 {i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}">
							<div class="ml-8 flex-1 md:ml-0 {i % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'}">
								<div class="rounded-lg bg-white p-6 shadow-lg">
									<h4 class="mb-2 text-xl font-bold text-primary">{step.title}</h4>
									<p class="text-gray-700">{step.description}</p>
								</div>
							</div>
							
							<div class="absolute left-0 mt-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary md:left-1/2 md:-ml-4">
								<span class="font-bold">{i + 1}</span>
							</div>
							
							<div class="flex-1"></div>
						</div>
					{/each}
				</div>
				
				{#if selectedServiceData.timeline}
					<p class="mt-12 text-center text-lg">
						<strong>Typical Timeline:</strong> {selectedServiceData.timeline}
					</p>
				{/if}
			</div>
		</section>
	{/if}

	<!-- FAQ Section -->
	{#if selectedServiceData.faqItems && selectedServiceData.faqItems.length > 0}
		<section class="bg-gray-100 font-[Cantarell] px-10">
			<h3 class="mb-8 text-center text-2xl font-semibold">Frequently Asked Questions</h3>
			<Accordion.Root class="w-full">
				{#each selectedServiceData.faqItems as faq}
					<Accordion.Item value={faq.question}>
						<Accordion.Trigger class="text-left text-lg font-bold">
							{faq.question}
						</Accordion.Trigger>
						<Accordion.Content>
							<div class="px-4 pb-4">
								{faq.answer}
							</div>
						</Accordion.Content>
					</Accordion.Item>
				{/each}
			</Accordion.Root>
		</section>
	{/if}
</main>
