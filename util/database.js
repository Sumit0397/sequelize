const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Sumit@1997', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
