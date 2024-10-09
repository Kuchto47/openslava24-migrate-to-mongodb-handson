const express = require('express');
const { connectDB } = require('./mongodb');
const catalogRoutes = require('./routes/catalogs');
const customersRoutes = require('./routes/customers');
const employeesRoutes = require('./routes/employees');
const ordersRoutes = require('./routes/orders');

const app = express();
app.use(express.json());

app.use('/catalog', catalogRoutes);
app.use('/customers', customersRoutes);
app.use('/employees', employeesRoutes);
app.use('/orders', ordersRoutes);

const startServer = async () => {
    try {
        await connectDB();
        app.listen(3001, () => {
            console.log('API running on http://localhost:3001');
        });
    } catch (error) {
        console.error('Failed to start server', error);
        process.exit(1);
    }
};

startServer();
