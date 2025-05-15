import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../confg/auth";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { myContext } from "../../App";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const { loginData, setLoginData } = useContext(myContext);
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google User:", result.user);
      setLoginData(result.user);
      alert("Successfully logged in");
      navigate("/");
    } catch (error) {
      console.error("Google Sign-in Error:", error);
      alert("Login failed: " + error.message);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result.user);
      alert("Email login sucessfully.");
      navigate("/");
    } catch (error) {
      console.error("login failed!! error:", error);
      if(error=='auth/invalid-credential'){
        alert("enter valid credential")
      }
      if(error==="auth/invalid-email"){
        alert("enter valid email address")
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
          <label
            className="form-label"
          >
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="form-label"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
