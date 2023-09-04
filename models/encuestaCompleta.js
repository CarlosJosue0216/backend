import mongoose from "mongoose";

const encuestaSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  preguntas: [{

    pregunta: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true
    },
    respuesta: {
      type: String,
      required: true
    }
  }],

}, {
  timestamps: true
});

const Encuesta = mongoose.model('Encuesta', encuestaSchema);
export default Encuesta