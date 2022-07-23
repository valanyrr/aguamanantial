
// requires scripts assistant
const {contains_data, traerdatos} = require('../../scripts/scripts')

// requires conexion db
const Conexion = require('../../config/dbconnect')

// requires express and more
const router = require('express').Router()


// Insert Municipio
router.post('/municipio', (req, res) =>{
    const {nom_municipio} = req.body;
    const sql = "CALL Ins_Municipio(?)"

    if(!contains_data(nom_municipio)){
        return res.status(400).json({
            ok: false,
            err:{
                message: 'Nombre de Municipio no valido.'
            }
        })
    }
   
    Conexion.query(sql, nom_municipio, (err, result) =>{
        if(err) throw err

        res.json({
            ok: true,
            result
        })
    })
})


// Get All Municipio
router.get('/municipio', (req, res) =>{
    const sql = 'CALL GetAll_Municipio()'

    Conexion.query(sql, (err, result) =>{
        if(err){
            return res.status(500).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            result: result[0]
        })
    })

})

// Get One Municipio
router.get('/municipio_One:cod_municipio', (req, res) =>{
    const {cod_municipio} = req.params
    const sql = 'CALL GetOne_Municipio()'

    Conexion.query(sql, (err, result) =>{
        if(err){
            return res.status(500).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            result: result[0]
        })
    })

})

// UpDate Municipio
router.post('/municipio:cod_municipio', (req, res) =>{
    const {nom_municipio} = req.body;
    const {cod_municipio} = req.params
    const sql = "CALL Ins_Municipio(?)"

    if(!contains_data(nom_municipio)){
        return res.status(400).json({
            ok: false,
            err:{
                message: 'Nombre de Municipio no valido.'
            }
        })
    }
   
    Conexion.query(sql, nom_municipio, (err, result) =>{
        if(err) throw err

        res.json({
            ok: true,
            result
        })
    })
})




module.exports = router;

// qwe