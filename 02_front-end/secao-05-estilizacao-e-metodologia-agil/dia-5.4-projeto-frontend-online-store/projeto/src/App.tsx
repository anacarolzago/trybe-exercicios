import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import ShoppingCart from './pages/ShoppingCart';
import { ProductProps } from './helpers/props';
import ProductDetails from './components/ProductDetail';

function App() {
  const [cartItems] = useState<ProductProps[]>([]);

  const quantify = cartItems.map((items) => items.quantity)
    .reduce((total, item) => total + item, 0);
  localStorage.setItem('quantify', JSON.stringify(quantify));

  return (
    <Routes>
      <Route path="/" element={ <Search /> } />
      <Route
        path="/ShoppingCart"
        element={ <ShoppingCart cartItems={ cartItems } /> }
      />
      <Route
        path="/ProductDetails/:id"
        Component={ ProductDetails }
        quantify={ quantify }
      />
    </Routes>
  );
}

export default App;
