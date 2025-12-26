import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../../utils/firebase";
import "../../Styles/Login.css";

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;

      // Store user info (optional)
      localStorage.setItem("user", JSON.stringify(user));

      if (onLogin) onLogin();

      navigate("/Home");
    } catch (err) {
      console.error(err);
      setError("Google login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <div className="auth-form">
        <h2>Login to SignSeva</h2>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="google-btn"
        >
          {loading ? "Signing in..." : "Sign in with Google"}
        </button>

        {error && (
          <div className="error-msg">
            ⚠️ {error}
          </div>
        )}

        <p className="helper-text">
          Secure login using your Google account
        </p>
      </div>
    </div>
  );
}

export default Login;
