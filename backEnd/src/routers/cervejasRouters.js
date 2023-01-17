const express = require ('express')
const { allGet } = require ('../controllers/cervejasControler');
const routerCervejas = express.Router();
const controllersCervejas = require ('../controllers/cervejasControler');

routerCervejas.get('/cerveja', controllersCervejas.allGet);
routerCervejas.get('/nome',controllersCervejas.getCervejas); //passar valores pela query
routerCervejas.get('/nome/:nome', controllersCervejas.getNome);// passar valores pelo params

// routerCervejas.get('/nome', function(req, res){
//     console.log('Teste controle cervejas');

// });

routerCervejas.get('Exercicio', function(req, res){
    console.log('Exercicio Controle rotas Cervejas');
});

module.exports = routerCervejas;

