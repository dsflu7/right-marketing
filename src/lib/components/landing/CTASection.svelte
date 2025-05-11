<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Image from '$lib/components/Image.svelte';
	import PhoneCall from '$lib/icons/PhoneCall.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { contactInfo } from '$lib/data/locations';
	
	// Get the base URL for absolute links
	const domain = $derived(`${page.url.protocol}//${page.url.host}`);
</script>

<section class="relative flex h-[65vh] w-full items-center justify-center text-white">
	<div class="absolute inset-0 z-0">
		<Image
			url="/assets/landing/2.jpg"
			description="Right Marketing digital marketing strategy session"
			class="h-full w-full object-cover"
			width="1920"
			height="1080"
			quality={70}
		/>
		<div class="absolute inset-0 bg-secondary-foreground/65">&nbsp;</div>
	</div>
	<div class="container relative z-10 mx-auto my-auto text-center">
		<h2 class="mb-4 text-4xl font-semibold">Ready to Transform Your Marketing?</h2>
		<p class="mb-8 text-xl opacity-90">Call now for a free strategy session and custom proposal</p>
		<a
			href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`}
			class="group inline-flex items-center gap-4 text-[8vw] font-bold hover:opacity-90"
			aria-label="Call our marketing team now"
		>
			<PhoneCall
				class="h-auto w-[6vw] transition-transform group-hover:scale-110"
				color="white"
			/>
			{contactInfo.phone.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
		</a>
		<p class="mt-8 text-lg opacity-80">Or send us an email at <a href={`mailto:${contactInfo.email}`} class="underline hover:text-primary-foreground">{contactInfo.email}</a></p>
		<div class="mt-6 flex flex-wrap justify-center gap-4">
			<Button 
				variant="outline" 
				class="bg-white/10 text-white border-white/40 hover:bg-white/20"
				onclick={() => goto('/success-stories')}
			>
				<a
					href={`${domain}/success-stories`}
					onclick={(e) => {
						e.preventDefault();
						goto('/success-stories');
					}}
				>
					See Success Stories
				</a>
			</Button>
			<Button 
				variant="outline" 
				class="bg-white/10 text-white border-white/40 hover:bg-white/20"
				onclick={() => goto('/contact')}
			>
				<a
					href={`${domain}/contact`}
					onclick={(e) => {
						e.preventDefault();
						goto('/contact');
					}}
				>
					Request Proposal
				</a>
			</Button>
		</div>
	</div>
</section>
