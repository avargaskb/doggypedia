export default function Spinner() {
	return (
		<div className="flex justify-center md:w-[400px] lg:w-[650px]">

		<div className="lds-ellipsis  mt-[100px] md:mt-[250px]">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		</div>
	);
}
