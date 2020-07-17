const Sequelize = require("sequelize");
const sequelize = require('../bd')

const Items = sequelize.define("hd_items", {
  price: Sequelize.STRING,
  image: Sequelize.STRING,
  title: Sequelize.STRING,
  description: Sequelize.STRING,
});
sequelize.sync()
module.exports = Items;



