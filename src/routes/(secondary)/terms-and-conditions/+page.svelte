<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';
</script>

<svelte:head>
	<title>Terms & Conditions | {PUBLIC_COMPANY_NAME}</title>
	<meta
		name="description"
		content="Important details about our service agreements, booking policies, payments, and client responsibilities"
	/>
	<meta
		name="keywords"
		content="exterior cleaning terms, service agreement, booking policy, deposit requirements, cancellation policy, client responsibilities, payment terms, service guarantee"
	/>
	<meta property="og:title" content="Terms & Conditions for {PUBLIC_COMPANY_NAME} Services" />
	<meta
		property="og:description"
		content="Important information about booking, payments, and service expectations"
	/>
	<meta property="og:image" content="/assets/logo.png" />
	<meta property="og:url" content="https://{PUBLIC_DOMAIN}/terms-and-conditions" />
	<meta property="og:type" content="website" />
	<link rel="canonical" href="https://{PUBLIC_DOMAIN}/terms-and-conditions" />
</svelte:head>

<main class="mt-24 lg:mt-16">
	<!-- landing -->
	<section class="flex flex-col items-center justify-center gap-16 bg-black py-28 lg:flex-row">
		<div class="foot-logo aspect-square h-[25vh]">
			<Image
				url="/assets/logo.png"
				description=""
				class="h-auto w-full"
				size={[480]}
				width="480"
				quality={50}
			/>
		</div>

		<h1 class="text-center text-3xl font-semibold text-white lg:text-4xl">Terms and Conditions</h1>
	</section>

	<section class="p-10 font-[Cantarell] leading-10 lg:p-28">
		<p class="mb-6">
			Welcome to {PUBLIC_COMPANY_NAME}! By accessing or using our services, you agree to abide by the
			following Terms and Conditions. Please read them carefully before proceeding.
		</p>
	</section>
</main>

<style type="postcss">
	h3 {
		@apply text-2xl font-bold;
	}

	ol {
		@apply list-inside list-decimal pl-4;
	}
</style>
