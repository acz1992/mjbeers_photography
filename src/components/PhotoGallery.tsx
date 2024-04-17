import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { getPhotos } from "../data/photo";
import { getImageUrl } from "../utils/image-utils";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import LazyLoad from "react-lazyload";

interface Image {
	id: `${string}-${string}-${string}-${string}-${string}`;
	title: string;
	description: string;
	category: string;
	imageAddress: string;
}

interface PhotoGalleryProps {
	category?: string;
}

// Shuffle Image Array everytime page loads
/* const shuffleArray = (array: Image[]) => {
	const newArray = [...array];
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	return newArray;
}; */

// Get Image Unique Dimensions for hover effect
const getUniqueDimensions = async (images: Image[]) => {
	const dimensions: { [key: string]: { width: number; height: number } } = {};

	await Promise.all(
		images.map(async (image) => {
			const img = new Image();
			img.src = getImageUrl(image.imageAddress);
			await new Promise((resolve) => {
				img.onload = () => {
					dimensions[image.id] = {
						width: img.width,
						height: img.height,
					};
					resolve(null);
				};
			});
		})
	);

	return dimensions;
};

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ category }) => {
	let images = getPhotos();
	const [index, setIndex] = useState(-1);

	/* 	images = shuffleArray(images);
	 */ const handleClick = (index: number) => setIndex(index);

	// Filter images based on category if provided
	if (category) {
		images = images.filter((image) => image.category === category);
	}

	//Unqiue Dimensions
	const [uniqueDimensions, setUniqueDimensions] = useState<{
		[key: string]: { width: number; height: number };
	}>({});

	useEffect(() => {
		const fetchDimensions = async () => {
			const dimensions = await getUniqueDimensions(images);
			setUniqueDimensions(dimensions);
		};
		fetchDimensions();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="px-6 laptop:px-16 ">
			{" "}
			{/* Adjust margin-top as needed */}
			<ResponsiveMasonry
				columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}
			>
				<Masonry gutter={"10px"}>
					{images.map((image, i) => (
						<LazyLoad height={200} key={i} once>
							<div
								key={i}
								className="relative overflow-hidden"
								style={{
									width: "100%",
									paddingBottom: `${
										(uniqueDimensions[image.id]?.height /
											uniqueDimensions[image.id]?.width) *
										100
									}%`,
								}}
								onClick={() => handleClick(i)} // Pass the index to handleClick function
							>
								<img
									src={getImageUrl(image.imageAddress)}
									alt={image.title}
									className="align-bottom absolute inset-0 object-cover hover:scale-110 transition-all duration-1000"
								/>
							</div>
						</LazyLoad>
					))}
				</Masonry>
			</ResponsiveMasonry>
			<Lightbox
				slides={images.map((image) => ({
					src: getImageUrl(image.imageAddress),
					alt: image.title,
				}))}
				open={index >= 0}
				index={index}
				close={() => setIndex(-1)}
				styles={{
					root: { backgroundColor: "rgba(0, 0, 0)" },
					navigationNext: { backgroundColor: "rgba(0, 0, 0)" },
					toolbar: { backgroundColor: "rgba(0, 0, 0)" },
					slide: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
					button: { backgroundColor: "rgba(0, 0, 0)" },
					icon: { backgroundColor: "rgba(0, 0, 0)" },
				}}
			/>
		</div>
	);
};

export default PhotoGallery;
