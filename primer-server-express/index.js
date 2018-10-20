const express = require ('express');
const morgan = require('morgan');
const app = express();
// Requiriendo Rutas

const routes = require('./routes');
const routesApi =require('./route-api');
// Configuraciones

app.set('appName', 'Mi primer server en express');
app.set('views', __dirname+'/views');
app.set('View engine', 'ejs');
// Middlewares
   //app.use(morgan('combined'))


// Rutas
app.use(routes);
app.use('/api', routesApi);

app.get('*', (req, res) =>{
    res.end('Archivo no encontrado');
});

app.listen(3000, function () {
    console.log('Servidor Funcionando!!!!');
    console.log('Nombre de la App: '+app.get('appName'));
});
