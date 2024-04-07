import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AnimRoutes from "./components/AnimRoutes";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Router>
				<div className="laptop:grid grid-col-2 grid-cols-[200px] bg-background">
					<Header />
					<Sidebar />
					<div className="pages-container laptop:col-start-2">
						<AnimRoutes />
					</div>
				</div>
			</Router>
		</>
	);
}

export default App;
