const express = require('express');
const Customer = require('../models/customers');
const Order = require('../models/orders');
const router = express.Router();

// POST /accounts - Create a new account
// router.post('/', async (req, res) => {
//   const { user_id, account_type, balance } = req.body;
  
//   try {
//     // Check if user exists before creating the account
//     const user = await Customer.findByPk(user_id);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Create the account
//     const account = await Account.create({ user_id, account_type, balance });
//     res.json(account);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// GET /accounts/:id - Get account by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await Customer.findByPk(id, {
      include: [{
        model: Order,
        separate: true,
        order: [['order_date', 'DESC']],
        limit: 5
      }]
    });
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
