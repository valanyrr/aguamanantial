// requires scripts assistant
const {contains_data, traerdatos} = require('../../scripts/scripts')

// requires conexion db
const Conexion = require('../../config/dbconnect')

// requires express and more
const router = require('express').Router()


//Post Estadistica
router.post('/ins_estadistica', (req,res)=>{
    const {titulo_estadistica,desc_estadistica,url_archivo,formato_estadistica 
        ,correo_electronico,hora_generar_estadistica,tipo_estadistica,ind_estadistica
        ,tiempo_generar_estadistica,cod_usuario} = req.body;
        const sql = "CALL Ins_Estadisticas(?,?,?,?,?,?,?,?,?,?)"

        if(!contains_data(titulo_estadistica)){
            return res.status(400).json({
                ok: false,
                err:{
                    message: 'Titulo No Valido.'
                }
            })
        }

        Conexion.query(titulo_estadistica,desc_estadistica,url_archivo,formato_estadistica 
            ,correo_electronico,hora_generar_estadistica,tipo_estadistica,ind_estadistica
            ,tiempo_generar_estadistica,cod_usuario , (err, result) =>{
            if(err) throw err
    
            res.json({
                ok: true,
                result: result[0]
            })
        })
})

// Get All Estadistica
router.get('/estadistica', (req, res) =>{
  const sql = 'CALL GetAll_Estadisticas()'

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


//UpDate Estadistica
router.put('/upt_estadistica:cod_estadistica',(req, res)=>{
    const {titulo_estadistica,desc_estadistica,url_archivo,formato_estadistica 
        ,correo_electronico,hora_generar_estadistica,tipo_estadistica,ind_estadistica
        ,tiempo_generar_estadistica,cod_usuario} = req.body;
        const {cod_estadistica} = req.params
        const sql = 'CALL Upt_Estadisticas(?,?,?,?,?,?,?,?,?,?)'

        Conexion.query(titulo_estadistica,desc_estadistica,url_archivo,formato_estadistica 
            ,correo_electronico,hora_generar_estadistica,tipo_estadistica,ind_estadistica
            ,tiempo_generar_estadistica,cod_usuario , (err, result) =>{
            if(err) throw err
    
            res.json({
                ok: true,
                result: result[0]
            })
        })
})
module.exports = router;