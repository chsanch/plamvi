<script>
	import ApplicationHeader from '$lib/components/application-header.svelte';
	import '$lib/styles/globals.css';
	import { setTripContext } from '$lib/trip-state.svelte';

	setTripContext();

	let { children } = $props();
</script>

<ApplicationHeader />
<main class="mt-16 flex flex-col items-center p-4 md:px-8 md:py-4">
	{@render children()}
</main>
