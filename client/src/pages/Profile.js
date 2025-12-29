import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/profile.css";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) return null;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2>My Profile</h2>

        <div className="profile-row">
          <span>Email:</span>
          <strong>{user.email}</strong>
        </div>

        <div className="profile-row">
          <span>Role:</span>
          <strong>{user.role}</strong>
        </div>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
