import express from 'express';
const router = express.Router();

//Importar el modelo nota
import Nota from '../models/nota';

//Agregar una nota
router.post('/nueva-nota', async (req, res) => {
    const body = req.body
    console.log(body)
    try {
        const notaDB = await Nota.create(body)
        res.status(200).json(notaDB)
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Get con todos los documentos
router.get('/nota', async (req, res) => {
    //res.send('utilizando el modelo /nota de models');
    try {
        const notaDb = await Nota.find();
        res.json(notaDb);
        console.log(notaDb)
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//Exportacion de router
module.exports = router;