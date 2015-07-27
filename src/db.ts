/// <reference path="../typings/tsd.d.ts" />
import mongoose = require('mongoose')
var url = process.env.MONGOLAB_URI || 'mongodb://localhost/recipebox'
mongoose.connect(url, function () {
  console.log('mongodb connected')
})
export = mongoose