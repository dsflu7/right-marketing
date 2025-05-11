<script lang="ts">
	import '../app.css';
	import { fade, slide } from 'svelte/transition';
	import { PUBLIC_COMPANY_NAME } from '$env/static/public';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import { CaretUp } from 'svelte-radix';
	import FloatingShare from '$lib/components/FloatingShare.svelte';
	import { isMobile } from '$lib/utils/stores';
	import ComingSoon from '$lib/components/ComingSoon.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let scrollY = $state(0);
	let { children }: Props = $props();
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
	<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
	<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
	<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
	<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
	<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
	<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/manifest.json" />
	<meta name="msapplication-TileColor" content="#154734" />
	<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
	<meta name="theme-color" content="#154734" />

	<meta name="msvalidate.01" content="" />
	<meta name="google-site-verification" content="" />
</svelte:head>

<svelte:window bind:scrollY />

<Toaster />

{#if scrollY}
	<div transition:slide={{ axis: 'x', duration: 500 }}>
		<FloatingShare mobile={$isMobile} />
	</div>
{/if}

<!-- <ComingSoon /> -->

<div class="h-screen flex-col justify-between flex">
	<Header />
	<main class="">
		{@render children?.()}
	</main>
	<Footer />
</div>

{#if scrollY !== 0}
	<button
		transition:fade
		class="group fixed bottom-4 right-4 z-[999] rounded-full bg-primary/90 object-cover p-4 shadow-lg transition-all duration-500 hover:-translate-y-1"
		aria-label="Scroll to top"
		onclick={() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}}
	>
		<CaretUp class="scale-125 text-primary-foreground transition-all duration-500 group-hover:scale-110" />
	</button>
{/if}

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
<link
	href="https://fonts.googleapis.com/css2?family=Alatsi&family=Cantarell:ital,wght@0,400;0,700;1,400;1,700&display=swap"
	rel="stylesheet"
/>
