//REQUIRES
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const PUBLIC_PATH = path.join(__dirname, "../public");
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE

//EXPRESS
const app = express();

//Middlewares
app.use(express.static(PUBLIC_PATH)); // Para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Define la ubicación de la carpeta de las Vistas


//RUTAS
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/views/home.ejs'));
});

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, '/views/login.ejs'));
});

app.get('/registro', function(req, res){
    res.sendFile(path.join(__dirname, '/views/register.ejs'));
});


//Catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

//Error handler 
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Levantando el servidor

process.env.PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT}🚀`);
});

//Export app
module.exports = app;