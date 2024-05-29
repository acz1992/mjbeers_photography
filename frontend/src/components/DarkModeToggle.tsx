import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

const DarkModeToggle = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<button
			onClick={toggleDarkMode}
			className="p-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
		>
			{isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
		</button>
	);
};

export default DarkModeToggle;
