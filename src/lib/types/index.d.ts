import { type Infer, type SuperValidated } from 'sveltekit-superforms';

import type { Icons } from '$lib/config/icons';
import { aiSchema, tripSchema } from '$lib/schemas';

type TripSchema = typeof tripSchema;
type AiTripSchema = typeof aiSchema;

type Trip = Infer<TripSchema>;
type AiTrip = Infer<AiTripSchema>;

type SuperValidatedFormSchema = SuperValidated<Infer<TripSchema>>;

type TripResponseType = {
	data: AiTrip;
	error: string;
	isLoading: boolean;
};

type NavItem = {
	_id: number;
	name: string;
	href: string;
	icon: keyof typeof Icons;
};

type Mode = 'light' | 'dark';

type GuestData = {
	adults: number;
	kids: number;
	pets: number;
};

type GuestSelectorProps = {
	value: GuestData;
	onChange?: (value: GuestData) => void;
};

type CounterProps = {
	initialCount?: number;
	step?: number;
	min?: number;
	max?: number;
	onChange?: (event: { counter: number }) => void;
};

type CategoriesProps = {
	categories: Array<string>;
	onChange?: (value: Array<string>) => void;
};

type SliderProps = {
	value: Array<number>;
	onChange?: (value: Array<number>) => void;
};
