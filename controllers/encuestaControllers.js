
import pool from '../config/db.js';

const obtenerEncuesta = async (req,res) => {

}
const obtenerEncuestaInd = async (req,res) => {
    const id = req.params.id
    try {
        const query =  `Select * from encuesta where usuario_id = ${id} `
        const data = await pool.query(query)
        res.json({
            data: data[0]
        })
    } catch (error) {
        res.json({
            msg:error.message
        })
    }
}
const enviarEncuesta = async (req,res) => {
    const {idUser,respuestasSeleccionadas} = req.body
    try {
        for (const preguntaId in respuestasSeleccionadas) {
            
            const respuesta= respuestasSeleccionadas[preguntaId]
            const query = 'INSERT INTO encuesta (usuario_id, pregunta_id, id_respuesta) VALUES (?, ?, ?)';
            const values = [idUser, preguntaId, respuesta]
            await pool.query(query, values)
        }
        res.json({
            msg:"Encuesta guardada correctamente"
        })
    } catch (error) {
        res.json({
            msg:error.message
        })
    }
    

}

const obtenerEncuestaOrdenada = async (req, res) =>{
    try {
        const query = "SELECT p.titulo AS pregunta,p.categoria,r.contenido AS respuesta,COUNT(DISTINCT e.usuario_id) AS personas_que_respondieron FROM  encuesta e JOIN preguntas p ON e.pregunta_id = p.id JOIN respuestas r ON e.id_respuesta = r.id GROUP BY p.titulo, r.contenido"
        const data = await pool.query(query)
        console.log(data)
        res.json(data)
    } catch (error) {
        res.json({
            msg:error.message
        })
    }

}
export {
    obtenerEncuesta,
    obtenerEncuestaInd,
    enviarEncuesta,
    obtenerEncuestaOrdenada
}


