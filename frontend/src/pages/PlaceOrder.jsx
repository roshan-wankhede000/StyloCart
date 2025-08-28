import React, { useEffect, useState } from 'react';
import line from "../assets/frontend_assets/line.png";
import razorpay_logo from '../assets/frontend_assets/razorpay_logo.png'
import stripe_logo from '../assets/frontend_assets/stripe_logo.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PlaceOrder() {
    let navigate = useNavigate()
    const [cartItems, setCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
  });

  useEffect(() => {
  const fetchCart = async () => {
    try {
      const res = await axios.get("https://stylocart.onrender.com/getCart", {
        withCredentials: true
      });
      setCartItems(res.data.cartItems);

      const total = res.data.cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
      setSubtotal(total);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  fetchCart();
}, []);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const orderHandle = async () => {
    try {
      const res = await axios.post("https://stylocart.onrender.com/placeorder", formData, {
        withCredentials: true // 🧠 Required to send cookies
      });

      alert("Order placed successfully!");
      navigate("/order")
    
    } catch (err) {
      console.error("Order placement error:", err);
      alert(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Left Form */}
        <div className="col-md-7">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <h2 className="text-secondary mx-2">DELIVERY</h2>
            <h2>INFORMATION</h2>
            <img src={line} alt="" width="100" height="15" />
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control" placeholder="First name" />
            </div>
            <div className="col-md-6">
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" placeholder="Last name" />
            </div>
          </div>
          <div className="mb-3">
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Email address" />
          </div>
          <div className="mb-3">
            <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" placeholder="Street" />
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-control" placeholder="City" />
            </div>
            <div className="col-md-6">
              <input type="text" name="state" value={formData.state} onChange={handleChange} className="form-control" placeholder="State" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <input type="text" name="zip" value={formData.zip} onChange={handleChange} className="form-control" placeholder="Zipcode" />
            </div>
            <div className="col-md-6">
              <input type="text" name="country" value={formData.country} onChange={handleChange} className="form-control" placeholder="Country" />
            </div>
          </div>
          <div className="mb-3">
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control" placeholder="Phone" />
          </div>
        </div>

        {/* Right Cart Summary */}
        <div className="col-md-5">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <h2 className="text-secondary mx-2">CART</h2>
            <h2>TOTAL</h2>
            <img src={line} alt="" width="100" height="15" />
          </div>

          <div className="d-flex justify-content-between mb-2">
  <span>Subtotal</span>
  <span>${subtotal.toFixed(2)}</span>
</div>
<div className="d-flex justify-content-between mb-2">
  <span>Shipping Fee</span>
  <span>$10.00</span>
</div>
<div className="d-flex justify-content-between fw-bold border-top pt-2 mb-4">
  <span>Total</span>
  <span>${(subtotal + 10).toFixed(2)}</span>
</div>


          <h6 className="fw-bold mb-3">PAYMENT <span className="text-secondary">METHOD</span></h6>
          <div className="d-flex gap-2 mb-4">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="paymentMethod" id="stripe" />
              <label className="form-check-label" htmlFor="stripe">
                <img src={stripe_logo} height="24" alt="Stripe" />
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="paymentMethod" id="razorpay" />
              <label className="form-check-label" htmlFor="razorpay">
                <img src={razorpay_logo} height="24" alt="Razorpay" />
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="paymentMethod" id="cod" />
              <label className="form-check-label" htmlFor="cod">
                <span className="badge bg-light text-success border border-success">CASH ON DELIVERY</span>
              </label>
            </div>
          </div>

          <button onClick={orderHandle} className="btn btn-dark w-100">PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
