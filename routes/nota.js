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

// Get con parametos

router.get('/nota/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const notaDB = await Nota.findOne({
            _id
        });
        res.json(notaDB)
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
})

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

//Delete eliminar una nota
router.delete('/nota/:id', async (req, res) => {
    const _id = req.params.id;
    const body = req.body
    try {
        const notaDb = await Nota.findByIdAndDelete({
            _id
        });
        res.json(notaDb)

    } catch (error) {
        return res.status(400).json({
            mensaje: 'No encontró el id indicado',
            error
        })
    }
});

//PUT actualizar una nota

router.put('/nota/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const notaDb = await Nota.findByIdAndUpdate(_id, body, {
            new: true // new: true es para que postman puede mostrar los datos de actualizacion de una vez
        });
        res.json(notaDb)

    } catch (error) {
        return res.status(400).json({
            mensaje: 'La nota ha sido actualizado',
            error
        })
    }
});
//Exportacion de router
module.exports = router;