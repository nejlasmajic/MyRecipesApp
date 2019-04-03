function RecipesController($scope)
{
    console.log("Hello from recipe controller");

    $scope.recipes_list = [ 
    {Name:"Saher torta",Category:"dessert"},
    {Name:"Esterhazi torta",Category:"dessert"},
    {Name:"Princeza torta",Category:"dessert"},
    {Name:"Almasina torta",Category:"dessert"}, ];
}