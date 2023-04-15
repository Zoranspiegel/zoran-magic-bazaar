const Product = require('../models/Product');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const updateStatus = await Product.updateOne({ _id: id }, { ...req.body });
    if (!updateStatus.modifiedCount) throw new Error('Nothing to modify');
    const updatedProduct = await Product.findById({ _id: id });
    res.status(200).json({
      msg: 'Product Successfully Updated',
      updated: updatedProduct
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
