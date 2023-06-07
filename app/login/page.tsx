'use client';
import { useState } from 'react';
import { useAuth } from '../context/auth.context';
import { useRouter } from 'next/navigation';
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Input,
	Button,
   
} from '@material-tailwind/react';
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default function LogIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { logIn} = useAuth();
    const navigate = useRouter();

    
	const logInHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
		if (!password || !email) {
			setError('Email and password needed!');
			return;
		}
			try {
				await logIn(email, password);
                navigate.replace('/breed-viewer')
			} catch (err) {
				setError('Sorry, incorrect email or password!');
			}
			return;
	
	};

	return (
		<div className="h-screen flex items-center justify-center ">
			<Card className="mx-auto w-[270px] md:w-[400px]">
				<CardHeader
					variant="gradient"
					color="orange"
					className=" mb-4 grid h-20 md:h-24 place-items-center"
				>
					<Typography variant="h3" color="white">
						Log In
					</Typography>
				</CardHeader>
				<CardBody className="flex flex-col gap-4">
					{error && <span className='alert'>{error}</span>}

					<div className="flex flex-col gap-6">
						<Input
							color="gray"
							type="email"
							label="Email"
							size="lg"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							color="gray"
							type="password"
							label="Password"
							size="lg"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
				</CardBody>
				<CardFooter className="pt-4 mx-1 md:mx-4">
					<Button
						variant="outlined"
						color="orange"
						fullWidth
						type="submit"
						onClick={(e) => logInHandler(e)}
					>
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
