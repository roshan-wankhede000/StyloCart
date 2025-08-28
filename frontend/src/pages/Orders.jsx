import React, { useEffect, useState } from 'react';
import axios from 'axios';
import line from "../assets/frontend_assets/line.png";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await axios.get("http://localhost:3000/getorders", {
          withCredentials: true
        });
        setOrders(res.data.orders);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    }

    fetchOrders();
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="mb-3">
          <div className="d-flex justify-content-start align-items-center">
            <h2 className="text-secondary mx-2">MY</h2>
            <h2 className="">ORDERS</h2>
            <img src={line} className="" alt="" width="100" height="15" />
          </div>
          <hr />
        </div>

        {orders.length === 0 ? (
  <p>No orders found.</p>
) : (
  orders.map((order, index) => (
    order.products.map((product, i) => (
      <div key={`${index}-${i}`} className="order-box d-flex justify-content-between flex-wrap border-bottom align-items-center mb-3">
        <div className="d-flex">
          <img
            src={`http://localhost:3000/uploads/${product.image}`}
            alt="Product"
            className="order-img me-3"
            width="100"
          />
          <div>
            <h6 className="mb-1">{product.name}</h6>
            <p className="mb-1">${product.price + 10} &nbsp;&nbsp; Quantity: {product.quantity} &nbsp;&nbsp; Size: {product.size}</p>
            <p className="mb-1 text-muted">Date: {new Date(order.createdAt).toDateString()}</p>
            <p className="mb-1"><strong>Payment:</strong> {order.paymentMethod || 'N/A'}</p>
          </div>
        </div>
        <div>
          <p className="mb-2"><span className="status-dot"></span>Out for delivery</p>
        </div>
        <div className="d-flex flex-column align-items-end">
          <button className="btn btn-outline-secondary btn-sm">Track Order</button>
        </div>
      </div>
    ))
  ))
)}
      </div>
    </>
  );
}

export default Orders;
