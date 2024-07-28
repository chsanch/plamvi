<script lang="ts">
	import SuperDebug from 'sveltekit-superforms';

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
	import { getTripContext } from '$lib/trip-state.svelte';
	import type { GuestData, SuperValidatedFormSchema } from '$lib/types';
	import { dateRangeToPrompt } from '$lib/utils/dates';

	const { data }: { data: SuperValidatedFormSchema } = $props();

	const trip = getTripContext();

	const form = superForm(data, {
		applyAction: false,
		validators: zodClient(tripSchema),
		onUpdated({ form }) {
			if (form.valid) {
				trip.add(form.data);
				goto('/viaje/' + form.data.id);
			}
		}
	});

	const { form: formData, enhance } = form;
	const tripId: string = crypto.randomUUID();;

	let guests = $state<GuestData>({ adults: 0, kids: 0, pets: 0 });
	const categories = $state<Array<string>>([]);

	const budget = $state<Array<number>>([]);

	function handleGuestsChange(value: GuestData) {
		guests = value;
		$formData.people = `Los viajeros parae este viaje serán ${guests.adults} adultos, ${guests.kids} niños y ${guests.pets} mascotas`;
	}

	function handleDatesChange(dates: DateRange) {
		$formData.dates = dateRangeToPrompt(dates);
	}

	function handleBudgetChange(value: Array<number>) {
		$formData.budget = `El presupuesto del viaje es de máximo ${value[0]} Euros`;
	}

	function handleCategoriesChange(categories: Array<string>) {
		$formData.preferences = `Las preferencias del viaje son las siguientes: ${categories.join(', ')}`;
	}
</script>

<form class="flex flex-col gap-y-4" method="POST" use:enhance>
	<Form.Field {form} name="id">
		<Form.Control let:attrs>
			<Input {...attrs} value={tripId} type="hidden" />
		</Form.Control>
	</Form.Field>
	<Form.Field {form} name="destination">
		<Form.Control let:attrs>
			<Form.Label for="destination">Destino</Form.Label>
			<Textarea
				class="min-h-24 resize-none"
				placeholder="Describe tu viaje ideal..."
				{...attrs}
				bind:value={$formData.destination}
			/>
		</Form.Control>
		<Form.Description
			>Ejemplo: Viaje por Italia en Septiembre por 10 días. Roma, Florencia, Venecia. Museos,
			historia, gastronomía. Hoteles céntricos, tours guiados, días libres. Recomendaciones de
			restaurantes y actividades.</Form.Description
		>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="dates">
		<Form.Control>
			<Form.Label for="dates">Fechas del viaje</Form.Label>
			<DateRangePicker updateDates={handleDatesChange} />
			<input hidden value={$formData.dates} name="dates" />
		</Form.Control>
		<Form.Description>Indica las fechas de tu viaje</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="people">
		<Form.Control>
			<Form.Label for="people">Acompañantes</Form.Label>
			<div>
				<GuestSelector value={guests} onChange={handleGuestsChange} />
			</div>
			<input hidden value={$formData.people} name="people" />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="preferences">
		<Form.Control let:attrs>
			<Form.Label for="preferences">Categorías</Form.Label>
			<div class="flex flex-wrap items-center gap-x-2 gap-y-1">
				<CategorySelector {categories} onChange={handleCategoriesChange} />
			</div>
			<input hidden value={$formData.preferences} name="preferences" />
		</Form.Control>
		<Form.Description>Indica las categorías de tu viaje</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="budget">
		<Form.Control let:attrs>
			<Form.Label for="budget">Presupuesto</Form.Label>
			<SliderSelector {...attrs} value={budget} onChange={handleBudgetChange} />
			<input hidden value={$formData.budget} name="budget" />
		</Form.Control>
		<Form.Description class="!mt-8">Indica el presupuesto máximo de tu viaje</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button class="mt-8" size="lg">Planifica mi viaje</Form.Button>
</form>

<SuperDebug data={$formData} />
