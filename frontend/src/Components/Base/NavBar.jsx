import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../Styles/NavBar.css";

function NavBar({isLoggedIn, onLogout, theme, toggleTheme}) {
   const [menu, setMenu] = useState(false);
   const navigate = useNavigate();
    
   const toggleMenu = () => {
        setMenu(!menu);
   };

   const handleLogout = () => {
        if (onLogout) {
            onLogout();
        }
        setMenu(false);
   };

   const activeLink = ({isActive}) => (isActive? "nav-link active" : "nav-link");

  return (
 
    <>
    <header className="header" id="header">
        <nav className={`navbar ${menu ? "open" : ""}`}>
        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu" role="button">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>

        <div className={`nav-content ${menu ? "show" : ""}`}>
            <div className="nav-links">
                < img src="/src/assets/logo.jpg" alt="Logo" />
            <NavLink to="/" className={activeLink}>Home</NavLink>
            {isLoggedIn && (
              <>
                <NavLink to="/Learn" className={activeLink}>Modules</NavLink>
                <NavLink to="/profile" className={activeLink}>Profile</NavLink>
              </>
            )}
            {!isLoggedIn && (
              <>
                <NavLink to="/login" className={activeLink}>Login</NavLink>
                <NavLink to="/signup" className={activeLink}>SignUp</NavLink>
              </>
            )}
            {isLoggedIn && (
              <button 
                onClick={handleLogout}
                className="nav-link logout-btn"
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  padding: '0.5rem 1rem',
                  fontSize: 'inherit',
                  color: 'inherit'
                }}
              >
                Logout
              </button>
            )}
          </div>
        </div>

        <div className="controls">
            <button className="controls-btn" onClick={toggleTheme}
             aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}>
              Toggle Theme
            </button>
        </div>

        </nav>   
    </header>
       
    </>
  )
}

export default NavBar;



