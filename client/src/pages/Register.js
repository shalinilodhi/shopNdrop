import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"; // reuse same style

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      alert("Registration successful. Please login.");
      navigate("/login");
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="app-title">Shop n Drop</h1>
        <p className="subtitle">Create New Account</p>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            name="name"
            placeholder="Enter full name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Role</label>
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="customer">Customer</option>
            <option value="vendor">Vendor</option>
            <option value="admin">Admin</option>
          </select>

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
