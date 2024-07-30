<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import fetchImages from '$lib/fetch-images.svelte';

	const { destination } = $props();

	const images = fetchImages(destination as string);
</script>

{#await images}
	<div>Loading...</div>
{:then images}
	<Card.Root
		opts={{
			align: 'start'
		}}
		class="w-full"
	>
		<Card.Header>
			<Card.Title>Imágenes de {destination}</Card.Title>
		</Card.Header>
		<Card.Content>
			<Carousel.Root>
				<Carousel.Content>
					{#each images as image}
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
{/await}
