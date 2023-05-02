const { Router } = require('express');
const ctr = require('../controllers/index');

const router = Router();

router.post('/', ctr.createProduct);
router.post('/many', ctr.createManyProducts);

router.get('/', ctr.readProducts);
router.get('/:id', ctr.readProductById);

router.put('/:id', ctr.updateProduct);
router.put('/restore/:id', ctr.restoreProduct);

router.delete('/delete/:id', ctr.logicalDeleteProduct);
router.delete('/destroy/:id', ctr.destroyProduct);

module.exports = router;
