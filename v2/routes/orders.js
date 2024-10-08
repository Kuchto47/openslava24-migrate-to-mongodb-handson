const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
 // get all orders
 try {
    const db = await getDB();
    const orders = await db.collection('orders').find({}).toArray();
    res.json(orders);
} catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
}
});

router.get('/:id', async (req, res) => {
    try {
        const db = await getDB();
        const { id } = req.params
        // Your MongoDB Query here
        const order = '...'
        if (!order) {
            res.status(404).json({ error: 'Order not found' });
        } else {
            res.json(order);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch order' });
    }
});
router.post('/', async (req, res) => {
    try {
        const db = await getDB();
        // Your MongoDB Query here
        // await db.
        res.status(404).json({ error: 'Order not found' });

    } catch (error) {
        res.status(500).json({ error: 'Failed to create order' });
    }
    // create an order 
});



module.exports = router;
