const express = require('express');
const router = express.Router();
const orderController = require('../controller/ordercontoller');

router.post('/', orderController.createOrder);
router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrderById);

module.exports = router;
