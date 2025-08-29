import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate()
    let [email,setEmail] = useState()
    let [password,setPassword] = useState()
    function logInUser(e) {
        e.preventDefault();
        axios.post("https://stylocart.onrender.com/login",{ email,password },{
            withCredentials: true // <-- This allows cookies to be sent/stored
        }).then((res)=>{console.log("Success, dictionary sent,");
            navigate("/");
            window.location.reload()
        }).catch((err) => {
      });
    }
  return (
    <>
    <div className="login">
       <div className="form-container">
    <h2>Login</h2>
    <form onSubmit={(e)=>logInUser(e)}>
      <div className="mb-3">
        <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Email" />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="Password" />
      </div>
      <div className="form-footer">
        <a href="#">Forgot your password?</a>
        <Link to="/registration">Create Account <i class="bi bi-arrow-right"></i></Link>
      </div>
      <div className="text-center mt-4">
        <button type="submit" className="btn btn-custom px-5">Sign In</button>
      </div>
    </form>
  </div>
  </div>
    </>
  )
}

export default Login