import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export const productContext = createContext();

function Products({ children }) {
  const [productsItems, setProductsItems] = useState(null);

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

  return (
    <productContext.Provider value={{ productsItems }}>
      {children}
    </productContext.Provider>
  );
}

export default Products;
