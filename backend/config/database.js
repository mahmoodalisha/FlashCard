const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('flashcard_app', 'root', 'Alisha#1234', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false // Optional: Disable SQL query logging
});

module.exports = sequelize;

