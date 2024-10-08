const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Ebook = sequelize.define('Ebook', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
  },
  availability: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  thumbnail: {
    type: DataTypes.STRING,
  },
});

module.exports = Ebook;
