<script>
	import '../app.css';
	import { setTripContext } from '$lib/trip-state.svelte';
	setTripContext();
	
	let { children } = $props();
</script>

<main class="p-4 flex flex-col items-center">
	<header class="mb-4">
		<nav class="flex justify-center">
			<a href="/" class="mr-4 text-blue-500 hover:text-blue-700">Home</a>
			<a href="/viaje" class="text-blue-500 hover:text-blue-700">Viaje</a>
		</nav>
	</header>
	<div class="w-full max-w-lg">
		{@render children()}
	</div>
</main>
