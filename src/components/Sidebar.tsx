import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<nav className="hidden laptop:flex">
			<div>
				<Link to={"/"}>
					<img
						src="src/assets/images/header/logo-nobg.png"
						alt="Logo"
					/>
				</Link>
			</div>
		</nav>
	);
};

export default Sidebar;
