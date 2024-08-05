<script lang="ts">
	import type { PageData } from './$types';

	import TripImages from '$lib/components/trip-images.svelte';
	import TripSkeleton from '$lib/components/trip-skeleton.svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Dialog from '$lib/components/ui/dialog';

	import fetchTrip from '$lib/fetch-trip.svelte';
	import { getModelContext } from '$lib/state/model.svelte';
	import { getTripContext } from '$lib/state/trip.svelte';
	import type { AiModel, Trip, TripResponseType } from '$lib/types';

	let { data }: { data: PageData } = $props();

	const tripState = getTripContext();
	const model: AiModel = getModelContext();

	const trip: Trip = tripState.getTrip(data.id);

	const tripData: TripResponseType = fetchTrip(trip, model);
</script>

{#if tripData.isLoading}
	<TripSkeleton />
{:else if tripData.error.type}
	<p>Error: {tripData.error.message}</p>
{:else if tripData.data}
	<main class="w-full space-y-4 md:container">
		<div class="grid grid-cols-5 gap-2">
			<div class="col-span-5 h-full md:col-span-2">
				<Card.Root class="flex h-full flex-col justify-between">
					<Card.Header>
						<Card.Title>Resumen del viaje a {tripData.data.general_info.destination}</Card.Title>
						<Card.Description>{tripData.data.general_info.description}</Card.Description>
					</Card.Header>
					<Card.Footer>
						<span class="text-sm text-muted-foreground"
							>Fechas: {tripData.data.general_info.dates}</span
						>
					</Card.Footer>
				</Card.Root>
			</div>
			<div class="col-span-5 h-full md:col-span-3">
				<Card.Root class="h-full">
					<Card.Header>
						<Card.Title>Información adicional</Card.Title>
						<Card.Description>{tripData.data.recommendations?.description}</Card.Description>
					</Card.Header>
					<Card.Content>
						<ul class="flex flex-wrap items-center">
							<h3 class="text-sm text-muted-foreground">Links de interés:</h3>
							{#each tripData.data.recommendations!.links! as recommendation, index}
								<li>
									<a class={buttonVariants({ variant: 'link' })} href={recommendation.url}
										>{recommendation.title}</a
									>
								</li>
								{#if index < tripData.data.recommendations!.links!.length - 1}
									<span class="text-primary">|</span>
								{/if}
							{/each}
						</ul>

						<ul class="flex flex-wrap items-center">
							<h3 class="text-sm text-muted-foreground">Hoteles destacados:</h3>
							{#each tripData.data.hotels! as hotel, index}
								<li>
									<a class={buttonVariants({ variant: 'link' })} href={hotel.link}>{hotel.name}</a>
								</li>
								{#if index < tripData.data.hotels!.length - 1}
									<span class="text-primary">|</span>
								{/if}
							{/each}
						</ul>
					</Card.Content>
				</Card.Root>
			</div>
		</div>
		<TripImages destination={tripData.data.general_info.destination} />
		<Card.Root class="h-full">
			<Card.Header>
				<Card.Title
					>Itinerario de <span class="underline underline-offset-2"
						>{tripData.data.days.length} días</span
					>
					en {tripData.data.general_info.destination}</Card.Title
				>
			</Card.Header>
			<Card.Content class="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2">
				{#each tripData.data.days  || [] as day}
					<Dialog.Root openFocus={null}>
						<Dialog.Trigger class="text-left">
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
{#each tripData.data.days  || [] as day}
											<li class="text-sm leading-6">
												<span class="font-bold">{activity.name}</span>
												<p class="text-muted-foreground">{activity.description}</p>
											</li>
										{/each}
									</ul>
								</Card.Content>
							</Card.Root>
						</Dialog.Trigger>
						<Dialog.Content class="max-w-3xl px-8">
							<Dialog.Header>
								<Dialog.Title class="mb-4 flex flex-col gap-y-1">
	<h1>Viaje a {tripData.data.general_info.destination}: Día {day.date}</h1>
									<span class="text-sm text-muted-foreground">{day.description}</span>
								</Dialog.Title>
								<Dialog.Close></Dialog.Close>
								<Dialog.Description>
									<ul class="flex flex-col gap-y-2">
										{#each day.activities || [] as activity}
											<li class="text-sm leading-6">
												<span class="font-bold">{activity.name}</span>:
												<span class="text-muted-foreground">{activity.description}</span>
											</li>
										{/each}
									</ul>
								</Dialog.Description>
							</Dialog.Header>
						</Dialog.Content>
					</Dialog.Root>
				{/each}
			</Card.Content>
		</Card.Root>
	</main>
{/if}
