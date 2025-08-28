import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../context/Products';
import { useLocation } from 'react-router-dom';
import search_icon from '../assets/frontend_assets/search_icon.png'


function Searchbar() {
    let {productsItems} = useContext(productContext)
    let [search, setSearch] = useState([])
    
  return (
    <>
     <div className="container my-4">
      <hr />
      <div className="input-group rounded bg-light p-2 border" style={{maxWidth: '600px', margin: 'auto'}}>
       <input type="text" className="form-control border-0 bg-light" onChange={(e)=>setSearch(e.target.value)} placeholder="Search" id="searchInput" />
        <span className="input-group-text bg-light border-0">
         <button className="bg-light p-1 m-0"><img src={search_icon} alt="" width="20px"/></button>
        </span>
       </div>
       <hr />
      </div>

    </>
  )
} 

export default Searchbar