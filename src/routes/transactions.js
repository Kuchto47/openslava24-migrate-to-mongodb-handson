const express = require('express');
const Transaction = require('../models/transaction');
const Account = require('../models/orders');
const router = express.Router();

// POST /transactions - Create a new transaction
router.post('/', async (req, res) => {
  const { account_id, amount, transaction_type, transaction_status, description } = req.body;

  try {
    // Check if account exists before creating the transaction
    const account = await Account.findByPk(account_id);
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }

    // Validate transaction type and adjust the balance
    if (transaction_type === 'debit' && account.balance < amount) {
      return res.status(400).json({ error: 'Insufficient funds' });
    }

    let newBalance = account.balance;
    if (transaction_type === 'debit') {
      newBalance -= amount;
    } else if (transaction_type === 'credit') {
      newBalance += amount;
    } else {
      return res.status(400).json({ error: 'Invalid transaction type' });
    }

    // Update the account balance
    await account.update({ balance: newBalance });

    // Create the transaction
    const transaction = await Transaction.create({
      account_id,
      amount,
      transaction_type,
      transaction_status,
      description
    });

    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /transactions/:id - Get transaction by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const transaction = await Transaction.findByPk(id, { include: Account });
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
