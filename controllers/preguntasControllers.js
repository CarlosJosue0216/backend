import pool from "../config/db.js";
import { obtenerTodasLasPreguntas, registrarPregunta } from "../models/Preguntas.js";
import { obtenerTodasLasRespuestasOrdenadas, registrarRespuesta } from "../models/Repuestas.js";

const registrarPreguntaYRespuestas = async (req, res) => {
    try {
      const { titulo, categoria, respuestas } = req.body;
  
      // Registrar la pregunta
      const pregunta = await registrarPregunta(titulo, categoria);
  
      // Registrar las respuestas asociadas a la pregunta
      const respuestasRegistradas = await Promise.all(
        respuestas.map(async (respuesta) => {
          return await registrarRespuesta(pregunta.id, respuesta.contenido);
        })
      );
  
      res.status(201).json({
        msg:"Pregunta registrada correctamente"
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  const obtenerPreguntasYRespuestasOrdenadas = async (req, res) => {
    try {
      // Obtener todas las preguntas
      const preguntas = await obtenerTodasLasPreguntas();
  
      // Obtener todas las respuestas ordenadas por pregunta_id
      const respuestas = await obtenerTodasLasRespuestasOrdenadas();
  
      // Asociar las respuestas a las preguntas en un objeto JSON
      const preguntasConRespuestas = preguntas.map((pregunta) => {
        return {
          ...pregunta,
          respuestas: respuestas.filter((respuesta) => respuesta.pregunta_id === pregunta.id),
        };
      });
  
      res.status(200).json(preguntasConRespuestas);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las preguntas y respuestas ordenadas." });
    }
  };
  export { registrarPreguntaYRespuestas,obtenerPreguntasYRespuestasOrdenadas };
  