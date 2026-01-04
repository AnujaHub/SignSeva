import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../utils/authService";
import "../../Styles/Login.css";

function SignUp({ onLogin }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleSignUp = async () => {
    setError("");
    setLoading(true);
    try {
      const { authUser, userDoc } = await authService.signInWithGoogle();
      if (onLogin) onLogin();
      // If username is not set, send user to set-username page
      if (!userDoc || userDoc.username == null) {
        navigate("/set-username");
      } else {
        navigate("/home");
      }
    } catch (err) {
      console.error("Google sign-up error:", err);
      setError(err.message || "Google sign-up failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <div className="auth-form">
        <h2>Create Your Account</h2>

        <button onClick={handleGoogleSignUp} disabled={loading} className="google-btn">
          {loading ? "Signing in..." : "Sign up with Google"}
        </button>

        {error && <div className="error-msg">⚠️ {error}</div>}

        <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", textAlign: "center" }}>
          Already have an account? {" "}
          <a href="/login" style={{ color: "var(--primary, #007bff)" }}>
            SignIn here
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
