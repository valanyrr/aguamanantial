
// requires conexion db
const Conexion = require('../../config/dbconnect')

// requires express and more
const router = require('express').Router()




// Get One Direccion
router.get('/direccion:cod_direccion', (req, res) =>{
    const {cod_direccion} = req.params
    const sql = 'CALL GetOne_Direccion()'

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





module.exports = router;

// qwe