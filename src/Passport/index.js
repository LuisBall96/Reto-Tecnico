// const User = require('./models/user');

// passport.use(new LocalStrategy({
//   usernameField: 'email', // el campo "username" se cambiará a "email"
//   passwordField: 'password'
// }, function(email, password, done) {
//   User.findOne({ email: email }, function(err, user) { // busca el usuario por el correo electrónico
//     if (err) { return done(err); }
//     if (!user) {
//       return done(null, false, { message: 'Correo electrónico incorrecto.' });
//     }
//     if (!user.validPassword(password)) {
//       return done(null, false, { message: 'Contraseña incorrecta.' });
//     }
//     return done(null, user);
//   });
// }));
