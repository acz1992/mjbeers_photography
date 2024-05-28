import React from "react";
import PhotoGallery from "../components/PhotoGallery";
import { motion } from "framer-motion";
import { transition1 } from "../utils/transitions";

const Home = () => {
	return (
		<motion.section
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0 }}
			transition={transition1}
		>
			<PhotoGallery category="home" />
		</motion.section>
	);
};

export default Home;
