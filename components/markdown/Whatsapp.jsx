export const Auth = `~~~js 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGESENDID,
    appId: process.env.NEXT_PUBLIC_APPID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
~~~`


export const Chat = `~~~js 
useEffect(() => {
    return auth.onIdTokenChanged(async (user) => {
        if (!user) {
            console.log("user is null");
            setCurrentUser(null);
            setLoading(false);
            return;
        }
        const token = await user.getIdToken();
        const userData = {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            lastSeen: serverTimestamp(),
        };
        await setDoc(doc(db, "users", user.uid), userData);
        setCurrentUser(user);
        setLoading(false);
    });
}, []);
~~~`
