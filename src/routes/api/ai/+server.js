import { aiSchema } from '$lib/schemas';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { createOpenAI } from '@ai-sdk/openai';
import { env } from '$env/dynamic/private';
import { generateObject } from 'ai';
import { json } from '@sveltejs/kit';

const openai = createOpenAI({
	apiKey: env.OPEN_AI_KEY ?? ''
});

const google = createGoogleGenerativeAI({
	apiKey: env.GEMINI_API_KEY ?? ''
});

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request }) => {
	/** @type {{trip :import('$lib/types').Trip}} */
	const { trip } = await request.json();

	const { object, finishReason, usage } = await generateObject({
		model: openai('gpt-4-turbo'),
		// model: google('models/gemini-1.5-flash-latest'),
		system:
			`Eres un asistente de viajes. Ayudas a planificar itinerarios de viaje. ` +
			`Responde a la solicitud del usuario con una lista de sugerencias e información relacionada. ` +
			`La información general y algunas recomendaciones sobre el destino deben incluirse en la respuesta. ` +
			`Para cada día de las fechas dadas, debes proporcionar: ` +
			`- una breve descripción del día, explicando el itinerio de las actividades ` +
			`- sugerencia sobre dónde desayunar, comer y cenar si es posible. ` +
			`- una breve descripción de cada actividad. ` +
			`- Si es posible, proporcione el costo de cada parada y enlaces para obtener más información. ` +
			`proporciona también información de sitios donde alojarse y que esté relacionado con el itinerario, para facilitar las visitas. ` +
			`Añade algunas imágenes si es posible de los lugares mencionados. ` +
			`Asegúrate de que la información sea relevante para el destino y las fechas proporcionadas. ` +
			`Asegúrate de que los links y las urls de las imágenes sean válidos. ` +
			`Si es posible obtén las imágenes de sitios web de imágenes gratuitas, como unplash, pixabay o pexels. ` +
			`La lista debe basarse en diferentes gustos y presupuestos para adaptarse al usuario.`,
		prompt:
			`Quiero planificar un viaje a: ${trip.destination}` +
			`en las siguientes fechas: ${trip.dates}` +
			`Viajare acompañado de: ${trip.people}. ` +
			`Me gustaría que el viaje tenga las siguientes características: ${trip.preferences}.` +
			`El presupuesto disponible es de: ${trip.budget}.` +
			`Por favor sugiere un itinerario que se adapte a nuestros gustos y presupuesto.`,
		schema: aiSchema
	});

	console.log('usage', usage);
	console.log('finishReason', finishReason);
	console.log(JSON.stringify(object, null, 2));

	return json(object);
};
