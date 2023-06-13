'use client';
import { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-tailwind/react';
import SelectBreed from '../../components/Select';
import BreedCard from '../../components/Card';
import getDog from '../../api/getDog';

const initialDog = {
	image: '',
	breed: {
		id: 0,
		name: '',
	},
};

export default function BreedViewer() {
	const [dog, setDog] = useState(initialDog);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		updateDog();
	}, []);

	const updateDog = (breedId?: number) => {
		setLoading(true);
		getDog(breedId).then((newDog) => {
			setDog(newDog);
			setLoading(false);
		});
	};
	return (
		<>
			<ThemeProvider>
				<SelectBreed updateDog={updateDog} />
				<BreedCard dog={dog} updateDog={updateDog} loading={loading} />
			</ThemeProvider>
		</>
	);
}
