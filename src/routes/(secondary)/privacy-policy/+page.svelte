<script lang="ts">
	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';
	import Image from '$lib/components/Image.svelte';
	import { contactInfo } from '$lib/data/locations';
	import MainLogo from '$lib/icons/MainLogo.svelte';
</script>

<svelte:head>
	<title>Privacy Policy | {PUBLIC_COMPANY_NAME}</title>
	<meta
		name="description"
		content="Learn how Right Marketing collects, protects and uses your personal information while providing exceptional digital marketing services for your business."
	/>
	<meta
		name="keywords"
		content="marketing data protection, privacy practices, information collection policy, personal data security, customer information use, data rights, cookies policy, marketing preferences, data processing consent, privacy compliance"
	/>
	<meta
		property="og:title"
		content="Your Privacy Matters | {PUBLIC_COMPANY_NAME} Data Protection"
	/>
	<meta
		property="og:description"
		content="Transparent information about how we protect your personal data while delivering exceptional digital marketing services for small local businesses."
	/>
	<meta property="og:image" content="/assets/logo.png" />
	<meta property="og:url" content="https://www.{PUBLIC_DOMAIN}/privacy-policy" />
	<meta property="og:type" content="website" />
	<link rel="canonical" href="https://www.{PUBLIC_DOMAIN}/privacy-policy" />
</svelte:head>

