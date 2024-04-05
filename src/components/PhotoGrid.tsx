import { useState, useEffect } from "react";
import Masonry from "react-responsive-masonry";

const imagePaths = import.meta.glob(
	"../assets/images/gallery/**/*.{jpg,jpeg,png,gif}"
);

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

const PhotoGrid = ({ category }) => {
	const [imageUrls, setImageUrls] = useState([]);

	useEffect(() => {
		// Load image URLs asynchronously
		const loadImageUrls = async () => {
			const urls = await Promise.all(
				Object.values(imagePaths).map(async (getImagePath) => {
					const imagePath = await getImagePath();
					return {
						url: imagePath.default,
						category: imagePath.category,
					}; // Assuming imagePath.category holds the category information
				})
			);
			// Filter images based on the category
			const filteredUrls = category
				? urls.filter((img) => img.category === category)
				: urls;
			// Shuffle the array of URLs
			setImageUrls(shuffleArray(filteredUrls.map((img) => img.url)));
		};
		loadImageUrls();
	}, [category]);

	return (
		<Masonry columnsCount={3} gutter="10px">
			{imageUrls.map((url, index) => (
				<img
					key={index}
					alt={`Image ${index}`}
					style={{ width: "100%", display: "block" }}
					src={url}
				/>
			))}
		</Masonry>
	);
};

export default PhotoGrid;
