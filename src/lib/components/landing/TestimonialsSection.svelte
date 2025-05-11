<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel';
	import { type CarouselAPI } from '$lib/components/ui/carousel/context';
	import Button from '$lib/components/ui/button/button.svelte';
	import ReviewCard from '$lib/components/ReviewCard.svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { isMobile } from '$lib/utils/stores';
	import type { Review } from '$lib/types/reviews';
	
	// export let reviews: Review[] = [];
	// export let rating: number = 0;
	// export let userRatingCount: number = 0;
	// export let isLoadingReviews: boolean = false;
	// export let reviewsLoaded: boolean = false;

	interface Props {
		reviews: Review[];
		rating: number;
		userRatingCount: number;
		isLoadingReviews: boolean;
		reviewsLoaded: boolean;
		instance: any;
	}

	let { instance = $bindable(), reviews, rating, userRatingCount, isLoadingReviews, reviewsLoaded }: Props = $props();
	
	// Get the base URL for absolute links
	const domain = $derived(`${page.url.protocol}//${page.url.host}`);
	
	let reviewCarouselAPI: CarouselAPI | undefined = $state();
	let currentReviewSlide = $state(0);
	
	$effect(() => {
		if (reviewCarouselAPI) {
			reviewCarouselAPI.on('select', () => {
				if (reviewCarouselAPI) currentReviewSlide = reviewCarouselAPI.selectedScrollSnap();
			});
		}
	});
</script>

<section
	class="flex w-full flex-col gap-8 overflow-hidden py-16 text-center lg:gap-10 bg-gradient-to-b from-transparent to-primary/5"
	bind:this={instance}
>
	<div class="max-w-3xl mx-auto">
		<h2 class="text-center text-4xl font-semibold leading-tight">Client Success Stories</h2>
		<div class="my-4 h-1 w-24 rounded-full bg-primary mx-auto"></div>
		<p class="text-lg text-muted-foreground mb-8">See why businesses trust Right Marketing to deliver results that drive growth and exceed expectations.</p>
	</div>

	{#if isLoadingReviews}
		<div class="py-12 text-center">
			<div
				class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"
				aria-label="Loading reviews"
			></div>
			<p class="mt-4 text-muted-foreground">Loading client testimonials...</p>
		</div>
	{:else if reviews.length > 0}
		<div class="flex flex-col items-center mb-6">
			<div class="flex items-center gap-1">
				<div class="text-3xl font-bold">{rating.toFixed(1)}</div>
				<div class="text-2xl text-amber-500">★★★★★</div>
			</div>
			<div class="text-sm text-muted-foreground">Based on {userRatingCount} verified client reviews</div>
		</div>

		<Carousel.Root
			plugins={[Autoplay({ delay: 6000 })]}
			class="w-full select-none px-4 md:px-8 lg:px-16"
			bind:api={reviewCarouselAPI}
			opts={{ align: 'start', containScroll: 'trimSnaps' }}
		>
			<div class="relative mb-6 flex items-center justify-center gap-2">
				<Carousel.Previous
					class="relative top-4 scale-[1.3] bg-primary text-primary-foreground"
					aria-label="View previous testimonials"
				/>
				{#each Array($isMobile ? reviews.length : Math.ceil(reviews.length / 2)) as _, i}
					<button
						class="flex h-[12px] w-[12px] items-center justify-center rounded-full"
						aria-label={`Go to testimonial slide ${i + 1}`}
						onclick={() => reviewCarouselAPI?.scrollTo(i)}
					>
						<span
							class="block h-3 w-3 rounded-full transition-all duration-300 {i === currentReviewSlide
								? 'bg-primary scale-125'
								: 'bg-gray-300'}"
						></span>
					</button>
				{/each}
				<Carousel.Next 
					class="relative top-4 scale-[1.3] bg-primary text-primary-foreground"
					aria-label="View next testimonials"
				/>
			</div>

			<Carousel.Content class="-ml-4 flex">
				{#each reviews as review, idx}
					<Carousel.Item
						class="min-w-0 basis-full pl-4 transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3"
						aria-label={`Testimonial from ${review.authorAttribution.displayName}`}
					>
						<ReviewCard {review} />
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
		
		<div class="mt-8 text-center">
			<Button 
				variant="outline" 
				class="mt-4"
				onclick={() => goto('/success-stories')}
			>
				<a
					href={`${domain}/success-stories`}
					onclick={(e) => {
						e.preventDefault();
						goto('/success-stories');
					}}
					class="flex items-center gap-2"
				>
					View All Success Stories
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</a>
			</Button>
		</div>
	{:else if reviewsLoaded}
		<p class="text-center text-muted-foreground py-8">We're collecting client testimonials to share with you soon. Please check back later.</p>
	{:else}
		<p class="text-center text-muted-foreground py-8">Client testimonials loading soon...</p>
	{/if}
</section>
