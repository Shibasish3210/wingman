import Sidebar from "./components/structured/Sidebar";
import { Route, Routes } from "react-router";
import Summary from "./pages/summary";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import ChatBot from "./components/structured/ChatBot";

function App() {
	return (
		<div className="bg-gray-100 min-h-screen flex">
			<Sidebar />
			<Routes>
				<Route path="/" element={<Summary />} />
				<Route path="/chats" element={<ComingSoon />} />
				<Route path="/people" element={<ComingSoon />} />
				<Route path="/settings" element={<ComingSoon />} />
				<Route path="/sales" element={<ComingSoon />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
			<ChatBot />
		</div>
	);
}

export default App;
