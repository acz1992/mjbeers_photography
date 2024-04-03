import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		/* w-1/5  */
		<nav className="hidden w-full h-screen bg-orange-200 laptop:flex">
			<div>
				<Link to={"/"}>
					<img
						src="src/assets/images/header/logo-nobg.png"
						alt="Logo"
					/>
				</Link>{" "}
				*
			</div>
		</nav>
	);
};

export default Sidebar;
