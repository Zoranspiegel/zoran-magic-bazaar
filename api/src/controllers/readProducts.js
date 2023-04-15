const Product = require('../models/Product');

module.exports = async (req, res) => {
  try {
    const products = await Product.find({ deleted: false });
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
