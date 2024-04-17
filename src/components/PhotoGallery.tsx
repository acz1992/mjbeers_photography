import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { getPhotos } from "../data/photo";
import { getImageUrl } from "../utils/image-utils";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useEffect, useState } from "react";
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

const shuffleArray = (array: Image[]) => {
	const newArray = [...array];
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	return newArray;
};

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ category }) => {
	const originalImages = getPhotos();
	const [shuffledImages, setShuffledImages] = useState<Image[]>([]);
	const [uniqueDimensions, setUniqueDimensions] = useState<{
		[key: string]: { width: number; height: number };
	}>({});
	const [index, setIndex] = useState(-1);

	useEffect(() => {
		// Shuffle the images array and store it as state
		setShuffledImages(shuffleArray(originalImages));
	}, [originalImages]);

	useEffect(() => {
		// Fetch unique dimensions
		const fetchDimensions = async () => {
			const dimensions = await getUniqueDimensions(originalImages);
			setUniqueDimensions(dimensions);
		};
		fetchDimensions();
	}, [originalImages]);

	const getUniqueDimensions = async (images: Image[]) => {
		const dimensions: { [key: string]: { width: number; height: number } } =
			{};

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
	const handleClick = (index: number) => {
		// FInd index of clicked image in original array
		const originalIndex = originalImages.findIndex(
			(image) => image.id === shuffledImages[index].id
		);
		// Set index state to original index
		setIndex(originalIndex);
	};

	// Filter images based on category if provided
	const images = category
		? shuffledImages.filter((image) => image.category === category)
		: shuffledImages;

	return (
		<div className="px-6 laptop:px-16 ">
			<ResponsiveMasonry
				columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}
			>
				<Masonry gutter={"10px"}>
					{images.map((image, i) => (
						<LazyLoad height={200} key={i} once>
							<div
								className="relative overflow-hidden"
								style={{
									width: "100%",
									paddingBottom: `${
										(uniqueDimensions[image.id]?.height /
											uniqueDimensions[image.id]?.width) *
										100
									}%`,
								}}
								onClick={() => handleClick(i)}
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
				slides={originalImages.map((image) => ({
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
