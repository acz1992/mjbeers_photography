import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { Variants } from "../utils/CustomProps";
import Logo from "/logo/mjblogo.png";
import Socials from "./Socials";
import Footer from "./Footer";
/* import DarkModeToggle from "./DarkModeToggle"; */
import SlidingToggle from "./SlidingToggle";

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

const menuItems = [
	{ title: "Home", link: "/" },
	{ title: "About", link: "/about" },
	{ title: "Landscape", link: "/landscape" },
	{ title: "Portraits", link: "/portraits" },
	{ title: "Wedding", link: "/wedding" },
	{ title: "Contact", link: "/contact" },
];

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const navigationRef = useRef<HTMLDivElement>(null);

	const handleCloseMenu = () => {
		setOpenMenu(false);
	};

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				navigationRef.current &&
				!navigationRef.current.contains(event.target as Node)
			) {
				setOpenMenu(false);
			}
		};

		document.body.addEventListener("click", handleOutsideClick);

		return () => {
			document.body.removeEventListener("click", handleOutsideClick);
		};
	}, []);

	return (
		<header
			className="laptop:hidden fixed w-full top-0 z-50 shadow-md bg-background dark:bg-background-dark"
			ref={navigationRef}
		>
			<div className="flex items-center justify-between px-4 pt-1 pb-2">
				<Link to={"/"} className="max-w-[60px]">
					<img src={Logo} alt="Logo" />
				</Link>
				<SlidingToggle />
				<div onClick={() => setOpenMenu(true)}>
					<CgMenuRight className="text-3xl cursor-pointer transition-transform transform-gpu hover:scale-110" />
				</div>
			</div>
			{openMenu && (
				<motion.div
					variants={menuVariants}
					initial="hidden"
					animate="show"
					className="shadow-2xl w-4/6 fixed top-0 right-0 max-w-xs h-screen z-50"
				>
					<div
						onClick={handleCloseMenu}
						className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer transition-transform transform-gpu hover:scale-110"
					>
						<IoMdClose />
					</div>
					<div className="flex flex-col justify-center items-center h-full gap-24 tablet:gap-40 bg-background dark:bg-background-dark">
						<ul className="flex flex-col justify-center items-center gap-y-8 font-secondary font-semibold text-3xl">
							{menuItems.map((item, index) => (
								<Link
									key={index}
									onClick={handleCloseMenu}
									to={item.link}
									className="group transition duration-300 relative"
								>
									{item.title}
									<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-primary-dark"></span>
								</Link>
							))}
						</ul>
						<Socials />
					</div>
					<Footer />
				</motion.div>
			)}
		</header>
	);
};

export default Header;
