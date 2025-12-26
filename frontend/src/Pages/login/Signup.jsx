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
      console.error("❌ Google sign-up error:", err.code, err.message);
      
      // Show user-friendly error messages
      if (err.code === "auth/popup-blocked") {
        setError("Pop-up blocked. Please enable pop-ups and try again.");
      } else if (err.code === "auth/popup-closed-by-user") {
        setError("Sign-up was cancelled.");
      } else if (err.code === "auth/unauthorized-domain") {
        setError("This domain is not authorized. Check Firebase Console settings.");
      } else if (err.code === "auth/invalid-api-key") {
        setError("Firebase configuration error. Check your API key.");
      } else {
        setError(`Sign-up failed: ${err.message}`);
      }
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
