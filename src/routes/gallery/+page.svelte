<script lang="ts">
	import { PUBLIC_COMPANY_NAME } from '$env/static/public';
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Badge } from '$lib/components/ui/badge';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { clientProjects, type ClientProject } from '$lib/data/gallery';
	import Image from '$lib/components/Image.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { fade, fly } from 'svelte/transition';

	// Dialog state for viewing website GIFs
	let dialogOpen = $state(false);
	let dialogImageSrc = $state('');
	let dialogAltText = $state('');

	// Filtering and search functionality
	let searchQuery = $state('');
	let selectedTags = $state<string[]>([]);
	let availableTags = $derived(
		[...new Set(clientProjects.flatMap((client) => client.tags))].sort()
	);

	// Handle tag selection
	function toggleTag(tag: string) {
		if (selectedTags.includes(tag)) {
			selectedTags = selectedTags.filter((t) => t !== tag);
		} else {
			selectedTags = [...selectedTags, tag];
		}
	}

	// Filter projects based on search and tags
	$effect(() => {
		filteredProjects = clientProjects.filter((project) => {
			// Search filter
			const searchMatch =
				searchQuery === '' ||
				project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

			// Tag filter
			const tagMatch =
				selectedTags.length === 0 || selectedTags.some((tag) => project.tags.includes(tag));

			return searchMatch && tagMatch;
		});
	});

	let filteredProjects = $state<ClientProject[]>(clientProjects);

	function openWebsitePreview(project: ClientProject) {
		if (project.websiteGif) {
			dialogImageSrc = project.websiteGif;
			dialogAltText = `${project.name} website preview`;
			dialogOpen = true;
		}
	}

	let domain = $derived(`${page.url.protocol}//${page.url.host}`);
</script>

