var express = require('express')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic('site'))
app.listen(3000)