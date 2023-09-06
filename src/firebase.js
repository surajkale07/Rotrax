import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZBdKRug8Oqnqo3LfjACRLiqMXY2uUFe0",
  authDomain: "login-profile-app.firebaseapp.com",
  projectId: "login-profile-app",
  storageBucket: "login-profile-app.appspot.com",
  messagingSenderId: "738827603802",
  appId: "1:738827603802:web:a4fa956a3570f2e7082d63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage();

export const provider = new GoogleAuthProvider();
export const provider2 = new FacebookAuthProvider();

export default app;
