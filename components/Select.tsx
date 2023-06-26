'use client';
import { useState, useEffect } from 'react';
import { Select, Option } from '@material-tailwind/react';
import getBreeds from '../api/getBreeds';
import Error from './Error';

type Breed = {
	id?: number | undefined;
	name: string;
	temperament?: string;
	bred_for?: string;
};
const initialBreeds: Breed[] = [
	{
		id: 1,
		name: 'French Poodle',
	},
	{
		id: 2,
		name: 'German Shepard',
	},
	{
		id: 3,
		name: 'Golden Retriever',
	},
];

export default function SelectBreed({ updateDog }: { updateDog:any}) {
	const [breeds, setBreeds] = useState(initialBreeds);
	const [error, setError] = useState('');

	useEffect(() => {
		updateBreeds();
	}, []);

	const updateBreeds = () => {
		getBreeds()
			.then((newBreeds) => {
				setBreeds(newBreeds);
			})
			.catch((error) => {
				setError('Ops, something went wrong, please try again!');
			});
	};

	const handleChange = (value: string | undefined) => {
		updateDog(value);
	};

	return (
		<div className="w-[260px] md:w-[310px] lg:w-[475px] mx-auto mt-14 md:mt-20  mb-14 md:mb-20 lg:mb-[80px]  ">
			<Select
				onChange={(value) => handleChange(value)}
				arrow={<span style={{ color: 'white' }}>&#x25BD;</span>}
				color="orange"
				label="Select Breed"
				menuProps={{
					className:
						' text-sm md:text-md font-bold  text-gray-600 bg-opacity-80 ',
				}}
				labelProps={{ className: 'text-white' }}
			>
				{breeds.map((breed, index) => (
					<Option key={index} value={String(breed.id)}>
						{breed.name}
					</Option>
				))}
			</Select>
			<div className="mt-10">{error && <Error />}</div>
		</div>
	);
}
