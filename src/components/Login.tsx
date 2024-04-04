import React, { useState } from "react";

const LoginToken = async (credentials : object) => {
  const data = await fetch('http://localhost:8080/login',{
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  const tokenData = await data.json();
  return tokenData;
}


export default function Login({setToken}: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e: any)  => {
    e.preventDefault();
    const token = await LoginToken({
      username: username,
      password: password
    })
    setToken(token)
  };
  return (
    <div className="login__container">
      <h1 className="login">Login</h1>
      <form className="login__form" onSubmit={handleFormSubmit}>
        <p className="login__form_label">Username</p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login__form_input"
        />
        <p className="login__form_label">Password</p>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login__form_input" />
        <button
          type="submit"
          className="login__form_submit"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
