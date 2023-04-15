const createProduct = require('./createProduct');
const readProducts = require('./readProducts');
const updateProduct = require('./updateProduct');
const readProductById = require('./readProductById');
const logicalDeleteProduct = require('./logicalDeleteProduct');

module.exports = {
  createProduct,
  readProducts,
  updateProduct,
  readProductById,
  logicalDeleteProduct
};
