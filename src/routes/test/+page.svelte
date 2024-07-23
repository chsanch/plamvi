<script>
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';

	/** @type {{data: import('./$types').PageData}} */
	let { data } = $props();
	console.log('trip', data);
	const { trip } = data;
</script>

<main class="container w-full">
    <h1>{trip.general_info.destination}</h1>
	<div class="my-2">
		<h1>Description</h1>
        <p>Fechas: {trip.general_info.dates}</p>
		<p>{trip.general_info.description}</p>
		<ScrollArea class="w-96 whitespace-nowrap rounded-md border" orientation="horizontal">
			<div class="flex w-max space-x-4 p-4">
				{#each trip.general_info.images as image}
					<figure class="shrink-0">
						<div class="overflow-hidden rounded-md">
							<img
								src={image.src}
								alt={image.alt}
								class="aspect-[3/4] h-fit w-fit object-cover"
								width={300}
								height={400}
							/>
						</div>
						<figcaption class="pt-2 text-xs text-muted-foreground">
							Photo by
							<span class="font-semibold text-foreground">
								{image.alt}
							</span>
						</figcaption>
					</figure>
				{/each}
			</div>
		</ScrollArea>
	</div>
	<div class="my-2">
		<h1>Recomendaciones</h1>
		<p>{trip.recommendations.description}</p>
		<ul>
			{#each trip.recommendations.links as recommendation}
				<li><a href={recommendation.url}>{recommendation.title}</a></li>
			{/each}
		</ul>
	</div>
	<div class="my-2">
		<h1>Hoteles</h1>
		<ul>
			{#each trip.hotels as hotel}
				<li>{hotel.name}</li>
			{/each}
		</ul>
	</div>
	<div class="my-2">
		<h1>Itinerario</h1>
		<ul>
			{#each trip.days as day}
				<li>
					<h2>{day.date}</h2>
					<p>{day.description}</p>
					<ul>
						{#each day.activities as activity}
							<li>{activity.name}: {activity.description}</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</div>
</main>
