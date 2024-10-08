const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
 // get all employees
});

router.get('/:id', async (req, res) => {
    // get a employee profile
});

router.post('/', async (req, res) => {
    // create an employee 
});

router.put('/:id', async (req, res) => {
    // create an employee 
});

module.exports = router;
