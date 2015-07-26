/// <reference path="../../typings/tsd.d.ts" />
angular.module('app')
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {controller: 'RecipesHomeCtrl', templateUrl: '/recipeshome.html'})
  .when('/recipes/:id', {controller: 'RecipeViewCtrl', templateUrl: '/recipe.html'})
})
