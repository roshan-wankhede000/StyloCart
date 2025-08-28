import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post("http://localhost:3000/add", data)
      .then((res) => {
        console.log("Success, dictionary sent,");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleGoogleLogin = () => {
    // This opens the Google OAuth login in a new tab
    window.open("http://localhost:3000/auth/google", "_self");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Register with Email</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            {...register('username', { required: true })}
          />
          {errors.username && <p className="text-danger">Username is required.</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register('email', { required: true })}
          />
          {errors.email && <p className="text-danger">Email is required.</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register('password', { required: true })}
          />
          {errors.password && <p className="text-danger">Password is required.</p>}
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>

      <hr />

      <div className="text-center">
        <h5>Or sign in with</h5>
        <button onClick={handleGoogleLogin} className="btn btn-danger">
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Register;
