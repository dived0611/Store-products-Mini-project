import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductList from './store/ProductList'
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductList/>
  </StrictMode>,
)
