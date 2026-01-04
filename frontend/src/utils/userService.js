import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

const getUserRef = (uid) => doc(db, "users", uid);

export const getUser = async (uid) => {
  const ref = getUserRef(uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
};

export const updateUserFields = async (uid, fields) => {
  const ref = getUserRef(uid);
  // merge so we don't wipe other fields
  await setDoc(ref, { ...fields }, { merge: true });
  const updated = await getUser(uid);
  return updated;
};

// Record a single flashcard review. Tracks seen/correct counts, local streak and mastered flag.
export const recordFlashcardReview = async (uid, deck, itemId, correct) => {
  const ref = getUserRef(uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error("User not found");

  const user = snap.data();
  const progress = user.progress || {};
  progress.flashcards = progress.flashcards || {};
  progress.flashcards[deck] = progress.flashcards[deck] || {};

  const current = progress.flashcards[deck][itemId] || {
    seen: 0,
    correct: 0,
    streak: 0,
    mastered: false,
    lastSeen: null,
  };

  current.seen = (current.seen || 0) + 1;
  if (correct) {
    current.correct = (current.correct || 0) + 1;
    current.streak = (current.streak || 0) + 1;
  } else {
    current.streak = 0;
  }
  current.lastSeen = new Date();
  // simple mastery rule: 3 correct answers marks item as mastered
  current.mastered = (current.correct || 0) >= 3;

  progress.flashcards[deck][itemId] = current;

  // XP rules: +10 for correct, +2 for incorrect
  const xpGain = correct ? 10 : 2;
  const newXp = (user.xp || 0) + xpGain;
  const newStreak = correct ? (user.streak || 0) + 1 : 0;

  await setDoc(
    ref,
    {
      progress,
      xp: newXp,
      streak: newStreak,
      lastActiveAt: new Date(),
    },
    { merge: true }
  );

  return { entry: current, xpGain };
};

// Record quiz result: append to history and update bestScore for that deck
export const recordQuizResult = async (uid, deck, score, total, details = {}) => {
  const ref = getUserRef(uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error("User not found");

  const user = snap.data();
  const progress = user.progress || {};
  progress.quizzes = progress.quizzes || {};
  progress.quizzes[deck] = progress.quizzes[deck] || { history: [], bestScore: 0 };

  const percentage = total ? Math.round((score / total) * 100) : 0;
  const record = { score, total, percentage, details, when: new Date() };

  progress.quizzes[deck].history.push(record);
  if (percentage > (progress.quizzes[deck].bestScore || 0)) {
    progress.quizzes[deck].bestScore = percentage;
  }

  // XP reward based on performance
  const xpGain = Math.max(5, Math.floor((percentage / 100) * 50));
  const newXp = (user.xp || 0) + xpGain;

  await setDoc(
    ref,
    {
      progress,
      xp: newXp,
      lastQuizAt: new Date(),
    },
    { merge: true }
  );

  return { record, xpGain };
};

export const getModuleProgress = async (uid, type, deck) => {
  // type: 'flashcards' | 'quizzes'
  const user = await getUser(uid);
  if (!user) return null;
  const prog = (user.progress && user.progress[type] && user.progress[type][deck]) || null;
  return prog;
};

export default {
  getUser,
  updateUserFields,
  recordFlashcardReview,
  recordQuizResult,
  getModuleProgress,
};
