import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export const productContext = createContext();

function Products({ children }) {
  const [productsItems, setProductsItems] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  let cartLength = cartItems.length

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://stylocart.onrender.com/getproduct");
        setProductsItems(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

    const fetchCart = async () => {
    try {
      const res = await axios.get("https://stylocart.onrender.com/getCart", { withCredentials: true });
      setCartItems(res.data.cartItems);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

    useEffect(() => {
      fetchCart();
    }, []);

  return (
    <productContext.Provider value={{ productsItems, cartLength }}>
      {children}
    </productContext.Provider>
  );
}

export default Products;
