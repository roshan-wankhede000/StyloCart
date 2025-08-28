  import axios from "axios";
  import { Link, useNavigate } from "react-router-dom";
  import Cookies from 'js-cookie';
import { useEffect } from "react";

  function Admin(params) {
      const navigate = useNavigate();
      useEffect(() => {
    const token = Cookies.get("email");
    if (token !== "admin@gmail.com") {
      navigate("/login");
    }
  }, []);
      const handleSubmit = (e)=>{
        e.preventDefault()
        const data=new FormData(e.target)
          axios.post("https://stylocart.onrender.com/addproduct", data,{
            headers: { "Content-Type": "multipart/form-data" }

          })
          .then((res) => {
          console.log("Success, dictionary sent,");
          navigate("/");
        })
        .catch((err) => {
          console.log(err.response);
        });
      }

      return(
          <>
 <div className="container-fluid">
  <div className="admin-col">
    <div className="">
      <div className="sidebar">
 <button className="btn active-btn btn-outline-secondary sidebar-btn w-100 mb-2">
     <Link to="/admin" className="text-decoration-none" ><span>➕</span> Add Items</Link> 
  </button>
  <button className="btn btn-outline-secondary sidebar-btn w-100 mb-2">
   <Link to="/allitems" className="text-decoration-none" ><span>🗂️</span> List Items</Link> 
  </button>
  <button className="btn  btn-outline-secondary sidebar-btn w-100">
    <Link to="/allorders" className="text-decoration-none" ><span>🧾</span> Orders</Link>
  </button>
</div>
    </div>
    <div className="my-5">
      <h3 className="text-center">Add Items</h3>
    <form  onSubmit={(e)=>handleSubmit(e)} method="post" enctype="multipart/form-data"> 
    <div className="form-group">
      <label>Upload Image</label>
      <div className="upload-grid d-flex flex-wrap">
        <input type="file" name="image1" className="upload-box" accept="image/*" />
        <input type="file" name="image2" className="upload-box" accept="image/*" />
        <input type="file" name="image3" className="upload-box" accept="image/*" />
        <input type="file" name="image4" className="upload-box" accept="image/*" />
      </div>
    </div>

    <div className="form-group">
      <label>Product name</label>
      <input type="text" name="name" placeholder="Type here" required />
    </div>

    <div className="form-group">
      <label>Product description</label>
      <textarea name="description" rows="3" placeholder="Write content here"></textarea>
    </div>

    <div className="form-group row">
      <div>
        <label>Product category</label>
        <select name="category">
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
      </div>
      <div>
        <label>Sub category</label>
        <select name="subCategory">
          <option value="Topwear">Topwear</option>
          <option value="Bottomwear">Bottomwear</option>
        </select>
      </div>
      <div>
        <label>Product Price</label>
        <input type="text" name="price"  required />
      </div>
    </div>

    <div className="form-group">
      <label>Product Sizes</label>
      <div className="sizes">
        <label><input type="checkbox" name="sizes" value="S" /> <span className="size-box">S</span></label>
        <label><input type="checkbox" name="sizes" value="M" /> <span className="size-box">M</span></label>
        <label><input type="checkbox" name="sizes" value="L" /> <span className="size-box">L</span></label>
        <label><input type="checkbox" name="sizes" value="XL" /> <span className="size-box">XL</span></label>
        <label><input type="checkbox" name="sizes" value="XXL" /> <span className="size-box">XXL</span></label>
      </div>
    </div>

    <div className="checkbox">
      <input type="checkbox" name="bestseller" id="bestseller" />
      <label for="bestseller">Add to bestseller</label>
    </div>

    <button type="submit">Submit Product</button>
  </form>
    </div>
  </div>
</div>
          </>
      )
  }

  export default Admin;