import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      toast.warning("Please enter both email and password.");
      return;
    }

    axios.post("http://localhost:3000/login", { email, password }, { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Login successful!");
          setTimeout(() => {
            navigate("/home");
          }, 1000);
        }
      })
      .catch((err) => {
        console.error("Login error:", err.response.status);
        if (err.response && err.response.status === 401) {
          toast.error("Username or password not valid");
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      });
  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4">Login</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default Login;
