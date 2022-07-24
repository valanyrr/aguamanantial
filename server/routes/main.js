
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

// reportes
app.use(require('./reportes/set_reportes'))

// inventario
app.use(require('./inventario/set_inventario'))

// usuarios
app.use(require('./usuarios/set_usuarios'))

// login
app.use(require('./login/login'))


module.exports = app;


// qwe
