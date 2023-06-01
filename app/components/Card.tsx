'use client';
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
} from '@material-tailwind/react';
import Spinner from './Spinner';
import { Breed } from '../types';

type Dog = {
	image: string;
	breed: Breed;
};

type CardProps = {
	loading: any,
	updateDog: (dog: any) => any;
	dog: Dog;
};

export default function BreedCard({ dog, updateDog, loading }: CardProps): JSX.Element {

	if(loading) return <Spinner/>

	return (

		<Card
		shadow
			color='white'
			className="mt-10 lg:mt-[60px] mx-auto w-[300px] md:w-[450px] lg:w-[575px]"
			onClick={() => updateDog(dog.breed.id)}
		>
			<CardHeader color='transparent' shadow className="relative h-[200px] md:h-[300px] lg:h-[500px]">
				<div
					className="w-full h-full absolute"
					style={{
						backgroundImage: `url(${dog.image})`,
						backgroundSize: 'cover',
					}}
				></div>
			</CardHeader>
			<CardBody>
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
				<p className="text-sm mb-3">{dog.breed.temperament}</p>
			</CardBody>
		</Card>
	);
}
