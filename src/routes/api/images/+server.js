import { PEXELS_API_KEY } from '$env/static/private';
import { createClient } from 'pexels';
import { json } from '@sveltejs/kit';

const client = createClient(PEXELS_API_KEY);

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request }) => {
	const { query } = await request.json();
	const query_trip = `${query} turismo`;
	const result = await client.photos.search({
		query: query_trip,
		per_page: 6,
	  page: 1,
		locale: 'es-ES',
	  orientation: 'landscape'
	}).then((response) => {
	  return response;
	})
	.catch((error) => {
	  console.error(error);
	  return error;
	});

  /** @type {import('pexels').Photo}*/
	const photos = result.photos.map((photo) => {
	  return {
		id: photo.id,
		src: photo.src.landscape,
		alt: photo.alt
	  };
	});
	return json(photos);
};
