import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Products from './context/Products.jsx'

createRoot(document.getElementById('root')).render(
  <Products>
     <App />
  </Products>

  
)
