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
		CardDescription
	} from '$lib/components/ui/card';
	import Image from '$lib/components/Image.svelte';
	import { page } from '$app/state';
	import { serviceImagesDict } from '$lib/icons/services/service_images';
	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';

	onMount(() => {
		// Check if we're on the base services page without a specific service
		// if (window.location.pathname === '/services') {
		//	// Instead of redirecting immediately, show a service list
		// 	return;
		// }
	});

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
		content=""
	/>
	<meta
		name="keywords"
		content=""
	/>
	<meta property="og:title" content="Services | {PUBLIC_COMPANY_NAME}" />
	<meta
		property="og:description"
		content=""
	/>
	<meta property="og:image" content="/assets/logo.png" />
	<meta property="og:url" content="https://www.{PUBLIC_DOMAIN}/services" />
	<meta property="og:type" content="website" />
	<link rel="canonical" href="https://www.{PUBLIC_DOMAIN}/services" />
</svelte:head>

<main class="mt-24 p-10 lg:mt-16 lg:p-32">
	<section class="mb-16">
		<h1 class="mb-8 text-center text-4xl font-bold">Our Services</h1>
		<p class="mx-auto mb-12 max-w-3xl text-center text-lg">
			<!-- description -->
		</p>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each services as serviceId}
				{#if serviceData[serviceId]}
					<div class="flex flex-col items-center gap-4 text-center">
						<div class="aspect-square w-full overflow-hidden rounded">
							<!-- <Image
								url={`/assets/services/${serviceId}/1.webp`}
								description={serviceData[serviceId].title || formatServiceName(serviceId)}
								class="aspect-square h-auto w-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
								size={[480]}
								width="480"
								quality={75}
							/> -->
							<enhanced:img
								class="aspect-square h-auto w-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
								src={serviceImagesDict[serviceId]}
								sizes="640px"
								alt={`${serviceData[serviceId].title} service highlight - `}
							/>
						</div>

						<span class="font-[Alatsi] text-xl"
							>{serviceData[serviceId].title || formatServiceName(serviceId)}</span
						>
						<span class="font-[Cantarell] text-[#00000099]"
							>{serviceData[serviceId].shortDescription}</span
						>
						<div class="mt-2">
							<p class="mb-4 line-clamp-3 text-sm text-muted-foreground">
								{serviceData[serviceId].description.substring(0, 100).replace(/<[^>]*>/g, '')}...
							</p>
							<Button on:click={() => goto(`/services/${serviceId}`)} variant="default">
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
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</section>

	<!-- Call to action -->
	<section class="mb-16 rounded-lg bg-primary p-8 shadow-lg">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="mb-4 text-3xl font-bold">cta title</h2>
			<p class="mb-6 text-lg">
				Contact us today for ...
			</p>
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Button href={`${domain}/contact`} variant="secondary">Get a Free ...</Button>
				<!-- <Button href={`${domain}/locations`} variant="secondary">View Service Areas</Button> -->
			</div>
		</div>
	</section>
</main>
