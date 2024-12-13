import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyLoad from "react-lazyload";
import { getPhotos } from "../sanity/client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { RotatingSquare } from "react-loader-spinner";

interface Image {
	_id: string;
	title: string;
	description: string;
	category: string[];
	imageAddress: string;
}

interface PhotoGalleryProps {
	category?: string;
}

const getUniqueDimensions = async (images: Image[]) => {
	const dimensions: { [key: string]: { width: number; height: number } } = {};

	await Promise.all(
		images.map(async (image) => {
			const img = new Image();
			img.src = image.imageAddress;
			await new Promise((resolve) => {
				img.onload = () => {
					dimensions[image._id] = {
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
	const [images, setImages] = useState<Image[]>([]);
	const [page, setPage] = useState(1);
	const [index, setIndex] = useState(-1);
	const [uniqueDimensions, setUniqueDimensions] = useState<{
		[key: string]: { width: number; height: number };
	}>({});

	useEffect(() => {
		const fetchData = async () => {
			const newImages = await getPhotos();
			const filteredImages = category
				? newImages.filter((image: Image) =>
						image.category.includes(category)
				  )
				: newImages;

			setImages((prevImages) => [...prevImages, ...filteredImages]);

			const dimensions = await getUniqueDimensions(filteredImages);
			setUniqueDimensions((prevDimensions) => ({
				...prevDimensions,
				...dimensions,
			}));
		};

		fetchData();
	}, [category, page]);

	const handleClick = (index: number) => setIndex(index);

	const loadMoreImages = () => {
		setPage((prevPage) => prevPage + 1);
	};

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
				hasMore={true} // Always set to true to enable infinite scrolling
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
								key={image._id}
								className="relative overflow-hidden"
								style={{
									width: "100%",
									paddingBottom: `${
										(uniqueDimensions[image._id]?.height /
											uniqueDimensions[image._id]
												?.width) *
										100
									}%`,
								}}
								onClick={() => handleClick(i)}
							>
								<LazyLoad
									height={uniqueDimensions[image._id]?.height}
									offset={100}
									once
									placeholder={
										<div
											style={{
												width: "100%",
												paddingBottom: `${
													(uniqueDimensions[image._id]
														?.height /
														uniqueDimensions[
															image._id
														]?.width) *
													100
												}%`,
												backgroundColor: "#e0e0e0",
											}}
										/>
									}
								>
									<img
										src={image.imageAddress}
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
					src: image.imageAddress,
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
