const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Flashcard = sequelize.define('Flashcard', {
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  answer: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Flashcard;
