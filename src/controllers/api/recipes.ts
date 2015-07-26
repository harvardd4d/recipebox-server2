/// <reference path="../../../typings/tsd.d.ts" />
import express = require('express')
import mongoose = require('mongoose')
import ObjectId = mongoose.Types.ObjectId
import Recipe = require('../../models/recipe')

var router = express.Router()

router.get('/:id', function(req, res, next) {
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

router.put('/:id', function(req, res, next) {
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

router.post('/', function(req, res, next) {
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

export = router
