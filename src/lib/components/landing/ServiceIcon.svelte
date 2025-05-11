<script lang="ts">
	export let iconPath: string;
	export let title: string;
	export let description: string;
</script>

<div class="flex flex-col items-center text-center p-6 rounded-lg border border-primary/20 bg-primary/5 transition-all hover:shadow-lg hover:-translate-y-1">
	<div class="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={iconPath} />
		</svg>
	</div>
	<h3 class="text-xl font-bold mb-2">{title}</h3>
	<p class="text-muted-foreground">{description}</p>
</div>
