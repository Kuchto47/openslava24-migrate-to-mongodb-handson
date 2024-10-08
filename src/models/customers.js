const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');
const Order = require('./orders');

const Customer = sequelize.define('customer', {
  customer_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  company_name: { type: DataTypes.STRING, allowNull: false },
  contact_name: { type: DataTypes.STRING, allowNull: false },
  contact_title: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING },
  city: { type: DataTypes.STRING },
  region: { type: DataTypes.STRING },
  postal_code: { type: DataTypes.STRING },
  country: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  fax: { type: DataTypes.STRING }
});


module.exports = Customer;