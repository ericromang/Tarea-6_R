var mongoose = require('mongoose');
var schema = require('./schema');
var Title = mongoose.model('titulos',schema,'bdtitulos');
var title = new Title({
    title: 'pimpim',
    author: 'Eric Roman',
    body: 'body 1',
    hidden: true
});

/*title.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Guardar*******************************************************************");
    console.log("Guardado");
    process.exit(0);
});*/

Title.find(function (err, product) {
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log("Find general *******************************************************************");
    console.log(product);
});

Title.findOne({title:'pimpim'},function (err, product) {
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log("Find especifico *******************************************************************");
    console.log(product);
});
Title.findOneAndDelete({name:'Eric'},function (err, product) {
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log("Eliminar uno *******************************************************************");
    console.log(product);
});
Title.findOneAndUpdate({author:'Eric Roman'}, { $set: { author: 'All the people' }},function (err, product) {
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log("Actualizar uno *******************************************************************");
    console.log(product);
});


mongoose.connect('mongodb://localhost:27017/test');