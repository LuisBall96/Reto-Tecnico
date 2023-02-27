const Empleado = require ('../../Models/Empleado.js');


const borrarEmpleado = async (req, res) => {

    const {id} = req.params;
    
    try {
        const empleado = await Empleado.findByPk(id);

        await empleado.destroy();

       res.send (empleado);
    
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = borrarEmpleado;