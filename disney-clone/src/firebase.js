import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { getAuth } from 'firebase/auth';

import { GoogleAuthProvider } from 'firebase/auth';

// import { Firestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBiy52WEHk4xVeebhihhfYabhCy3BEPBk0',
	authDomain: 'disneyplus-clone-7f0a9.firebaseapp.com',
	projectId: 'disneyplus-clone-7f0a9',
	storageBucket: 'disneyplus-clone-7f0a9.appspot.com',
	messagingSenderId: '325892499162',
	appId: '1:325892499162:web:d9f688ecbea5839927e7e3',
	measurementId: 'G-ZEK3FLPD1N',
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = new Firestore();
const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
// const storage = storage();

export { auth, provider, analytics };
// export { storage };
// export default db;
