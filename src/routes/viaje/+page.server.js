import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { tripSchema } from '$lib/schemas';
import { zod } from 'sveltekit-superforms/adapters';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	return {
		form: await superValidate(zod(tripSchema))
	};
};

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(tripSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		return { form };
	}
};