<svelte:head>
	<title>Client Success Stories | {PUBLIC_COMPANY_NAME}</title>
	<meta
		name="description"
		content="Explore our portfolio of successful digital marketing projects and client success stories. See how we've helped businesses grow their online presence."
	/>
	<script
		type="text/javascript"
		src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
		async
	></script>

	{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			"name": "Client Success Stories | ${PUBLIC_COMPANY_NAME}",
			"description": "Explore our portfolio of successful digital marketing projects and client success stories. See how we've helped businesses grow their online presence.",
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
					${clientProjects
						.map(
							(project, index) => `
						{
							"@type": "ListItem",
							"position": ${index + 1},
							"item": {
								"@type": "Article",
								"headline": "${project.name}",
								"description": "${project.description.replace(/"/g, '\\"')}",
								"image": "${project.logo}",
								"url": "${domain}/gallery#${project.id}"
							}
						}${index < clientProjects.length - 1 ? ',' : ''}`
						)
						.join('')}
				]
			}
		}
	</script>
	`}

	{@html `
	<script type="application/ld+json">
		[
			${clientProjects
				.map(
					(project) => `
				{
					"@context": "https://schema.org",
					"@type": "CaseStudy",
					"headline": "${project.name} - Marketing Success Story",
					"description": "${project.description.replace(/"/g, '\\"')}",
					"image": "${project.logo}",
					"author": {
						"@type": "Organization",
						"name": "${PUBLIC_COMPANY_NAME}",
						"url": "${domain}"
					},
					"publisher": {
						"@type": "Organization",
						"name": "${PUBLIC_COMPANY_NAME}",
						"logo": {
							"@type": "ImageObject",
							"url": "${domain}/assets/logo.png"
						}
					},
					"url": "${domain}/gallery#${project.id}",
					"mainEntityOfPage": "${domain}/gallery#${project.id}",
					"keywords": "${project.tags.join(', ')}"
				}`
				)
				.join(',')}
		]
	</script>
	`}

	{@html `
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Service",
			"serviceType": "Digital Marketing",
			"provider": {
				"@type": "Organization",
				"name": "${PUBLIC_COMPANY_NAME}",
				"url": "${domain}"
			},
			"description": "Professional digital marketing services including branding, website design, social media marketing, content creation, SEO, and paid advertising.",
			"offers": {
				"@type": "Offer",
				"availability": "https://schema.org/InStock"
			},
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "Digital Marketing Services",
				"itemListElement": [
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Social Media Marketing"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Website Design & Development"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Search Engine Optimization"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Content Marketing"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Paid Advertising"
						}
					}
				]
			}
		}
	</script>
	`}
</svelte:head>

<Dialog.Root bind:open={dialogOpen}>
	<Dialog.Content class="max-w-4xl">
		<Dialog.Header>
			<Dialog.Title>{dialogAltText}</Dialog.Title>
		</Dialog.Header>
		<ScrollArea class="max-h-[70vh]">
			<Image url={dialogImageSrc} description={dialogAltText} class="w-full" />
		</ScrollArea>
	</Dialog.Content>
</Dialog.Root>

<main class="relative mt-24 overflow-hidden lg:mt-16">
	<!-- Hero Section with Background -->
	<section
		class="relative overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-primary/10 py-24"
	>
		<!-- Enhanced background decorative elements -->
		<div class="absolute right-10 top-10 h-36 w-48 opacity-15">
			<img src="/assets/success-chart.svg" alt="" class="h-full w-full" />
		</div>
		<div class="absolute bottom-10 left-10 h-32 w-40 opacity-10">
			<img src="/assets/floating-dots.svg" alt="" class="h-full w-full" />
		</div>
		<div class="opacity-8 absolute left-1/4 top-1/2 hidden h-24 w-24 lg:block">
			<img src="/assets/growth-circle.svg" alt="" class="h-full w-full" />
		</div>
		<div class="absolute bottom-20 right-20 hidden h-24 w-32 opacity-10 lg:block">
			<img src="/assets/automation-workflow.svg" alt="" class="h-full w-full" />
		</div>
		<!-- Additional decorative pattern overlay -->
		<div class="absolute left-0 top-0 h-full w-full opacity-5">
			<img src="/assets/modern-pattern.svg" alt="" class="h-full w-full object-cover" />
		</div>

		<div class="container relative z-10 mx-auto px-4">
			<div class="mx-auto max-w-4xl text-center">
				<h1
					class="mb-8 bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl lg:text-7xl"
				>
					Client Success Stories
				</h1>
				<div
					class="mx-auto mb-8 h-1.5 w-32 rounded-full bg-gradient-to-r from-primary to-primary/60"
				></div>
				<p
					class="mx-auto max-w-3xl text-xl font-light leading-relaxed text-muted-foreground md:text-2xl"
				>
					Discover how we've helped our clients achieve remarkable growth and success with our
					tailored digital marketing strategies.
				</p>

				<!-- Stats cards -->
				<div class="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-3">
					<div
						class="rounded-xl border border-primary/10 bg-background/80 p-6 shadow-lg backdrop-blur-sm"
					>
						<div class="mb-2 text-3xl font-bold text-primary">{clientProjects.length}+</div>
						<div class="text-sm text-muted-foreground">Success Stories</div>
					</div>
					<div
						class="rounded-xl border border-primary/10 bg-background/80 p-6 shadow-lg backdrop-blur-sm"
					>
						<div class="mb-2 text-3xl font-bold text-primary">100%</div>
						<div class="text-sm text-muted-foreground">Client Satisfaction</div>
					</div>
					<div
						class="rounded-xl border border-primary/10 bg-background/80 p-6 shadow-lg backdrop-blur-sm"
					>
						<div class="mb-2 text-3xl font-bold text-primary">50%+</div>
						<div class="text-sm text-muted-foreground">Average Growth</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- TrustBox widget - Review Collector -->
	<div
		class="trustpilot-widget mt-4"
		data-locale="en-US"
		data-template-id="56278e9abfbbba0bdcd568bc"
		data-businessunit-id="684872fc31ed1d653c6b4251"
		data-style-height="52px"
		data-style-width="100%"
	>
		<a href="https://www.trustpilot.com/review/rightmarketing.ca" target="_blank" rel="noopener"
			>Trustpilot</a
		>
	</div>
	<!-- End TrustBox widget -->

	<div class="container mx-auto max-w-7xl px-4 py-16">
		<!-- Search Section -->
		<section class="mb-12">
			<div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
				<div class="w-full lg:w-1/3">
					<div class="relative">
						<Input
							type="text"
							placeholder="Search clients or projects..."
							bind:value={searchQuery}
							class="h-12 pl-10 text-base"
						/>
						<svg
							class="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-muted-foreground"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>
				</div>

				<div class="text-sm text-muted-foreground">
					Showing {filteredProjects.length} of {clientProjects.length} success stories
				</div>
			</div>
		</section>

		<!-- Client Projects Grid -->
		<section class="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
			{#each filteredProjects as project (project.id)}
				<div
					id={project.id}
					class="group relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-lg transition-all duration-500 hover:shadow-2xl"
					transition:fade={{ duration: 300 }}
				>
					<!-- Background gradient -->
					<div
						class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 transition-all duration-500 group-hover:opacity-100"
					></div>

					<!-- Decorative elements -->
					<div
						class="absolute right-3 top-3 h-6 w-6 translate-x-2 transform opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-30"
					>
						<img src="/assets/floating-dots.svg" alt="" class="h-full w-full" />
					</div>
					<div
						class="absolute bottom-3 left-3 h-8 w-8 translate-y-2 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-40"
					>
						<img src="/assets/growth-circle.svg" alt="" class="h-full w-full" />
					</div>

					<div class="relative z-10 p-8">
						<!-- Logo Section -->
						<div
							class="mb-6 flex h-24 items-center justify-center overflow-hidden rounded-xl border border-primary/10 bg-gradient-to-br from-background/80 to-primary/5 p-4 transition-all duration-500 group-hover:border-primary/20 group-hover:from-primary/5 group-hover:to-primary/10"
						>
							{#if project.logo}
								<Image
									url={project.logo}
									description={`${project.name} logo`}
									class="max-h-16 max-w-full object-contain drop-shadow-sm filter transition-transform duration-500 group-hover:scale-110"
								/>
							{:else}
								<!-- Enhanced SVG Placeholder for missing logos -->
								<div
									class="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border border-primary/10 bg-gradient-to-br from-primary/15 to-primary/5 transition-all duration-500 group-hover:scale-105 group-hover:border-primary/30 group-hover:from-primary/25 group-hover:to-primary/15"
								>
									<!-- Background pattern -->
									<div class="absolute inset-0 opacity-5">
										<img
											src="/assets/modern-pattern.svg"
											alt=""
											class="h-full w-full object-cover"
										/>
									</div>
									<!-- Company icon -->
									<div class="relative z-10 flex flex-col items-center justify-center">
										<svg
											class="h-10 w-10 text-primary/80 transition-colors duration-300 group-hover:text-primary"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.5"
												d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
											/>
										</svg>
										<!-- Company initials -->
										<span
											class="mt-1 text-xs font-bold text-primary/60 transition-colors duration-300 group-hover:text-primary/80"
										>
											{project.name
												.split(' ')
												.map((word) => word.charAt(0))
												.join('')
												.slice(0, 2)}
										</span>
									</div>
									<!-- Decorative elements -->
									<div
										class="absolute right-1 top-1 h-2 w-2 opacity-0 transition-all duration-300 group-hover:opacity-30"
									>
										<img src="/assets/floating-dots.svg" alt="" class="h-full w-full" />
									</div>
									<div
										class="absolute bottom-1 left-1 h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-40"
									>
										<img src="/assets/growth-circle.svg" alt="" class="h-full w-full" />
									</div>
								</div>
							{/if}
						</div>

						<!-- Company Name -->
						<h3
							class="mb-3 text-center text-xl font-bold transition-colors duration-300 group-hover:text-primary"
						>
							{project.name}
						</h3>

						<!-- Description -->
						<p class="mb-6 text-sm leading-relaxed text-muted-foreground">
							{project.description}
						</p>

						<!-- Tags -->
						<div class="mb-6 flex flex-wrap justify-center gap-2">
							{#each project.tags.slice(0, 3) as tag}
								<Badge
									variant="secondary"
									class="border-primary/20 bg-primary/10 text-xs capitalize text-primary transition-colors duration-300 hover:bg-primary/20"
								>
									{tag.replace(/-/g, ' ')}
								</Badge>
							{/each}
							{#if project.tags.length > 3}
								<Badge variant="outline" class="text-xs text-muted-foreground">
									+{project.tags.length - 3} more
								</Badge>
							{/if}
						</div>

						<!-- Website Preview Button -->
						{#if project.websiteGif}
							<Button
								variant="outline"
								class="mb-4 w-full transition-all duration-300 group-hover:border-primary group-hover:text-primary"
								on:click={() => openWebsitePreview(project)}
							>
								<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
									/>
								</svg>
								View Website Preview
							</Button>
						{/if}

						<!-- Social Links -->
						<div class="flex flex-wrap justify-center gap-2">
							{#if project.links.website}
								<a
									href={project.links.website}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex transform items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
								>
									<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
										/>
									</svg>
									Website
								</a>
							{/if}

							{#if project.links.instagram}
								<a
									href={project.links.instagram}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex transform items-center gap-2 rounded-lg border border-primary/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10"
								>
									<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
										<path
											d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
										/>
									</svg>
									Instagram
								</a>
							{/if}

							{#if project.links.facebook}
								<a
									href={project.links.facebook}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex transform items-center gap-2 rounded-lg border border-primary/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10"
								>
									<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
										<path
											d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
										/>
									</svg>
									Facebook
								</a>
							{/if}
						</div>
					</div>
				</div>
			{:else}
				<div class="col-span-full py-16 text-center">
					<div class="max-w-md mx-auto">
						<div
							class="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center"
						>
							<svg
								class="w-8 h-8 text-primary"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</div>
						<h3 class="text-xl font-semibold mb-2">No matching clients found</h3>
						<p class="text-muted-foreground mb-6">
							Try adjusting your search or browse all our success stories
						</p>
						<Button
							class="bg-primary hover:bg-primary/90"
							on:click={() => {
								searchQuery = '';
								selectedTags = [];
							}}
						>
							Clear Search
						</Button>
					</div>
				</div>
			{/each}
		</section>
	</div>
</main>
