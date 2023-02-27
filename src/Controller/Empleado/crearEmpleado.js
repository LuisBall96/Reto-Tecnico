const Empleado = require ('../../Models/Empleado.js');

const crearEmpleado = async (req, res) => {

    try {
        const {nombre, telefono, email, contraseña, cargo} = req.body;

        const nuevoEmpleado = await Empleado.create({
        nombre,
        telefono,
        email,
        contraseña,
        cargo
    });
        res.json(nuevoEmpleado);

    } catch (error) {
        console.log(error);
    }
}

module.exports = crearEmpleado;

