const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const OrderDetails = sequelize.define('orderDetails', {
  shipper_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  company_name: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false }
});



module.exports = OrderDetails;
