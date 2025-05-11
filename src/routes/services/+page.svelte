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
	import Image from '$lib/components/Image.svelte';
	import { page } from '$app/state';
	// import { serviceImagesDict } from '$lib/icons/services/service_images';

	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';

	const formatServiceName = (id: string) => {
		return id
			.split('-')
			.map((x) => x[0].toUpperCase() + x.slice(1))
			.join(' ');
	};

	const domain = $derived(`${page.url.protocol}//${page.url.host}`);
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
</svelte:head>

<main class="mt-24 p-10 lg:mt-16 lg:p-32">
	<section class="mb-16">
		<h1 class="mb-8 text-center text-4xl font-bold">Our Services</h1>
		<p class="mx-auto mb-12 max-w-3xl text-center text-lg font-[Cantarell]">
			Right Marketing offers a full suite of digital marketing services that work together as an integrated package. Our goal is to handle everything from creative content to technical setup so you can focus on running your business.
		</p>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each services as serviceId}
				{#if serviceData[serviceId]}
					<Card class="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
						<CardHeader class="p-0">
							<div class="aspect-video w-full overflow-hidden">
								<Image
									url={`/assets/services/${serviceId}/1.webp`}
									description={serviceData[serviceId].title || formatServiceName(serviceId)}
									class="h-auto w-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
									size={[480]}
									width="100%"
									quality={75}
								/>
							</div>
						</CardHeader>
						<CardContent class="flex flex-1 flex-col p-6">
							<CardTitle class="mb-3 text-xl font-bold">{serviceData[serviceId].title}</CardTitle>
							<CardDescription class="mb-4 text-base font-medium text-primary">{serviceData[serviceId].shortDescription}</CardDescription>
							<div class="mb-4 flex-1">
								<p class="line-clamp-3 text-muted-foreground">
									{serviceData[serviceId].description.substring(0, 120).replace(/<[^>]*>/g, '')}...
								</p>
							</div>
							
							{#if serviceData[serviceId].keyFeatures && serviceData[serviceId].keyFeatures.length > 0}
								<div class="mb-4">
									<h4 class="mb-2 text-sm font-semibold">Key Features:</h4>
									<ul class="list-inside list-disc pl-4 text-sm">
										{#each serviceData[serviceId].keyFeatures.slice(0, 3) as feature}
											<li class="line-clamp-1">{feature}</li>
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

	<!-- Call to action -->
	<section class="mb-16 rounded-lg bg-primary p-8 shadow-lg">
		<div class="mx-auto max-w-4xl text-center text-primary-foreground">
			<h2 class="mb-4 text-3xl font-bold">Ready to Transform Your Digital Presence?</h2>
			<p class="mb-6 text-lg">
				Contact us today for a free consultation and discover how our integrated marketing services can help you reach more customers.
			</p>
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Button href={`${domain}/contact`} variant="secondary">Get a Free Consultation</Button>
			</div>
		</div>
	</section>
</main>
