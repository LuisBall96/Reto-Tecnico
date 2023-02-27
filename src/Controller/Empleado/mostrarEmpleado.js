const Empleado = require ('../../Models/Empleado.js');


const mostrarEmpleado = async (req, res) => {

    try {
       const traerEmpleado =  await Empleado.findAll();

        res.json(traerEmpleado);
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = mostrarEmpleado;