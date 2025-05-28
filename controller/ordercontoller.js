const orderService = require('../services/orderservices');

exports.createOrder = async (req, res) => {
  try {
    const orderData = req.body;
    const createdOrder = await orderService.createOrder(orderData);
    res.status(201).json({ success: true, data: createdOrder });
  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error("Get orders error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const orderId = parseInt(req.params.id, 10);
    const order = await orderService.getOrderById(orderId);
    if (!order) return res.status(404).json({ success: false, error: "Order not found" });
    res.json({ success: true, data: order });
  } catch (error) {
    console.error("Get order error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};
