/// <reference path="../typings/tsd.d.ts" />
import mongoose = require('mongoose')
var url = process.env.MONGOLAB_URI || 'mongodb://localhost/recipebox'
mongoose.connect(url, function (err) {
  if (err) {
    console.log('Could not connect to mongodb:', err)
  } else {
    console.log('Connected to mongodb')
  }
})
export = mongoose