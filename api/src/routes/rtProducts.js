const { Router } = require('express');
const ctr = require('../controllers/index');

const router = Router();

router.post('/', ctr.createProduct);

router.get('/', ctr.readProducts);
router.get('/:id', ctr.readProductById);

router.put('/:id', ctr.updateProduct);

router.delete('/delete/:id', ctr.logicalDeleteProduct);

module.exports = router;
