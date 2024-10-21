import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductInput.css';  // Custom CSS for background and styling

function ProductInput() {
  const [url, setUrl] = useState('');
  const [product, setProduct] = useState(null);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products/fetch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  return (
    <div className="product-input container mt-4 p-4 bg-light rounded shadow">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Flipkart product URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="btn btn-primary" onClick={fetchProductDetails}>
          Fetch Details
        </button>
      </div>

      {product && (
        <div className="card mt-3">
          <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            <p>Price: ₹{product.price}</p>
            <p>Description: {product.description}</p>
            <p>Reviews: {product.reviews}</p>
            <p>Total Purchases: {product.totalPurchases}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductInput;
