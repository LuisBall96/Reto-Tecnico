const {DataTypes } = require('sequelize');
const {sequelize} = require('../Database/db.js');


const Empleado = sequelize.define('empleado', {

    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    
    nombre:{
        type: DataTypes.STRING
    },

    telefono:{
        type: DataTypes.INTEGER
    },

    email:{
        type: DataTypes.TEXT
    },

    contraseña: {
        type: DataTypes.TEXT
    },

    cargo:{
        type: DataTypes.TEXT
    },
}, {
    timestamps: false,
});

module.exports = Empleado;