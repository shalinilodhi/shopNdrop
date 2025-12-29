import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/login.css";

const Login = () => {
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    role: "customer",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form); // backend logic stays SAME
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="app-title">Shop n Drop</h1>
        <p className="subtitle">Role Based Login</p>

        <form onSubmit={handleSubmit}>
          <label>Role</label>
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="admin">Admin</option>
            <option value="vendor">Vendor</option>
            <option value="customer">Customer</option>
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

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
