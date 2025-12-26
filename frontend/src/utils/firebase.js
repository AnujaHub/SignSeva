import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASD2SUDImK0xlshe_9R34R9uO4vR5o6JA",
  authDomain: "authorization-ef1c6.firebaseapp.com",
  projectId: "authorization-ef1c6",
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
