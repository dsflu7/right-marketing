<script>
	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';
	import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
	<title>Contact Us | {PUBLIC_COMPANY_NAME} | Free Quotes</title>
	<meta
		name="description"
		content=""
	/>
	<meta name="keywords" content="" />
	<meta property="og:title" content="Contact {PUBLIC_COMPANY_NAME} | Free Quotes & Consultations" />
	<meta
		property="og:description"
		content=""
	/>
	<meta property="og:image" content="/assets/logo.png" />
	<meta property="og:url" content="https://www.{PUBLIC_DOMAIN}/contact" />
	<meta property="og:type" content="website" />
	<link rel="canonical" href="https://www.{PUBLIC_DOMAIN}/contact" />
</svelte:head>

<main class="mt-24 flex w-full flex-col items-center pb-36 lg:mt-36">
	<section class="flex w-full flex-col items-center gap-6 px-4 py-8">
		<h1
			class="mx-auto max-w-4xl text-center text-2xl font-semibold leading-tight md:text-5xl lg:text-4xl"
		>
			Contact us | Get a Free Quote
		</h1>
		<div class="my-2 h-1 w-24 rounded-full bg-primary"></div>
		<p class="mx-auto max-w-3xl text-center text-lg text-muted-foreground">
			We'd love to hear from you! Whether you have questions about our services, want to schedule a
			consultation, or just want to say hi, feel free to reach out.
		</p>
	</section>

	<section class="w-full">
		<ContactForm />
	</section>
</main>
