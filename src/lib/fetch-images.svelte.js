/** @param {string}  query
 * @returns {Promise<{id: string, src: string, alt: string}[]>}
*/

export default async function fetchImages(query) {
  const response = await fetch('/api/images', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  });
  const result = await response.json();
  return result;
};
