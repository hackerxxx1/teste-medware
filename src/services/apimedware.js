import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSgIVRfkL4iIir65Jk0Xm0jCvtNsOyPkE",
    authDomain: "teste-123-321-123.firebaseapp.com",
    projectId: "teste-123-321-123",
    storageBucket: "teste-123-321-123.appspot.com",
    messagingSenderId: "605150081799",
    appId: "1:605150081799:web:c820dd0b75868765180ba2",
    measurementId: "G-4VK5QS88G7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); 
export default app;