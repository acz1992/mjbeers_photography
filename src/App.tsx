import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AnimRoutes from "./components/AnimRoutes";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Router>
				<div className="laptop:flex">
					<Header />
					<Sidebar />
					<div className="pages-container w-full">
						<AnimRoutes />
					</div>
				</div>
			</Router>
		</>
	);
}

export default App;
