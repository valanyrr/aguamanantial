
const express = require('express')
const app = express()

// paises
app.use(require('./direcciones/set_pais'))

// estadistica
app.use(require('./estadistica/set_estadistica'))

module.exports = app;


// qwe