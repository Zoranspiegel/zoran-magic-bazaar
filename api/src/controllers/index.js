const createProduct = require('./createProduct');
const readProducts = require('./readProducts');
const updateProduct = require('./updateProduct');
const readProductById = require('./readProductById');
const logicalDeleteProduct = require('./logicalDeleteProduct');
const restoreProduct = require('./restoreProduct');
const destroyProduct = require('./destroyProduct');
const createManyProducts = require('./createManyProducts');

module.exports = {
  createProduct,
  readProducts,
  updateProduct,
  readProductById,
  logicalDeleteProduct,
  restoreProduct,
  destroyProduct,
  createManyProducts
};
