import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { productContext } from '../context/Products';
import axios from 'axios';

function Allitems() {
  const { productsItems } = useContext(productContext);
  const navigate = useNavigate();

  async function deleteItem(id) {
    try {
      const res = await axios.delete(`http://localhost:3000/deleteitems/${id}`);
      navigate("/allitems"); 
      window.location.reload()
    } catch (err) {
      console.error("Delete error:", err.response);
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="admin-col">
          <div className="">
            <div className="sidebar">
              <button className="btn sidebar-btn btn-outline-secondary w-100 mb-2">
                <Link to="/admin" className="text-decoration-none"><span>➕</span> Add Items</Link> 
              </button>
              <button className="btn active-btn btn-outline-secondary sidebar-btn w-100 mb-2">
                <Link to="/allitems" className="text-decoration-none"><span>🗂️</span> List Items</Link> 
              </button>
              <button className="btn btn-outline-secondary sidebar-btn w-100">
                <Link to="/allorders" className="text-decoration-none"><span>🧾</span> Orders</Link>
              </button>
            </div>
          </div>
          <div className="my-5 w-100">
            <h5 className="mb-4">All Products List</h5>
            <table className="table table-bordered table-hover align-middle bg-white">
              <thead className="table-light">
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {productsItems && productsItems.map((product, i) => (
                  <tr key={i}>
                    <td><img src={`http://localhost:3000/uploads/${product.image1}`} className="product-img" alt="Product" /></td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price} $</td>
                    <td>
                      <button className="m-0 btn btn-outline-secondary" onClick={() => deleteItem(product._id)}>
                        <span className="delete-btn">&times;</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Allitems;
