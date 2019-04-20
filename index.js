var express = require('express');
var mongojs = require('mongojs');

var app = express();
app.use(express.static('public'));

var port = process.env.PORT || 3001;

var connectionString = "mongodb://RecipeAppUser:recipe@cluster0-shard-00-00-ejrco.mongodb.net:27017,cluster0-shard-00-01-ejrco.mongodb.net:27017,cluster0-shard-00-02-ejrco.mongodb.net:27017/RecipesDb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
var db = mongojs(connectionString, ['Recipes']);

app.get('/recipes', function (req, res) {
  res.send('Cook something delicious!'); 
});

app.get('/static', function(req,res){
/*   recipes_list = [ 
    {Name:"Saher torta",Category:"dessert"},
    {Name:"Esterhazi torta",Category:"dessert"},
    {Name:"Princeza torta",Category:"dessert"},
    {Name:"Almasina torta",Category:"dessert"},
   ];  */
 
   db.Recipes.find(function (err, docs) {
    res.send(docs);
  })

});
app.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
});