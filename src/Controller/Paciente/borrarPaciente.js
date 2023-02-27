const Paciente = require ('../../Models/Paciente.js');

const borrarPaciente = async (req, res) => {

    const {id} = req.params;
    
    try {
        const paciente = await Paciente.findByPk(id);

        await paciente.destroy();

       res.send (paciente);
    
        
    } catch (error) {
        console.log(error);
    }
   
}

module.exports = borrarPaciente;