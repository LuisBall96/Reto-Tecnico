const {DataTypes, Model } = require('sequelize');
const {sequelize} = require('../Database/db.js');
const HistoriaClinica = require ('./HistoriaClinica.js');
const bcrypt = require ('bcrypt-nodejs');


const Paciente = sequelize.define('paciente', {

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

    direccion:{
        type: DataTypes.TEXT
    },

    fecha_nacimiento: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false,
    hooks: {
        beforeCreate: async (paciente) => {
            if (paciente.contraseña){
                const cifrar = await bcrypt.genSaltSync(10);
                paciente.contraseña = bcrypt.hashSync(paciente.contraseña, cifrar)
            }
        }
    }
});

Paciente.hasOne(HistoriaClinica,{
    foreingKey: 'pacienteID',
    sourceKey: 'id'
});

HistoriaClinica.belongsTo(Paciente, {
    foreingKey: 'pacienteID',
    targetId: 'id'
});


module.exports = Paciente;