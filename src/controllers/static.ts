/// <reference path="../../typings/tsd.d.ts" />
import express = require('express')

var router = express.Router()

router.use(express.static(__dirname + '/../public'))
router.use(express.static(__dirname + '/../templates'))
router.get('/', function(req, res) {
  res.sendfile('wwwroot/layouts/app.html')
})

export = router