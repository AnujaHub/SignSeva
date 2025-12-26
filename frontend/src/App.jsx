import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { auth, clearAuth } from './utils/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import NavBar from './Components/Base/NavBar.jsx';

import Landing from "./Pages/Base/Landing.jsx";
import NotFound from "./Pages/Base/NotFound.jsx";
import Home from './Pages/Base/Home.jsx';
import Dashboard from './Pages/Other/Dashboard.jsx';
import Profile from './Pages/Other/Profile.jsx';
import Quiz from './Pages/Other/Quiz.jsx';
import Signup from './Pages/login/Signup.jsx';
import Login from './Pages/login/Login.jsx';
import AIZone from './Pages/Other/AIZone.jsx';

import Footer from './Components/Base/Footer.jsx';

import './Styles/App.css';
import Learn from './Pages/Other/Learn.jsx';
import AlphabetFlashcards from './Pages/Other/AlphabetFlashcards.jsx';
import NumberFlashcards from './Pages/Other/NumberFlashcards.jsx';

function App() {
    const navigate = useNavigate();
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
    const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
    const [isVerifying, setIsVerifying] = useState(true);
    
    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme); 
    }

    useEffect(() => {
      document.documentElement.className = theme;
    }, [theme]);

    // Listen to Firebase auth state changes
    useEffect(() => {
      setIsVerifying(true);
      
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is logged in
          setIsLoggedIn(true);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          // User is logged out
          setIsLoggedIn(false);
          clearAuth();
        }
        setIsVerifying(false);
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        clearAuth();
        navigate('/', { replace: true });
    };

    // Show loading state while verifying token
    if (isVerifying) {
      return (
        <div className='container'>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p>Loading…</p>
          </div>
        </div>
      );
    }

    return (
        <div className='container'>
            <NavBar theme={theme} toggleTheme={toggleTheme} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={isLoggedIn ? <Navigate to="/Home" /> : <Landing />} />
                <Route path="/login" element={isLoggedIn ? <Navigate to="/Home" /> : <Login onLogin={handleLogin} />} />
                <Route path="/signup" element={isLoggedIn ? <Navigate to="/Home" /> : <Signup onLogin={handleLogin} />} />
                
                {/* Protected Routes - Redirect to login if not authenticated */}
                <Route path="/Home" element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />} />
                <Route path="/Dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />} />
                <Route path="/Learn" element={isLoggedIn ? <Learn/> : <Navigate to="/login" replace />} />
                <Route path="/alphabet-flashcards" element={isLoggedIn ? <AlphabetFlashcards /> : <Navigate to="/login" replace />} />
                <Route path="/number-flashcards" element={isLoggedIn ? <NumberFlashcards /> : <Navigate to="/login" replace />} />
                <Route path="/Profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" replace />} />
                <Route path="/Quiz" element={isLoggedIn ? <Quiz /> : <Navigate to="/login" replace />} />
                <Route path="/AIZone" element={isLoggedIn ? <AIZone/> : <Navigate to="/login" replace />} />
                
                {/* 404 - Must be last */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

