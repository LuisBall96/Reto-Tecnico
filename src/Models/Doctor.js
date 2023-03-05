const {DataTypes } = require('sequelize');
const {sequelize} = require('../Database/db.js');
const HistoriaClinica = require ('./HistoriaClinica.js');
const bcrypt = require ('bcrypt-nodejs');


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
    hooks: {
        beforeCreate: async (doctor) => {
            if (doctor.contraseña){
                const cifrar = await bcrypt.genSaltSync(10);
                doctor.contraseña = bcrypt.hashSync(doctor.contraseña, cifrar)
            }
        }
    }
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