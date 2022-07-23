
// requires scripts assistant
const {contains_data, traerdatos} = require('../../scripts/scripts')

// requires conexion db
const Conexion = require('../../config/dbconnect')

// requires express and more
const router = require('express').Router()


// Insert departamento
router.post('/departamento', (req, res) =>{
    const {nom_depto} = req.body;
    const sql = "CALL Ins_Departamento(?)"

    if(!contains_data(nom_depto)){
        return res.status(400).json({
            ok: false,
            err:{
                message: 'Nombre de Departamento no valido.'
            }
        })
    }
   
    Conexion.query(sql, nom_depto, (err, result) =>{
        if(err) throw err

        res.json({
            ok: true,
            result
        })
    })
})


// Get All Departamento
router.get('/departamento', (req, res) =>{
    const sql = 'CALL GetAll_Departamento()'

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

// Get One Departamento
router.get('/departamento_one:cod_depto', (req, res) =>{
    const {cod_depto} = req.params
    const sql = 'CALL GetOne_Departamento()'

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

// UpDate Departamento
router.post('/departamento:cod_depto', (req, res) =>{
    const {nom_depto} = req.body;
    const {cod_depto} = req.params
    const sql = "CALL Ins_Departamento(?)"

    if(!contains_data(nom_depto)){
        return res.status(400).json({
            ok: false,
            err:{
                message: 'Nombre de Departamento no valido.'
            }
        })
    }
   
    Conexion.query(sql, nom_depto, (err, result) =>{
        if(err) throw err

        res.json({
            ok: true,
            result
        })
    })
})




module.exports = router;

// qwe