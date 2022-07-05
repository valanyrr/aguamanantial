
const express = require('express')
const app = express()

// paises
app.use(require('./direcciones/set_pais'))



module.exports = app;


// qwe