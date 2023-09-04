import express from "express";
import dotenv from "dotenv"
import router from "./routes/usuarioRoutes.js";
import PreguntasRouter from "./routes/preguntasRoutes.js";
import routerEncuesta from "./routes/encuestaRouters.js";
import cors from "cors"
import pool from "./config/db.js";
const app = express();
app.use(express.json())
dotenv.config()
const whitelist = [process.env.FRONTEND_URL]

app.use(cors())
// 

pool.getConnection()
  .then((connection) => {
    console.log('Conexión exitosa a la base de datos MySQL.');
    connection.release(); // Liberamos la conexión después de usarla
  })
  .catch((err) => {
    console.error('Error al conectarse a la base de datos MySQL:', err.message);
  });


// Routing
app.use('/api/usuarios',router);
app.use('/api/preguntas',PreguntasRouter);
app.use('/api/encuesta',routerEncuesta);
const PORT = process.env.PORT || 4000;
app.listen(PORT , ()=>{
    console.log( `server listening on port ${PORT} `);
} );