import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AnimRoutes from "./components/AnimRoutes";
import Header from "./components/Header";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
	return (
		<DarkModeProvider>
			<Router>
				<div className="laptop:grid grid-cols-2 grid-cols-[200px] min-h-screen bg-background dark:bg-background-dark dark:text-primary-dark">
					<Header />
					<Sidebar />
					<div className="pages-container laptop:col-start-2">
						<AnimRoutes />
					</div>
				</div>
			</Router>
		</DarkModeProvider>
	);
}

export default App;
