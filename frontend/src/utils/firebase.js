import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
 messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
 appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// 🔹 Save token
export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

// 🔹 Get token
export const getToken = () => {
  return localStorage.getItem("token");
};

// 🔹 Clear auth
export const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("isLoggedIn");
};

// 🔹 Verify token (simple client-side check)
export const verifyToken = async () => {
  const token = getToken();
  if (!token) return { valid: false };

  // Firebase handles auth internally; this is enough for frontend
  return { valid: true };
};
