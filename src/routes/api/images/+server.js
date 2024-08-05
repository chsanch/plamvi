import { PEXELS_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import { createClient } from 'pexels';

const client = createClient(PEXELS_API_KEY);

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request }) => {
	const { query } = await request.json();

	const query_trip = `${query} turismo`;

	const result = await client.photos
		.search({
			query: query_trip,
			per_page: 6,
			page: 1,
			locale: 'es-ES',
			orientation: 'landscape'
		})
		.then((response) => {
			return response;
		})
		.catch((error) => {
			console.error(error);
			return error;
		});

	const photos = result.photos.map((/** @type {import('pexels').Photo}*/ photo) => {
		return {
			id: photo.id,
			src: photo.src.landscape,
			alt: photo.alt
		};
	});

	return json(photos);
};
