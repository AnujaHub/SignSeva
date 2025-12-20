import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './Components/Base/NavBar.jsx';

import Landing from "./Pages/Base/Landing.jsx";
import NotFound from "./Pages/Base/NotFound.jsx";
import Home from './Pages/Base/Home.jsx';
import Dashboard from './Pages/Other/Dashboard.jsx';
import Profile from './Pages/Other/Profile.jsx';
import Quiz from './Pages/Other/Quiz.jsx';
import Signup from './Pages/login/SignUp.jsx';
import Login from './Pages/login/Login.jsx';
import AIZone from './Pages/Other/AIZone.jsx';

import Footer from './Components/Base/Footer.jsx';

import './Styles/App.css';
import Learn from './Pages/Other/Learn.jsx';
import AlphabetFlashcards from './Pages/Other/AlphabetFlashcards.jsx';
import NumberFlashcards from './Pages/Other/NumberFlashcards.jsx';

function App() {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
    const [isLoggedIn, setIsLoggedIn] = useState(true); 
    
    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme); 
    }

    useEffect(() => {
      document.documentElement.className = theme;
    }, [theme]);

    // useEffect(() => {
    //   const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    //   setIsLoggedIn(loggedIn);
    // }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };

    return (
        <div className='container'>
            <NavBar theme={theme} toggleTheme={toggleTheme} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={isLoggedIn ? <Navigate to="/Home" /> : <Landing />} />
                <Route path="/Home" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/Dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
                <Route path="/Learn" element={isLoggedIn ? <Learn/> : <Navigate to="/login" />} />
                <Route path="/alphabet-flashcards" element={isLoggedIn ? <AlphabetFlashcards /> : <Navigate to="/login" />} />
                <Route path="/number-flashcards" element={isLoggedIn ? <NumberFlashcards /> : <Navigate to="/login" />} />
                <Route path="/Profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
                <Route path="/Quiz" element={isLoggedIn ? <Quiz /> : <Navigate to="/login" />} />
                <Route path="/AIZone" element={isLoggedIn ? <AIZone/> : <Navigate to="/login" />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
