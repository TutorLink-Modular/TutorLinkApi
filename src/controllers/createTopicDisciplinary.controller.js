import topicsDisciplinaryModel from '#Schemas/topicsDisciplinary.schema.js';
import { v4 as uuidv4 } from 'uuid';

const createTopicDisciplinaryController = async (req, res) => {
    try {
        const { title, description, text, idMainTopic, videos, image } =
            req.body;

        if (!title || !text || !idMainTopic) {
            return res
                .status(400)
                .json({ error: 'Faltan campos obligatorios.' });
        }

        const newTopic = new topicsDisciplinaryModel({
            _id: uuidv4(),
            title,
            description: description || '',
            text,
            idMainTopic,
            videos: Array.isArray(videos) ? videos : [],
            image: image || '', // ✅ ahora guarda correctamente el valor
        });

        await newTopic.save();
        res.status(201).json(newTopic);
    } catch (error) {
        console.error('❌ Error al crear tema disciplinar:', error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

export default createTopicDisciplinaryController;
