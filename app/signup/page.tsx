'use client';
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Input,
	Button,
} from '@material-tailwind/react';
import Image from 'next/image';

export default function SignUp() {
	return (
		<div className="h-screen flex items-center justify-center ">
			<Card className="mx-auto w-[300px] md:w-[400px]">
				<CardHeader
					variant="gradient"
					color="orange"
					className=" mb-4 grid h-20 md:h-24 place-items-center"
				>
					<Typography variant="h3" color="white" className="">
						Sign Up
					</Typography>
				</CardHeader>
				<CardBody className="flex flex-col gap-4">
					<div className="flex flex-col gap-6">
						<Input color="gray" label="Username" size="lg" />
						<Input color="gray" label="Email" size="lg" />
						<Input color="gray" type="password" label="Password" size="lg" />
					</div>
				</CardBody>
				<CardFooter className="pt-4 mx-1 md:mx-4">
					<Button variant="outlined" color="orange" fullWidth>
						Sign Up
					</Button>

					<Button
						fullWidth
						variant="outlined"
						color="orange"
						className=" mt-4 flex items-center justify-center gap-1 md:gap-4"
					>
						<Image src="/google-icon.png" width={40} height={40} alt="google-logo" className="h-5 w-5" />
						Continue with Google
					</Button>

					<Typography variant="small" className="mt-6 flex justify-center">
						Already have an account?
						<Typography
							as="a"
							href="/login"
							variant="small"
							color="deep-orange"
							className="ml-1 font-bold"
						>
							Log In
						</Typography>
					</Typography>
				</CardFooter>
			</Card>
		</div>
	);
}
