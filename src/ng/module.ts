/// <reference path="../../typings/tsd.d.ts" />
var app = angular.module('app', ['xeditable'])

app.run(function (editableOptions) {
  editableOptions.theme = 'bs3'
})