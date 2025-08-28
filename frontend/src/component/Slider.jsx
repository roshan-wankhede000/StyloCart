import React from 'react'
import heroImg from "../assets/frontend_assets/hero_img.png";
import line from "../assets/frontend_assets/line.png";

function Slider() {
  return (
    <>
       <div className="container p-0">
        <div className="row border">
          <div className="col-md-6 my-5 d-flex flex-column justify-content-center">
            <div className="d-flex justify-content-center ">
              <img src={line} className="pt-1" alt="" width="100" height="15" />
              <p className="hero-text">OUR BESTSELLERS</p>
            </div>
            <h1 className="text-center hero-latest">Latest Arrivals</h1>
            <div className="d-flex justify-content-center ">
              <p className="hero-text">OUR BESTSELLERS</p>
              <img src={line} className="pt-1" alt="" width="100" height="15" />
            </div>
          </div>
          <div className="col-md-6 p-0">
            <img src={heroImg} className="img-fluid" alt="Model" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider