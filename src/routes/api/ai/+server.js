import { JSONParseError, TypeValidationError, generateObject } from 'ai';

import { aiSchema } from '$lib/schemas';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { createOpenAI } from '@ai-sdk/openai';
import { json } from '@sveltejs/kit';

const GPT_MODELS = ['gpt-4o', 'gpt-4-turbo', 'gpt-4', 'gpt-3.5-turbo'];
const GEMINI_MODELS = [
	'models/gemini-1.5-flash-latest',
	'models/gemini-1.5-pro-latest',
	'models/gemini-pro'
];

/** @param { import('$lib/types').AiModel } model*/
const getModelClient = async (model) => {
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

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request }) => {
	/** @type {{trip :import('$lib/types').Trip, model:import('$lib/types').AiModel }} */
	const { trip, model } = await request.json();
	const aiModel = await getModelClient(model);

	if (!aiModel) {
		return json({ error: 'No existe el modelo de IA' });
	}

	try {
		const { object } = await generateObject({
			// model: openai('gpt-4-turbo'),
			model: aiModel(model.name),
			system:
				`Eres un asistente de viajes. Ayudas a planificar itinerarios de viaje. ` +
				`Responde a la solicitud del usuario con una lista de sugerencias e información relacionada. ` +
				`La información general y algunas recomendaciones sobre el destino deben incluirse en la respuesta. ` +
				`Para cada día de las fechas dadas, debes proporcionar: ` +
				`- una breve descripción del día, explicando el itinerario de las actividades ` +
				`- sugerencia sobre dónde desayunar, comer y cenar si es posible. ` +
				`- una breve descripción de cada actividad. ` +
				`- Si es posible, proporcione el costo de cada parada y enlaces para obtener más información. ` +
				`proporciona también información de sitios donde alojarse y que esté relacionado con el itinerario, para facilitar las visitas. ` +
				`Asegúrate de que la información sea relevante para el destino y las fechas proporcionadas. ` +
				`Asegúrate de que los links sean válidos. ` +
				`La lista debe basarse en diferentes gustos y presupuestos para adaptarse al usuario.`,
			prompt:
				`Destino: ${trip.destination}` +
				`en las siguientes fechas: ${trip.dates}` +
				`${trip.people}. ` +
				`${trip.preferences}.` +
				`${trip.description ? trip.description : ''}` +
				`${trip.budget}.` +
				`Por favor sugiere un itinerario que se adapte a nuestras preferencias, gustos y presupuesto.`,
			schema: aiSchema
		});
		return json(object);
	} catch (error) {
		console.log(error);
		if (TypeValidationError.isTypeValidationError(error)) {
			return json({ error: { type: 'validation-error', message: error.value } });
		} else if (JSONParseError.isJSONParseError(error)) {
			return json({ error: { type: 'parse-error', message: error.text } });
		} else {
			return json({ error: { type: 'unknown-error', message: error?.message } });
		}
	}
};
