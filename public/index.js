var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));

app.get('/my', function (req, res) {
  res.send('MyRecipes!');
});
app.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
});