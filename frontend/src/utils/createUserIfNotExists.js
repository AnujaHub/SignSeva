import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const createUserIfNotExists = async (user) => {
  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    await setDoc(userRef, {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      level: 1,
      xp: 0,
      streak: 0,
      progress: {},
      achievements: [],
      createdAt: new Date(),
    });
  }
};
