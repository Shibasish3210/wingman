import Logo from "../../assets/sidebar/logo.svg";
import Settings from "../../assets/sidebar/settings.svg";
import Home from "../../assets/sidebar/home.svg";
import People from "../../assets/sidebar/people.svg";
import Chat from "../../assets/shared/chat.svg";
import SidebarLinks from "../shared/SidebarLinks";

const Sidebar = () => {
	return (
		<div className="flex flex-col bg-success_dark h-screen justify-between w-12 px-1 py-2">
			<div className="top flex flex-col gap-6">
				<img src={Logo} className="logo" alt="wingman" />
				<div className="navMenu flex flex-col gap-4 max-h-24 order-3 border-t-[1px] w-fit m-auto pt-4">
					<SidebarLinks
						path="/"
						icon={
							<img
								className="side-nav-icon"
								src={Home}
								alt="home"
							/>
						}
					/>
					<SidebarLinks
						path="/chats"
						icon={
							<img
								className="side-nav-icon"
								src={Chat}
								alt="chat"
							/>
						}
					/>
					<SidebarLinks
						path="/people"
						icon={
							<img
								className="side-nav-icon"
								src={People}
								alt="people"
							/>
						}
					/>
				</div>
			</div>
			<div className="bottom settings flex w-full justify-center">
				<SidebarLinks
					path="/settings"
					icon={
						<img
							className="side-nav-icon"
							src={Settings}
							alt="settings"
						/>
					}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
