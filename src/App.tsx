import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AnimRoutes from "./components/AnimRoutes";

function App() {
	return (
		<>
			<Router>
				<Sidebar />

				<div className="pages-container">
					<AnimRoutes />
				</div>
			</Router>
		</>
	);
}

export default App;
