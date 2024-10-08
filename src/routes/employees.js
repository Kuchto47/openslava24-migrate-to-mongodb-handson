const express = require('express');
const User = require('../models/user');
const router = express.Router();

//Get all employees without sensitive data
router.get('/', async (req, res) => {
  const { first_name, last_name, email, phone_number } = req.body;
  try {
    const newUser = await User.create({ first_name, last_name, email, phone_number });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single by ID with all data and with its orders



module.exports = router;
