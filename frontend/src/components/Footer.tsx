import React from "react";

const Footer: React.FC = () => {
	return (
		<div className="text-black dark:text-primary-dark w-full py-4 text-xs  font-thin flex justify-center absolute bottom-0">
			Made by &nbsp;
			<a
				href="https://adammichajlowicz.vercel.app/"
				className="hover:text-gray-400"
			>
				Adam Zdan-Michajlowicz
			</a>
		</div>
	);
};

export default Footer;
