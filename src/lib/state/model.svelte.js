import { getContext, setContext } from 'svelte';

export class ModelState {
	name = $state('');
	label = $state('');
	apiKey = $state('');

	/**
	 * @param {string} name
	 * @param {string} label
	 * @param {string} apiKey
	 * @returns void
	 */
	add(name, label, apiKey) {
		this.name = name;
		this.label = label;
		this.apiKey = apiKey;
	}

	reset() {
		this.name = '';
		this.label = '';
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
