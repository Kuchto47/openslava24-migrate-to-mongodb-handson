const express = require('express');
const { connectDB } = require('./database');
const customersRoute = require('./routes/customers');

const Customer = require('./models/customers');
const Order = require('./models/orders');
const Employee = require('./models/employees');
const Shipper = require('./models/shippers');

function defineAssociations() {
  Customer.hasMany(Order, { foreignKey: 'customer_id' });
  Order.belongsTo(Customer, { foreignKey: 'customer_id' });

  Employee.hasMany(Order, { foreignKey: 'employee_id' });
  Order.belongsTo(Employee, { foreignKey: 'employee_id' });

  Shipper.hasMany(Order, { foreignKey: 'ship_via' });
  Order.belongsTo(Shipper, { foreignKey: 'ship_via' });
}

const app = express();
app.use(express.json());

app.use('/customers', customersRoute);

const startServer = async () => {
  await connectDB();
  app.listen(3000, () => {
    defineAssociations()
    console.log('API running on http://localhost:3000');
  });
};

startServer();