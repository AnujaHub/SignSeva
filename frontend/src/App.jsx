import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { onSnapshot, doc } from 'firebase/firestore';
import authService from './utils/authService';
import userService from './utils/userService';
import { db } from './utils/firebase';

import NavBar from './Components/Base/NavBar';
import Footer from './Components/Base/Footer';

import Landing from './Pages/Base/Landing';
import Home from './Pages/Base/Home';
import Dashboard from './Pages/Other/Dashboard';
import Profile from './Pages/Other/Profile';
import Quiz from './Pages/Other/Quiz';
import Learn from './Pages/Other/Learn';
import AlphabetFlashcards from './Pages/Other/AlphabetFlashcards';
import NumberFlashcards from './Pages/Other/NumberFlashcards';
import AIZone from './Pages/Other/AIZone';
import Login from './Pages/login/Login';
import Signup from './Pages/login/Signup';
import SetUsername from './Pages/login/SetUsername';
import NotFound from './Pages/Base/NotFound';

import './Styles/App.css';

function App() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [authUser, setAuthUser] = useState(null);
  const [userDoc, setUserDoc] = useState(null);
  const [isVerifying, setIsVerifying] = useState(true);

  // Theme handling
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // Firebase authorization listener + user doc loader
  useEffect(() => {
    let userDocUnsubscribe = null;

    const unsubscribeAuth = authService.onAuthChanged(async (user) => {
      // Clean up previous user doc listener
      if (userDocUnsubscribe) {
        userDocUnsubscribe();
        userDocUnsubscribe = null;
      }

      if (!user) {
        setAuthUser(null);
        setUserDoc(null);
        setIsVerifying(false);
        return;
      }

      setAuthUser(user);

      // Set up real-time listener for user document
      const userRef = doc(db, "users", user.uid);
      userDocUnsubscribe = onSnapshot(userRef, (snap) => {
        setUserDoc(snap.exists() ? snap.data() : null);
        setIsVerifying(false);
      }, (error) => {
        console.error('User doc listener error', error);
        setIsVerifying(false);
      });
    });

    return () => {
      unsubscribeAuth();
      if (userDocUnsubscribe) userDocUnsubscribe();
    };
  }, []);

  if (isVerifying) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  const handleLogout = async () => {
    await authService.signOut();
    setAuthUser(null);
    setUserDoc(null);
  };


  return (
    <div className="container">
      <NavBar theme={theme} toggleTheme={() => setTheme(t => t === "dark" ? "light" : "dark")} isLoggedIn={!!authUser} onLogout={handleLogout} />

      <Routes>
        <Route path="/" element={authUser ? <Navigate to="/home" /> : <Landing />} />
        <Route path="/auth" element={authUser ? <Navigate to={userDoc && userDoc.username ? "/home" : "/set-username"} /> : <Login />} />
        <Route path="/login" element={<Navigate to="/auth" />} />
        <Route path="/signup" element={<Navigate to="/auth" />} />
        <Route path="/set-username" element={authUser ? (userDoc && userDoc.username ? <Navigate to="/home" /> : <SetUsername />) : <Navigate to="/auth" />} />

        <Route path="/home" element={
          !authUser ? <Navigate to="/auth" /> : (!userDoc || userDoc.username == null) ? <Navigate to="/set-username" /> : <Home />
        } />
        <Route path="/dashboard" element={
          !authUser ? <Navigate to="/auth" /> : (!userDoc || userDoc.username == null) ? <Navigate to="/set-username" /> : <Dashboard />
        } />
        <Route path="/learn" element={
          !authUser ? <Navigate to="/auth" /> : (!userDoc || userDoc.username == null) ? <Navigate to="/set-username" /> : <Learn />
        } />
        <Route path="/alphabet-flashcards" element={
          !authUser ? <Navigate to="/auth" /> : (!userDoc || userDoc.username == null) ? <Navigate to="/set-username" /> : <AlphabetFlashcards />
        } />
        <Route path="/number-flashcards" element={
          !authUser ? <Navigate to="/auth" /> : (!userDoc || userDoc.username == null) ? <Navigate to="/set-username" /> : <NumberFlashcards />
        } />
        <Route path="/profile" element={
          !authUser ? <Navigate to="/auth" /> : (!userDoc || userDoc.username == null) ? <Navigate to="/set-username" /> : <Profile />
        } />
        <Route path="/quiz" element={
          !authUser ? <Navigate to="/auth" /> : (!userDoc || userDoc.username == null) ? <Navigate to="/set-username" /> : <Quiz />
        } />
        <Route path="/aizone" element={
          !authUser ? <Navigate to="/auth" /> : (!userDoc || userDoc.username == null) ? <Navigate to="/set-username" /> : <AIZone />
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
