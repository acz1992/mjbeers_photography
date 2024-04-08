import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { getPhotos } from "../data/photo";
import { getImageUrl } from "../utils/image-utils";
import { motion } from "framer-motion";
import { transition1 } from "../utils/transitions";

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
const shuffleArray = (array: Image[]) => {
	const newArray = [...array];
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	return newArray;
};

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

	// Filter images based on category if provided
	if (category) {
		images = images.filter((image) => image.category === category);
	}

	images = shuffleArray(images);

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
						>
							<motion.img
								initial={{ opacity: 0, x: "100%" }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: "100%" }}
								transition={transition1}
								src={getImageUrl(image.imageAddress)}
								alt={image.title}
								className="absolute inset-0 object-cover hover:scale-110 transition-all duration-1000"
							/>
						</div>
					))}
				</Masonry>
			</ResponsiveMasonry>
		</div>
	);
};

export default PhotoGallery;

/* <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
{images.map((image) => (
    <li
        className="flex flex-col mx-3 my-3 p-4 border border-black/10 shadow-sm rounded-xl"
        key={image.id}
    >
        <img
            src={getImageUrl(image.imageAddress)}
            alt={image.title}
            className="w-full object-cover"
        />
    </li>
))}
</ul> */
