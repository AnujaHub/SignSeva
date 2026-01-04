import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider , db} from "../../utils/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import "../../Styles/Login.css";

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // ===== Firestore: store user data =====
      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      // Only create new document if user doesn't exist
    if (!docSnap.exists()) {
      await setDoc(userRef, {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        level: 1,
        xp: 0,
        streak: 0,
        progress: {},
        achievements: [],
        createdAt: new Date()
      });
    }
      if (onLogin) onLogin();
      navigate("/Home");

    } catch (err) {
      console.error("Google login error:", err.code, err.message);
      
      
      if (err.code === "auth/popup-blocked") {
        setError("Pop-up blocked. Please enable pop-ups and try again.");
      } else if (err.code === "auth/popup-closed-by-user") {
        setError("Sign-in was cancelled.");
      } else if (err.code === "auth/unauthorized-domain") {
        setError("This domain is not authorized. Check Firebase settings.");
      } else if (err.code === "auth/invalid-api-key") {
        setError("Firebase configuration error. Check your API key.");
      } else {
        setError(`Login failed: ${err.message}`);
      }
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
              { error}
          </div>
        )}

        <p className="helper-text">
          Secure login using your Google account
        </p>

        <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", textAlign: "center" }}>
          Don't have an account?{" "}
          <a href="/signup" style={{ color: "var(--primary, #007bff)" }}>
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
