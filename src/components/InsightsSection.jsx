import React from "react";
import ChatIcon from "../assets/shared/chat.svg";
import BarGraph from "../assets/shared/bargraph.svg";
import Increase from "../assets/shared/increase.svg";
import {
	Line,
	Bar,
	ComposedChart,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	BarChart,
} from "recharts";

const mockData = {
	consultations: [
		{ day: "Mon", Incoming: 30, Answered: 25, Experts_Online: 15 },
		{ day: "Tue", Incoming: 35, Answered: 30, Experts_Online: 12 },
		{ day: "Wed", Incoming: 40, Answered: 28, Experts_Online: 18 },
		{ day: "Thu", Incoming: 48, Answered: 46, Experts_Online: 36 },
		{ day: "Fri", Incoming: 45, Answered: 35, Experts_Online: 16 },
		{ day: "Sat", Incoming: 38, Answered: 32, Experts_Online: 14 },
		{ day: "Sun", Incoming: 42, Answered: 37, Experts_Online: 17 },
	],
	vsPastPeriod: [
		{ label: "This week", Consultations: 100, Orders_Closed: 75 },
		{ label: "Last week", Consultations: 80, Orders_Closed: 60 },
	],
	forecasts: {
		salesIncrease: 15,
		consultationIncrease: 20,
	},
};

const Dashboard = () => {
	return (
		<div className="flex flex-col lg:flex-row gap-8 p-8">
			{/* Consultations Chart */}
			<div className="bg-white p-6 rounded-lg shadow-md min-w-[45%] flex-1 ">
				<h3 className="text-lg flex gap-2 pl-8 font-semibold mb-4">
					<img
						className="text-secondary-filter"
						src={ChatIcon}
						alt="consultations"
					/>
					<span className="text-text_secondary">Consultations</span>
				</h3>
				<ResponsiveContainer width="100%" height={300}>
					<ComposedChart data={mockData.consultations}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="day" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line
							type="step"
							dataKey="Incoming"
							stroke="#8A94A6"
							strokeWidth={1}
						/>
						<Line
							type="bump"
							dataKey="Answered"
							stroke="#15B79F"
							strokeWidth={1}
						/>
						<Bar dataKey="Experts_Online" fill="#FFF3C6" />
					</ComposedChart>
				</ResponsiveContainer>
			</div>

			<div className="flex flex-1 gap-2">
				{/* VS Past Period Chart */}
				<div className="bg-white p-6 rounded-lg shadow-md min-w-[55%] flex-1">
					<h3 className="text-lg flex gap-2 font-semibold mb-4 pl-8">
						<img src={BarGraph} alt="consultations" />
						<span className="text-text_secondary">
							VS Past Period
						</span>
					</h3>
					<ResponsiveContainer width="100%" height={300}>
						<BarChart data={mockData.vsPastPeriod}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="label" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="Consultations" fill="#CCFBEF" />
							<Bar dataKey="Orders_Closed" fill="#134E48" />
						</BarChart>
					</ResponsiveContainer>
				</div>

				{/* Forecasts Panel */}
				<div className="green-card  text-[#fff] text-sm p-6 rounded-2xl shadow-md flex flex-col justify-center items-center">
					<h3 className="text-lg flex gap-2 font-semibold mb-16">
						<img
							className="success-light-filter"
							src={ChatIcon}
							alt="forecasts"
						/>
						<span className="text-success_light">Forecasts</span>
					</h3>
					<div className="mb-4">
						<p className="flex justify-between mb-4">
							<span className="text-5xl font-medium">
								+ {mockData.forecasts.salesIncrease}%
							</span>
							<img
								style={{ filter: "invert(1)" }}
								className="mb-4 w-8 h-8"
								src={Increase}
								alt="increase"
							/>
						</p>
						<p>
							Forecasted increase in your sales closed by the end
							of the current month
						</p>
					</div>
					<div>
						<p className="flex justify-between mb-4">
							<span className="text-5xl font-medium">
								+ {mockData.forecasts.consultationIncrease}%
							</span>
							<img
								style={{ filter: "invert(1)" }}
								className="mb-4 w-8 h-8"
								src={Increase}
								alt="increase"
							/>
						</p>
						<p>
							Forecasted increase in consultations by the end of
							the current month
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
