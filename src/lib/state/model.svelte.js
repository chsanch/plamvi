import { getContext, setContext } from 'svelte';

export class ModelState {
	model = $state({ name: '', apiKey: '' });

	/**
	 * @returns {import('$lib/types').AiModel}
	 */
	get() {
		return this.model;
	}

	/**
	 * @param {import('$lib/types').AiModel} newModel
	 * @returns void
	 */
	set(newModel) {
		this.model.name = newModel.name;
		this.model.apiKey = newModel.apiKey;
	}
}

const ID = Symbol('model');

export function setModelContext() {
	return setContext(ID, new ModelState());
}

export function getModelContext() {
	return getContext(ID);
}
