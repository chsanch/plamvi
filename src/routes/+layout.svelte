<script>
	import ApplicationHeader from '$lib/components/application-header.svelte';
	import { setModelContext } from '$lib/state/model.svelte';
	import { setTripContext } from '$lib/state/trip.svelte';
	import '$lib/styles/globals.css';

	setTripContext();
	setModelContext();

	let { children } = $props();
</script>

<ApplicationHeader />
<main class="mt-16 flex flex-col items-center p-4 md:px-8 md:py-4">
	{@render children()}
</main>
