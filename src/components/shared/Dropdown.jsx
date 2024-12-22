import { useContext } from "react";
import PropTypes from "prop-types";
import DropdownIcon from "../../assets/shared/dropdown.svg";
import { DropDownContext, ProductContext } from "../../context/contexts";

const Dropdown = ({ type }) => {
	const { state, dispatch: dispatchDropdown } = useContext(DropDownContext);
	const { dispatch: dispatchProduct } = useContext(ProductContext);

	const { selectedValue, open: isOpen, options } = state[type];

	const toggleDropdown = (e, option) => {
		e.stopPropagation();
		dispatchDropdown({
			type: `SELECT_${type.toUpperCase()}_OPTION`,
			payload: option,
		});
		if (type === "sort") {
			dispatchProduct({
				type: `SORT_${option.toUpperCase()}_ASC`,
			});
		}
	};

	return (
		// dropdown button
		<div className="relative inline-block text-left">
			<div>
				<button
					key="toggle-dd"
					onClick={() =>
						dispatchDropdown({
							type: `TOGGLE_${type.toUpperCase()}_DROPDOWN`,
						})
					}
					type="button"
					className="flex items-center group w-[15ch] justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold border border-[#DCDFE4]  shadow-md hover:bg-success_light hover:text-text_secondary"
				>
					<span>
						{selectedValue.split("_").length > 1
							? selectedValue.split("_").join(" ")
							: selectedValue}
					</span>
					<img
						className={`${
							isOpen ? "rotate-180" : ""
						} text-secondary-filter`}
						src={DropdownIcon}
						alt="dropdown"
					/>
				</button>
			</div>

			{/* dropdown container */}
			{isOpen && (
				<div
					className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-xl outline-none bg-[#fff] border border-[#DCDFE4] p-2"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
				>
					<div className="py-1" role="none">
						{options?.map((option) => (
							<button
								key={option}
								onClick={(e) => toggleDropdown(e, option)}
								className={`${
									selectedValue === option
										? "bg-success_light text-text_primary"
										: "text-text_secondary"
								} block px-4 py-2 text-sm w-full border-t border-[#DCDFE4] hover:bg-success_light hover:text-text_primary rounded-md`}
								role="menuitem"
							>
								{option.split("_").length > 1
									? option.split("_").join(" ")
									: option}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
Dropdown.propTypes = {
	type: PropTypes.string.isRequired,
};

export default Dropdown;
