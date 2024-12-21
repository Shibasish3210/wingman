import Increase from "../assets/shared/increase.svg";
import Decrease from "../assets/shared/decrease.svg";
import Chat from "../assets/shared/chat.svg";
import Sales from "../assets/shared/sales.svg";
import Conversion from "../assets/shared/tick.svg";
import Orders from "../assets/shared/order-multiple.svg";
import Order from "../assets/shared/order-single.svg";
import Commission from "../assets/shared/piggybank.svg";
import Dropdown from "./shared/Dropdown";
const stats = [
	{
		title: "Consultations",
		value: "24",
		change: 15,
		color: "text-green-600",
		icon: Chat,
	},
	{
		title: "Orders Placed",
		value: "12",
		change: -15,
		color: "text-red-600",
		icon: Sales,
	},
	{
		title: "Conversion",
		value: "50",
		change: -15,
		color: "text-red-600",
		icon: Conversion,
	},
	{
		title: "Total Sales Value",
		value: "$ 2,400",
		change: 15,
		color: "text-red-600",
		icon: Orders,
	},
	{
		title: "Avg Order Value",
		value: "$ 240",
		change: 15,
		color: "text-red-600",
		icon: Order,
	},
	{
		title: "Commissions Paid",
		value: "$ 240",
		change: 15,
		color: "text-red-600",
		icon: Commission,
	},
];
// const options = ["7 days", "15 days", "30 days", "90 days", "180 days"];
const StatsCards = () => {
	return (
		<div className="p-4">
			<div className="flex justify-between mb-2">
				<h1 className="text-2xl font-medium text-text_primary mb-4">
					At a glance
				</h1>
				<Dropdown type="time" />
			</div>
			<div className=" grid grid-cols-2 md:grid-cols-3  gap-4 text-text_secondary">
				{stats.map((stat) => (
					<div
						key={stat.title}
						className="p-6 flex flex-col gap-1 bg-white rounded-lg card-shadow"
					>
						<h3 className="text-gray-500 text-xs font-semibold flex items-center gap-2">
							<img
								className="w-3 h-3 text-secondary-filter"
								src={stat.icon}
								alt={stat.title}
							/>
							<span>{stat.title}</span>
						</h3>
						<p className="text-3xl font-medium text-text_primary">
							{stat.value}
						</p>
						<p className={`text-sm flex gap-1 pt-1`}>
							<img
								src={stat.change > 0 ? Increase : Decrease}
								alt={stat.change > 0 ? "increase" : "decrease"}
							/>
							{stat.change > 0 ? (
								<>
									<span className="text-success_primary ml-2">{`${stat.change}%`}</span>{" "}
									<span>increase</span>
								</>
							) : (
								<>
									<span className="text-error_main ml-2">{`${Math.abs(
										stat.change,
									)}%`}</span>{" "}
									<span>decrease</span>
								</>
							)}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default StatsCards;
