import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "./Navbar.css";

export default function Navbar() {
  const { dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <nav className="navbar">
     <h2 className="logo">
      <span className="logo-ob">OB</span>SIDIAN
    </h2>

      <div className="nav-links">
        <Link to="/products">Products</Link>
        <Link to="/checkout">Checkout</Link>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}