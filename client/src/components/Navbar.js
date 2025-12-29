import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">Shop n Drop</Link>
      </div>

      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>

        {user?.role === "customer" && <Link to="/cart">Cart</Link>}
        {user?.role === "admin" && <Link to="/admin">Admin</Link>}
        {user?.role === "vendor" && <Link to="/vendor">Vendor</Link>}

        {!user ? (
          <>
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/register" className="signup-btn">Sign Up</Link>
          </>
        ) : (
          <div className="profile-wrapper">
            <button
              className="profile-btn"
              onClick={() => setShowProfile(!showProfile)}
            >
              👤 Profile ▾
            </button>

            {showProfile && (
              <div className="profile-dropdown">
                <p className="profile-email">{user.email}</p>
                <hr />
                <button onClick={() => navigate("/profile")}>
                  My Profile
                </button>
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
