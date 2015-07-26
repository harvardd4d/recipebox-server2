/// <reference path="../typings/tsd.d.ts" />
import express = require('express')
import bodyParser = require('body-parser')
import Recipe = require('./models/recipe')
import mongoose = require('mongoose')
import ObjectId = mongoose.Types.ObjectId

var app = express()
app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.sendfile('wwwroot/layouts/recipe.html')
})

app.get('/api/recipes/:id', function(req, res, next) {
  var id: string = req.params.id
  Recipe.find({_id: new ObjectId(id)}, function(err,results) {
    if (err) { return next(err) }
    if (results.length == 0) { 
      res.json(404) 
    } else {
      res.json(results[0])
    }
  })
})

app.put('/api/recipes/:id', function(req, res, next) {
  var id: string = req.params.id
  var recipe = new Recipe({
    name: req.body.name,
    description: req.body.description,
    cuisine: req.body.cuisine,
    meal: req.body.meal,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    _id: req.body._id
  })
  Recipe.findOneAndUpdate({_id: new ObjectId(id)}, recipe, {upsert:true},
    function(err, recipe) {
      if (err) { next(err) }
      return res.json(recipe)
    })
})

app.post('/api/recipes/', function(req, res, next) {
  var recipe = new Recipe({
    name: req.body.name,
    description: req.body.description,
    cuisine: req.body.cuisine,
    meal: req.body.meal,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions
  })
  console.log(recipe)
  recipe.save(function (err, recipe) {
    if (err) { return next(err) }
    res.json(201, recipe)
  })
})
app.listen(3000, function() {
  console.log("Server listening on", 3000)
})