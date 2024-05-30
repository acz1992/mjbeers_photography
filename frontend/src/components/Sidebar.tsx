import { Link } from "react-router-dom";
import Socials from "./Socials";
import Footer from "./Footer";
import Logo from "/logo/mjblogo.png";
import SlidingToggle from "./SlidingToggle";

type Link = {
	path: string;
	label: string;
};

const links: Link[] = [
	{ path: "/", label: "Home" },
	{ path: "/about", label: "About" },
	{ path: "/landscape", label: "Landscape" },
	{ path: "/portraits", label: "Portraits" },
	{ path: "/wedding", label: "Wedding" },
	{ path: "/contact", label: "Contact" },
];

const Sidebar = () => {
	return (
		<nav className="hidden laptop:fixed pl-10 h-screen laptop:flex flex-col items-center justify-center bg-background dark:bg-background-dark">
			<div className="flex flex-col mb-6 gap-8">
				{/* Logo */}
				<div className="">
					<Link to={"/"}>
						<img src={Logo} alt="Logo" className="h-40" />
					</Link>
				</div>

				<div className="flex flex-col gap-5 font-size-[15px] mb-10 mr-9">
					{links.map((link, index) => (
						<Link
							key={index}
							to={link.path}
							className="group transition duration-300"
						>
							{link.label}
							<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-primary-dark"></span>
						</Link>
					))}
				</div>
				<Socials />
			</div>
			<SlidingToggle />
			<Footer />
		</nav>
	);
};

export default Sidebar;
