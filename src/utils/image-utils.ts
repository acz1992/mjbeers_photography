function getImageUrl(imageAddress: string) {
	const url = new URL(
		`../assets/images/gallery/${imageAddress}`,
		import.meta.url
	);
	return url.toString();
}

export { getImageUrl };
