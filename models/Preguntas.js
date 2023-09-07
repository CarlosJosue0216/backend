import pool from "../config/db.js";
const registrarPregunta = async (titulo, categoria) => {
  try {
    const [result] = await pool.query(
      'INSERT INTO preguntas (titulo, categoria) VALUES (?, ?)',
      [titulo, categoria]
    );

    const preguntaId = result.insertId;
    return { id: preguntaId, titulo, categoria };
  } catch (error) {
    throw error;
  }
};
const obtenerTodasLasPreguntas = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM preguntas ORDER BY id');
    return rows;
  } catch (error) {
    throw error;
  }
};
const editarPreguntaById = async (id,titulo,categoria)=>{
  try {
    await pool.query(`UPDATE preguntas SET titulo = ?,categoria = ? WHERE id = ?`,[titulo,categoria,id])
    return ({msg: "Pregunta Actualizada correctamente"})
  } catch (error) {
    return ({msg: "Error: " + error.message})
  }
}

export { registrarPregunta,obtenerTodasLasPreguntas,editarPreguntaById };
