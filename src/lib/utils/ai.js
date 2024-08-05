import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { createOpenAI } from '@ai-sdk/openai';

const GPT_MODELS = ['gpt-4o', 'gpt-4-turbo', 'gpt-4', 'gpt-3.5-turbo'];
const GEMINI_MODELS = [
	'models/gemini-1.5-flash-latest',
	'models/gemini-1.5-pro-latest',
	'models/gemini-pro'
];

/** @param { Pick<import('$lib/types').AiModel, 'name' | 'apiKey'> } model*/
export const getModelClient = async (model) => {
	if (GPT_MODELS.includes(model.name)) {
		return createOpenAI({
			apiKey: model.apiKey
		});
	}

	if (GEMINI_MODELS.includes(model.name)) {
		return createGoogleGenerativeAI({
			apiKey: model.apiKey
		});
	}

	return null;
};
