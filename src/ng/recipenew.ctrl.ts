/// <reference path="../../typings/tsd.d.ts" />
angular.module('app')
.controller('RecipeNewCtrl', function($scope, $window, RecipesSvc) {
  $scope.addNewRecipe = function(recipe) {
    RecipesSvc.saveNewRecipe(recipe)
    .success( (recipe) => {
      $window.location.href = '/#/recipes/' + recipe._id
    })
    .error( () => {
      $window.alert("An error occured. Please try again later.")
    })
  }

  $scope.schema = {
    type: "object",
    properties: {
      name: { type: "string", minLength: 2, title: "Name"},
      cuisine: {type: "number", title: "Cuisine"},
      meal: {type: "number", title: "Meal"},
      description: { type: "string", minLength: 2, title: "Description"},
      ingredients: {
        type: "array",
        items: {
          type: "object",
          properties: {
            quantity: {type: "number"},
            units: {type: "string"},
            name: {type: "string"}
          }
        },
        title: "Ingredients"
      },
      instructions: { type: "string", title: "Instructions"}
    }
  }

  $scope.form = [
    "name",
    "cuisine",
    "meal",
    {
      key: "description",
      type: "textarea"
    },
    {
      key: "ingredients",
      items: [
        { 
          type: "section",
          htmlClass: "row",
          items: [
            {
              type: "section",
              htmlClass: "col-xs-3",
              items: [
                {
                  //title: null,
                  key: "ingredients[].quantity",
                  placeholder: "Quantity"
                }
              ]
            },
            {
              type: "section",
              htmlClass: "col-xs-3",
              items: [
                {
                  //title: null,
                  key: "ingredients[].units",
                  placeholder: "Units"
                }
              ]
            },
            {
              type: "section",
              htmlClass: "col-xs-3",
              items: [
                {
                  //title: null,
                  key: "ingredients[].name",
                  placeholder: "Name"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      key: "instructions",
      type: "textarea"
    },
    {
      type: "submit",
      title: "Save"
    }
  ]

  $scope.recipe = {};
})