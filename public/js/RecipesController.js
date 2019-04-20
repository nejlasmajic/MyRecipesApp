function RecipesController($scope, $http)
{
    $http.get('/static').then(function(response){

        $scope.recipes_list = response.data;

    }, function(response){

        $scope.recipes_list = response.data;
        
    })
}

