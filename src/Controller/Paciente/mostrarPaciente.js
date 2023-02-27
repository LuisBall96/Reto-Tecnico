const Paciente = require ('../../Models/Paciente.js');


const mostrarPaciente = async (req, res) => {

    try {
       const traerPaciente =  await Paciente.findAll();

        res.json(traerPaciente);
        
    } catch (error) {
        console.log(error);
    }
}


module.exports = mostrarPaciente;