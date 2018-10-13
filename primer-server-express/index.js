const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.end('Hola Fuckyng Mundo!!!!!!!!');
});

app.listen(3000, function () {
    console.log('Servidor Funcionando!!!!');
});
