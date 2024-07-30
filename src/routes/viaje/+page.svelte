<script lang="ts">
	import type { PageData } from './$types';

	import AiModelForm from '$lib/components/ai-model-form.svelte';
	import TripForm from '$lib/components/trip-form.svelte';

	let { data }: { data: PageData } = $props();
</script>

<main class="container">
	<div class="grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-5">
		<div class="col-span-1 md:col-span-2">
			<AiModelForm data={data.modelForm} />
		</div>
		<div class="col-span-1 md:col-span-3">
			<TripForm data={data.form} />
		</div>
	</div>
</main>
