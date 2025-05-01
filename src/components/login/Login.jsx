import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../confg/auth";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google User:", result.user);
      setUser(result.user);
      alert("Successfully logged in");
      navigate("/");
    } catch (error) {
      console.error("Google Sign-in Error:", error);
      alert("Login failed: " + error.message);
    }
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    alert("Email login is not implemented yet.");
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
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Enter your email" />
        </div>

        <div className="mb-4">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Enter your password" />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <button type="button" onClick={handleSignin} className="btn btn-outline-danger mt-2">
            Sign In with Google
          </button>
        </div>
      </form>
    </div>
  );
}
