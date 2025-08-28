import React, { useContext, useEffect, useState } from 'react';
import line from "../assets/frontend_assets/line.png";
import { productContext } from '../context/Products';
import { Link } from 'react-router-dom';
import BestSeller from './BestSeller';
import OurPolicy from './OurPolicy';
import Subscribe from './Subscribe';


function ProductList() {
  const { productsItems } = useContext(productContext);
  let [latestProduct, setLatestProduct] = useState([])

useEffect(() => {
  if (productsItems && Array.isArray(productsItems)) {
    setLatestProduct(productsItems.slice(0, 10));
  }
}, [productsItems])

  return (
    <>

<div className="container my-5 pt-5">
        <div className="d-flex justify-content-center align-items-center">
          <h2 className="text-secondary mx-2">LATEST</h2>
          <h2 className=""> COLLECTIONS</h2>
          <img src={line} className="" alt="" width="100" height="15" />
        </div>
        <p className="text-center text-secondary pb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          illo dolorem in id deleniti odio.
        </p>
        
        <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
         {latestProduct ? latestProduct.map((product,i) => (
          <Link to={`/productDetail/${product._id}`} key={i} className="product-card text-decoration-none">
          <img src={`http://localhost:3000/uploads/${product.image1}`} className='img-fluid' alt="product image" />
          <p className="m-0 text">{product.name}</p>
          <p className="fw-bold" style={{color:'#374151',}}>${product.price}</p>
          </Link>

        )): <p>Loading...</p>}
        </div>
</div>
      
          <BestSeller></BestSeller>
          <OurPolicy></OurPolicy>
          <Subscribe></Subscribe>
</>
  );
}

export default ProductList;
