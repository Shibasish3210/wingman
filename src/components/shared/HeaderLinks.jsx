import React from "react";
import { NavLink } from "react-router";

const HeaderLinks = ({ icon, text, path }) => {
	return (
		<NavLink
			to={path}
			className={
				"text-text_disabled hover:bg-success_light rounded-full max-h-8 flex items-center gap-2 px-3 py-[2px]"
			}
		>
			{icon}
			{text && <p>{text}</p>}
		</NavLink>
	);
};

export default HeaderLinks;
