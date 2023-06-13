'use client';
import Image from 'next/image';
import LogButton from './LogButton';
import { Navbar as Nav } from '@material-tailwind/react';
import Link from 'next/link';

export default function Navbar() {
	return (
		<>
			<Nav className="bg-[#455a64] bg-opacity-50 fixed inset-0 z-10 h-max max-w-full rounded-none py-2 md:py-3 px-4 lg:px-8">
				<div className="flex items-center justify-between text-blue-gray-900">
					<Link href={'/'}>
						<Image
							src={'/logo.png'}
							width={35}
							height={35}
							alt="logo"
							className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 md:w-[45px] cursor-pointer"
						></Image>
					</Link>
					<div className="flex items-center gap-4">
						<LogButton />
					</div>
				</div>
			</Nav>
		</>
	);
}
