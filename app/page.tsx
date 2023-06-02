'use client';

import Link from 'next/link';

export default function Home() {
	return (
		<div className='h-screen flex items-center justify-center '>
	
		<div className="relative h-[300px] w-[275px] md:h-[510px] md:w-[480px] lg:h-[700px] lg:w-[670px] shadow-2xl ">
			<img
				className="h-full w-full rounded-xl"
				src="/puppyFigo.jpg"
				alt="puppy"
			/>
			<div className="absolute bottom-4 lg:bottom-8 left-2/4 flex w-[calc(100%-2rem)] lg:w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-gray-400 py-2 lg:py-6 px-6 shadow-lg shadow-black/5 saturate-200 bg-backdrop-blur-sm bg-opacity-40">
				<div className="mx-auto">
					<div
						className="mb-4 lg:mb-8 md:mt-2 text-md font-medium md:text-xl lg:text-3xl md:font-bold text-white  "
					>
						Welcome to Doggypedia
						</div>

					<Link
						href={'/breed-viewer'}
						className="mx-auto button-home max-w-[100px] md:max-w-[calc(100%-6rem)] lg:max-w-[calc(100%-8rem)] lg:h-[40px]"
					>
						 EXPLORE
					</Link>
				</div>
			</div>
		</div>
		</div>
	);
}
