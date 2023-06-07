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
							width={30}
							height={30}
							alt="logo"
							className="hover:animate-bounce md:w-[45px]"
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
