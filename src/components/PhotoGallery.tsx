import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyLoad from "react-lazyload";
import { getPhotos } from "../data/photo";
import { getImageUrl } from "../utils/image-utils";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { RotatingSquare } from "react-loader-spinner";

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
	const allImages = getPhotos();
	const [images, setImages] = useState<Image[]>([]);
	const [hasMore] = useState(true);
	const [index, setIndex] = useState(-1);
	const [uniqueDimensions, setUniqueDimensions] = useState<{
		[key: string]: { width: number; height: number };
	}>({});

	// Filter images based on category if provided
	const filteredImages = category
		? allImages.filter((image) => image.category === category)
		: allImages;

	const ITEMS_PER_LOAD = 1000;

	// Load more images function to repeat images
	const loadMoreImages = () => {
		const nextImages = filteredImages.slice(0, ITEMS_PER_LOAD);
		setImages((prevImages) => [...prevImages, ...nextImages]);
	};

	// Load initial images and dimensions
	useEffect(() => {
		setImages([]); // Clear images when category changes
		loadMoreImages();
		window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on category change
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category]);

	useEffect(() => {
		const fetchDimensions = async () => {
			const dimensions = await getUniqueDimensions(images);
			setUniqueDimensions(dimensions);
		};
		fetchDimensions();
	}, [images]);

	const handleClick = (index: number) => setIndex(index);

	return (
		<div className="px-6 laptop:px-16">
			<style>
				{`
				@keyframes fadeIn {
					to {
						opacity: 1;
					}
				}
				`}
			</style>
			<InfiniteScroll
				dataLength={images.length}
				next={loadMoreImages}
				hasMore={hasMore}
				loader={
					<div className="flex justify-center items-center h-screen">
						<RotatingSquare
							height={160}
							width={160}
							color="#000000"
							ariaLabel="rotating-square-loading"
						/>
					</div>
				}
			>
				<ResponsiveMasonry
					columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}
				>
					<Masonry gutter={"10px"}>
						{images.map((image, i) => (
							<div
								key={`${image.id}-${i}`} // Ensure unique keys for repeated images
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
								<LazyLoad
									height={uniqueDimensions[image.id]?.height}
									offset={100}
									once
									placeholder={
										<div
											style={{
												width: "100%",
												paddingBottom: `${
													(uniqueDimensions[image.id]
														?.height /
														uniqueDimensions[
															image.id
														]?.width) *
													100
												}%`,
												backgroundColor: "#e0e0e0",
											}}
										/>
									}
								>
									<img
										src={getImageUrl(image.imageAddress)}
										alt={image.title}
										className="align-bottom absolute inset-0 object-cover hover:scale-110 transition-all duration-1000"
										style={{
											opacity: 0,
											animation: "fadeIn 1s forwards",
										}}
									/>
								</LazyLoad>
							</div>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</InfiniteScroll>
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
