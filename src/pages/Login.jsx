import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import "./Login.css";

export default function Login() {
  const { dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const users = [
    { email: "mich@1234", password: "0000" },
    { email: "kenz@1234", password: "8989" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Reset error dulu
    setError("");

    // Validasi email format sederhana
    if (!email.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }

    if (password.length < 4) {
      setError("Password must be at least 4 characters.");
      return;
    }

    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      dispatch({ type: "LOGIN", payload: email });
      navigate("/products");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <p className="welcome-text">WELCOME BACK</p>

        <h1>
          Sign in to <br />
          your account
        </h1>

        <p className="subtitle">
          Access your cart and continue shopping.
        </p>

        {/* ERROR BOX */}
        {error && <div className="error-box">{error}</div>}

        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In →</button>
        </form>

        <small>Use any email + password (4+ chars) to sign in.</small>
      </div>
    </div>
  );
}