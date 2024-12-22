import { useContext, useEffect } from "react";
import Dropdown from "./shared/Dropdown";
import DropdownIcon from "../assets/shared/dropdown.svg";
import Increase from "../assets/shared/increase.svg";
import Decrease from "../assets/shared/decrease.svg";
import moment from "moment";
import { DropDownContext, ProductContext } from "../context/contexts";

const OrdersTable = () => {
	const { state, dispatch } = useContext(ProductContext);
	const { state: dropDownState } = useContext(DropDownContext);

	const { loading, products, totalLength, currentPage, isAscending } = state;

	useEffect(() => {
		dispatch({ type: "FETCH_INITIAL_PRODUCTS" });
	}, [dispatch]);

	const handlePageChange = (index) => {
		const pageNumber = index + 1;
		dispatch({
			type: "FETCH_REMAINING_PRODUCTS",
			payload: pageNumber,
		});
	};

	const handlePreviousPage = () => {
		const pageNumber = currentPage > 1 ? currentPage - 1 : 4;
		dispatch({
			type: "FETCH_REMAINING_PRODUCTS",
			payload: pageNumber,
		});
	};

	const handleNextPage = () => {
		const totalPages = Math.floor(totalLength / 5);
		const pageNumber = currentPage < totalPages ? currentPage + 1 : 1;
		dispatch({
			type: "FETCH_REMAINING_PRODUCTS",
			payload: pageNumber,
		});
	};

	const toggleSortOrder = () => {
		const { sort } = dropDownState;
		const sortOrder = isAscending ? "DESC" : "ASC";

		const type = `SORT_${sort.selectedValue.toUpperCase()}_${sortOrder}`;
		dispatch({
			type,
		});
	};

	return (
		<div className="p-6 bg-white  rounded-lg">
			<div className="flex justify-between items-center mb-4">
				<h3 className="text-gray-700 font-semibold mb-4">Orders</h3>
				<div className="flex items-center gap-2 px-2">
					<Dropdown type="sort" />

					{isAscending ? (
						<button
							onClick={toggleSortOrder}
							className="bg-white p-3 rounded-md  shadow-lg border border-[#DCDFE4]  hover:bg-success_light group"
						>
							<img
								className="text-secondary-filter"
								src={Increase}
								alt="ascending"
							/>
						</button>
					) : (
						<button
							className="white_filter bg-white p-3 rounded-md  shadow-lg border border-[#DCDFE4]  hover:bg-success_light"
							onClick={toggleSortOrder}
						>
							<img
								className="text-secondary-filter"
								src={Decrease}
								alt="descending"
							/>
						</button>
					)}
				</div>
			</div>
			<div className="overflow-x-auto  rounded-md border border-[#DCDFE4]">
				<table className="whitespace-nowrap w-full text-left ">
					<thead className="border-b border-[#DCDFE4]">
						<tr className="text-text_disabled text-sm">
							<th className="p-2 font-normal">Product</th>
							<th className="p-2 font-normal text-center sm:text-left">
								Date
							</th>
							<th className="p-2 font-normal">Time Spent</th>
							<th className="p-2 font-normal">Order Value</th>
							<th className="p-2 font-normal">Commission</th>
						</tr>
					</thead>
					<tbody>
						{loading ? (
							<tr>
								<td>loading...</td>
							</tr>
						) : null}
						{products.length > 0
							? products.map((order) => (
									<tr
										key={order.productImage}
										className="text-gray-700 text-sm hover:bg-gray-100"
									>
										<td className="p-2">
											<div className="flex gap-2 items-center">
												<img
													className="w-6 h-6 bg-cover"
													src={order.productImage}
													alt={order.product}
												/>
												<span>{order.name}</span>
											</div>
										</td>
										<td className="p-2 flex flex-col gap-1 ml-3 sm:ml-0">
											<span className="block min-w-fit">
												{moment(order.date).format(
													"DD-MM-YYYY",
												)}
											</span>
											<span className="text-xs block min-w-fit">
												{moment(order.date).format(
													"hh : mm A",
												)}
											</span>
										</td>
										<td className="p-2">
											{order.timeSpent}
										</td>
										<td className="p-2">
											$ {order.orderValue}
										</td>
										<td className="p-2">
											$ {order.commission}
										</td>
									</tr>
							  ))
							: null}
					</tbody>
				</table>
				<div className="flex justify-center items-center gap-4 w-full min-w-fit p-2">
					<button onClick={() => handlePreviousPage()}>
						<img
							className="rotate-90 text-secondary-filter"
							src={DropdownIcon}
							alt="previous"
						/>
					</button>

					<div>
						{new Array(totalLength / 5).fill(0).map((_, index) => (
							<button
								className={`w-8 h-8   ${
									currentPage === index + 1
										? "bg-success_light text-text_primary border border-[#DCDFE4] rounded-full"
										: "text-text_secondary"
								}`}
								key={index}
								onClick={() => handlePageChange(index)}
							>
								{index + 1}
							</button>
						))}
					</div>

					<button onClick={() => handleNextPage()}>
						<img
							className="-rotate-90 text-secondary-filter"
							src={DropdownIcon}
							alt="next"
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default OrdersTable;
