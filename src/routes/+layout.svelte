<script>
	import ApplicationHeader from '$lib/components/application-header.svelte';
	import { setModelContext } from '$lib/state/model.svelte';
	import { setTripContext } from '$lib/state/trip.svelte';
	import { Toaster } from "$lib/components/ui/sonner";
	import '$lib/styles/globals.css';

	setTripContext();
	setModelContext();

	let { children } = $props();
</script>

<Toaster richColors />
<ApplicationHeader />
<main class="mt-16 flex flex-col items-center">
	{@render children()}
</main>
