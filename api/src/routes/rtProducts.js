const { Router } = require('express');
const ctr = require('../controllers/index');

const router = Router();

router.post('/', ctr.createProduct);

router.get('/', ctr.readProducts);

module.exports = router;
