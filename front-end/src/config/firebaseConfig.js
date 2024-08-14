import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpAREMfAHo5eM_OBD9vw94te4IpV15FuA",
  authDomain: "treeplantation-3dc6f.firebaseapp.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
