'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
	Navbar as Nav,
	Button,
	IconButton,
	Collapse,
} from '@material-tailwind/react';
import Link from 'next/link';

export default function Navbar() {
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		window.addEventListener(
			'resize',
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	return (
		<>
			<Nav className="bg-[#455a64] bg-opacity-50 fixed inset-0 z-10 h-max max-w-full rounded-none py-2 md:py-3 px-4 lg:px-8">
				<div className="flex items-center justify-between text-blue-gray-900">
					<Link href={'/'}>
						<Image
							src={'/logo.png'}
							width={45}
							height={45}
							alt="logo"
							className="hover:animate-bounce"
						></Image>
					</Link>
					<div className="flex items-center gap-4">
						<Link href={'/login'}>
            <Button
							size="md"
							color="orange"
              variant='outlined'
							className="hidden lg:inline-block "
						>
							<span className='text-white opacity-90'>Log In</span>
						</Button>

            </Link>
            <Link href={'/signup'}>
						<Button
							size="md"
              variant='outlined'
							color="orange"
							className="hidden lg:inline-block"
						>
							<span className='text-white opacity-90'>Sign up</span>
						</Button>
            </Link>

						<IconButton
							variant="text"
							className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-white"
							ripple={false}
							onClick={() => setOpenNav(!openNav)}
						>
							{openNav ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									className="h-6 w-6"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</IconButton>
					</div>
				</div>
				<Collapse open={openNav}>
					<div className="flex flex-row justify-end gap-2 p-1">
					<Link href={'/login'}>	
            <Button size="sm" variant='outlined' color="orange" className="mb-2 opacity-80">
							<span className='text-white opacity-90'>Log In</span>
						</Button>
						</Link>
            <Link href={'/signup'}>	
            <Button size="sm" color="orange" variant='outlined' className="mb-2 opacity-80">
							<span className='text-white opacity-90'>Sign up</span>
						</Button>
            </Link>
          </div>
				</Collapse>
			</Nav>
		</>
	);
}
