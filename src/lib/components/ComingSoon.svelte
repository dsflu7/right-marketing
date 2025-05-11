<script lang="ts">
	import { contactInfo } from '$lib/data/locations';
	import MainLogo from '../icons/MainLogo.svelte';

	const socials = [
		{ name: 'Facebook', url: contactInfo.facebook },
		{ name: 'Instagram', url: contactInfo.instagram },
		{ name: 'Phone', url: `tel:+1${contactInfo.phone}` }
	];
</script>

<div class="flex min-h-screen flex-col items-center justify-center bg-primary text-foreground">
	<MainLogo class="h-min w-[80vw]" />
	<p class="mt-2 text-lg text-primary-foreground">We are launching something amazing soon!</p>
	<div class="mt-6 flex space-x-4">
		{#each socials as social}
			<a
				href={social.url}
				target="_blank"
				rel="noopener noreferrer"
				class="border-b border-b-transparent text-primary-foreground transition-all duration-300 ease-in-out hover:border-b-primary-foreground"
			>
				{social.name}
			</a>
		{/each}
	</div>
</div>
