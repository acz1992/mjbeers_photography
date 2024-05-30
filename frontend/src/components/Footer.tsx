import React from "react";

const Footer: React.FC = () => {
	// Specify the component as React functional component
	return (
		<div className="text-black dark:text-primary-dark w-full py-4 text-xs  font-thin flex justify-center absolute bottom-0">
			Made by &nbsp;
			<a
				href="https://github.com/acz1992"
				className="hover:text-gray-400"
			>
				Adam Zdan-Michajlowicz
			</a>
		</div>
	);
};

export default Footer;
