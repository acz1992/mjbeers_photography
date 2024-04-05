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

const PhotoGrid = () => {
	const [imageUrls, setImageUrls] = useState<string[]>([]);

	useEffect(() => {
		// Load image URLs asynchronously
		const loadImageUrls = async () => {
			const urls = await Promise.all(
				Object.values(imagePaths).map(async (getImagePath) => {
					const imagePath = await getImagePath();
					return imagePath.default;
				})
			);
			// Shuffle the array of URLs
			setImageUrls(shuffleArray(urls));
		};
		loadImageUrls();
	}, []);

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
