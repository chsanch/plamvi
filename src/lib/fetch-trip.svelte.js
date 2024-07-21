class TripResponse {
	data = $state();
	isLoading = $state(false);
	error = $state();
}

/**
 *  @param { import('$lib/types').Trip } trip
 *  @returns { import('$lib/types').TripResponseType }
 */
export default function fetchTrip(trip) {
	const response = new TripResponse();

	if (!trip) {
		response.error = 'No existe el viaje';
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
				body: JSON.stringify({ trip })
			});

			response.data = await res.json();
			response.isLoading = false;
		} catch (error) {
			console.error(error);
		}
	}

	fetchTripData();

	return response;
}
