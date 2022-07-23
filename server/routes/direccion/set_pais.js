
// requires scripts assistant
const {contains_data, traerdatos} = require('../../scripts/scripts')

// requires conexion db
const Conexion = require('../../config/dbconnect')

// requires express and more
const router = require('express').Router()


// Insert Pais
router.post('/pais', (req, res) =>{
    const {nom_pais} = req.body;
    const sql = "CALL Ins_Pais(?)"

    if(!contains_data(nom_pais)){
        return res.status(400).json({
            ok: false,
            err:{
                message: 'Nombre de pais no valido.'
            }
        })
    }
   
    Conexion.query(sql, nom_pais, (err, result) =>{
        if(err) throw err

        res.json({
            ok: true,
            result
        })
    })
})


// Get All Pais
router.get('/pais', (req, res) =>{

    const sql = 'CALL GetAll_Pais()'

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

// Get One Pais
router.get('/pais_one:cod_pais', (req, res) =>{
    const {cod_pais} = req.params
    const sql = 'CALL GetOne_Pais()'

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

// UpDate Pais
router.post('/pais:cod_pais', (req, res) =>{
    const {nom_pais} = req.body;
    const {cod_pais} = req.params
    const sql = "CALL Ins_Pais(?)"

    if(!contains_data(nom_pais)){
        return res.status(400).json({
            ok: false,
            err:{
                message: 'Nombre de pais no valido.'
            }
        })
    }
   
    Conexion.query(sql, nom_pais, (err, result) =>{
        if(err) throw err

        res.json({
            ok: true,
            result
        })
    })
})




module.exports = router;

// qwe