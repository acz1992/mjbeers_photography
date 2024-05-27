/* import { client } from "../client";

export async function getPhotos() {
	const query =
		'*[_type == "photo"]{_id, title, description, category, "imageAddress": image.asset->url}';
	const photos = await client.fetch(query);
	return photos;
}
 */
