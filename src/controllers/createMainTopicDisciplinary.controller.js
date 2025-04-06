// src/controllers/createMainTopicDisciplinary.controller.js
import mainTopicDisciplinaryModel from '#Schemas/mainTopicDisciplinary.schema.js';
import { v4 as uuidv4 } from 'uuid';

const createMainTopicDisciplinaryController = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title) {
            return res.status(400).json({ error: 'El título es obligatorio.' });
        }

        const newMainTopic = new mainTopicDisciplinaryModel({
            _id: uuidv4(),
            title,
            description: description || '',
            image: '', // Imagen vacía por defecto (puedes cambiarlo si luego implementas subida de imágenes)
        });

        await newMainTopic.save();

        res.status(201).json(newMainTopic);
    } catch (err) {
        console.error('❌ Error al crear main topic disciplinar:', err);
        res.status(500).json({
            error: 'Error interno al crear el tema principal.',
        });
    }
};

export default createMainTopicDisciplinaryController;
