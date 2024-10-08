const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
 // get all catalog
});

router.get('/:id', async (req, res) => {
    // get a catalog item
});

router.post('/', async (req, res) => {
    // create an item
});

router.put('/:id', async (req, res) => {
    // update an item
});

module.exports = router;
