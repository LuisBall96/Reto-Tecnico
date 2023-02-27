const app = require("./app");
const {sequelize} = require("./Database/db");
// require('./Models/Doctor.js');
// require('./Models/Paciente.js')
// require('./Models/Empleado.js');
// require('./Models/HistoriaClinica.js');


async function main () {
    try {
        await sequelize.sync({force: false});
        app.listen(3000);
        console.log("Servidor escuchando en el puerto ", 3000);
        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();
