<script lang="ts">
	import BusinessCard3D from '$lib/components/BusinessCard3D.svelte';
	import type { CardProps } from '$lib/types/card';

	// Define configuration for the business card
	const cardConfig: CardProps = {
		draggable: true,
		floatingAnimation: true,
		autoRotate: true,
		showTwoFingerSpin: true,
		showMouseWheelDepth: true
	};
</script>

<svelte:head>
	<title>Business Card - Right Marketing</title>
	<meta name="description" content="Interactive 3D business card for Right Marketing" />
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
	/>
</svelte:head>

<div
	class="box-border flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-background p-10 lg:mx-auto lg:rounded-2xl lg:shadow-[0_25px_50px_hsl(var(--foreground)/0.1)]"
>
	<!-- Business Card Component -->
	<BusinessCard3D config={cardConfig} />

	<!-- Instructions -->
	<div class="mt-7 text-center">
		<p class="m-0 text-base font-medium text-foreground opacity-70 max-[480px]:text-sm">
			Drag center to move • Drag edges to rotate • Two fingers to spin • Mouse wheel for depth
		</p>
	</div>
</div>

<style type="postcss">
	@reference "../../app.css";
</style>
