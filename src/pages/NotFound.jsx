import Header from "../components/structured/Header";

const NotFound = () => {
	return (
		<div className="flex flex-col gap-[40vh]  h-screen w-screen">
			<Header />
			<div className="text-center h-[90%] align-middle font-bold text-2xl">
				Page Not Found.
			</div>
		</div>
	);
};

export default NotFound;
