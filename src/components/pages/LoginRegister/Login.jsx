import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import "./LoginRegister.css";
import { HomeHeader } from "../../organisms/HomeHeader/HomeHeader";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginmessage, setLoginmessage] = useState(
    "Enter your email and password"
  );

  const handleLogin = (event) => {
    event.preventDefault();

    const userRegistered = localStorage.getItem("userRegistered");

    if (!email || !password) {
      setLoginmessage("You must complete all the fields");
      return;
    }

    if (!userRegistered || JSON.parse(userRegistered).email !== email) {
      setLoginmessage("User not found");
      return;
    }

    if (JSON.parse(userRegistered).password !== password) {
      setLoginmessage("Incorrect user or password");
      return;
    }

    localStorage.setItem("userLogged", userRegistered);

    navigate("/dashboard");
  };

  return (
    <>
      <HomeHeader />
      <main>
        <article className="userFormContainer">
          <h1>Login</h1>
          <form action="" className="userForm">
            <p>{loginmessage}</p>
            <input
              type="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="primary" onClick={handleLogin}>
              Login
            </button>
          </form>
        </article>
      </main>
    </>
  );
};
