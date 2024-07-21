<script>
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { tripSchema } from '$lib/schemas';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { superForm } from 'sveltekit-superforms';
	import { getTripContext } from '$lib/trip-state.svelte';
	import { goto } from '$app/navigation';
    import { v4 as uuidv4 } from 'uuid';

	/** @type {import('$lib/types').SuperValidatedFormSchema} */
	export let data;
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
    /** @type string*/
    const tripId = uuidv4();
</script>
<p>{tripId}</p>
<form method="POST" use:enhance>
    <Form.Field {form} name="id">
        <Form.Control let:attrs>
			<Input {...attrs} value={tripId} type="hidden"/>
		</Form.Control>
    </Form.Field>
	<Form.Field {form} name="destination">
		<Form.Control let:attrs>
			<Form.Label>Destino</Form.Label>
			<Input {...attrs} bind:value={$formData.destination} />
		</Form.Control>
		<Form.Description>Indica el lugar a donde quieres ir</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="dates">
		<Form.Control let:attrs>
			<Form.Label>Fecha del viaje</Form.Label>
			<Input {...attrs} bind:value={$formData.dates} />
		</Form.Control>
		<Form.Description>Indica las fechas del viaje</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="people">
		<Form.Control let:attrs>
			<Form.Label>Acompañantes</Form.Label>
			<Input {...attrs} bind:value={$formData.people} />
		</Form.Control>
		<Form.Description>Indica con quien irás</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="preferences">
		<Form.Control let:attrs>
			<Form.Label>Preferencias</Form.Label>
			<Input {...attrs} bind:value={$formData.preferences} />
		</Form.Control>
		<Form.Description>Indica las preferencias de tu viaje</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="budget">
		<Form.Control let:attrs>
			<Form.Label>Presupuesto</Form.Label>
			<Input {...attrs} bind:value={$formData.budget} />
		</Form.Control>
		<Form.Description>Indica el presupuesto para el viaje</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>Planifica mi viaje</Form.Button>
</form>
