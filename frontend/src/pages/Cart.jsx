import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import bin_icon from "../assets/frontend_assets/bin_icon.png"
import line from "../assets/frontend_assets/line.png";
import { Link } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  // Cart Load
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await axios.get("https://stylocart.onrender.com/getCart", { withCredentials: true });
      setCartItems(res.data.cartItems);

      // Subtotal Calculation
      const total = res.data.cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
      setSubtotal(total);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="mb-4">
          <div className="d-flex justify-content-start align-items-center">
            <h2 className="text-secondary mx-2">YOUR</h2>
            <h2> CART</h2>
            <img src={line} alt="" width="100" height="15" />
          </div>
          <hr />
        </div>

        {cartItems.map((item, i) => (
          <div key={i} className="row align-items-center bg-white p-3 border-bottom rounded my-2">
            <div className="col-md-1">
              <img src={`https://stylocart.onrender.com/uploads/${item.image}`} alt="Product" className="img-fluid cart-img" />
            </div>
            <div className="col-md-6">
              <h6>{item.name}</h6>
              <div className="text-muted">${item.totalPrice}</div>
              <div className="btn btn-outline-secondary btn-sm mt-2">{item.size}</div>
            </div>
            <div className="col-md-2">
              <input type="number" className="form-control" value={item.quantity} min="1" readOnly />
            </div>
            <div className="col-md-3 text-end">
              <button className="btn btn-link text-danger">
                <img src={bin_icon} width='20' alt='remove cart' />
              </button>
            </div>
          </div>
        ))}

        <div className="row justify-content-end mt-4">
          <div className="col-md-4">
            <div className="bg-white p-4 rounded">
              <div className="d-flex justify-content-start mb-3 align-items-center">
                <h2 className="text-secondary mx-2">Cart</h2>
                <h2>Total</h2>
                <img src={line} alt="" width="100" height="15" />
              </div>

              <div className="d-flex justify-content-between pb-2 border-bottom">
                <span className="cart-label">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between pb-2 border-bottom">
                <span className="cart-label">Shipping Fee</span>
                <span>$10.00</span>
              </div>
              <div className="d-flex justify-content-between mt-2 cart-totals">
                <span className="fw-bold">Total</span>
                <span>${(subtotal + 10).toFixed(2)}</span>
              </div>
              <Link to="/placeorder" className="btn btn-dark w-100 mt-3">Proceed to Checkout</Link>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Cart
