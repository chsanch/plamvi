import { getContext, setContext } from 'svelte';

export class TripState {
	/** @type {import('$lib/types').Trip[]}*/
	trips = $state([]);

	/**
	 *
	 * @param {import('$lib/types').Trip} trip
	 */
	add(trip) {
		this.trips.push(trip);
	}

	/**
	 * @param {string} id
	 * @returns {import('$lib/types').Trip | undefined}
	 * */
	getTrip(id) {
		return this.trips.find((trip) => trip.id === id);
	}

	get total() {
		return this.trips.length;
	}
}

const ID = Symbol('trip');

export function setTripContext() {
	return setContext(ID, new TripState());
}

export function getTripContext() {
	return getContext(ID);
}
