import { signInWithPopup, signOut as firebaseSignOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, runTransaction } from "firebase/firestore";
import { auth, provider, db } from "./firebase";
import { createUserIfNotExists } from "./createUserIfNotExists";

// Sign in with Google, ensure Firestore user doc exists and return the user document data.
export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  // Ensure users/{uid} exists with username:null
  await createUserIfNotExists(user);
  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);
  return { authUser: user, userDoc: snap.exists() ? snap.data() : null };
};

// Set a username for the given authenticated user. This uses a transaction to ensure uniqueness.
export const setUsername = async (uid, username) => {
  // Validate server-side format: 3-15 chars, lowercase letters, numbers, underscore
  if (!/^[a-z0-9_]{3,15}$/.test(username)) throw new Error("Invalid username format");

  const usernameRef = doc(db, "usernames", username);
  const userRef = doc(db, "users", uid);

  await runTransaction(db, async (tx) => {
    const unameSnap = await tx.get(usernameRef);
    if (unameSnap.exists()) throw new Error("Username already taken");
    tx.set(usernameRef, { uid });
    tx.update(userRef, { username });
  });

  const updated = await getDoc(userRef);
  return updated.exists() ? updated.data() : null;
};

export const signOut = async () => {
  await firebaseSignOut(auth);
};

export const onAuthChanged = (cb) => {
  return onAuthStateChanged(auth, cb);
};

export default { signInWithGoogle, setUsername, signOut, onAuthChanged };
