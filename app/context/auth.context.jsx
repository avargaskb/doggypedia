'use client';
import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { auth } from '@/lib/firebase';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';


const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState('');
	const [loading, setLoading] = useState(true);
	const userInfo = useRef();

	const signUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
		
	};

	const logIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
		
	};

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

	const value = {
		currentUser,
		logIn,
		signUp,
		logOut,
		userInfo,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
