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
      const [rows] = await pool.query('SELECT * FROM respuestas ORDER BY pregunta_id, id');
      return rows;
    } catch (error) {
      throw error;
    }
  };
  
  export { registrarRespuesta,obtenerTodasLasRespuestasOrdenadas };