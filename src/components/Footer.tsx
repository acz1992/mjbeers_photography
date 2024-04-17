import React from "react";

const Footer = () => {
	return (
		<div className="text-black w-full py-4 text-xs tablet:text-base laptop:text-lg  font-semibold py-1 flex gap-5 justify-center">
			All rights reserved &copy; {new Date().getFullYear()}
			<a
				href="https://github.com/acz1992"
				className=" hover:text-gray-400"
			>
				Adam Zdan-Michajlowicz
			</a>
		</div>
	);
};

export default Footer;
