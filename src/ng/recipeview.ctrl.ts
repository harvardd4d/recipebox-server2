/// <reference path="../../typings/tsd.d.ts" />
angular.module('app')
.controller('RecipeViewCtrl', function ($scope, $routeParams, RecipesSvc) {
    var defaultId = '55b41e0352f8f6042269ebdd';
  RecipesSvc.getRecipe($routeParams.id)
  .success(function (recipe) {
    $scope.recipe = recipe
  })

  // show ingredient if they are not marked to be deleted
  $scope.filterIngredient = function(ingredient) {
    return ingredient.isDeleted !== true;
  }

  // mark ingredient as deleted
  $scope.deleteIngredient = function(ingredient) {
    $scope.recipe.ingredients.forEach(function(otherIngredient) {
      if (otherIngredient == ingredient) {
        otherIngredient.isDeleted = true
      }
    })
  }

  // add new ingredient to list
  $scope.addIngredient = function () {
    $scope.recipe.ingredients.push({
      quantity: 0,
      units: '',
      name: '',
      isNew: true
    })
  }

  // cancel all changes
  $scope.cancel = function() {
    for (var i = $scope.recipe.ingredients.length; i--;) {
      var ingredient = $scope.recipe.ingredients[i];    
      // undelete
      if (ingredient.isDeleted) {
        delete ingredient.isDeleted;
      }
      // remove new 
      if (ingredient.isNew) {
        $scope.recipe.ingredients.splice(i, 1);
      }      
    }
  }

  // save edits
  $scope.saveTable = function() {
    for (var i = $scope.recipe.ingredients.length; i--;) {
      var ingredient = $scope.recipe.ingredients[i];
      // actually delete user
      if (ingredient.isDeleted) {
        $scope.recipe.ingredients.splice(i, 1);
      }
      // mark as not new 
      if (ingredient.isNew) {
        delete ingredient.isNew;
      }
    }
    RecipesSvc.saveRecipe('55b41e0352f8f6042269ebdd', $scope.recipe);      
  }
})