// requires conexion db
const Conexion = require('../../config/dbconnect')

// requires express and more
const router = require('express').Router()

//insert Venta
router.post('/Ventas', (req, res) =>{
    const {cant_Ventas} = req.body;
    const sql = "CALL Cant_Ventas(?)"

    if(!contains_data(Cant_Ventas)){
        return res.status(500).json({
            ok: false,
            err:{
                message: 'cantidad no valido.'
            }
        })
    }
   
    Conexion.query(sql, cant_Ventas, (err, result) =>{
        if(err) throw error

        res.json({
            ok: true,
            result
        })
    })
})
