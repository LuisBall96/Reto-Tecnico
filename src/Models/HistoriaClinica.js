const {DataTypes } = require('sequelize');
const {sequelize} = require('../Database/db.js');


const Historia_clinica = sequelize.define('historia_clinica', {

    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    
    diagnostico:{
        type: DataTypes.TEXT
    },

    tratamiento:{
        type: DataTypes.TEXT
    },
}, {
    timestamps: false,
});

module.exports = Historia_clinica;