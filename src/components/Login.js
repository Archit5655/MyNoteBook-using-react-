import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  let history=useNavigate()
  const handleSumbit = async (e) => {
    e.preventDefault();
    fetch("");
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
        // redirecr 
        localStorage.setItem('token',json.jwtdata)
        history("/home")
        props.showAlert("Login Successfully","success")
    }
    else{
      props.showAlert("Invalid Credentials","danger")
    }

  };
  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div  className="mt-2">
      <h2 >Login to see your Notes</h2>
      <form onSubmit={handleSumbit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            value={credentials.email}
            type="email"
            onChange={onchange}
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={onchange}
            value={credentials.password}
            className="form-control"
            name="password"
            id="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
