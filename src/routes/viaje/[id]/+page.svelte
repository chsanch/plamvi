<script>
	import { getTripContext } from '$lib/trip-state.svelte';
	import fetchTrip from '$lib/fetch-trip.svelte';
	import {Spinner} from '$lib/components/ui/spinner/index.js';

	/** @type {{data: import('./$types').PageData}} */
	let { data } = $props();

	const tripState = getTripContext();
	const trip = tripState.getTrip(data.id);

	const tripData = fetchTrip(trip);
</script>

<main class="container flex items-center justify-center min-h-screen">
	<h1>{data.id}</h1>
	{#if tripData.isLoading}
		<Spinner size={80} color="#e74c3c" />
	{:else if tripData.error}
		<p>{tripData.error}</p>
	{:else if tripData.data}
		<p>{tripData.data.general_info.description}</p>
	{/if}
</main>
