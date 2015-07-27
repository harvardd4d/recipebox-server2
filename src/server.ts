/// <reference path="../typings/tsd.d.ts" />
import express = require('express')
import bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use('/api/recipes', require('./controllers/api/recipes'))
app.use('/', require('./controllers/static'))

var port = process.env.PORT || 3000
app.listen(port, function() {
  console.log("Server listening on", port)
})