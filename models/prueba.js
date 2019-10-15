import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pruebaSchema = new Schema({
    nombre: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    activo: {
        type: Boolean,
        default: true
    }
});

// Convertir a modelo
const Prueba = mongoose.model('Prueba', pruebaSchema);

export default Prueba;