<main class="mt-24 lg:mt-16">
	<!-- landing -->
	<section class="flex flex-col items-center justify-center gap-16 bg-black py-28 lg:flex-row">
		<div class="foot-logo h-[40vh]">
			<MainLogo class="h-full w-full" />
			<!-- <Image
				url="/assets/logo.png"
				description="Right Marketing Logo"
				class="h-auto w-full"
				size={[480]}
				width="480"
				quality={50}
			/> -->
		</div>

		<h1 class="text-center text-3xl font-semibold text-white lg:text-4xl">Privacy Policy</h1>
	</section>

	<section class="p-10 font-[Cantarell] leading-10 lg:p-28">
		<h3>1. Introduction</h3>
		<p class="mb-6">
			Right Marketing ("we," "our," or "us") respects your privacy and is committed to protecting
			your personal data. This privacy policy explains how we collect, use, disclose, and safeguard
			your information when you visit our website or engage our digital marketing services.
		</p>

		<h3>2. Company Information</h3>
		<p class="mb-6">
			Right Marketing provides digital marketing services including video production, paid
			advertising, automation, SEO, and social media marketing primarily for small local businesses.
			We operate as a Limited Liability Company registered in [State/Province], and can be contacted
			at:
			<br /><br />
			<strong>Right Marketing LLC</strong><br />
			{contactInfo.address}
			Email:
			<a href="mailto:privacy@{PUBLIC_DOMAIN}" class="underline hover:text-blue-600"
				>privacy@{PUBLIC_DOMAIN}</a
			><br />
			Phone:
			<a href="tel:+1{contactInfo.phone}" class="underline hover:text-blue-600"
				>{contactInfo.phone}</a
			>
		</p>

		<h3>3. Information We Collect</h3>
		<h4 class="mt-4 font-bold">3.1 Personal Data</h4>
		<p class="mb-4">
			We may collect, use, store, and transfer different kinds of personal data about you:
		</p>
		<ul class="mb-6 list-disc pl-8">
			<li><strong>Identity Data</strong>: First name, last name, title, business name</li>
			<li>
				<strong>Contact Data</strong>: Billing address, delivery address, email address, telephone
				numbers
			</li>
			<li>
				<strong>Financial Data</strong>: Payment card details (processed securely through
				third-party processors)
			</li>
			<li>
				<strong>Transaction Data</strong>: Details about payments and services you've purchased from
				us
			</li>
			<li>
				<strong>Technical Data</strong>: Internet protocol (IP) address, login data, browser type
				and version, time zone setting, browser plug-in types and versions, operating system and
				platform
			</li>
			<li>
				<strong>Profile Data</strong>: Your username and password, purchases or orders made,
				preferences, feedback and survey responses
			</li>
			<li><strong>Usage Data</strong>: Information about how you use our website and services</li>
			<li>
				<strong>Marketing Data</strong>: Your preferences in receiving marketing communications from
				us
			</li>
		</ul>

		<h4 class="mt-4 font-bold">3.2 Collection Methods</h4>
		<p class="mb-4">We use different methods to collect data from and about you including:</p>
		<ul class="mb-6 list-disc pl-8">
			<li>
				<strong>Direct interactions</strong>: When you fill out forms, correspond with us, or
				otherwise provide us with information
			</li>
			<li>
				<strong>Automated technologies</strong>: As you interact with our website, we may
				automatically collect Technical Data using cookies and other tracking technologies
			</li>
			<li>
				<strong>Third parties</strong>: We may receive personal data about you from analytics
				providers, advertising networks, and search information providers
			</li>
		</ul>

		<h3>4. How We Use Your Information</h3>
		<p class="mb-4">
			We will only use your personal data for legitimate purposes permitted by law. Most commonly,
			we will use your personal data in the following circumstances:
		</p>
		<ul class="mb-6 list-disc pl-8">
			<li>To register you as a new client</li>
			<li>To perform the services you've requested, including managing your campaigns</li>
			<li>
				To manage our relationship with you, including notifying you about changes to our services
				or policies
			</li>
			<li>To administer and protect our business and website</li>
			<li>
				To deliver relevant content and advertisements to you and measure the effectiveness of our
				advertising
			</li>
			<li>
				To use data analytics to improve our website, services, marketing, and user experiences
			</li>
			<li>To make suggestions and recommendations about services that may be of interest to you</li>
		</ul>

		<h3>5. Disclosure of Your Information</h3>
		<p class="mb-4">We may share your personal data with the following categories of recipients:</p>
		<ul class="mb-6 list-disc pl-8">
			<li>
				<strong>Service Providers</strong>: Including marketing platforms, web hosting services,
				payment processors, and analytics services that assist us in providing our services
			</li>
			<li>
				<strong>Marketing Partners</strong>: With your consent, we may share your information with
				marketing partners
			</li>
			<li>
				<strong>Professional Advisers</strong>: Including lawyers, bankers, auditors, and insurers
				who provide professional services
			</li>
			<li>
				<strong>Government Authorities</strong>: Including tax authorities, regulatory bodies, and
				other authorities as required by law
			</li>
		</ul>

		<h3>6. Data Security</h3>
		<p class="mb-6">
			We have implemented appropriate security measures to prevent your personal data from being
			accidentally lost, used, accessed, altered, or disclosed in an unauthorized way. We limit
			access to your personal data to those employees and third parties who have a business need to
			know.
		</p>

		<h3>7. Data Retention</h3>
		<p class="mb-6">
			We will only retain your personal data for as long as necessary to fulfill the purposes we
			collected it for, including for the purposes of satisfying any legal, accounting, or reporting
			requirements.
		</p>

		<h3>8. Your Legal Rights</h3>
		<p class="mb-4">
			Under certain circumstances, you have rights under data protection laws in relation to your
			personal data, including:
		</p>
		<ul class="mb-6 list-disc pl-8">
			<li>Request access to your personal data</li>
			<li>Request correction of your personal data</li>
			<li>Request erasure of your personal data</li>
			<li>Object to processing of your personal data</li>
			<li>Request restriction of processing your personal data</li>
			<li>Request transfer of your personal data</li>
			<li>Right to withdraw consent</li>
		</ul>

		<h3>9. Cookies</h3>
		<p class="mb-6">
			Our website uses cookies to distinguish you from other users of our website. This helps us to
			provide you with a good experience when you browse our website and also allows us to improve
			our site.
		</p>

		<h3>10. Changes to the Privacy Policy</h3>
		<p class="mb-6">
			We may update this privacy policy from time to time. The latest version will always be
			available on our website.
		</p>

		<h3>11. Contact Us</h3>
		<p class="mb-6">
			If you have any questions about this privacy policy or our privacy practices, please contact
			our data privacy manager using the details provided in Section 2.
		</p>
	</section>
</main>

<style type="postcss">
	h3 {
		@apply text-2xl font-bold;
	}

	ul {
		@apply list-inside;
	}
</style>
