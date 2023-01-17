const express = require('express');
const routerPessoas = require('./src/routers/pessoasRouters');
const routersCervejas = require('./src/routers/cervejasRouters');
const app = express();
const port = '2000';

app.use(routerPessoas);
app.use(routersCervejas);




app.listen(port , function(){
    console.log(`Servidor iniciado com sucesso na porta ${port}, acesse -> http://localhost:${port}`);
});