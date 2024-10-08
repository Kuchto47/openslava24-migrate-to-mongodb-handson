const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Shipper = sequelize.define('shipper', {
  shipper_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  company_name: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false }
});


module.exports = Shipper;
