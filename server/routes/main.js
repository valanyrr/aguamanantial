
const express = require('express')
const app = express()

// pais
app.use(require('./direccion/set_pais'))

//departamento
app.use(require('./direccion/set_departamento'))

// municipio
app.use(require('./direccion/set_municipio'))

// estadistica
app.use(require('./estadistica/set_estadistica'))

// empresa
app.use(require('./empresa/set_empresa'))

// distribucion
app.use(require('./distribucion/set_distribucion'))

// pedido
app.use(require('./pedidos/set_pedidos'))

module.exports = app;


// qwe