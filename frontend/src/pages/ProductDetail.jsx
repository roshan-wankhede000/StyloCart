import React, { useContext, useEffect, useState } from 'react'
import line from "../assets/frontend_assets/line.png";
import axios from 'axios';

import star_icon from '../assets/frontend_assets/star_icon.png'
import star_dull_icon from '../assets/frontend_assets/star_dull_icon.png'
import { Link, useParams } from 'react-router-dom'
import { productContext } from '../context/Products'

function ProductDetail() {
  let { id } = useParams()
  let { productsItems } = useContext(productContext)
  let [ProductDetails, setProductDetails] = useState(null)
  let [relatedProduct, setRelatedProduct] = useState([])
  let [arrSize, setArrSize] = useState([])
  let [size,setSize] = useState()
  let [image,setImage] = useState()

  useEffect(() => {
    if (productsItems) {
      let product = productsItems.find(item => item._id === id)
      setProductDetails(product)
    }
  }, [id, productsItems])
  
useEffect(() => {
  if (ProductDetails) {
    setImage(ProductDetails.image1)
    setArrSize(ProductDetails.sizes.split(','))
  }
}, [ProductDetails])

useEffect(()=>{
  if(ProductDetails){
    let related = productsItems.filter(items => items.category == ProductDetails.category)
    setRelatedProduct(related)
  }
},[ProductDetails, productsItems])
 

  const fetchProducts = async () => {
  if (!size) {
    alert("Please select a size before adding to cart.");
    return;
  }
  try {
    const data = {
      size: size,
      quantity: 1
    };
    const response = await axios.post(`https://stylocart.onrender.com/addToCart/${ProductDetails._id}`, data, {
      withCredentials: true 
    });
    alert("Product added to cart!");
  } catch (err) {
    console.error("Error adding product to cart:", err);
  }
};


    
 

  if (!ProductDetails) {
    return <div className="text-center py-5">Loading product details...</div>
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-3">
                <div className="mb-2">
                  {ProductDetails.image1 ? <img src={`https://stylocart.onrender.com/uploads/${ProductDetails.image1}`} onClick={()=>setImage(ProductDetails.image1)} className="img-fluid" alt="Thumbnail 1" /> : ''}   
                </div>
                <div className="mb-2">
                   {ProductDetails.image2 ? <img src={`https://stylocart.onrender.com/uploads/${ProductDetails.image2}`} onClick={()=>setImage(ProductDetails.image2)} className="img-fluid" alt="Thumbnail 2" /> : <img src={`https://stylocart.onrender.com/uploads/${ProductDetails.image2}`} onClick={()=>setImage(ProductDetails.image2)} className="img-fluid d-none" alt="Thumbnail 2" />}
                </div>
                <div className="mb-2">
                  {ProductDetails.image3 ? <img src={`https://stylocart.onrender.com/uploads/${ProductDetails.image3}`} onClick={()=>setImage(ProductDetails.image3)} className="img-fluid" alt="Thumbnail 2" /> : <img src={`https://stylocart.onrender.com/uploads/${ProductDetails.image3}`} onClick={()=>setImage(ProductDetails.image3)} className="img-fluid d-none" alt="Thumbnail 3" />}
                </div>
                <div className="mb-2">
                  {ProductDetails.image4 ? <img src={`https://stylocart.onrender.com/uploads/${ProductDetails.image4}`} onClick={()=>setImage(ProductDetails.image4)} className="img-fluid" alt="Thumbnail 2" /> : <img src={`https://stylocart.onrender.com/uploads/${ProductDetails.image4}`} onClick={()=>setImage(ProductDetails.image4)} className="img-fluid d-none" alt="Thumbnail 4" />}
                </div>
                
              </div>
              <div className="col-md-9">
                <img src={`https://stylocart.onrender.com/uploads/${image}`} className="" alt="Main Product" />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <p className="fs-4 text-dark">{ProductDetails.name}</p>
            <div className="d-flex gap-1 pb-3">
              <img className="" src={star_icon} alt="" width="12" height="12" />
              <img className="" src={star_icon} alt="" width="12" height="12" />
              <img className="" src={star_icon} alt="" width="12" height="12" />
              <img className="" src={star_icon} alt="" width="12" height="12" />
              <img className="" src={star_dull_icon} alt="" width="12" height="12" />
            </div>
            <p className="fs-4 fw-bolder pb-2">{ProductDetails.price} $</p>
            <p className="text-secondary pb-2">{ProductDetails.description}</p>
            <div className="pb-3">
              <p>Select Size</p>
              {
                arrSize.map((items,i)=>(
                    <button key={i} onClick={()=>setSize(items)}  className={`btn btn-outline-danger border mx-2 ${items == size ? 'bg-danger text-white': '' }`}>{items}</button>
                ))
              }
            </div>

            <button className="btn btn-dark mb-3" onClick={()=>fetchProducts()}>Add To Cart</button>
            <div>
              <hr />
              <p className="text-secondary mb-0">100% Original product.</p>
              <p className="text-secondary mb-0">Cash on delivery is available on this product.</p>
              <p className="text-secondary mb-0">Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>

        <div className="my-5">
          <div className="d-flex">
            <p className="border p-2 mb-0 text-dark fw-bold">Description</p>
            <p className="border p-2 mb-0">Reviews (122)</p>
          </div>
          <p className="border p-4 text-secondary">
            An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet...
          </p>
        </div>

        <div>
          <div className="d-flex justify-content-center align-items-center mb-5">
        <h2 className="text-secondary mx-2">RELETED</h2>
        <h2 className=""> PRODUCTS</h2>
        <img src={line} className="" alt="" width="100" height="15" />
      </div>
        <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
        {relatedProduct.map((product, i) => (
          <Link to={`/productDetail/${product._id}`} key={i} className="product-card text-decoration-none text-secondary">
              <img src={`https://stylocart.onrender.com/uploads/${product.image1}`} className="img-fluid" alt="" />
              <p className="m-0">{product.name}</p>
              <p className="fw-bold" style={{ color: "#374151" }}>
                ${product.price}
              </p>
            </Link>
        ))}
      </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
