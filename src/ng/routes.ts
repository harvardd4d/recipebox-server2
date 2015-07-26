/// <reference path="../../typings/tsd.d.ts" />
angular.module('app')
.config(function ($routeProvider) {
  $routeProvider
  .when('/recipes/new', {controller: 'RecipeNewCtrl', templateUrl: '/recipesnew.html'})
  .when('/', {controller: 'RecipesHomeCtrl', templateUrl: '/recipeshome.html'})
  .when('/recipes/:id', {controller: 'RecipeViewCtrl', templateUrl: '/recipe.html'})
})
