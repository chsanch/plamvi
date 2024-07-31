class TripResponse {
	data = $state();
	isLoading = $state(false);
	error = $state({type: '', message: ''});
}

/**
 *  @param { import('$lib/types').Trip } trip
 *  @param { import('$lib/types').AiModel } model
 *  @returns { import('$lib/types').TripResponseType }
 */
export default function fetchTrip(trip, model) {
	const response = new TripResponse();

	if (!trip) {
		response.error.type = 'trip';
		response.error.message = 'No existe el viaje';
		return response;
	}

	if (!model) {
		response.error.type = 'model';
		response.error.message = 'No existe el modelo de IA';
		return response;
	}

	async function fetchTripData() {
		response.isLoading = true;
		try {
			const res = await fetch('/api/ai', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ trip, model: { name: model.name, apiKey: model.apiKey } })
			});

			response.data = await res.json();

			if (response.data.error) {
				response.error = response.data.error;
			}
			response.isLoading = false;
		} catch (error) {
			console.log('error', error);
			response.isLoading = false;
		}
	}

	fetchTripData();

	return response;
}
