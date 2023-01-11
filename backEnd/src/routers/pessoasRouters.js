const express = require('express');
const { allGet } = require('../controllers/pessoaControler');
const routerPessoas = express.Router();
const controlersPessoas = require('../controllers/pessoaControler');

routerPessoas.get('/', controlersPessoas.allGet);
routerPessoas.get('/id', controlersPessoas.getId);

routerPessoas.get('/', function(req, res){
    console.log('entrando no controler');
});

routerPessoas.get('/Estudo', function(req, res){
    console.log('entrando no controler e estudando');
});

module.exports = routerPessoas;