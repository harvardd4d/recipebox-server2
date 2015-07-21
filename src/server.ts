/// <reference path="../typings/tsd.d.ts" />
import express = require('express')
import bodyParser = require('body-parser')

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

app.post('/api/recipe/', function(req, res) {
  console.log('recipe received!')
  console.log(req.body)
  res.sendStatus(201)
})
app.listen(3000, function() {
  console.log("Server listening on", 3000)
})