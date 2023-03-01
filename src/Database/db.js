require ('dotenv').config(); //Para cargar las variables de entorno
const Sequelize = require ('sequelize');
const {DB_NAME,DB_USER, DB_PASSWORD} = process.env;

const sequelize = new Sequelize( 
   DB_NAME,DB_USER, DB_PASSWORD
   ,{
    host: 'localhost',
    dialect: 'postgres'
});




module.exports = {
    sequelize
  };