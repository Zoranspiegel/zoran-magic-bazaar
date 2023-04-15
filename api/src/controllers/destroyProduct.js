const Product = require('../models/Product');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const destroyedProduct = await Product.findById({ _id: id });
    const statusDestroy = await Product.deleteOne({ _id: id });
    if (!statusDestroy.deletedCount) throw new Error('Nothing to destroy');
    res.status(200).json({
      msg: 'Product Successfully Destroyed',
      destroyed: destroyedProduct
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
