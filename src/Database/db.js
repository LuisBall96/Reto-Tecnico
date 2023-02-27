const Sequelize = require ('sequelize');

const sequelize = new Sequelize( 'historia_clinica', 'postgres', ' password', {
    host: 'localhost',
    dialect: 'postgres'
});



module.exports = {
    sequelize};