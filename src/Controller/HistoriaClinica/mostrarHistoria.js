const HistoriaClinica = require ('../../Models/HistoriaClinica.js');


const mostrarHistoriaClinica = async (req, res) => {

    try {
       const traerHistoria =  await HistoriaClinica.findAll();

        res.json(traerHistoria);
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = mostrarHistoriaClinica;
