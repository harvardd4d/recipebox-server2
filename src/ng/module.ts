/// <reference path="../../typings/tsd.d.ts" />
var app = angular.module('app', [
  'ngRoute',
  'xeditable'
])

app.run(function (editableOptions) {
  editableOptions.theme = 'bs3'
})