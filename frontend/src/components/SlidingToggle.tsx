import { FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

const SlidingToggle: React.FC = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<div
			className="relative flex items-center justify-between w-16 h-8 p-1 bg-gray-300 dark:bg-gray-700 rounded-full cursor-pointer"
			onClick={toggleDarkMode}
		>
			<FaMoon
				className={`absolute right-1 text-gray-600 transition-opacity ${
					isDarkMode ? "opacity-0" : "opacity-100"
				}`}
			/>
			<FaSun
				className={`absolute left-1 text-yellow-500 transition-opacity ${
					isDarkMode ? "opacity-100" : "opacity-0"
				}`}
			/>
			<div
				className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
					isDarkMode ? "translate-x-8" : "translate-x-0"
				}`}
			></div>
		</div>
	);
};

export default SlidingToggle;
