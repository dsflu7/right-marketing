<script lang="ts">
	import BusinessCard3D from '$lib/components/BusinessCard3D.svelte';
	import type { CardProps } from '$lib/types/card';
	import { hideFooter, hideHeader } from '$lib/utils/stores';
	import { onDestroy, onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';

	// Import icons
	import PhoneCall from '$lib/icons/PhoneCall.svelte';
	import Instagram from '$lib/icons/Instagram.svelte';
	import Facebook from '$lib/icons/facebook.svelte';
	import { EnvelopeClosed } from 'svelte-radix';

	const cardConfig: CardProps = {
		draggable: true,
		floatingAnimation: true,
		autoRotate: true,
		showTwoFingerSpin: true,
		showMouseWheelDepth: true
	};

	// onMount(() => {
	// 	hideHeader.set(true);
	// 	hideFooter.set(true);
	// })
	// onDestroy(() => {
	// 	hideHeader.set(false);
	// 	hideFooter.set(false);
	// });
</script>

<svelte:head>
	<title>Business Card - Right Marketing</title>
	<meta name="description" content="Interactive 3D business card for Right Marketing" />
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
	/>
</svelte:head>

<main
	class="mt-28 box-border flex h-[80vh] max-w-3xl flex-col items-center justify-center gap-4 overflow-hidden bg-background p-10 md:mb-12 md:mt-32 lg:mx-auto lg:rounded-2xl lg:shadow-[0_25px_50px_hsl(var(--foreground)/0.1)]"
>
	<!-- Business Card Component -->
	<BusinessCard3D config={cardConfig} />

	<section>
		<div class="mt-6 flex w-full flex-col gap-3 px-4 *:w-[15rem]">
			<Button variant="default" size="lg" href="/services">Our Services</Button>
			<Button variant="default" size="lg" href="/gallery">Success Stories</Button>
			<Button variant="default" size="lg" href="/packages">Packages</Button>
			<Button variant="default" size="lg" href="/contact">Contact Us</Button>
		</div>

		<div class="mt-8 flex flex-row items-center justify-center gap-6">
			<a
				href="https://facebook.com/rightmarketing"
				aria-label="Facebook"
				class="text-foreground hover:text-primary"
			>
				<Facebook color="currentColor" class="h-6 w-6" />
			</a>
			<a
				href="https://instagram.com/rightmarketing"
				aria-label="Instagram"
				class="text-foreground hover:text-primary"
			>
				<Instagram color="currentColor" class="h-6 w-6" />
			</a>
			<a href="tel:+1234567890" aria-label="Phone" class="text-foreground hover:text-primary">
				<PhoneCall color="currentColor" class="h-6 w-6" />
			</a>
			<!-- email -->
			<a
				href="mailto:contact@rightmarketing.ca"
				aria-label="Email"
				class="text-foreground hover:text-primary"
			>
				<EnvelopeClosed color="currentColor" class="h-6 w-6" />
			</a>
		</div>
	</section>
</main>

<style type="postcss">
	@reference "../../app.css";
</style>
