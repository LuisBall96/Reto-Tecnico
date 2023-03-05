const express = require ('express');
const passport = require('passport');
const PassportLocal = require('passport-local').Strategy;
const morgan = require('morgan');
const routes = require ('./Routes/router.js');
const cookieParser = require ('cookie-parser');
const session = require ('express-session');
const {SECRET} = process.env;
const Paciente = require ('./Models/Paciente.js');

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true})); 
app.use(cookieParser(SECRET)); //Se añade una variable de entorno secreta para la cookie
app.use(session({
    secret: SECRET,
    resave: true, //En cada petición aunque la sesión no haya sido modificada la volvemos a guardar
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new PassportLocal({
    usernameField: 'email',
    passwordField: 'contraseña' ,
    passReqToCallback: true
},async function(req, email, contraseña, done){
    const paciente = await Paciente.findOne({
        where: {email, contraseña},
        function(paciente, err){
            if (err) return done(err);
            if(!paciente){
                return done (null, false, {
                    message: 'Correo incorrecto'
                });
            }
            if (!paciente.validPassword(contraseña)){
                return done (null, false,{
                    message: 'Contraseña incorrecta'
                });
            }
            return done (done(null, paciente));
        }
    })
}));



app.use(express.json());
app.use(routes);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');






module.exports = app;