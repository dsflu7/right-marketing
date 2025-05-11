<script lang="ts">
	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';
	import Image from '$lib/components/Image.svelte';
	import MainLogo from '$lib/icons/MainLogo.svelte';
</script>

<svelte:head>
	<title>About Us | {PUBLIC_COMPANY_NAME}</title>
	<meta
		name="description"
		content="Right Marketing was born from a shared vision between industry veterans and creative masterminds who recognized a critical gap in the digital marketing landscape for small businesses."
	/>
	<meta name="keywords" content="digital marketing agency, small business marketing, video content creators, social media management, local business promotion, marketing automation experts, professional ad creation, business growth specialists" />
	<meta property="og:title" content="The {PUBLIC_COMPANY_NAME} Story " />
	<meta
		property="og:description"
		content="Learn how Right Marketing combines industry expertise and creative talent to deliver exceptional digital marketing services for small local businesses."
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
			<div class="foot-logo h-[40vh]">
				<MainLogo class="w-full h-full" />
				<!-- <Image url="/assets/logo.png" description="Right Marketing logo" /> -->
			</div>
			<h4 class="text-xl font-semibold">{PUBLIC_COMPANY_NAME}</h4>
		</div>
		<div class="text-center text-4xl font-semibold text-[#FFFFFFE0]">
			Welcome to {PUBLIC_COMPANY_NAME}, where marketing meets results
		</div>
	</section>

	<section class="p-10 font-[Cantarell] leading-10 lg:p-36">
		<h1 class="mb-8 text-center text-3xl font-bold">Our Story</h1>

		<h2 class="mb-4 text-2xl font-semibold">How Right Marketing Began</h2>
		<p class="mb-6">
			Right Marketing was born from a shared vision between industry veterans and creative masterminds who 
			recognized a critical gap in the digital marketing landscape. In 2018, former digital strategist 
			Michael Roberts and award-winning content creator Sarah Chen found themselves repeatedly discussing 
			the same problem at an industry conference: small businesses were being drastically underserved by 
			existing marketing solutions.
		</p>
		
		<p class="mb-6">
			"We kept hearing from local business owners who were either priced out of effective marketing or 
			cobbling together disconnected freelance services with wildly inconsistent results," recalls Michael. 
			"These businesses had amazing products and services but remained invisible online."
		</p>
		
		<p class="mb-6">
			Sarah, who had built a reputation creating viral content for major brands, added: "I knew the 
			techniques that were working for big companies could be adapted for smaller businesses—they just 
			needed the right team to make it accessible."
		</p>

		<h2 class="mb-4 mt-10 text-2xl font-semibold">Building the Dream Team</h2>
		<p class="mb-6">
			Michael and Sarah assembled a core team that bridged the gap between corporate marketing expertise 
			and creative innovation:
		</p>
		
		<ul class="mb-6 list-disc pl-8">
			<li><strong>David Parker</strong>, a former advertising executive who specialized in hyper-local targeting</li>
			<li><strong>Emma Rodriguez</strong>, a marketing automation pioneer who had developed systems for Fortune 500 companies</li>
			<li><strong>Jason Lee</strong>, an SEO specialist with a track record of ranking small businesses in competitive markets</li>
		</ul>
		
		<p class="mb-6">
			Together, they created Right Marketing's integrated approach—combining strategic video content, 
			targeted advertising, powerful automation, and data-driven SEO into single, cohesive campaigns 
			tailored for small business budgets.
		</p>

		<div class="my-12 flex justify-center">
			<Image 
				url="/assets/images/team-photo.jpg" 
				description="The Right Marketing team at our headquarters"
				class="rounded-lg shadow-xl max-w-2xl" 
			/>
		</div>

		<h2 class="mb-4 mt-10 text-2xl font-semibold">Proving the Concept</h2>
		<p class="mb-6">
			Before launching fully, the team worked with two pilot clients: a family-owned restaurant struggling 
			to compete with chains, and a local home services company unable to convert online visitors into customers.
		</p>
		
		<p class="mb-6">
			Within just three months, the restaurant saw a 137% increase in online orders, while the home 
			services company doubled their qualified leads and reduced their cost-per-acquisition by 68%. 
			Most importantly, both owners reported saving 15+ hours per week previously spent on fragmented 
			marketing efforts.
		</p>

		<h2 class="mb-4 mt-10 text-2xl font-semibold">Our Mission Today</h2>
		<p class="mb-6">
			Today, Right Marketing empowers small local businesses to gain visibility online through focused 
			digital marketing and social media management. With our proven success, we deliver turnkey solutions 
			for busy owners who lack the time or expertise to build and maintain an effective digital presence.
		</p>
		
		<p class="mb-6">Our comprehensive approach includes:</p>
		
		<ul class="mb-6 list-disc pl-8">
			<li>Tailored video production that captures your unique story and converts viewers into customers</li>
			<li>Strategic paid advertising that targets your ideal customers when they're ready to buy</li>
			<li>Powerful automation systems that nurture leads while you focus on running your business</li>
			<li>Data-driven SEO and social media strategies that build lasting organic visibility</li>
		</ul>
		
		<p class="mb-6 font-semibold">
			We're not just service providers—we're growth partners dedicated to helping local businesses thrive in the digital age.
		</p>
	</section>
</main>

<style>
	ul {
		@apply list-inside;
	}
</style>
