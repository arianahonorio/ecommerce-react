import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "nutrimarketshop.firebaseapp.com",
    projectId: "nutrimarketshop",
    storageBucket: "nutrimarketshop.firebasestorage.app",
    messagingSenderId: "937355572241",
    appId: "1:937355572241:web:eb51a302d84233bc9a2db0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)