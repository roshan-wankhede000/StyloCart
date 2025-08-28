import React from 'react'
import logo from "../assets/frontend_assets/logo.png"
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
     <div className="container my-5 pt-5">
        <div className="row">
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-10 ">
                      <img src={logo} className="img-fluid mb-3" width="130" alt="" />
                      <p className="mb-3 text-secondary" style={{fontSize:'14px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
               <div className="d-flex flex-column junstify-content-start">
                 <p className="mb-3 fw-bold fs-4">Compony</p>
                 <Link to="/" className="mb-0 text-secondary text-decoration-none" style={{fontSize:'14px'}}>Home</Link>
                 <Link to="/about" className="mb-0 text-secondary text-decoration-none" style={{fontSize:'14px'}}>About Us</Link>
                 <Link to="/contact" className="mb-0 text-secondary text-decoration-none" style={{fontSize:'14px'}}>Contact Us</Link>
                 <p className="mb-b text-secondary" style={{fontSize:'14px'}}>Private Policy</p>
               </div>
            </div>

            <div className="col-md-3">
               <div className="d-flex flex-column junstify-content-start ">
                 <p className="mb-3 fw-bold fs-4">GET IN TOUCH</p>
                 <p className="mb-0 text-secondary" style={{fontSize:'14px'}}>+91-9988776655</p>
                 <p className="mb-3 text-secondary" style={{fontSize:'14px'}}>roshanwankhede212@gmail.com</p>
               </div>
            </div>
        </div>

        <div className="my-5">
            <hr />
            <p className="text-center">Copyright 2025 © Roshan.dev - All Right Reserved.</p>
        </div>

     </div>
    </>
  )
}

export default Footer