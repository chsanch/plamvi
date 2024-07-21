import { tripSchema, aiSchema } from "./schemas";
import {
    type SuperValidated,
    type Infer,
  } from "sveltekit-superforms";

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
