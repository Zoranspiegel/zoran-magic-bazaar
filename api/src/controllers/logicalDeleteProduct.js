const Product = require('../models/Product');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const updateStatus = await Product.updateOne({ _id: id }, { deleted: true });
    if (!updateStatus.modifiedCount) throw new Error('Product Already Logically Deleted');
    const logDeletedProduct = await Product.findById({ _id: id });
    res.status(200).json({
      msg: 'Product Logically Deleted Successfully',
      deleted: logDeletedProduct
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
