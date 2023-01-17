const cervejas = require('../../data/dataCervejas.json');
const { cervejasAll } = require('../models/cervejasModels');

module.exports = {
    allGet: function(req, res){
        res.status('200').send(cervejasAll)
    },
    
    getNome: function(req, res){
           var nome = req.params.nome;
           console.log('req >>', req.params.nome);
         //  if(!nome ==) 
         //   res.status('401').send('Não existe essa Cerveja cadastrada') ;


          let firstCerveja = cervejasAll.find( (a) => a.nomeMarca === nome);
          res.status('200').send(firstCerveja) ;
    },

    getCervejas: function(req, res){
        var nome = req.query.nome
        console.log('req >>', req.query.nome);
      //  if(!nome ==) 
      //   res.status('401').send('Não existe essa Cerveja cadastrada') ;


       let firstCerveja = cervejasAll.find( (a) => a.nome === nome);
       res.status('200').send(firstCerveja) ;
 }
  
}