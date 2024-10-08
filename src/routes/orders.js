const express = require('express');
const Order = require('../models/order');
const router = express.Router();

// POST /orders - Create a new order (login)
router.get('/', async (req, res) => {
  const { user_id, ip_address, device_info } = req.body;

  try {
    // Check if user exists before creating the order
    const user = await Order.findAll();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Generate a random order token

    // Create the order
    const order = await order.create({
      user_id,
      order_token,
      ip_address,
      device_info
    });

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /orders/:id - Get order by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const order = await order.findByPk(id, { include: User });
    if (!order) {
      return res.status(404).json({ error: 'order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;
