import { useState, useEffect } from "react";
import Masonry from "react-responsive-masonry";

// NOTE: Complicated state is due to meta.glob importation of many pictures

const imagePaths = import.meta.glob(
	"../assets/images/wedding/**/*.{jpg,jpeg,png,gif}"
);

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
			setImageUrls(urls);
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
					src={url} // Ensure that the src attribute receives a string value
				/>
			))}
		</Masonry>
	);
};

export default PhotoGrid;
