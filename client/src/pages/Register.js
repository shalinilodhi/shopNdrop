import "../styles/auth.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>

        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Register</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
