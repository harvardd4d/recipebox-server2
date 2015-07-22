/// <reference path="../typings/tsd.d.ts" />
import mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/recipebox', function () {
  console.log('mongodb connected')
})
export = mongoose