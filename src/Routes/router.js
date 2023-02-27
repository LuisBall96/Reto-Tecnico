const {Router} = require ('express');
const borrarDoctor = require('../Controller/Doctor/borrarDoctor');
const crearDoctor = require('../Controller/Doctor/crearDoctor');
const editarDoctor = require('../Controller/Doctor/editarDoctor');
const mostrarDoctor = require('../Controller/Doctor/mostrarDoctor');
const borrarEmpleado = require('../Controller/Empleado/borrarEmpleado');
const crearEmpleado = require('../Controller/Empleado/crearEmpleado');
const editarEmpleado = require('../Controller/Empleado/editarEmpleado');
const mostrarEmpleado = require('../Controller/Empleado/mostrarEmpleado');
const crearHistoria = require('../Controller/HistoriaClinica/crearHistoria');
const mostrarHistoriaClinica = require('../Controller/HistoriaClinica/mostrarHistoria');
const borrarPaciente = require('../Controller/Paciente/borrarPaciente');
const crearPaciente = require('../Controller/Paciente/createPaciente');
const editarPaciente = require('../Controller/Paciente/editarPaciente');
const mostrarPaciente = require('../Controller/Paciente/mostrarPaciente');

const router = Router();


router.get('/paciente', mostrarPaciente);
router.get('/doctor', mostrarDoctor);
router.get('/empleado', mostrarEmpleado);
router.get('/historia', mostrarHistoriaClinica);

router.post('/crearPaciente', crearPaciente);
router.post('/crearDoctor', crearDoctor);
router.post('/crearEmpleado', crearEmpleado);
router.post('/crearHistoriaClinica', crearHistoria);

router.put('/editarPaciente/:id', editarPaciente);
router.put('/editarDoctor/:id', editarDoctor);
router.put('/editarEmpleado/:id', editarEmpleado);

router.delete('/eliminarPaciente/:id',borrarPaciente);
router.delete('/eliminarDoctor/:id', borrarDoctor);
router.delete('/eliminarEmpleado/:id', borrarEmpleado);






module.exports = router;