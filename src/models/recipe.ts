/// <reference path="../../typings/tsd.d.ts" />
import db = require('../db')

var Recipe = db.model("Recipe", new db.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  cuisine: {type: Number, required: true},
  meal: {type: Number, required: true},
  ingredients: [ 
    {
      quantity: {type: Number, required: true},
      units: {type: String, required: true},
      name: {type: String, required: true}
    }
  ],
  instructions: {type: String, required: true},
  recipeId: {type: Number, required: true}
}))
export = Recipe