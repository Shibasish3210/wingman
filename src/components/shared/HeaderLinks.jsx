import { NavLink } from "react-router";
import PropTypes from "prop-types";

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
HeaderLinks.propTypes = {
	icon: PropTypes.node,
	text: PropTypes.string,
	path: PropTypes.string.isRequired,
};

export default HeaderLinks;
