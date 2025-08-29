import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from './component/Register'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './component/Home';
import Admin from './component/Admin';
import Nav from './component/Nav';
import Slider from './component/Slider';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Collection from './pages/Collection';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Footer from './component/Footer';
import Registration from './pages/Registration';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Allorders from './component/Allorders';
import Allitems from './component/Allitems';

function App() {
 
  let router = createBrowserRouter([
    {
      path:"/",
      element:<><Nav></Nav><Slider></Slider><Home></Home><Footer></Footer></>
    },
    {
      path:"/collection",
      element:<><Nav></Nav><Collection></Collection><Footer></Footer></>
    },
    {
      path:"/register",
      element:<><Register></Register></>
    },
    {
      path:"/login",
      element:<><Nav></Nav><Login></Login><Footer></Footer></>
    },
    {
      path:"/productDetail/:id",
      element:<><Nav></Nav><ProductDetail></ProductDetail><Footer></Footer></>
    },
    {
      path:"/about",
      element:<><Nav></Nav><About></About><Footer></Footer></>
    },
    {
      path:"/contact",
      element:<><Nav></Nav><Contact></Contact><Footer></Footer></>
    },
    {
      path:"/cart",
      element:<><Nav></Nav><Cart></Cart><Footer></Footer></>
    },
    {
      path:"/order",
      element:<><Nav></Nav><Orders></Orders><Footer></Footer></>
    },
    {
      path:"/placeorder",
      element:<><Nav></Nav><PlaceOrder></PlaceOrder><Footer></Footer></>
    },
    {
      path:"/registration",
      element:<><Nav></Nav><Registration></Registration><Footer></Footer></>
    },
    {
      path:"/admin",
      element:<><Admin></Admin></>
    },
    {
      path:"/allorders",
      element:<><Allorders></Allorders></>
    },
    {
      path:"/allitems",
      element:<><Allitems></Allitems></>
    }
  
  ])
  return (
    <>
  <RouterProvider router={router}>

  </RouterProvider>
         </>
  )
}

export default App
