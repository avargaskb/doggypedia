import { Button } from '@material-tailwind/react';
import { useAuth } from '../context/auth.context';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LogButton() {
	const { currentUser, logOut } = useAuth();

	const navigate = useRouter();

	const handleLogOut = async () => {
		await logOut();
		navigate.replace('/');
		return;
	};

	return (
		<>
			{!currentUser ? (
				<Link href={'/login'}>
					<Button size="sm" color="orange" variant="outlined">
						<span className="text-white opacity-90">Log In</span>
					</Button>
				</Link>
			) : (
				<Button
					size="sm"
					color="orange"
					variant="outlined"
					onClick={() => handleLogOut()}
				>
					<span className="text-white opacity-90">Log Out</span>
				</Button>
			)}
		</>
	);
}
