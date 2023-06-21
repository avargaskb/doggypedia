'use client';
import { useEffect } from 'react';
import { useAuth } from '../context/auth.context';
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from '@material-tailwind/react';
import Spinner from './Spinner';
import { updateFavorite } from '@/lib/firebase';

type Breed = {
	id?: number | undefined;
	name: string;
	temperament?: string;
	bred_for?: string;
};

type Dog = {
	image: string;
	breed: Breed;
};

type CardProps = {
	loading: any;
	updateDog: (dog: any) => any;
	dog: Dog;
};

export default function BreedCard({
	dog,
	updateDog,
	loading,
}: CardProps): JSX.Element {
	const { favoriteDog, favoriteBreed, currentUser } = useAuth();

	const handleFavorite = (breedName: string) => {
		favoriteDog(breedName);
		updateFavorite(breedName, currentUser)
	};

	// useEffect(() => {
	// 	updateFavorite(currentUser);
	// }, [favoriteBreed]);

	useEffect(() => {
		console.log(favoriteBreed);
	}, [favoriteBreed]);

	if (loading) return <Spinner />;

	return (
		<Card
			shadow
			color="white"
			className="mt-10 lg:mt-[60px] mx-auto w-[300px] md:w-[450px] lg:w-[575px]"
			onClick={() => updateDog(dog.breed.id)}
		>
			<CardHeader
				color="transparent"
				shadow
				className="relative h-[200px] md:h-[300px] lg:h-[500px]"
			>
				<div
					className="w-full h-full absolute"
					style={{
						backgroundImage: `url(${dog.image})`,
						backgroundSize: 'cover',
					}}
				></div>
			</CardHeader>
			<CardBody className="pb-1">
				<Typography variant="h3" className="mb-4 text-center">
					{dog.breed.name}
					<p className="text-sm mb-2">{dog.breed.bred_for}</p>
				</Typography>

				{dog.breed.temperament ? (
					<Typography variant="h5" className="mb-2">
						Temperament
					</Typography>
				) : (
					''
				)}
				<p className="text-sm">{dog.breed.temperament}</p>
			</CardBody>
			<CardFooter className="pt-2 flex justify-center">
				{dog.breed.name !== 'Random' && (
					<Button
						variant="outlined"
						size="sm"
						color="deep-orange"
						className=""
						onClick={() => handleFavorite(dog.breed.name)}
					>
						Select as Favorite Breed
					</Button>
				)}
			</CardFooter>
		</Card>
	);
}
