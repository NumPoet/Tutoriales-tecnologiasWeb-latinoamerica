const express = require ('express');
const morgan = require('morgan');
const app = express();

// Configuraciones

app.set('appName', 'Mi primer server en express');
app.set('views', __dirname+'/views');
app.set('View engine', 'ejs');
// Middlewares
app.use(morgan('combined'))


// Rutas
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/login', (req, res) => {
    res.end('Aquí va  el login');
});

app.get('*', (req, res) =>{
    res.end('Archivo no encontrado');
});

app.listen(3000, function () {
    console.log('Servidor Funcionando!!!!');
    console.log('Nombre de la App: '+app.get('appName'));
});
