/* import Masonry from "react-responsive-masonry"; */
import { getPhotos } from "../data/photo";
import { getImageUrl } from "../utils/image-utils";

const PhotoGallery = () => {
	const images = getPhotos();

	return (
		<ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
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
		</ul>
	);
};

export default PhotoGallery;
