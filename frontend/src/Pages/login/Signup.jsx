import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/firebase";
import "../../Styles/Login.css";

function SignUp({ onLogin }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleSignUp = async () => {
    setError("");
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Save user info if needed
      localStorage.setItem("user", JSON.stringify(user));

      if (onLogin) onLogin();

      navigate("/Home");
    } catch (err) {
      console.error("Sign-up error:", err);
      setError("Google sign-up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <div className="auth-form">
        <h2>Create Your Account</h2>

        <button
          onClick={handleGoogleSignUp}
          disabled={loading}
          className="google-btn"
        >
          {loading ? "Creating account..." : "Sign up with Google"}
        </button>

        {error && (
          <div className="error-msg">
            ⚠️ {error}
          </div>
        )}

        <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", textAlign: "center" }}>
          Already have an account?{" "}
          <a href="/login" style={{ color: "var(--primary, #007bff)" }}>
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
