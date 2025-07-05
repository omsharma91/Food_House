import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../confg/auth";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { myContext } from "../../App";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginData, setLoginData } = useContext(myContext);
  const navigate = useNavigate();

  // Google Sign-In
  const handleSignin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google User:", result.user);
      setLoginData(result.user);
      alert("Successfully logged in with Google");
      navigate("/");
    } catch (error) {
      console.error("Google Sign-in Error:", error);
      alert("Login failed: " + error.message);
    }
  };

  // Email/Password Sign-In
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setLoginData(result.user); // ✅ update context here
      alert("Email login successful.");
      navigate("/");
    } catch (error) {
      console.error("Login failed!! Error:", error.code);
      if (error.code === "auth/invalid-credential") {
        alert("Invalid email or password.");
      } else if (error.code === "auth/invalid-email") {
        alert("Enter a valid email address.");
      } else if (error.code === "auth/user-not-found") {
        alert("User not found.");
      } else if (error.code === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        alert("Login failed: " + error.message);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <form
        className="bg-white text-dark p-5 rounded shadow"
        style={{ width: "100%", maxWidth: "400px" }}
        onSubmit={handleEmailLogin}
      >
        <h2 className="text-center mb-4">Login</h2>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <button
            type="button"
            onClick={handleSignin}
            className="btn btn-outline-danger mt-2"
          >
            Sign In with Google
          </button>
        </div>
      </form>
    </div>
  );
}
