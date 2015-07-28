/// <reference path="../../typings/tsd.d.ts" />
import db = require('../db')

var Schema = db.Schema

var Ingredient = new Schema({
  quantity: {type: Number, required: true},
  units: {type: String},
  name: {type: String, required: true}
})

var Recipe = db.model("Recipe", new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  cuisine: {type: Number, required: true},
  meal: {type: Number, required: true},
  ingredients: [ Ingredient ],
  instructions: {type: String, required: true},
}))
export = Recipe