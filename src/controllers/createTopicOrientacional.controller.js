import topicsOrientationModel from '#Schemas/topicsOrientation.schema.js';
import { v4 as uuidv4 } from 'uuid';

const createTopicOrientacionalController = async (req, res) => {
    try {
        const { title, description, text, videos } = req.body;

        if (!title || !text) {
            return res
                .status(400)
                .json({ error: 'Faltan campos obligatorios.' });
        }

        const newTopic = new topicsOrientationModel({
            _id: uuidv4(),
            title,
            description: description || '',
            text,
            idMainTopic: '', // Campo vacío en orientación
            videos: Array.isArray(videos) ? videos : [],
            image: '', // Valor por defecto
        });

        await newTopic.save();
        res.status(201).json(newTopic);
    } catch (error) {
        console.error('❌ Error al crear tema orientacional:', error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

export default createTopicOrientacionalController;
