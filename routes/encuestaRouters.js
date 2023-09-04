import express from "express";
import {
    obtenerEncuesta,
    obtenerEncuestaInd,
    enviarEncuesta,
    obtenerEncuestaOrdenada
} from "../controllers/encuestaControllers.js";
import checkAuth from "../middleware/checkAuth.js";

const routerEncuesta = express.Router();

routerEncuesta.get('/',checkAuth,obtenerEncuesta )
routerEncuesta.get('/resultado/:id',checkAuth,obtenerEncuestaInd )
routerEncuesta.get('/resultadoPreguntas',checkAuth,obtenerEncuestaOrdenada )
routerEncuesta.post('/registrar',enviarEncuesta)
export default routerEncuesta