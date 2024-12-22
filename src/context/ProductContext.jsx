import { useMemo, useReducer } from "react";
import PropTypes from "prop-types";
import products from "./data.js";
import { ProductContext } from "./contexts.jsx";

let rawProducts = products.toSorted((a, b) => a.name.localeCompare(b.name));

const InitialState = {
	loading: true,
	products: [],
	currentPage: 0,
	allProducts: products,
	totalLength: 0,
	error: null,
	isAscending: true,
};

const ReturnInitialProducts = (state, rawProducts, isAscending) => {
	return {
		...state,
		products: rawProducts.slice(0, 5),
		allProducts: rawProducts.slice(0, 5),
		totalLength: rawProducts.length,
		currentPage: 1,
		loading: false,
		isAscending,
	};
};

const ProductReducer = (state, action) => {
	switch (action.type) {
		case "FETCH_INITIAL_PRODUCTS":
			return state.allProducts.length === state.totalLength
				? state
				: ReturnInitialProducts(state, rawProducts, true);
		case "FETCH_REMAINING_PRODUCTS": {
			return state.allProducts.length === state.totalLength
				? {
						...state,
						products: rawProducts.slice(
							(action.payload - 1) * 5,
							action.payload * 5,
						),
						currentPage: action.payload,
				  }
				: {
						...state,
						products: rawProducts.slice(
							(action.payload - 1) * 5,
							action.payload * 5,
						),
						allProducts: state.allProducts.concat(
							rawProducts.slice(
								(action.payload - 1) * 5,
								action.payload * 5,
							),
						),
						currentPage: action.payload,
				  };
		}
		case "SORT_NAME_ASC": {
			rawProducts = rawProducts.sort((a, b) =>
				a.name.localeCompare(b.name),
			);
			return ReturnInitialProducts(state, rawProducts, true);
		}
		case "SORT_NAME_DESC": {
			rawProducts = rawProducts.sort((a, b) =>
				b.name.localeCompare(a.name),
			);
			return ReturnInitialProducts(state, rawProducts);
		}
		case "SORT_DATE_ASC": {
			rawProducts = rawProducts.sort((a, b) => a.date - b.date);
			return ReturnInitialProducts(state, rawProducts, true);
		}
		case "SORT_DATE_DESC": {
			rawProducts = rawProducts.sort((a, b) => b.date - a.date);
			return ReturnInitialProducts(state, rawProducts, false);
		}

		case "SORT_ORDER_VALUE_ASC": {
			rawProducts = rawProducts.sort(
				(a, b) => a.orderValue - b.orderValue,
			);
			return ReturnInitialProducts(state, rawProducts, true);
		}
		case "SORT_ORDER_VALUE_DESC": {
			rawProducts = rawProducts.sort(
				(a, b) => b.orderValue - a.orderValue,
			);
			return ReturnInitialProducts(state, rawProducts, false);
		}
		case "SORT_COMMISSION_ASC": {
			rawProducts = rawProducts.sort(
				(a, b) => a.commission - b.commission,
			);
			return ReturnInitialProducts(state, rawProducts, true);
		}
		case "SORT_COMMISSION_DESC": {
			rawProducts = rawProducts.sort(
				(a, b) => b.commission - a.commission,
			);
			return ReturnInitialProducts(state, rawProducts, false);
		}
		case "TOGGLE_SORT_ORDER": {
			return {
				...state,
				isAscending: !state.isAscending,
			};
		}
		default:
			return state;
	}
};

const ProductContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ProductReducer, InitialState);

	const contextValue = useMemo(
		() => ({ state, dispatch }),
		[state, dispatch],
	);
	return (
		<ProductContext.Provider value={contextValue}>
			{children}
		</ProductContext.Provider>
	);
};
ProductContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ProductContextProvider;
