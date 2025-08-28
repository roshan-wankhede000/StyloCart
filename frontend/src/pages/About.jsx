import React from 'react'
import aboutImg from '../assets/frontend_assets/about_img.png'
import line from "../assets/frontend_assets/line.png";
import Subscribe from '../component/Subscribe';

function About() {
    return (
        <>
            <div className="container ">
                <div className="d-flex justify-content-center align-items-center mt-2">
                    <h2 className="text-secondary mx-2">ABOUT</h2>
                    <h2 className=""> US</h2>
                    <img src={line} className="" alt="" width="100" height="15" />
                </div>
                <div className="row my-3 align-items-center">
                    <div className="col-md-4 about-image ">
                        <img src={aboutImg} alt="Clothing Flat Lay" />
                    </div>
                    <div className="col-md-8 about-text ">
                        <p>
                            Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online.
                            Our journey began with a simple idea: to provide a platform where customers can easily discover, explore,
                            and purchase a wide range of products from the comfort of their homes.
                        </p>
                        <p>
                            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater
                            to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an
                            extensive collection sourced from trusted brands and suppliers.
                        </p>
                        <h5>Our Mission</h5>
                        <p>
                            Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to
                            providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery
                            and beyond.
                        </p>
                    </div>
                </div>

                <div className="my-5">
                    <div className="d-flex justify-content-start align-items-center mt-2">
                        <h2 className="text-secondary mx-2">WHY</h2>
                        <h2 className=""> CHOOSE Us</h2>
                        <img src={line} className="" alt="" width="100" height="15" />
                    </div>
                    
                        <div className="d-flex justify-content-center align-items-center my-4 flex-wrap">
                            <div className="border p-5">
                                <p className='fw-bold'>Quality Assurance:</p>
                                <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                            </div>
                            <div className="border p-5">
                                <p className='fw-bold'>Quality Assurance:</p>
                                <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                            </div>
                            <div className="border p-5">
                                <p className='fw-bold'>Quality Assurance:</p>
                                <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                            </div>
                        </div>
                </div>

                <Subscribe></Subscribe>
                
            </div>
        </>
    )
}

export default About