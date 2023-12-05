import express from "express";
import { registrar,autenticar,confirmar,recuperarPassword,comprobarToken,nuevoPassword,perfil,validarForo, omitirForo,usuariosTotal,usuariosPorEncuesta } from "../controllers/usuarioControllers.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router()
// Creacion,registro y confirmacion de users
router.post('/',registrar)
router.post('/login',autenticar)
router.get('/confirmar/:token',confirmar)
router.post('/recuperar-password',recuperarPassword)
router.get('/recuperar-password/:token',comprobarToken)
router.post('/foros',validarForo)
router.post('/omitir',omitirForo)
router.post('/recuperar-password/:token',nuevoPassword)
router.get('/perfil',checkAuth,perfil)
router.get('/getUsuarios',usuariosTotal)
router.get('/getByEncuesta',usuariosPorEncuesta)
export default router