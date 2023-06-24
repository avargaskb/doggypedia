'use client';
import { Typography } from '@material-tailwind/react';

export default function Footer() {
	return (
		<footer className=" bg-[#455a64]  text-white bg-opacity-50 fixed flex w-full bottom-0 flex-row flex-wrap items-center gap-y-1 md:gap-y-6 gap-x-12 border-t border-gray-50 py-1 md:py-3  px-2 md:px-8 justify-between">
			<Typography className="text-[10px] md:text-base font-normal">
				<span> &copy; {new Date().getFullYear()} Doggypedia </span>
			</Typography>
			<ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
				<li>
					<Typography
						href="#"
						className="text-[10px] md:text-base font-normal transition-colors hover:text-gray-500 focus:text-blue-00"
					>
						About Us
					</Typography>
				</li>

				<li>
					<Typography
						href="#"
						className="text-[10px] md:text-base font-normal transition-colors hover:text-gray-500 focus:text-blue-300"
					>
						Contribute
					</Typography>
				</li>
				<li>
					<Typography
						href="#"
						className="text-[10px] md:text-base font-normal transition-colors hover:text-gray-500 focus:text-blue-300"
					>
						Contact Us
					</Typography>
				</li>
			</ul>
		</footer>
	);
}
