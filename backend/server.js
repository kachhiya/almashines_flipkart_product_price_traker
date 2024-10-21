const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());   // To handle requests from the frontend
app.use(express.json());   // To parse JSON request bodies

// Sample GET route to fetch products
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, title: "Product 1", price: 2000 },
    { id: 2, title: "Product 2", price: 1500 }
  ];
  res.json(products);
});

// New POST route to handle fetching product data from Flipkart (e.g., from URL)
app.post('/api/products/fetch', (req, res) => {
  const { url } = req.body;

  // Simulate product fetch from Flipkart URL - here, you would normally crawl the page
  // For simplicity, let's assume it's a static response
  const product = {
    id: 3,
    title: "Fetched Product",
    price: 36999,
    description: "Product description from Flipkart URL",
    reviews: 120,
    totalPurchases: 300
  };

  // Send back the product data
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
