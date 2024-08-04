import type { DateRange } from 'bits-ui';
import { type Infer, type SuperValidated } from 'sveltekit-superforms';

import type { Icons } from '$lib/config/icons';
import { aiModelSchema, aiSchema, tripSchema } from '$lib/schemas';

type AiModelSchema = typeof aiModelSchema;
type TripSchema = typeof tripSchema;
type AiTripSchema = typeof aiSchema;

type AiModel = Infer<AiModelSchema>;
type Trip = Infer<TripSchema>;
type AiTrip = Infer<AiTripSchema>;

type SuperValidatedTripFormSchema = SuperValidated<Infer<TripSchema>>;
type SuperValidatedModelFormSchema = SuperValidated<Infer<AiModelSchema>>;

type TripResponseType = {
	data: AiTrip;
	error: { type: string; message: string };
	isLoading: boolean;
};

type NavItem = {
	_id: number;
	name: string;
	href: string;
	icon: keyof typeof Icons;
};

type Mode = 'light' | 'dark';

type DateRangePickerProps = {
	updateDates: (date: DateRange | undefined) => void;
	disabled: boolean;
};

type GuestData = {
	adults: number;
	kids: number;
	pets: number;
};

type GuestSelectorProps = {
	value: GuestData;
	onChange?: (value: GuestData) => void;
	disabled: boolean;
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
	disabled: boolean;
};

type SliderProps = {
	value: Array<number>;
	onChange?: (value: Array<number>) => void;
	disabled: boolean;
};

type ErrorProps = {
	backRoute: string;
	message: string;
};
