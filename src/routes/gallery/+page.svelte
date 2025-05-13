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
				project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

			// Tag filter
			const tagMatch =
				selectedTags.length === 0 ||
				selectedTags.some((tag) => project.tags.includes(tag));

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
					${clientProjects.map((project, index) => `
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
					).join('')}
				]
			}
		}
	</script>
	`}
	
	{@html `
	<script type="application/ld+json">
		[
			${clientProjects.map((project) => `
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
			).join(',')}
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
			<Image
				url={dialogImageSrc}
				description={dialogAltText}
				class="w-full"
			/>
		</ScrollArea>
	</Dialog.Content>
</Dialog.Root>

<main class="mt-28 flex h-full flex-col gap-12 p-[6vw] px-4 font-[Cantarell] lg:mt-16 lg:gap-16 max-w-6xl 2xl:max-w-[90rem] mx-auto">
	<section class="flex w-full flex-col items-center gap-6 px-4 py-8">
		<h1
			class="mx-auto max-w-4xl text-center text-2xl font-semibold leading-tight md:text-5xl lg:text-4xl"
		>
			Client Success Stories
		</h1>
		<div class="my-2 h-1 w-24 rounded-full bg-primary"></div>
		<p class="mx-auto max-w-3xl text-center text-lg text-muted-foreground">
			Discover how we've helped our clients achieve remarkable growth and success with our tailored digital marketing strategies.
		</p>
	</section>

	<!-- Search and filters -->
	<section class="mx-auto w-full max-w-6xl 2xl:max-w-[90rem]">
		<div class="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
			<div class="w-full lg:w-1/3">
				<Input
					type="text"
					placeholder="Search clients or projects..."
					bind:value={searchQuery}
				/>
			</div>
			
			<!-- <div class="flex flex-wrap gap-2">
				{#each availableTags as tag}
					<Badge
						variant={selectedTags.includes(tag) ? 'default' : 'outline'}
						class="cursor-pointer capitalize"
						on:click={() => toggleTag(tag)}
					>
						{tag.replace(/-/g, ' ')}
					</Badge>
				{/each}
			</div> -->
		</div>
	</section>

	<!-- Client Projects Grid -->
	<section class="mx-auto grid w-full grid-cols-1 gap-8 md:grid-cols-2">
		{#each filteredProjects as project (project.id)}
			<div 
				id={project.id}
				class="group flex flex-col rounded-lg border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg"
				transition:fade={{ duration: 200 }}
			>
				<div class="mb-4 flex h-24 items-center justify-center overflow-hidden">
					<Image
						url={project.logo}
						description={`${project.name} logo`}
						class="max-h-24 max-w-full object-contain"
					/>
				</div>
				
				<h3 class="mb-2 text-xl font-semibold">{project.name}</h3>
				
				<p class="mb-4 flex-grow text-muted-foreground">{project.description}</p>
				
				<div class="mb-4 flex flex-wrap gap-2">
					{#each project.tags as tag}
						<Badge variant="secondary" class="text-xs capitalize">
							{tag.replace(/-/g, ' ')}
						</Badge>
					{/each}
				</div>
				
				{#if project.websiteGif}
					<Button 
						variant="outline" 
						class="mb-4 w-full"
						on:click={() => openWebsitePreview(project)}
					>
						View Website Preview
					</Button>
				{/if}
				
				<div class="mt-auto flex flex-wrap gap-2">
					{#if project.links.website}
						<a
							href={project.links.website}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
						>
							Visit Website
						</a>
					{/if}

					{#if project.links.instagram}
						<a
							href={project.links.instagram}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
						>
							Instagram
						</a>
					{/if}

					{#if project.links.facebook}
						<a
							href={project.links.facebook}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
						>
							Facebook
						</a>
					{/if}
				</div>
			</div>
		{:else}
			<div class="col-span-full py-12 text-center">
				<h3 class="text-xl font-medium">No matching clients found</h3>
				<p class="mt-2 text-muted-foreground">Try adjusting your search or filters</p>
				<Button class="mt-4" on:click={() => { searchQuery = ''; selectedTags = []; }}>Clear filters</Button>
			</div>
		{/each}
	</section>
</main>
