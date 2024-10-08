const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
 // get all customers
});

router.get('/:id', async (req, res) => {
    // get a customer profile
});

router.post('/', async (req, res) => {
    // create a customer 
});

router.put('/:id', async (req, res) => {
    // update a customer 
});

module.exports = router;
