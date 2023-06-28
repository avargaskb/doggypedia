'use client';
import { useAuth } from '../context/auth.context';
import Image from 'next/image';
import LogButton from './LogButton';
import {
	Navbar as Nav,
	Typography,
	IconButton,
} from '@material-tailwind/react';
import { UserIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Navbar() {
	const { currentUser, userName } = useAuth();

	return (
		<>
			<Nav className="bg-[#455a64] bg-opacity-50 fixed inset-0 z-10 h-max max-w-full rounded-none py-[6px] md:py-3 px-4 lg:px-8">
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
					<div className="flex items-center justify-between gap-4">
						
						<div className="inline-flex ">
							{(userName ||currentUser?.displayName) && (
								<>
									<IconButton
										variant="text"
										color="white"
										className="h-5 w-5 my-auto cursor-default"
									>
										<UserIcon className="h-4 w-4 " />
									</IconButton>
									<Typography
										variant="h6"
										color="white"
										className="text-sm my-auto"
									>
										{userName || currentUser?.displayName }
									</Typography>
								</>
							)}
						</div>
						<div className="flex items-center gap-4">
							<LogButton />
						</div>
					</div>
				</div>
			</Nav>
		</>
	);
}
