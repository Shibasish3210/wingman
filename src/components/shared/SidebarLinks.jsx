import React from "react";
import { NavLink } from "react-router";

const SidebarLinks = ({ icon, path }) => {
	return (
		<NavLink to={path} className={"hover:bg-[#fff] rounded-lg max-h-8 p-2"}>
			{icon}
		</NavLink>
	);
};

export default SidebarLinks;
