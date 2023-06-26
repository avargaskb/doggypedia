'use client';
import { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-tailwind/react';
import SelectBreed from '../../components/Select';
import BreedCard from '../../components/Card';
import getDog from '../../api/getDog';
import { useAuth } from '@/context/auth.context';

const initialDog = {
	image:
		'',
	breed: {
		id: '',
		name: '',
	},
};

export default function BreedViewer() {
	const [dog, setDog] = useState(initialDog);
	const [loading, setLoading] = useState(true);
	const { favoriteBreed } = useAuth();

	useEffect(() => {
		updateDog();
	}, []);

	const updateDog = (breedId?: string) => {
		setLoading(true);
		getDog(breedId!).then((newDog) => {
			setDog(newDog);
			setLoading(false);
		});
	};

	return (
		<ThemeProvider>
			{!!favoriteBreed && (
				<div className="mt-16 md:mt-[90px] md:mb-10 text-center text-white">
					<h2>My favorite breed: {favoriteBreed}</h2>
				</div>
			)}
			<SelectBreed updateDog={updateDog} />
			<BreedCard dog={dog} updateDog={updateDog} loading={loading} />
		</ThemeProvider>
	);
}
