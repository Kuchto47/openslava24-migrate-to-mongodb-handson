const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');
const Customer = require('./customers');
const Employee = require('./employees')
const Shipper = require('./shippers')

const Order = sequelize.define('order', {
order_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  order_date: { type: DataTypes.DATE, allowNull: false },
  required_date:{ type: DataTypes.DATE, allowNull: false },
  shipped_date: { type: DataTypes.DATE, allowNull: false },
  freight: { type: DataTypes.FLOAT },
  ship_name: { type: DataTypes.STRING },
  ship_address:{ type: DataTypes.STRING },
  ship_city:{ type: DataTypes.STRING },
  ship_region:{ type: DataTypes.STRING },
  ship_postal_code:{ type: DataTypes.STRING },
  ship_country:{ type: DataTypes.STRING },
});


module.exports = Order;
