const HistoriaClinica = require ('../../Models/HistoriaClinica.js');


const crearHistoria = async (req, res) => {

    try {
        const {diagnostico, tratamiento, pacienteId, doctorId} = req.body;

        const nuevaHistoria = await HistoriaClinica.create({
        diagnostico,
        tratamiento,
        pacienteId,
        doctorId,
    });
        res.json(nuevaHistoria);

    } catch (error) {
        console.log(error);
    }
}

module.exports = crearHistoria;