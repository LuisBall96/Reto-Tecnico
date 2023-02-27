const Doctor = require ('../../Models/Doctor.js');


const mostrarDoctor = async (req, res) => {

    try {
       const traerDoctor =  await Doctor.findAll();

        res.json(traerDoctor);
        
    } catch (error) {
        console.log(error);
    }
}


module.exports = mostrarDoctor;
