/// <reference path="../../typings/tsd.d.ts" />
import db = require('../db')

var Ingredient = new db.Schema({
  quantity: {type: Number, required: true},
  units: {type: String},
  name: {type: String, required: true}
})

var Recipe = db.model("Recipe", new db.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  cuisine: {type: Number, required: true},
  meal: {type: Number, required: true},
  ingredients: [ Ingredient ],
  instructions: {type: String, required: true},
}))
export = Recipe