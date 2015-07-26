/// <reference path="../typings/tsd.d.ts" />
import express = require('express')
import bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use('/api/recipes', require('./controllers/api/recipes'))
app.use('/', require('./controllers/static'))

app.listen(3000, function() {
  console.log("Server listening on", 3000)
})