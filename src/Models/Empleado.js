const {DataTypes } = require('sequelize');
const {sequelize} = require('../Database/db.js');
const bcrypt = require ('bcrypt-nodejs');


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
    hooks: {
        beforeCreate: async (empleado) => {
            if (empleado.contraseña){
                const cifrar = await bcrypt.genSaltSync(10);
                empleado.contraseña = bcrypt.hashSync(empleado.contraseña, cifrar)
            }
        }
    }
});

module.exports = Empleado;