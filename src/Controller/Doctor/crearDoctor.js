const Doctor = require ('../../Models/Doctor.js');

const crearDoctor = async (req, res) => {

    try {
        const {nombre, telefono, email, contraseña, especialidad} = req.body;

        const nuevoDoctor = await Doctor.create({
        nombre,
        telefono,
        email,
        contraseña,
        especialidad
    });
        res.json(nuevoDoctor);

    } catch (error) {
        console.log(error);
    }
}

module.exports = crearDoctor;