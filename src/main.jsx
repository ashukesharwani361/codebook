import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import ScrollToTop from "./components/Other/ScrollToTop.jsx";
import { CartProvider } from './context/CartContext.jsx';
import { FilterProvider } from './context/FilterContext.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Router>
      <CartProvider>
        <FilterProvider>
          <ScrollToTop />
          <ToastContainer />
          <App />
        </FilterProvider>
      </CartProvider>
    </Router>
  </StrictMode>,
)
