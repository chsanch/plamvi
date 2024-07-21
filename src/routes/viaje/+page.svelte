<script>
	import TripForm from '$lib/components/trip-form.svelte';

	/** @type {{data: import('./$types').PageData}} */
	let { data } = $props();
</script>

<main class="container">
	<TripForm data={data.form} />
</main>
