import React, { useEffect, useState } from 'react';
import logo from "../assets/frontend_assets/logo.png";
import searchIcon from "../assets/frontend_assets/search_icon.png";
import profileIcon from "../assets/frontend_assets/profile_icon.png";
import cartIcon from "../assets/frontend_assets/cart_icon.png";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

const handleLogout = () => {
  axios.get("https://stylocart.onrender.com/logout", { withCredentials: true })
    .then((res) => {
      window.location.reload(); // 🔁 Refresh navbar UI
    })
    .catch((err) => {
      console.error("Logout failed:", err);
    });
};

  
  useEffect(() => {
  const email = getCookie("email");
  console.log("Logged in user:", email); // Debug check
  setIsLoggedIn(!!email);
}, []);

  return (
    <div className="container">
      <div className="row navbar">
        <div className="col-sm-2">
          <img src={logo} className="img-fluid" alt="Logo" />
        </div>

        <div className="col-sm-8">
          <nav className="nav d-flex justify-content-center align-items-center gap-3">
            <NavLink to="/" className="nav-pages">HOME</NavLink>
            <NavLink to="/collection" className="nav-pages">COLLECTION</NavLink>
            <NavLink to="/about" className="nav-pages">ABOUT</NavLink>
            <NavLink to="/contact" className="nav-pages">CONTACT</NavLink>
            <NavLink to="/admin" className="btn btn-outline-secondary m-0 nav-pages rounded-5">Admin Panel</NavLink>
          </nav>
        </div>

        <div className="col-sm-2">
          <div className="d-flex justify-content-center gap-3 position-relative">

            {/* Search Icon */}
            <Link to="/collection"><img src={searchIcon} className="nav-icon" alt="Search" /></Link>

            {/* Profile Dropdown */}
            <div className="position-relative dropdown-hover">
              <img src={profileIcon} className="nav-icon" alt="Profile" />
              <div className="profile-dropdown position-absolute bg-light shadow rounded py-2 px-3" style={{left:'-60px'}}>
                {isLoggedIn ? (
                 <><button className="dropdown-item text-danger" onClick={handleLogout}>Logout</button>
                  <NavLink to='/order' className="dropdown-item text-danger">Orders</NavLink></>
                ) : (
                  <NavLink to="/login" className="dropdown-item">Login</NavLink>
                )}
              </div>
            </div>

            {/* Cart Icon */}
            <div className="position-relative">
              <NavLink to="/cart">
                <img src={cartIcon} className="nav-icon" alt="Cart" />
                {/* <p className="cart-icon-count">0</p> */}
              </NavLink>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
