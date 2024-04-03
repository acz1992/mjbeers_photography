import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AnimRoutes from "./components/AnimRoutes";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Router>
				<div className="laptop:grid flex grid-col-2 grid-cols-[15vw_85vw]">
					<Header />
					<Sidebar />
					<div className="pages-container col-start-2">
						<AnimRoutes />
					</div>
				</div>
			</Router>
		</>
	);
}

export default App;
