const photo = [
	/* Landscape */
	{
		id: crypto.randomUUID(),
		title: "Brussels Town Hall",
		description:
			"A generic description that briefly explains the photo in question",
		category: "landscape",
		imageAddress: "brussels-building.jpg",
	},
	{
		id: crypto.randomUUID(),
		title: "Canal in Brussels",
		description:
			"A generic description that briefly explains the photo in question",
		category: "landscape",
		imageAddress: "canal.jpg",
	},
	{
		id: crypto.randomUUID(),
		title: "Church in Brussels",
		description:
			"A generic description that briefly explains the photo in question",
		category: "landscape",
		imageAddress: "church.jpg",
	},
	/* Portraits */
	{
		id: crypto.randomUUID(),
		title: "Jacob",
		description:
			"A generic description that briefly explains the photo in question",
		category: "portraits",
		imageAddress: "jacob.jpg",
	},
	{
		id: crypto.randomUUID(),
		title: "James",
		description:
			"A generic description that briefly explains the photo in question",
		category: "portraits",
		imageAddress: "james.jpg",
	},
	{
		id: crypto.randomUUID(),
		title: "Children in the woods",
		description:
			"A generic description that briefly explains the photo in question",
		category: "portraits",
		imageAddress: "kids-wood.jpg",
	},
	/* Wedding */
	{
		id: crypto.randomUUID(),
		title: "Bouquet",
		description:
			"A generic description that briefly explains the photo in question",
		category: "wedding",
		imageAddress: "bouquet.jpg",
	},
	{
		id: crypto.randomUUID(),
		title: "Getting out of the Car",
		description:
			"A generic description that briefly explains the photo in question",
		category: "wedding",
		imageAddress: "car.jpg",
	},
	{
		id: crypto.randomUUID(),
		title: "Bride and Groom Kissing",
		description:
			"A generic description that briefly explains the photo in question",
		category: "wedding",
		imageAddress: "couple-kiss.jpg",
	},
];

const getPhotos = () => {
	return photo;
};

export { getPhotos };
