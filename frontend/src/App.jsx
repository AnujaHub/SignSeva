import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { auth, clearAuth } from './utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';

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
import NotFound from './Pages/Base/NotFound';

import './Styles/App.css';

function App() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerifying, setIsVerifying] = useState(true);

  // Theme handling
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // Firebase authorization listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
      } else {
        setIsLoggedIn(false);
        clearAuth();
      }
      setIsVerifying(false);
    });

    return () => unsubscribe();
  }, []);

   if (isVerifying) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }
const handleLogout = async () => {
  await auth.signOut();
  clearAuth();
  setIsLoggedIn(false);
};


  return (
    <div className="container">
      <NavBar theme={theme} toggleTheme={() => setTheme(t => t === "dark" ? "light" : "dark")} isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Landing />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
        <Route path="/signup" element={isLoggedIn ? <Navigate to="/home" /> : <Signup />} />

        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/learn" element={isLoggedIn ? <Learn /> : <Navigate to="/login" />} />
        <Route path="/alphabet-flashcards" element={isLoggedIn ? <AlphabetFlashcards /> : <Navigate to="/login" />} />
        <Route path="/number-flashcards" element={isLoggedIn ? <NumberFlashcards /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/quiz" element={isLoggedIn ? <Quiz /> : <Navigate to="/login" />} />
        <Route path="/aizone" element={isLoggedIn ? <AIZone /> : <Navigate to="/login" />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
