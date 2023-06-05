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



export default function LogIn() {
	return (
		<div className="h-screen flex items-center justify-center ">
			<Card className="mx-auto w-[270px] md:w-[400px]">
				<CardHeader
					variant="gradient"
					color="orange"
					className=" mb-4 grid h-20 md:h-24 place-items-center"
				>
					<Typography variant="h3" color="white" className="">
						Log In
					</Typography>
				</CardHeader>
				<CardBody className="flex flex-col gap-4">
					<div className="flex flex-col gap-6">
						<Input color="gray" label="Username" size="lg" />
						<Input color="gray" type='password' label="Password" size="lg" />
					</div>
				</CardBody>
				<CardFooter className="pt-4 mx-1 md:mx-4">
					<Button variant="outlined" color="orange" fullWidth>
						Log In
					</Button>
					<Typography variant="small" className="mt-6 flex justify-center">
						Don't have an account?
						<Typography
							as="a"
							href="/signup"
							variant="small"
							color="deep-orange"
							className="ml-1 font-bold"
						>
							Sign up
						</Typography>
					</Typography>
				</CardFooter>
			</Card>
		</div>
	);
}
