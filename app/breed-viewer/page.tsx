'use client';
import { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-tailwind/react';
import SelectBreed from '../../components/Select';
import BreedCard from '../../components/Card';
import getDog from '../../api/getDog';
import { useAuth } from '@/context/auth.context';

const initialDog = {
	image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
	breed: {
		id: "0",
		name: 'Perrin',
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
	if(!dog)
return <></>
	return (
		<>
				{dog &&
			<ThemeProvider>
				{!!favoriteBreed && <div className='mt-16 md:mt-[90px] md:mb-10 text-center text-white'>
					<h2>My favorite breed: {favoriteBreed}</h2>
				</div>}
				<SelectBreed updateDog={updateDog} />
				<BreedCard dog={dog} updateDog={updateDog} loading={loading} />
			</ThemeProvider>
			}
		</>
	);
}
