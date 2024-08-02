<script lang="ts">
	import { goto } from '$app/navigation';
	import type { DateRange } from 'bits-ui';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import CategorySelector from '$lib/components/category-selector.svelte';
	import DateRangePicker from '$lib/components/date-range-picker.svelte';
	import GuestSelector from '$lib/components/guest-selector.svelte';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';

	import SliderSelector from '$lib/components/slider-selector.svelte';
	import { tripSchema } from '$lib/schemas';
	import { getModelContext } from '$lib/state/model.svelte';
	import { getTripContext } from '$lib/state/trip.svelte';
	import type { GuestData, SuperValidatedTripFormSchema } from '$lib/types';
	import { dateRangeToPrompt } from '$lib/utils/dates';
	import { cn } from '$lib/utils/ui';

	const { data }: { data: SuperValidatedTripFormSchema } = $props();

	const trip = getTripContext();
	const model = getModelContext();

	const form = superForm(data, {
		applyAction: false,
		validators: zodClient(tripSchema),
		onUpdated: ({ form }) => {
			if (form.valid) {
				trip.add(form.data);
				goto('/viaje/' + form.data.id);
			}
		}
	});

	const { form: formData, enhance } = form;
	const tripId: string = crypto.randomUUID();

	let guests = $state<GuestData>({ adults: 0, kids: 0, pets: 0 });
	const categories = $state<Array<string>>([]);

	const budget = $state<Array<number>>([]);

	function handleGuestsChange(guests: GuestData) {
		let people = guests
			? `Los viajeros para este viaje serán ${guests.adults} adulto${guests.adults > 1 ? 's' : ''}`
			: '';

		if (guests.kids > 0) {
			people += `, ${guests.kids} niño${guests.kids > 1 ? 's' : ''}`;
		}

		if (guests.pets > 0) {
			people += `, ${guests.pets} mascota${guests.pets > 1 ? 's' : ''}`;
		}

		$formData.people = people;
	}

	function handleDatesChange(dates: DateRange | undefined) {
		$formData.dates = dateRangeToPrompt(dates);
	}

	function handleBudgetChange(value: Array<number>) {
		$formData.budget = `El presupuesto del viaje es de máximo ${value[0]} Euros`;
	}

	function handleCategoriesChange(categories: Array<string>) {
		$formData.preferences = `Las preferencias del viaje son las siguientes: ${categories.join(', ')}`;
	}
</script>

<h1 class="text-sm font-bold uppercase text-muted-foreground">Planifica el viaje</h1>
<form class="flex flex-col gap-y-2" method="POST" action="?/trip" use:enhance>
	<Form.Field {form} name="id">
		<Form.Control let:attrs>
			<Input {...attrs} value={tripId} type="hidden" />
		</Form.Control>
	</Form.Field>
	<Form.Field {form} name="destination">
		<Form.Control let:attrs>
			<Form.Label for="destination">Destino</Form.Label>
			<Input
				{...attrs}
				bind:value={$formData.destination}
				disabled={!model.isSet}
				placeholder="Por ejemplo: Budapest"
			/>
		</Form.Control>
		<Form.Description>Indica el destino de tu viaje</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="dates">
		<Form.Control>
			<Form.Label for="dates">Fechas del viaje</Form.Label>
			<DateRangePicker disabled={!model.isSet} updateDates={handleDatesChange} />
			<input hidden value={$formData.dates} name="dates" />
		</Form.Control>
		<Form.Description>Indica las fechas de tu viaje</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="description">
		<Form.Control let:attrs>
			<Form.Label for="description">Descripción de tu viaje</Form.Label>
			<Textarea
				disabled={!model.isSet}
				class="min-h-24 resize-none"
				placeholder="Describe tu viaje ideal..."
				maxlength="200"
				{...attrs}
				bind:value={$formData.description}
			/>
		</Form.Control>
		<Form.Description>
			(Opcional) Ejemplo: Viaje para conocer sitios históricos, comer en restaurantes locales y
			disfrutar de la naturaleza.
		</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="people">
		<Form.Control>
			<Form.Label for="people">Acompañantes</Form.Label>
			<div class={cn('w-fit', { 'cursor-not-allowed': !model.isSet })}>
				<GuestSelector disabled={!model.isSet} value={guests} onChange={handleGuestsChange} />
			</div>
			<input hidden value={$formData.people} name="people" />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="preferences">
		<Form.Control let:attrs>
			<Form.Label for="preferences">Categorías</Form.Label>
			<div class="flex flex-wrap items-center gap-x-2 gap-y-1">
				<CategorySelector {categories} disabled={!model.isSet} onChange={handleCategoriesChange} />
			</div>
			<input hidden value={$formData.preferences} name="preferences" />
		</Form.Control>
		<Form.Description>Indica las categorías de tu viaje</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="budget">
		<Form.Control let:attrs>
			<Form.Label for="budget">Presupuesto</Form.Label>
			<SliderSelector
				{...attrs}
				disabled={!model.isSet}
				value={budget}
				onChange={handleBudgetChange}
			/>
			<input hidden value={$formData.budget} name="budget" />
		</Form.Control>
		<Form.Description class="!mt-8">Indica el presupuesto máximo de tu viaje</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button disabled={!model.isSet} size="lg">Planifica mi viaje</Form.Button>
</form>
