/// <reference path="../../typings/tsd.d.ts" />
angular.module('app')
.service('RecipesSvc', function($http) {
  this.get = function (id: string) {
    return $http.get('/api/recipes/' + id)
  }
  this.put = function(id: string, recipe) {
    return $http.put('/api/recipes/' + id, recipe)
  }
})