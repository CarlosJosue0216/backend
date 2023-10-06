import pool from "../config/db.js";

const registrarRespuesta = async (preguntaId, contenido) => {
    try {
      const [result] = await pool.query(
        'INSERT INTO respuestas (pregunta_id, contenido) VALUES (?, ?)',
        [preguntaId, contenido]
      );
  
      const respuestaId = result.insertId;
      return { id: respuestaId, pregunta_id: preguntaId, contenido };
    } catch (error) {
      throw error;
    }
  };
  const obtenerTodasLasRespuestasOrdenadas = async () => {
    try {
      const [rows] = await pool.query('SELECT * FROM respuestas ORDER BY pregunta_id,contenido');
      return rows;
    } catch (error) {
      throw error;
    }
  };
  const editarRespuestaById = async (id,contenido)=>{
    try {
      await pool.query(`UPDATE respuestas SET contenido = ? WHERE id = ?`,[contenido,id])
      return ({msg: "Respuesta Actualizada correctamente"})
    } catch (error) {
      return ({msg: "Error: " + error.message})
    }
  }
const getRespuestaById = async (id)=>{
  try {
    const result = await pool.query("SELECT * FROM respuestas WHERE id = ?",[id])
    return result
  } catch (error) {
    throw error;

  }
}
  export { registrarRespuesta,obtenerTodasLasRespuestasOrdenadas,editarRespuestaById,getRespuestaById };