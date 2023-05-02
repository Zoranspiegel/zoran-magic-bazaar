const Product = require('../models/Product');

module.exports = async (req, res) => {
  try {
    const manyProducts = await Product.collection.insertMany(req.body);
    res.status(201).json({
      msg: 'Products successfully created',
      ...manyProducts
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
