import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
	getFirestore,
	doc,
	setDoc,
	getDoc,
	updateDoc,
} from 'firebase/firestore';
import { useAuth } from '@/context/auth.context';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_APIFB_KEY,
	authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
	projectId: process.env.NEXT_PUBLIC_PROJECTID,
	storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
	appId: process.env.NEXT_PUBLIC_APPID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


export const createUserDocumentFromAuth = async (
	 userAuth: { displayName: string; email: string; uid: string },
	additionalInformation = {}
) => {
	if (!userAuth) return;

	const userDocRef = doc(db, 'users', userAuth.uid);
	const userSnapShot = await getDoc(userDocRef);

	if (!userSnapShot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		const favoriteBreed = '';
		await setDoc(userDocRef, {
			displayName,
			email,
			createdAt,
			...additionalInformation,
			favoriteBreed,
		});
	}

	return userDocRef;
};



export const updateFavorite = async(breedName:string, currentUser:any) => {
	// const { favoriteBreed} = useAuth();
	const userDocRef = doc(db, 'users', currentUser.uid);
	const data = {
		favoriteBreed: breedName,
	};
	await updateDoc(userDocRef, data);
	
};

export const getFavorite = async()=>{

}
