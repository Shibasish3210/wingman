import HeaderLinks from "../shared/HeaderLinks";
import Summary from "../../assets/header/summary.svg";
import Chat from "../../assets/header/chat.svg";
import Sales from "../../assets/shared/sales.svg";

const Header = () => {
	return (
		<div className="flex space-x-6 pl-8 p-4 bg-white shadow max-h-fit w-full">
			<HeaderLinks
				path={"/"}
				text={"Summary"}
				icon={
					<img
						className="nav-icon text-disabled-filter"
						src={Summary}
						alt="summary"
					/>
				}
			/>
			<HeaderLinks
				path={"/sales"}
				text={"Sales"}
				icon={
					<img
						className="nav-icon text-disabled-filter"
						src={Sales}
						alt="summary"
					/>
				}
			/>
			<HeaderLinks
				path={"/chats"}
				text={"Chats"}
				icon={
					<img
						className="nav-icon text-disabled-filter"
						src={Chat}
						alt="summary"
					/>
				}
			/>
		</div>
	);
};

export default Header;
