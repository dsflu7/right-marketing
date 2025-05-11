<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';
	import MainLogo from '$lib/icons/MainLogo.svelte';
	import { contactInfo } from '$lib/data/locations';
</script>

<svelte:head>
	<title>Terms & Conditions | {PUBLIC_COMPANY_NAME}</title>
	<meta
		name="description"
		content="Important details about our service agreements, packages, payment terms, and client responsibilities for our digital marketing services."
	/>
	<meta
		name="keywords"
		content="digital marketing terms, service agreement, payment policies, client responsibilities, video production terms, advertising management, marketing automation, service guarantee"
	/>
	<meta property="og:title" content="Terms & Conditions for {PUBLIC_COMPANY_NAME} Services" />
	<meta
		property="og:description"
		content="Important information about our digital marketing packages, payment terms, and service expectations"
	/>
	<meta property="og:image" content="/assets/logo.png" />
	<meta property="og:url" content="https://{PUBLIC_DOMAIN}/terms-and-conditions" />
	<meta property="og:type" content="website" />
	<link rel="canonical" href="https://{PUBLIC_DOMAIN}/terms-and-conditions" />
</svelte:head>

<main class="mt-24 lg:mt-16">
	<!-- landing -->
	<section class="flex flex-col items-center justify-center gap-16 bg-black py-28 lg:flex-row">
		<div class="foot-logo h-[40vh]">
			<MainLogo class="w-full h-full" />
			<!-- <Image
				url="/assets/logo.png"
				description="Right Marketing Logo"
				class="h-auto w-full"
				size={[480]}
				width="480"
				quality={50}
			/> -->
		</div>

		<h1 class="text-center text-3xl font-semibold text-white lg:text-4xl">Terms and Conditions</h1>
	</section>

	<section class="p-10 font-[Cantarell] leading-10 lg:p-28">
		<p class="mb-6">
			Welcome to Right Marketing! By accessing or using our services, you agree to abide by the
			following Terms and Conditions. Please read them carefully before proceeding.
		</p>

		<h3>1. Introduction</h3>
		<p class="mb-6">
			These Terms and Conditions ("Terms") govern the relationship between Right Marketing LLC ("Company," "we," "our," or "us") 
			and the client ("Client," "you," or "your") using our digital marketing services. By engaging our services, 
			you agree to be bound by these Terms.
		</p>
		
		<h3>2. Company Overview</h3>
		<p class="mb-6">
			Right Marketing empowers small local businesses to gain visibility online through focused digital 
			marketing and social media management. With proven success from our pilot clients, we deliver a turnkey 
			solution for busy owners who lack the time or expertise to build and maintain an effective digital presence. 
			Our services include tailored video production, paid advertising, automation, SEO, and social media marketing.
		</p>
		
		<h3>3. Services</h3>
		<h4 class="font-bold mt-4">3.1 Service Packages</h4>
		<p class="mb-4">We offer various service packages as outlined in our service documentation, including:</p>
		
		<div class="mb-6">
			<p class="font-bold">Starter Package – $1,500/month</p>
			<ul class="pl-8 list-disc mb-4">
				<li>HighLevel Automation Setup (basic lead nurturing workflow, CRM setup)</li>
				<li>Video Content (1 ad script & professionally edited video)</li>
				<li>Facebook Ads Management (1 campaign setup, targeting & optimization)</li>
			</ul>
			
			<p class="font-bold">Growth Package – $3,500/month</p>
			<ul class="pl-8 list-disc mb-4">
				<li>HighLevel Advanced Automation (multiple workflows, pipelines, auto-responders)</li>
				<li>Video Content (3 video ads with scripts and professional editing)</li>
				<li>Facebook Ads Management (multiple campaigns, A/B testing, bi-weekly reporting)</li>
			</ul>
			
			<p class="font-bold">Premium Package – $7,000-$10,000/month</p>
			<ul class="pl-8 list-disc mb-4">
				<li>Full-Scale HighLevel Automation (advanced workflows, comprehensive CRM, integrations)</li>
				<li>Premium Video Production (5+ high-quality videos with professional scripting)</li>
				<li>Multi-Platform Advertising (Facebook, Instagram & YouTube)</li>
			</ul>
			
			<p class="font-bold">Custom Packages – $10,000+/month</p>
			<p>Tailored solutions for businesses with specific needs</p>
		</div>
		
		<h4 class="font-bold mt-4">3.2 Add-On Services</h4>
		<p class="mb-4">Additional services available at extra cost:</p>
		<ul class="pl-8 list-disc mb-6">
			<li>Extra video editing: $500 per video</li>
			<li>Google & YouTube Ads setup: $1,000 one-time fee</li>
			<li>Additional automation workflows: $300 per workflow</li>
		</ul>
		
		<h3>4. Client Responsibilities</h3>
		<p class="mb-4">As a client, you agree to:</p>
		<ul class="pl-8 list-disc mb-6">
			<li>Provide necessary assets, content, and access required for service delivery</li>
			<li>Review and provide feedback on deliverables within specified timeframes</li>
			<li>Designate a primary point of contact for communication</li>
			<li>Ensure all provided materials comply with applicable laws and regulations</li>
			<li>Make timely payments as outlined in our agreement</li>
		</ul>
		
		<h3>5. Payment Terms</h3>
		<h4 class="font-bold mt-4">5.1 Billing and Fees</h4>
		<ul class="pl-8 list-disc mb-4">
			<li>Services are billed monthly in advance unless otherwise specified</li>
			<li>Payment is due upon receipt of invoice</li>
			<li>We accept credit cards, ACH transfers, and checks</li>
		</ul>
		
		<h4 class="font-bold mt-4">5.2 Late Payments</h4>
		<ul class="pl-8 list-disc mb-4">
			<li>Payments not received within 7 days of the due date may result in service suspension</li>
			<li>Late payments are subject to a 1.5% monthly interest charge</li>
			<li>Client is responsible for all collection costs including reasonable attorney fees</li>
		</ul>
		
		<h4 class="font-bold mt-4">5.3 Price Changes</h4>
		<p class="mb-6">We reserve the right to modify our pricing with 30 days' written notice.</p>
		
		<h3>6. Term and Termination</h3>
		<h4 class="font-bold mt-4">6.1 Term</h4>
		<p class="mb-4">Services are provided on a month-to-month basis unless otherwise specified in a custom agreement.</p>
		
		<h4 class="font-bold mt-4">6.2 Termination by Client</h4>
		<p class="mb-4">You may terminate services with 30 days' written notice.</p>
		
		<h4 class="font-bold mt-4">6.3 Termination by Company</h4>
		<p class="mb-4">We may terminate services immediately if:</p>
		<ul class="pl-8 list-disc mb-6">
			<li>You breach these Terms</li>
			<li>You fail to pay invoices when due</li>
			<li>You engage in any unlawful business practice</li>
			<li>We determine our services are being used for improper purposes</li>
		</ul>
		
		<h3>7. Intellectual Property Rights</h3>
		<p class="mb-6">
			You retain ownership of all materials you provide to us. Upon full payment, you receive a license 
			to use deliverables for your business purposes. We retain ownership of our proprietary marketing 
			methods and tools, and the right to showcase work in our portfolio unless specified otherwise.
		</p>
		
		<h3>8. Confidentiality</h3>
		<p class="mb-6">
			Both parties agree to maintain the confidentiality of all proprietary information shared during the service relationship.
		</p>
		
		<h3>9. Limitation of Liability</h3>
		<p class="mb-6">
			Our total liability for any claims under these Terms shall not exceed the amount paid by you for services 
			in the 3 months preceding the claim. We are not liable for indirect, consequential, special, or punitive damages.
		</p>
		
		<h3>10. Disclaimer of Warranties</h3>
		<p class="mb-6">
			While we strive for excellence, we cannot guarantee specific marketing results, rankings, or ROI. 
			Services are provided "as is" without warranties of any kind.
		</p>
		
		<h3>11. Contact Information</h3>
		<p class="mb-4">For questions regarding these Terms, please contact us at:</p>
		<p>
			<strong>Right Marketing LLC</strong><br />
			{contactInfo.address}
			Email:
			<a href="mailto:privacy@{PUBLIC_DOMAIN}" class="underline hover:text-blue-600"
				>privacy@{PUBLIC_DOMAIN}</a
			><br />
			Phone:
			<a href="tel:+1{contactInfo.phone}" class="underline hover:text-blue-600"
				>{contactInfo.phone}</a
			>	</p>
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
