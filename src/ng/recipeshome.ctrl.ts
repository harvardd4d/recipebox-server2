/// <reference path="../../typings/tsd.d.ts" />
angular.module('app')
.controller('RecipesHomeCtrl', function($scope, RecipesSvc) {
  RecipesSvc.getAllRecipes()
  .success( (recipes) => {
    $scope.recipes = recipes
  })
})
