<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	export let iconPath: string;
	export let title: string;
	export let description: string;
</script>

<a
	href="{base}/services"
	onclick={(e) => {
		goto('/services');
		e.preventDefault();
	}}
	class="h-full w-full"
>
	<div
		class="flex h-full w-full flex-col items-center rounded-lg border border-primary/20 bg-primary/5 p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
	>
		<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8 text-primary"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={iconPath} />
			</svg>
		</div>
		<h3 class="mb-2 text-xl font-bold">{title}</h3>
		<p class="text-muted-foreground">{description}</p>
	</div>
</a>
