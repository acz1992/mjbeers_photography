import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { getPhotos } from "../data/photo";
import { getImageUrl } from "../utils/image-utils";

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
	let images = getPhotos();

	// Filter images based on category if provided
	if (category) {
		images = images.filter((image) => image.category === category);
	}

	images = shuffleArray(images);

	return (
		<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
			<Masonry>
				{images.map((image, i) => (
					<img
						key={i}
						src={getImageUrl(image.imageAddress)}
						style={{ width: "100%", display: "block" }}
						alt={image.title}
					/>
				))}
			</Masonry>
		</ResponsiveMasonry>
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
