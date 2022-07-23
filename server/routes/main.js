
const express = require('express')
const app = express()

// pais
app.use(require('./direccion/set_pais'))

// estadistica
app.use(require('./estadistica/set_estadistica'))

module.exports = app;


// qwe