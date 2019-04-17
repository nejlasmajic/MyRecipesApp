var express = require('express');
var app = express();

var mongojs = require('mongojs');

var connectionString = "mongodb://RecipeAppUser:recipe@cluster0-shard-00-00-ejrco.mongodb.net:27017,cluster0-shard-00-01-ejrco.mongodb.net:27017,cluster0-shard-00-02-ejrco.mongodb.net:27017/RecipesDb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
var db = mongojs(connectionString, ['Recipes']);

var port = process.env.PORT || 3001;
app.use(express.static('public'));

app.get('/recipes', function (req, res) {
/*     recipes_list = [ 
    {Name:"Saher torta",Category:"dessert"},
    {Name:"Esterhazi torta",Category:"dessert"},
    {Name:"Princeza torta",Category:"dessert"},
    {Name:"Almasina torta",Category:"dessert"},
   ]; 
 */
// find everything
 db.Recipes.find(function (err, docs) {
	res.send(docs);
})  

 // res.send(recipes_list); 
});
app.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
});