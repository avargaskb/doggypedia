'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '@/lib/firebase';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

const AuthContext = createContext();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState('');
	const [userName, setUserName] = useState('');
	const [loading, setLoading] = useState(true);
	const [favoriteBreed, setFavoriteBreed] = useState('');

	const signUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const logIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logInWithGooglePopup = () => signInWithPopup(auth, provider);

	const logOut = () => {
		return signOut(auth);
	};

	const favoriteDog = (breedName) => {
		setFavoriteBreed(breedName);
	};
	// useEffect(() => {
	// 	updateFavorite()
	// }, [favoriteBreed]);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			setCurrentUser(user);

			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		logIn,
		logInWithGooglePopup,
		signUp,
		logOut,
		favoriteDog,
		userName,
		setUserName
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
