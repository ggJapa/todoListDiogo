module.exports = {
    allGet: function(req, res){
        console.log('entrando no controler');
    },
    
    getId: function(req, res){
           res.status('200').send('Segunda rota criada com o padrão MVC GET ID')
    }   
}