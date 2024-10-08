const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const OrderDetails = sequelize.define('OrderDetails', {
  shipper_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  company_name: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false }
});

OrderDetails.belongsTo(Order, 'order_id')
OrderDetails.hasMany(Products, 'product_id')


module.exports = OrderDetails;
