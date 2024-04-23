import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDO0s3bbVkPyAmRxS_MBwUxSNTRC_yoiPs",
    authDomain: "agnaldo-api.firebaseapp.com",
    projectId: "agnaldo-api",
    storageBucket: "agnaldo-api.appspot.com",
    messagingSenderId: "257160863322",
    appId: "1:257160863322:web:6377810366b02c938b0263",
    measurementId: "G-ZXQBGPFKN2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); 
export default app;