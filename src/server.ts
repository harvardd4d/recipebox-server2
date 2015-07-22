/// <reference path="../typings/tsd.d.ts" />
import express = require('express')
import bodyParser = require('body-parser')
import Recipe = require('./models/recipe')

var app = express()
app.use(bodyParser.json())

app.get('/api/recipe/:recipeId', function(req, res) {
  var recipeId: number = Number(req.params.recipeId)
  if (recipeId == 0) {
    res.json(
      {
        name: 'Egg fried rice',
        description: 'Fried rice with scrambled eggs',
        cuisine: 35,
        meal: 111,
        ingredients: [ 
          {
            quantity: 1,
            units: '',
            name: 'egg'
          }, 
          {
            quantity: 1.5,
            units: 'cup',
            name: 'rice'
          },
        ],
        instructions: "Cook rice. \nFry eggs. \nAdd rice and continue frying",
        recipe_id: 0
      }
    )
  }
})

app.post('/api/recipe/', function(req, res, next) {
  var recipe = new Recipe({
    name: req.body.name,
    description: req.body.description,
    cuisine: req.body.cuisine,
    meal: req.body.meal,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    recipeId: req.body.recipeId
  })
  recipe.save(function (err, post) {
    if (err) { return next(err) }
    res.json(201, post)
  })
})
app.listen(3000, function() {
  console.log("Server listening on", 3000)
})