import PhotoGallery from "../components/PhotoGallery";
import { motion } from "framer-motion";
import { transition1 } from "../utils/transitions";

const Home = () => {
	return (
		<section className="section">
			{/* <PhotoGrid /> */}
			<PhotoGallery />
		</section>
	);
};

export default Home;
/* 
<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={transition1}
			className="section"
		></motion.section> */
