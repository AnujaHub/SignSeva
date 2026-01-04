import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../utils/authService";
import { Link } from 'react-router-dom';
import "../../Styles/Login.css";

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const { authUser, userDoc } = await authService.signInWithGoogle();
      if (onLogin) onLogin();
      if (!userDoc || userDoc.username == null) navigate("/set-username");
      else navigate("/home");
    } catch (err) {
      console.error("Google login error:", err);
      setError(err.message || "Google login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <div className="auth-form">
        <h2>Welcome to SignSeva :)</h2>

        <button onClick={handleGoogleLogin} disabled={loading} className="google-btn">
          {loading ? "Signing in..." : "Continue with Google"}
        </button>

        {error && <div className="error-msg">{error}</div>}

        {/* <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", textAlign: "center" }}>
          Don't have an account? {" "}
          <Link to="/auth" style={{ color: "var(--primary, #007bff)" }}>
            Get started
          </Link>
        </p> */}
      </div>
    </div>
  );
}

export default Login;
