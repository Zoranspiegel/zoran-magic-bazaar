const { Router } = require('express');
const rtProducts = require('./rtProducts');

const router = Router();

router.use('/products', rtProducts);

module.exports = router;
