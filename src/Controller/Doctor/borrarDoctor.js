const Doctor = require ('../../Models/Doctor.js');

const borrarDoctor = async (req, res) => {

    const {id} = req.params;
    
    try {
        const doctor = await Doctor.findByPk(id);

        await doctor.destroy();

       res.send (doctor);
    
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = borrarDoctor;
