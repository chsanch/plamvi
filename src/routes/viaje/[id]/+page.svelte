<script>
	import fetchTrip from '$lib/fetch-trip.svelte';
	import { getTripContext } from '$lib/state/trip.svelte';

	/** @type {{data: import('./$types').PageData}} */
	let { data } = $props();

	const tripState = getTripContext();
	const trip = tripState.getTrip(data.id);

	const tripData = fetchTrip(trip);
</script>

<main class="container">
	<h1>{data.id}</h1>
	{#if tripData.isLoading}
		<p>Loading ...</p>
	{:else if tripData.error}
		<p>{tripData.error}</p>
	{:else if tripData.data}
		<p>{tripData.data.general_info.description}</p>
	{/if}
</main>
