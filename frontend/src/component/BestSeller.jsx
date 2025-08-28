import React, { useContext, useEffect, useState } from 'react'
import line from "../assets/frontend_assets/line.png";
import { productContext } from '../context/Products';
import { Link } from 'react-router-dom';

function BestSeller() {

    let {productsItems} = useContext(productContext)
    let [latestProduct, setLatestProduct] = useState([])

 useEffect(()=>{
    if (productsItems && Array.isArray(productsItems)) {
   let copyProducts = productsItems.slice()
   let filter = copyProducts.filter(item => item.bestseller === 'yes')
   setLatestProduct(filter)
    }
 },[productsItems]) 

  return (
    <>
        <div className="container my-5 pt-5">
        <div className="d-flex justify-content-center align-items-center">
          <h2 className="text-secondary mx-2">BEST</h2>
          <h2 className="">SELLERS</h2>
          <img src={line} className="" alt="" width="100" height="15" />
        </div>
        <p className="text-center text-secondary pb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          illo dolorem in id deleniti odio.
        </p>
        
        <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">

        {latestProduct.map((product,i) => (
        <Link to={`/productDetail/${product._id}`} key={i} className='text-decoration-none'>
          <div key={i} className="product-card ">
        <img src={`http://localhost:3000/uploads/${product.image1}`} className='img-fluid' alt="product image" />
        <p className="m-0" style={{color:'#374151',}}>{product.name}</p>
        <p className="fw-bold" style={{color:'#374151',}}>${product.price}</p>
       </div>
        </Link>
      ))}

        </div>
      </div>
    </>
  )
}

export default BestSeller