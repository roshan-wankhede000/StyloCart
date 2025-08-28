import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import line from "../assets/frontend_assets/line.png";
import contactImg from '../assets/frontend_assets/contact_img.png'; // replace with your actual image path
import Subscribe from '../component/Subscribe';

function Contact() {
    return (
        <div className="container mt-2">
            <div className="d-flex justify-content-center align-items-center mb-2">
                <h2 className="text-secondary mx-2">CONTACT</h2>
                <h2 className=""> US</h2>
                <img src={line} className="" alt="" width="100" height="15" />
            </div>

            <div className="row align-items-center">
                {/* Left Image Section */}
                <div className="col-12 col-md-6 mb-4 mb-md-0">
                    <img
                        src={contactImg}
                        alt="Office Desk"
                        className="img-fluid rounded"
                        style={{ width: '100%' }}
                    />
                </div>

                {/* Right Text Section */}
                <div className="col-12 col-md-6">
                    <h6 className="fw-bold mb-3">Our Store</h6>
                    <p className="mb-1">54709 Willms Station</p>
                    <p className="mb-3">Suite 350, Washington, USA</p>

                    <p className="mb-1">Tel: (415) 555-0132</p>
                    <p className="mb-4">Email: admin@forever.com</p>

                    <h6 className="fw-bold mb-2">Careers at Forever</h6>
                    <p className="mb-4">Learn more about our teams and job openings.</p>

                    <button className="btn btn-outline-dark">Explore Jobs</button>
                </div>
            </div>
            <Subscribe></Subscribe>
        </div>
    );
}

export default Contact;
