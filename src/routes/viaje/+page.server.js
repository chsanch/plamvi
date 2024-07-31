export const prerender = false;

import { aiModelSchema, tripSchema } from '$lib/schemas';

import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	return {
		modelForm: await superValidate(zod(aiModelSchema)),
		form: await superValidate(zod(tripSchema))
	};
};

/** @type {import('./$types').Actions} */
export const actions = {
	trip: async (event) => {
		const form = await superValidate(event, zod(tripSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		return { form };
	},
	model: async (event) => {
		const form = await superValidate(event, zod(aiModelSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		return { form };
	}
};
