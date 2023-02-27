const Paciente = require ('../../Models/Paciente.js');


const crearPaciente = async (req, res) => {

    try {
        const {nombre, telefono, email, contraseña, direccion, fecha_nacimiento} = req.body;

        const nuevoPaciente = await Paciente.create({
        nombre,
        telefono,
        email,
        contraseña,
        direccion,
        fecha_nacimiento
    });
        res.json(nuevoPaciente);

    } catch (error) {
        console.log(error);
    }
}

module.exports = crearPaciente;