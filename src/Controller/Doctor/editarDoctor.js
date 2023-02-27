const Doctor = require ('../../Models/Doctor.js');


const editarDoctor = async (req, res) => {

    const {id} = req.params;
    const {contraseña} = req.body;
    
    try {
        const doctor = await Doctor.findByPk(id);

        await doctor.update({
            contraseña
        });

        await doctor.save();
    
       res.send (doctor);
    
        
    } catch (error) {
        console.log(error);
    }
}


module.exports = editarDoctor;


