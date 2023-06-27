'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const AuthContext = createContext();
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_APIFB_KEY,
	authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
	projectId: process.env.NEXT_PUBLIC_PROJECTID,
	storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
	appId: process.env.NEXT_PUBLIC_APPID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			setCurrentUser(user);

			setLoading(false);
		});
		return unsubscribe;
	}, []);

	useEffect(() => {
		if (favoriteBreed && currentUser?.uid) {
			const userDocRef = doc(db, 'users', currentUser.uid);
			onSnapshot(userDocRef, (doc) => {
				const user = doc.data();
				const favorite = user.favoriteBreed;
					setFavoriteBreed(favorite);
				
			});
		}
	}, [currentUser]);

	const value = {
		currentUser,
		logIn,
		logInWithGooglePopup,
		signUp,
		logOut,
		favoriteBreed,
		setFavoriteBreed,
		userName,
		setUserName,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
