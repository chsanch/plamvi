<script>
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	/** @type {{data: import('./$types').PageData}} */
	const { data } = $props();

	const { trip } = data;
</script>

<main class="w-full space-y-4 md:container">
	<div class="grid grid-cols-5 gap-2">
		<div class="col-span-5 h-full md:col-span-2">
			<Card.Root class="flex h-full flex-col justify-between">
				<Card.Header>
					<Card.Title>Resumen del viaje a {trip.general_info.destination}</Card.Title>
					<Card.Description>{trip.general_info.description}</Card.Description>
				</Card.Header>
				<Card.Footer>
					<span class="text-sm text-muted-foreground">Fechas: {trip.general_info.dates}</span>
				</Card.Footer>
			</Card.Root>
		</div>
		<div class="col-span-5 h-full md:col-span-3">
			<Card.Root class="h-full">
				<Card.Header>
					<Card.Title>Información adicional</Card.Title>
					<Card.Description>{trip.recommendations.description}</Card.Description>
				</Card.Header>
				<Card.Content>
					<ul class="flex flex-wrap items-center">
						<h3 class="text-sm text-muted-foreground">Links de interés:</h3>
						{#each trip.recommendations.links as recommendation, index}
							<li>
								<a class={buttonVariants({ variant: 'link' })} href={recommendation.url}
									>{recommendation.title}</a
								>
							</li>
							{#if index < trip.recommendations.links.length - 1}
								<span class="text-primary">|</span>
							{/if}
						{/each}
					</ul>

					<ul class="flex flex-wrap items-center">
						<h3 class="text-sm text-muted-foreground">Hoteles destacados:</h3>
						{#each trip.hotels as hotel, index}
							<li>
								<a class={buttonVariants({ variant: 'link' })} href={hotel.link}>{hotel.name}</a>
							</li>
							{#if index < trip.hotels.length - 1}
								<span class="text-primary">|</span>
							{/if}
						{/each}
					</ul>
				</Card.Content>
			</Card.Root>
		</div>
	</div>

	<Card.Root
		opts={{
			align: 'start'
		}}
		class="w-full"
	>
		<Card.Header>
			<Card.Title>Imágenes de {trip.general_info.destination}</Card.Title>
		</Card.Header>
		<Card.Content>
			<Carousel.Root>
				<Carousel.Content>
					{#each trip.general_info.images as image}
						<Carousel.Item class="basis-1/2 sm:basis-1/3 md:basis-1/2 lg:basis-1/4">
							<div class="p-1">
								<Card.Content class="flex items-center justify-center p-0">
									<img
										src={image.src}
										alt={image.alt}
										class="aspect-square h-40 object-cover md:h-72"
									/>
								</Card.Content>
							</div>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
				<Carousel.Previous class="hidden sm:inline-flex" />
				<Carousel.Next class="hidden sm:inline-flex" />
			</Carousel.Root>
		</Card.Content>
	</Card.Root>

	<Card.Root class="h-full">
		<Card.Header>
			<Card.Title
				>Itinerario de <span class="underline underline-offset-2">{trip.days.length} días</span>
				en {trip.general_info.destination}</Card.Title
			>
		</Card.Header>
		<Card.Content class="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2">
			{#each trip.days as day}
				<Card.Root
					class="col-span-1 h-full cursor-pointer transition-transform duration-700 hover:-translate-y-2"
				>
					<Card.Header>
						<Card.Title>Día {day.date}</Card.Title>
						<Card.Description>{day.description}</Card.Description>
					</Card.Header>
					<Card.Content>
						<p class="text-sm text-muted-foreground">Resumen:</p>
						<ul class="pl-2">
							{#each day.activities as activity}
								<li class="text-sm leading-6">
									<span class="font-bold">{activity.name}</span>
									<p class="text-muted-foreground">{activity.description}</p>
								</li>
							{/each}
						</ul>
					</Card.Content>
				</Card.Root>
			{/each}
		</Card.Content>
	</Card.Root>
</main>
