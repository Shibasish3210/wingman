import { createContext, useMemo, useReducer } from "react";

const possibleSortingOrders = ["Name", "Date", "Order_Value", "Commission"];
const possibleTimeOptions = [
	"7 days",
	"15 days",
	"30 days",
	"90 days",
	"180 days",
];

const InitialState = {
	time: {
		selectedValue: possibleTimeOptions[0],
		open: false,
		options: possibleTimeOptions,
	},
	sort: {
		selectedValue: possibleSortingOrders[0],
		open: false,
		options: possibleSortingOrders,
	},
};

const DropDownReducer = (state, action) => {
	switch (action.type) {
		case "TOGGLE_TIME_DROPDOWN":
			return {
				...state,
				time: {
					...state.time,
					open: !state.time.open,
				},
			};
		case "SELECT_TIME_OPTION":
			return {
				...state,
				time: {
					...state.time,
					open: false,
					selectedValue: action.payload,
				},
			};
		case "TOGGLE_SORT_DROPDOWN":
			return {
				...state,
				sort: {
					...state.sort,
					open: !state.sort.open,
				},
			};
		case "SELECT_SORT_OPTION":
			return {
				...state,
				sort: {
					...state.sort,
					open: false,
					selectedValue: action.payload,
				},
			};
		default:
			return state;
	}
};

export const DropDownContext = createContext(null);

const DropDownContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(DropDownReducer, InitialState);
	const ContextValue = useMemo(
		() => ({ state, dispatch }),
		[state, dispatch],
	);

	return (
		<DropDownContext.Provider value={ContextValue}>
			{children}
		</DropDownContext.Provider>
	);
};

export default DropDownContextProvider;
