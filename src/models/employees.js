const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');
const Order = require('./orders');

const Employee = sequelize.define('employee', {
  employee_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  first_name: {type: DataTypes.CHAR},
  last_name: {type: DataTypes.CHAR},
  title: {type: DataTypes.CHAR},
  title_of_curtosy: {type: DataTypes.CHAR},
  birth_date: {type: DataTypes.DATE},
  hire_date: {type: DataTypes.DATE},
  city: {type: DataTypes.CHAR},
  region: {type: DataTypes.CHAR},
  address: {type: DataTypes.CHAR},
  postal_code: {type: DataTypes.CHAR},
  country: {type: DataTypes.CHAR},
  home_phone: {type: DataTypes.CHAR},
  extension: {type: DataTypes.CHAR},
  notes: {type: DataTypes.TEXT},
  photo_path: { type: DataTypes.STRING }
});


module.exports = Employee;
