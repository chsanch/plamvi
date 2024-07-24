import { type Infer, type SuperValidated } from 'sveltekit-superforms';

import type { Icons } from '$lib/config/icons';
import { aiSchema, tripSchema } from '$lib/schemas';

export type TripSchema = typeof tripSchema;
export type AiTripSchema = typeof aiSchema;

export type Trip = Infer<TripSchema>;
export type AiTrip = Infer<AiTripSchema>;

export type SuperValidatedFormSchema = SuperValidated<Infer<TripSchema>>;

export type TripResponseType = {
	data: AiTrip;
	error: string;
	isLoading: boolean;
};

export type NavItem = {
	_id: number;
	name: string;
	href: string;
	icon: keyof typeof Icons;
};

export type Mode = 'light' | 'dark';
