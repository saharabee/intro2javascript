//

var app = angular.module('app',[]);

app.controller('recipesCtrl', function($scope){
      $scope.recipes = {
       name= "Fried Chicken", 
       description= "How to amke fried chicken",
      steps= ["Step 1", "Step 2", "Step 3"]
};
        
        $scope.modify = function(){
          $.ajax({
            method:"POST",
            url: "angular1.html",
            
          })

        }
     
);