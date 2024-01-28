// se declaran las varias con los paquetes que vamos a utilizar como se observa a continuación

const express = require('express'); // se requier el paquete express
const app = express(); // se ejecuta express para inicializar
const http = require('http'); // se requiere del paquete http
const server = http.createServer(app); // se creacrea el paquete server
const logger = require('morgan');
const cors = require('cors');


/*
Rutas
*/
const users = require('./routes/usersRoutes');



// se define el puerto que estará a la escucha
const port = process.env.PORT || 3000;

app.use(logger('dev')); // se declara para poder debuggear e identificar errores 
app.use(express.json());  // se declara para parsear las respuestas que se reciban en formato Json
app.use(express.urlencoded({
    extended: true,
}));

// configuración para la seguridad
app.disable('x-powered-by'); // <-- Correct method

// seteamos el puerto
app.set('port', port);


users = (app);


server.listen(3000, '192.168.0.166' || 'localhost', function () { // se define el escuchar y que apunte al localhost en caos de error
    console.log('Aplicacion de nodeJS ' + port + ' iniciada....');    
});

app.get('/', (req, res) => {
    res.send('Ruta para raíz del backend');

    res.status(err.status || 500).send(err.stack); // imprime los errores
});



app.get('/test', (req, res) => {
    res.send('Esta es la ruta test');

    res.status(err.status || 500).send(err.stack); // imprime los errores
});


app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack); // imprime
});

module.exports = {
    app:app,
    server: server,

}