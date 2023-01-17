const cervejasAll = require ('../models/cervejasModels');

module.exports = {
    allGet: function (req, res){
    res.status('200').send(cervejasAll)
},

}





