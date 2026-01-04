import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

// Initializes a new user document if it doesn't already exist.
// The user doc includes module-specific progress placeholders for flashcards and quizzes
// so the app can write into predictable paths for each module (alphabets, numbers).
export const createUserIfNotExists = async (user) => {
  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
      await setDoc(
        userRef,
        {
          // For Google-only flow username starts as null until user sets it
          username: null,
          name: user.displayName || null,
          email: user.email || null,
          photoURL: user.photoURL || null,
          level: 1,
          xp: 0,
          streak: 0,
          // progress structure separated by module type, then by deck name
          progress: {
            flashcards: {
              alphabets: {},
              numbers: {},
            },
            quizzes: {
              alphabets: { history: [], bestScore: 0 },
              numbers: { history: [], bestScore: 0 },
            },
          },
          achievements: [],
          createdAt: serverTimestamp(),
        },
        { merge: true }
      );
  }
};
