<script lang="ts">
	import { getTripContext } from '$lib/state/trip.svelte';

	const tripState = getTripContext();
</script>

<main class="container">
	<h1>Tes</h1>
	<div class="m-4 flex flex-col">
		<p>Viajes realizados: {tripState.total}</p>
	</div>
</main>
