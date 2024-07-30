import { getContext, setContext } from 'svelte';

export class ModelState {
	// model = $state({ name: '', apiKey: '' });
	name = $state('');
	apiKey = $state('');


	/**
	 * @param {string} name
	 * @param {string} apiKey
	 * @returns void
	 */
	add(name, apiKey) {
		this.name = name;
		this.apiKey = apiKey;
	}

	reset() {
		this.name = '';
		this.apiKey = '';
	}

	get isSet() {
		return !!this.name && !!this.apiKey;
	}
}

const ID = Symbol('model');

export function setModelContext() {
	return setContext(ID, new ModelState());
}

export function getModelContext() {
	return getContext(ID);
}
