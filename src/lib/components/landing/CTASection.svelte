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

<section class="relative flex h-[65vh] w-full items-center justify-center text-secondary overflow-hidden">
	<div class="absolute inset-0 z-0 h-full w-full">
		<div class="absolute inset-0 bg-gradient-to-br from-primary to-primary">&nbsp;</div>
		<!-- Add decorative graphics -->
		<div class="absolute top-10 right-10 w-32 h-32 opacity-10">
			<img src="/assets/success-chart.svg" alt="" class="w-full h-full" />
		</div>
		<div class="absolute bottom-10 left-10 w-24 h-24 opacity-10">
			<img src="/assets/floating-dots.svg" alt="" class="w-full h-full" />
		</div>
		<div class="absolute top-1/2 left-20 w-16 h-16 opacity-5">
			<img src="/assets/growth-circle.svg" alt="" class="w-full h-full" />
		</div>
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
				onclick={() => goto('/packages')}
			>
				<a
					href={`${domain}/packages`}
					onclick={(e) => {
						e.preventDefault();
					}}
				>
					View Packages
				</a>
			</Button>
			<Button 
				variant="outline" 
				class="bg-white/10 text-white border-white/40 hover:bg-white/20"
				onclick={() => goto('/gallery')}
			>
				<a
					href={`${domain}/gallery`}
					onclick={(e) => {
						e.preventDefault();
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
					}}
				>
					Request Proposal
				</a>
			</Button>
		</div>
	</div>
</section>
