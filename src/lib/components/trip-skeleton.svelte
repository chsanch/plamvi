<script lang="ts">
	import { page } from '$app/stores';

	import { Skeleton } from '$lib/components/ui/skeleton';
	import { getTripContext } from '$lib/state/trip.svelte';

	const trip = getTripContext().getTrip($page.params.id);
</script>

<div
	class="h-[calc(100% - 4rem)] relative flex w-full flex-col gap-y-4 overflow-hidden md:container"
>
	<div class="grid grid-cols-5 gap-4">
		<Skeleton class="col-span-2 h-[300px] w-full rounded-xl" />
		<Skeleton class="col-span-3 h-[300px] w-full rounded-xl" />
	</div>

	<Skeleton class="h-[380px] w-full rounded-xl" />

	<Skeleton class="h-[300px] w-full rounded-xl" />

	<div class="absolute inset-0 flex h-full w-full items-center justify-center">
		<span class="animate-bounce text-sm text-muted-foreground"
			>Buscando itinerarios para <span class="font-bold uppercase text-primary"
				>{trip?.destination}</span
			></span
		>
	</div>
</div>
