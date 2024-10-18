const express = require('express');
const mongodb = require('../mongodb')
const router = express.Router();

router.get('/', async (req, res) => {
    // get all orders
    try {
        const db = await mongodb.getDB();
        const orders = await db.collection('orders').find({}).toArray();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const db = await mongodb.getDB();
        const { id } = req.params
        const order = await db.collection('orders').findOne({ "orderId": Number(id) })
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
        const db = await mongodb.getDB();
        const { user_id, ip_address, device_info, requiredDate, orderDate } = req.body;
        const newOrder = {
            "freight": {
              "$numberDouble": "32.380001068115234"
            },
            "orderId": {
              "$numberInt": "10248"
            },
            "customerId": user_id,
            "employeeId": {
              "$numberInt": "100000000"
            },
            "orderDate": {
              "$date": {
                "$numberLong": orderDate.getDate()
              }
            },
            "requiredDate": {
              "$date": {
                "$numberLong": requiredDate
              }
            },
            "shippedDate": {
              "$date": {
                "$numberLong": null
              }
            },
            "shipVia": {
              "$numberInt": "3"
            },
            "shipName": "Vins et alcools Chevalier",
            "shipAddress": "59 rue de l'Abbaye",
            "shipCity": "Reims",
            "shipRegion": null,
            "shipPostalCode": "51100",
            "shipCountry": "France"
        }
        const createdOrder = await db.collection('orders').insertOne(newOrder)
        res.status(201).json({ message: 'Order cerated', orderId: createdOrder });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create order' });
    }
    // create an order 
});



module.exports = router;
