import { motion } from "framer-motion";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { Variants } from "../utils/CustomProps";

const menuVariants: Variants = {
	hidden: {
		x: "100%",
	},
	show: {
		x: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.9],
		},
	},
};

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<header className="bg-orange-200 laptop:hidden ">
			<div className="flex items-center justify-between px-4 pt-1 pb-2">
				{/* Logo */}
				<Link to={"/"}>
					<img
						src="src/assets/images/header/logo-nobg.png"
						alt="Logo"
						className="h-14"
					/>
				</Link>
				<div
					onClick={() => setOpenMenu(true)}
					className="text-3xl cursor-pointer"
				>
					<CgMenuRight />
				</div>
			</div>

			{/* Menu */}
			<motion.div
				variants={menuVariants}
				initial="hidden"
				animate={openMenu ? "show" : ""}
				className="bg-orange-200 shadow-2xl w-5/6 absolute top-0 right-0 max-w-xs h-screen z-20"
			>
				{/* Icon */}
				<div
					onClick={() => setOpenMenu(false)}
					className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
				>
					<IoMdClose />
				</div>
				{/* Menu List */}
				<ul className="h-full flex flex-col justify-center items-center gap-y-8 font-secondary font-semibold text-3xl ">
					<li onClick={() => setOpenMenu(false)}>
						<Link to="/">Home</Link>
					</li>
					<li onClick={() => setOpenMenu(false)}>
						<Link to="/about">About</Link>
					</li>
					<li onClick={() => setOpenMenu(false)}>
						<Link to="/landscape">Landscape</Link>
					</li>
					<li onClick={() => setOpenMenu(false)}>
						<Link to="/portraits">Portraits</Link>
					</li>
					<li onClick={() => setOpenMenu(false)}>
						<Link to="/wedding">Wedding</Link>
					</li>
					<li onClick={() => setOpenMenu(false)}>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</motion.div>
		</header>
	);
};

export default Header;
