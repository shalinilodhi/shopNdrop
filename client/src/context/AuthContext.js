import { createContext, useState } from "react";
import { loginUser } from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedUser = localStorage.getItem("user");

  const [user, setUser] = useState(
    storedUser ? JSON.parse(storedUser) : null
  );

  const login = async (email, password, role) => {
    try {
      const data = await loginUser(email, password, role);

      if (!data || !data.user) {
        alert("Login failed");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);

      setUser(data.user);

      if (data.user.role === "admin") {
        window.location.href = "/admin";
      } else if (data.user.role === "vendor") {
        window.location.href = "/vendor";
      } else {
        window.location.href = "/products";
      }
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
