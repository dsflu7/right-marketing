<script lang="ts">
	import MainLogo from '../icons/MainLogo.svelte';

	const socials = [
		{ name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61573842316284'},
		{ name: 'Instagram', url: 'https://www.instagram.com/rightmarketing.ca/'},
		{ name: 'Phone', url: 'tel:+17783825911'},
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
				class="text-primary-foreground border-b border-b-transparent hover:border-b-primary-foreground transition-all duration-300 ease-in-out"
			>
				{social.name}
			</a>
		{/each}
	</div>
</div>
