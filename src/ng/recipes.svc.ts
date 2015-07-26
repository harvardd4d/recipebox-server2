/// <reference path="../../typings/tsd.d.ts" />
angular.module('app')
.service('RecipesSvc', function($http) {
  this.getAllRecipes = function(id: string) {
    return $http.get('/api/recipes')
  }
  this.getRecipe = function (id: string) {
    return $http.get('/api/recipes/' + id)
  }
  this.updateRecipe = function(id: string, recipe) {
    return $http.put('/api/recipes/' + id, recipe)
  }
})