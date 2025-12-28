import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../api/api";
import "../styles/login.css";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const data = await loginUser({ email, password });
    login(data.token, data.user.role);
  };

  return (
    <form className="login" onSubmit={submit}>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button>Login</button>
    </form>
  );
}
