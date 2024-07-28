<script lang="ts">
	import type { PageData } from './$types';

	import TripForm from '$lib/components/trip-form.svelte';

	let { data }: { data: PageData } = $props();
</script>

<main class="container">
	<div class="grid grid-cols-1 gap-x-6 md:grid-cols-5">
		<div class="col-span-1 md:col-span-2"></div>
		<div class="col-span-1 md:col-span-3">
			<TripForm data={data.form} />
		</div>
	</div>
</main>
