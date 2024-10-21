import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductList.css';  // Custom CSS for background and styling

function ProductList() {
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await fetch('/api/products');  // Ensure this is correct
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.error('Error fetching product data:', error);
      setError(error.message);
    }
  };

  if (error) {
    return <p className="alert alert-danger text-center">Error fetching product data: {error}</p>;
  }

  if (!productData) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="product-list container mt-4 p-4 bg-light rounded shadow">
      <h3 className="text-center text-primary mb-4">Product List</h3>
      <ul className="list-group">
        {productData.map((product) => (
          <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{product.title}</span>
            <span className="badge bg-success">₹{product.price}</span>
            <span className="badge bg-info">{product.description}</span>
            <span className="badge bg-warning">{product.reviews}</span>
            <span className="badge bg-secondary">{product.totalPurchases}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
