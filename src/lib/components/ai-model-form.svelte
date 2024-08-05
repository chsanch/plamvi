<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import { generateText } from 'ai';

	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select/index.js';

	import { Icons } from '$lib/config/icons';
	import { aiModelSchema } from '$lib/schemas';
	import { getModelContext } from '$lib/state/model.svelte';
	import type { AiModel, SuperValidatedModelFormSchema } from '$lib/types';
	import { getModelClient } from '$lib/utils/ai';
	import type { OpenAIProvider } from '@ai-sdk/openai';
	import type { GoogleGenerativeAIProvider } from '@ai-sdk/google';

	const { data }: { data: SuperValidatedModelFormSchema } = $props();

	const model = getModelContext();

	const validateApiKey = async (model: Pick<AiModel, 'name' | 'apiKey'>) => {
		let isValid: boolean = false;
		const aiModel = await getModelClient(model) as OpenAIProvider | GoogleGenerativeAIProvider;
		try {
			await generateText({
				model: aiModel(model.name),
				prompt: 'Testing'
			});
			isValid = true
		} catch (error) {
			isValid = false;
			toast.error('API Key inválida', { description: 'Por favor, introduce una API Key válida' });
		}
		return !isValid;
	};

	let isDisabled: boolean = $state(false),
		inputPlaceholder: string = $state('');

	const form = superForm(data, {
		applyAction: false,
		validators: zodClient(aiModelSchema),
		onSubmit: async ({ cancel, formData }) => {
			if (
				await validateApiKey({
					name: formData.get('name') as string,
					apiKey: formData.get('apiKey') as string
				})
			)
				cancel();
		},
		onUpdated: ({ form }) => {
			if (form.valid) {
				model.add(form.data.name, form.data.label, form.data.apiKey);
				isDisabled = true;
				inputPlaceholder = '**-*****-*********************';
			}
		}
	});

	const { form: formData, enhance } = form;
	const aiFormId: string = crypto.randomUUID();
</script>

<h1 class="flex items-center gap-3 text-sm font-bold uppercase text-muted-foreground">
	Configuración AI
	{#if model.isSet}
		<span title="Editar modelo AI">
			<Icons.pencil
				onclick={() => {
					model.reset();
					form.reset();
					isDisabled = false;
				}}
				class="h-3.5 w-3.5 cursor-pointer hover:text-primary"
			/>
		</span>
	{/if}
</h1>

<form class="flex flex-col gap-y-2" method="POST" action="?/model" use:enhance>
	<Form.Field {form} name="id">
		<Form.Control let:attrs>
			<Input disabled={isDisabled} {...attrs} value={aiFormId} type="hidden" />
		</Form.Control>
	</Form.Field>
	<Form.Field {form} name="name">
		<Form.Control let:attrs>
			<Form.Label for="name">Modelo</Form.Label>
			<Select.Root
				selected={model}
				disabled={isDisabled}
				onSelectedChange={(v) => {
					v && ($formData.name = v.value as string);
				}}
			>
				<Select.Trigger {...attrs}>
					<Select.Value placeholder="Selecciona un modelo" />
				</Select.Trigger>
				<Select.Content>
					<Select.Item value="gpt-4o" label="OpenAI GPT-4-O" />
					<Select.Item value="gpt-4-turbo" label="OpenAI GPT-4 Turbo" />
					<Select.Item value="gpt-4" label="OpenAI GPT-4" />
					<Select.Item value="gpt-3.5-turbo" label="OpenAI GPT-3.5 Turbo" />
					<Select.Item value="models/gemini-1.5-flash-latest" label="Google Gemini 1.5 Flash" />
					<Select.Item value="models/gemini-1.5-pro-latest" label="Google Gemini 1.5 Pro" />
					<Select.Item value="models/gemini-pro" label="Google Gemini Pro" />
				</Select.Content>
			</Select.Root>
			<input hidden bind:value={$formData.name} name={attrs.name} />
		</Form.Control>
		<Form.Description>Selecciona tu modelo de IA</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="apiKey">
		<Form.Control let:attrs>
			<Form.Label for="apiKey">API Key</Form.Label>
			<Input
				{...attrs}
				disabled={isDisabled}
				placeholder={isDisabled ? inputPlaceholder : ''}
				bind:value={$formData.apiKey}
				type="password"
			/>
		</Form.Control>
		<Form.Description>Introduce tu API key</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button disabled={isDisabled} size="lg">Configurar modelo</Form.Button>
</form>
