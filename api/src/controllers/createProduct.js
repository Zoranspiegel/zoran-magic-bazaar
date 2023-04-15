const Product = require('../models/Product');

module.exports = async (req, res) => {
  try {
    const newProduct = Product(req.body);
    await newProduct.save();
    res.status(201).json({
      msg: 'Product Successfully Created',
      product: newProduct
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
