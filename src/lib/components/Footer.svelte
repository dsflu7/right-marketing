<script lang="ts">
	import { goto } from '$app/navigation';
	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';
	import { contactInfo } from '$lib/data/locations';
	import MainLogo from '$lib/icons/MainLogo.svelte';
	import Image from './Image.svelte';
	// Import enhanced logo image
	// import logoAddr from '$lib/icons/logo.png?enhanced';

	const menuItems = [
		{ label: 'SERVICES', route: '/services' },
		{ label: 'OUR STORY', route: '/our-story' },
		{ label: 'TERMS AND CONDITIONS', route: '/terms-and-conditions' },
		{ label: 'PRIVACY POLICY', route: '/privacy-policy' }
	];
</script>

<footer
	class="flex h-[70vh] flex-col items-center gap-8 bg-foreground px-[6%] pb-4 pt-16 text-secondary"
>
	<div
		class="flex w-full flex-row justify-between *:*:underline *:*:transition-all *:*:duration-300 *:*:ease-in-out hover:*:*:text-[#FFFFFF99]"
	>
		<div class="">
			<button onclick={() => goto('/contact')} aria-label="Open quote request form"
				>Book A Call</button
			>
		</div>
		<div class="flex gap-2 lg:gap-8">
			<a href={contactInfo.instagram}>Instagram</a>
			<!-- <a href={contactInfo.tiktok}>TikTok</a> -->
			<a href={contactInfo.facebook}>Facebook</a>
		</div>
	</div>

	<MainLogo class="h-[30vh] w-full" />
	<!-- <Image url="/assets/logo.png" description="company logo" height="200px" width="200px" /> -->
	<!-- <enhanced:img 
			src={logoAddr}
			sizes="400px"
			alt="company logo" 
			class="aspect-square h-[40vh] w-auto" 
		/> -->

	<div
		class="flex w-full flex-wrap justify-evenly gap-4 *:transition-all *:duration-300 *:ease-in-out lg:justify-around "
	>
		{#each menuItems as item, i}
			<a
				href={item.route}
				onclick={(e) => {
				}}
				aria-label={item.label === 'FREE QUOTES'
					? 'Open quote request form'
					: `Go to ${item.label.toLowerCase()} page`}
				class="whitespace-normal break-keep font-[Cantarell] text-sm font-bold text-secondary hover:text-[#FFFFFF99] lg:text-lg"
			>
				{item.label}
			</a>
		{/each}
	</div>

	<div class="w-full text-center font-[Cantarell] text-sm text-[#FFFFFF99]">
		<p>{PUBLIC_DOMAIN}</p>
		<p>
			Copyright © 2024 - 2028 {PUBLIC_COMPANY_NAME}. All rights reserved.
		</p>
	</div>
</footer>
