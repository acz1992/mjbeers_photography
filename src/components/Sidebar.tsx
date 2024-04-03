import { Link } from "react-router-dom";
import Socials from "./Socials";

const Sidebar = () => {
	return (
		/* w-1/5  */
		<nav className="hidden w-full h-screen bg-orange-200 laptop:flex flex-col justify-between items-center ">
			<div className="">
				<div className="">
					<Link to={"/"}>
						<img
							src="src/assets/images/header/logo-nobg.png"
							alt="Logo"
							className="h-40"
						/>
					</Link>
				</div>
				<div className="flex flex-col gap-6 font-size-[15px] mb-36">
					<Link to={"/"} className="hover:opacity-50 transition">
						Home
					</Link>
					<Link to={"/about"} className="hover:opacity-50 transition">
						About
					</Link>
					<Link
						to={"/landscape"}
						className="hover:opacity-50 transition"
					>
						Landscape
					</Link>
					<Link
						to={"/portraits"}
						className="hover:opacity-50 transition"
					>
						Portraits
					</Link>
					<Link
						to={"/contact"}
						className="  hover:opacity-50 transition"
					>
						Contact
					</Link>
				</div>
				<Socials />
			</div>
		</nav>
	);
};

export default Sidebar;
