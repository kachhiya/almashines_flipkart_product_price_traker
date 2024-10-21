const express = require('express');
const { fetchAndSaveProduct, getAllProducts } = require('../controllers/productController');

const router = express.Router();

router.post('/fetch', fetchAndSaveProduct);
router.get('/', getAllProducts);

module.exports = router;
