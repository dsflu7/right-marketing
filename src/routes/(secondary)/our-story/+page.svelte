<script lang="ts">
	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';
	import Image from '$lib/components/Image.svelte';
</script>

<svelte:head>
	<title>About Us | {PUBLIC_COMPANY_NAME}</title>
	<meta
		name="description"
		content=""
	/>
	<meta name="keywords" content="" />
	<meta property="og:title" content="The {PUBLIC_COMPANY_NAME} Story " />
	<meta
		property="og:description"
		content=""
	/>
	<meta property="og:image" content="/assets/logo.png" />
	<meta property="og:url" content="https://www.{PUBLIC_DOMAIN}/our-story" />
	<meta property="og:type" content="website" />
	<link rel="canonical" href="https://www.{PUBLIC_DOMAIN}/our-story" />
</svelte:head>

<main class="mt-24 lg:mt-16">
	<!-- landing -->
	<section class="flex flex-col items-center justify-center gap-16 bg-black px-10 py-28 lg:px-36">
		<div class="text-center font-[Cantarell] text-white">
			<div class="foot-logo aspect-square h-[40vh]">
				<!-- <Logo class="w-full h-auto" /> -->
				<Image url="/assets/logo.png" description="company logo header" />
			</div>
			<h4 class="text-xl font-semibold">{PUBLIC_COMPANY_NAME}</h4>
		</div>
		<div class="text-center text-4xl font-semibold text-[#FFFFFFE0]">
			Welcome to {PUBLIC_COMPANY_NAME}, 
		</div>
	</section>

	<section class="p-10 font-[Cantarell] leading-10 lg:p-36">
		<h1 class="mb-4 text-center text-2xl font-bold">Our Story</h1>

	</section>
</main>
