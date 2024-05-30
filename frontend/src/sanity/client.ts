import { createClient } from "@sanity/client";

export const client = createClient({
	projectId: "1ypfs60t",
	dataset: "production",
	useCdn: true, // set to `false` to bypass the edge cache
	apiVersion: "2024-05-23", // use current date (YYYY-MM-DD) to target the
	// token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export async function getPhotos() {
	// Construct your query based on the page number, if needed
	const query =
		'*[_type == "photo"]{_id, title, description, category, "imageAddress": image.asset->url}';
	const photos = await client.fetch(query);
	return photos;
}
