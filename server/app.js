
// librerias
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Ronal
//Jose Q. 
//Jorge Lagos
// config public
app.use(express.static(path.resolve(__dirname, '../public')))

// config ejs
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

// middleware routes
app.use(require('./routes/main'))



// middleware 404
app.use((req, res, next) =>{
    res.status(500).end('Error 404')
})


app.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`)
})







// qwe