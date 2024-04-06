import Masonry from "react-responsive-masonry";
import { getPhotos } from "../data/photo";
import { getImageUrl } from "../utils/image-utils";

interface Image {
	id: string;
	title: string;
	description: string;
	category: string;
	imageAddress: string;
}

const shuffleArray = (array: Image[]) => {
	const newArray = [...array];
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	return newArray;
};

const PhotoGallery = () => {
	const images = shuffleArray(getPhotos());

	return (
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
