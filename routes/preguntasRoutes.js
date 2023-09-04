import express from "express";

import {
    registrarPreguntaYRespuestas,
    obtenerPreguntasYRespuestasOrdenadas
} from "../controllers/preguntasControllers.js"

const PreguntasRouter = express.Router()

PreguntasRouter.post('/agregar',registrarPreguntaYRespuestas)
PreguntasRouter.get('/ver',obtenerPreguntasYRespuestasOrdenadas)

export default PreguntasRouter