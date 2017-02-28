//

var app = angular.module('app',[]);

app.controller('recipesCtrl', function($scope){
      $scope.recipes = [
        "Fried Chicken", 
        "Baked Tilapia", 
        "Bad Guy Burger",
        "Caesar Salad",
        ];
        
        $scope.Title = 'Welcome to Angular';
});