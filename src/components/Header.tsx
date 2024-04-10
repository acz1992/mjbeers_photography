import { motion } from "framer-motion";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { Variants } from "../utils/CustomProps";
import Logo from "/logo/mjblogo.png";

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

	const handleCloseMenu = () => {
		setOpenMenu(false);
	};

	return (
		<header className="laptop:hidden fixed w-full top-0 z-50 shadow-md">
			<div className="flex items-center justify-between px-4 pt-1 pb-2">
				<Link to={"/"} className="max-w-[60px]">
					<img src={Logo} alt="" />
				</Link>
				<div
					onClick={() => setOpenMenu(true)}
					className="text-3xl cursor-pointer"
				>
					<CgMenuRight />
				</div>
			</div>
			{openMenu && (
				<motion.div
					variants={menuVariants}
					initial="hidden"
					animate="show"
					className="shadow-2xl w-5/6 fixed top-0 right-0 max-w-xs h-screen z-50"
				>
					<div
						onClick={handleCloseMenu}
						className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
					>
						<IoMdClose />
					</div>
					<ul className="h-full flex flex-col justify-center items-center gap-y-8 font-secondary font-semibold text-3xl">
						{menuItems.map((item, index) => (
							<li key={index} onClick={handleCloseMenu}>
								<Link to={item.link}>{item.title}</Link>
							</li>
						))}
					</ul>
				</motion.div>
			)}
		</header>
	);
};

export default Header;
