import React from "react";
import Header from "../components/structured/Header";

const ComingSoon = () => {
	return (
		<div className="flex flex-col gap-[40vh]  h-screen w-screen">
			<Header />
			<div className="text-center h-[90%] align-middle font-bold text-2xl">
				This page is coming soon...
			</div>
		</div>
	);
};

export default ComingSoon;
