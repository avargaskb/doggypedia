'use client';
import { useState } from 'react';
import { useAuth } from '../../context/auth.context';
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
import { createUserDocumentFromAuth } from '../../lib/firebase';
import { updateProfile } from 'firebase/auth';

export default function SignUp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [displayName, setDisplayName] = useState('');
	const [error, setError] = useState('');

	const { signUp, setUserName, setFavoriteBreed } = useAuth();
	const navigate = useRouter();

	const registerUser = async (e: React.FormEvent<HTMLButtonElement>) => {
		if (!password || !email || !displayName) {
			setError('Please fill all inputs!');
			return;
		}
		try {
			e.preventDefault();
			const { user } = await signUp(email, password);
			updateProfile(user, { displayName });
			setUserName(displayName);
			setFavoriteBreed('')
			createUserDocumentFromAuth(user, { displayName });

			navigate.replace('/breed-viewer');
		} catch (err:any) {
			if (err.code === 'auth/email-already-in-use') {
				setError('Cannot create user, email already in use');
			}
			if (err.code === 'auth/invalid-email') {
				setError('Please enter a valid email');
			}
			if (err.code === 'auth/weak-password') {
				setError('Password should be at least 6 characters');
			} else {
				setError('Something went wrong, please try again!');
			}
		}
		return;
	};
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
					{error && <span className="alert">{error}</span>}
					<div className="flex flex-col gap-6">
						<Input
							color="gray"
							label="Username"
							size="lg"
							id='username'
							value={displayName}
							onChange={(e) => setDisplayName(e.target.value)}
						/>
						<Input
							color="gray"
							label="Email"
							id='email'
							size="lg"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							color="gray"
							type="password"
							label="Password"
							id='password'
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
						onClick={(e) => registerUser(e)}
					>
						Sign Up
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
