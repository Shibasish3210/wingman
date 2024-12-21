import React from "react";
import StatsCards from "../components/StatsCards";
import InsightsSection from "../components/InsightsSection";
import OrdersTable from "../components/OrdersTable";
import Header from "../components/structured/Header";
import ProductContextProvider from "../context/ProductContext";
import DropDownContextProvider from "../context/DropDownContext";

const Summary = () => {
	return (
		<div className="w-screen h-screen overflow-y-auto no-scrollbar">
			<Header />
			<DropDownContextProvider>
				<ProductContextProvider>
					<div className="summary-container">
						<StatsCards />
						<InsightsSection />
						<OrdersTable />
					</div>
				</ProductContextProvider>
			</DropDownContextProvider>
		</div>
	);
};

export default Summary;
