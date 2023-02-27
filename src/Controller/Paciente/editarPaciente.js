const Paciente = require ('../../Models/Paciente.js');

const editarPaciente = async (req, res) => {

    const {id} = req.params;
    const {contraseña} = req.body;
    
    try {
        const paciente = await Paciente.findByPk(id);

        await paciente.update({
            contraseña
        });

        await paciente.save();
    
       res.send (paciente);
    
        
    } catch (error) {
        console.log(error);
    }
   

}

module.exports = editarPaciente;