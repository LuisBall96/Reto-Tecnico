const {DataTypes } = require('sequelize');
const {sequelize} = require('../Database/db.js');
const HistoriaClinica = require ('./HistoriaClinica.js')


const Doctor = sequelize.define('doctor', {

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

    especialidad:{
        type: DataTypes.TEXT
    },
}, {
    timestamps: false,
});


HistoriaClinica.belongsTo(Doctor, {
    foreingKey: 'doctorID',
    targetId: 'id'
});

Doctor.hasMany(HistoriaClinica,{
    foreingKey: 'doctorID',
    sourceKey: 'id'
});






module.exports = Doctor;