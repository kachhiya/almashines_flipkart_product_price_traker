const Product = require('../models/Product');
const fetchProductDetails = require('../scraper/fetchProductDetails');

exports.fetchAndSaveProduct = async (req, res) => {
  const { url } = req.body;

  try {
    // Fetch product data using scraper
    const productDetails = await fetchProductDetails(url);
    console.log("product details",productDetails);

    // Check if product already exists in the database
    let product = await Product.findOne({ url });

    if (product) {
      // Add the latest price to the price history
      product.priceHistory.push({ price: productDetails.price });
      product.price = productDetails.price;
    } else {
      // Create a new product entry
      product = new Product({
        ...productDetails,
        priceHistory: [{ price: productDetails.price }],
      });
    }

    await product.save();
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching product data' });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products' });
  }
};
