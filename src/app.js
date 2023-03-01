const express = require ('express');
const passport = require('passport');
const routes = require ('./Routes/router.js');
const cookieParser = require ('cookie-parser');
const session = require ('express-session');

const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(routes);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');






module.exports = app;