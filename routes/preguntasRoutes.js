import express from "express";

import {
    registrarPreguntaYRespuestas,
    obtenerPreguntasYRespuestasOrdenadas,
    editarPregunta,
    editarRespuesta,
    obtenerRespuestaUnica
} from "../controllers/preguntasControllers.js"

const PreguntasRouter = express.Router()

PreguntasRouter.post('/agregar',registrarPreguntaYRespuestas)
PreguntasRouter.get('/ver',obtenerPreguntasYRespuestasOrdenadas)
PreguntasRouter.post('/editar/:id',editarPregunta)
PreguntasRouter.post('/editarRespuesta/:id',editarRespuesta)
PreguntasRouter.get('/obtenerRespuesta/:id',obtenerRespuestaUnica)

export default PreguntasRouter