import Home from "../pages/Home";
import About from "../pages/About";
import Portraits from "../pages/Portraits";
import Landscape from "../pages/Landscape";
import Wedding from "../pages/Wedding";
import Contact from "../pages/Contact";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence initial={true} mode="wait">
			<Routes key={location.pathname} location={location}>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/portraits" element={<Portraits />} />
				<Route path="/landscape" element={<Landscape />} />
				<Route path="/wedding" element={<Wedding />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimRoutes;
