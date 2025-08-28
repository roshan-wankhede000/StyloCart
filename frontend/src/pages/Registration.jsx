import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post("https://stylocart.onrender.com/add", data)
      .then(() => navigate("/login"))
      .catch((err) => console.log(err.response));
  };

  const handleGoogleLogin = () => {
    window.open("https://stylocart.onrender.com/auth/google", "_self");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-4">
        <form onSubmit={handleSubmit(onSubmit)} className="border p-4 shadow rounded">
          <h3 className="text-center mb-4" style={{ fontFamily: 'serif' }}>
            Sign Up <span className="text-dark">—</span>
          </h3>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              {...register('username', { required: true })}
            />
            {errors.username && <div className="text-danger small">Name is required</div>}
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              {...register('email', { required: true })}
            />
            {errors.email && <div className="text-danger small">Email is required</div>}
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              {...register('password', { required: true })}
            />
            {errors.password && <div className="text-danger small">Password is required</div>}
          </div>

          <div className="d-flex justify-content-between mb-3">
            <a href="#" className="small text-decoration-none" style={{color:'#374151',}}>Forgot your password?</a>
            <Link to="/login" className="small text-decoration-none" style={{color:'#374151',}}>Login Here</Link>
          </div>

          <button type="submit" className="btn btn-dark w-100 mb-3">
            Sign Up
          </button>

          <div className="text-center text-muted ">or</div>

          <button type="button" className="btn btn-danger w-100" onClick={handleGoogleLogin}>
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
