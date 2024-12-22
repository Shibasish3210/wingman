import { NavLink } from "react-router";
import PropTypes from "prop-types";

const SidebarLinks = ({ icon, path }) => {
	return (
		<NavLink to={path} className={"hover:bg-[#fff] rounded-lg max-h-8 p-2"}>
			{icon}
		</NavLink>
	);
};
SidebarLinks.propTypes = {
	icon: PropTypes.node.isRequired,
	path: PropTypes.string.isRequired,
};

export default SidebarLinks;
