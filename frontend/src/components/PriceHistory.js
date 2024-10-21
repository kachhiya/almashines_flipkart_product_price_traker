import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PriceHistory.css';  // Custom CSS for background and styling

function PriceHistory({ priceHistory }) {
  if (!priceHistory || priceHistory.length === 0) {
    return <p className="text-muted text-center">No price history available.</p>;
  }

  return (
    <div className="price-history container mt-4 p-4 bg-light rounded shadow">
      <h3 className="text-center text-primary mb-4">Price History</h3>
      <ul className="list-group">
        {priceHistory.map((history, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            ₹{history.price} 
            <span className="badge bg-primary rounded-pill">
              {new Date(history.checkedAt).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PriceHistory;
