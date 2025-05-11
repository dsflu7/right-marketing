<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';
	import Button from '$lib/components/ui/button/button.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { faqItems } from '$lib/data/landing';
	
	// Get the base URL for absolute links
	const domain = $derived(`${page.url.protocol}//${page.url.host}`);
</script>

<section class="flex w-full flex-col gap-8 pb-24 px-4 lg:gap-10">
	<div class="mx-auto max-w-3xl">
		<div class="text-center">
			<h2 class="text-3xl font-semibold md:text-4xl">Frequently Asked Questions</h2>
			<div class="my-4 h-1 w-24 rounded-full bg-primary mx-auto"></div>
			<p class="text-lg text-muted-foreground mb-8">Get answers to common questions about our digital marketing services.</p>
		</div>
		
		<Accordion.Root class="w-full">
			{#each faqItems as faq, index}
				<Accordion.Item value={`faq-${index + 1}`} class="border-b border-primary/10">
					<Accordion.Trigger class="flex w-full items-center justify-between py-4 text-left text-lg font-medium hover:text-primary">
						{faq.question}
					</Accordion.Trigger>
					<Accordion.Content class="pb-4 text-muted-foreground">
						<p>{faq.answer}</p>
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
		
		<div class="mt-10 text-center">
			<p class="text-muted-foreground mb-6">Have more questions? We're here to help!</p>
			<Button onclick={() => goto('/contact')} class="min-h-[44px] min-w-[44px]">
				<a
					href={`${domain}/contact`}
					onclick={(e) => {
						e.preventDefault();
						goto('/contact');
					}}
					class="flex h-full w-full items-center justify-center"
				>
					Contact Us Today
				</a>
			</Button>
		</div>
	</div>
</section>

