const Product = require('../models/Product');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById({ _id: id }).where('deleted').equals(false);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
