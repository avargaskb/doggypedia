'use client';
import { ThemeProvider } from '@material-tailwind/react';
import SelectBreed from './components/Select';
import BreedCard from './components/Card';

export default function Home() {
	return (
		<>
			<ThemeProvider>
				<SelectBreed />
				<BreedCard />
			</ThemeProvider>
		</>
	);
}
