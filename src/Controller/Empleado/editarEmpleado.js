const Empleado = require ('../../Models/Empleado.js');


const editarEmpleado = async (req, res) => {

    const {id} = req.params;
    const {contraseña} = req.body;
    
    try {
        const empleado = await Empleado.findByPk(id);

        await empleado.update({
            contraseña
        });

        await empleado.save();
    
       res.send (empleado);
    
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = editarEmpleado;