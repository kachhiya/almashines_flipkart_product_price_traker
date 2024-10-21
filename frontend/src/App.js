import React, { useState, useEffect } from 'react';
import ProductInput from './components/ProductInput';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Flipkart Price Tracker</h1>
      <ProductInput setProducts={setProducts} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
