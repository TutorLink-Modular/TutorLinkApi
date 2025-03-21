// controllers/getMainTopicById.controller.js
import mainTopicDisciplinaryModel from '#Schemas/mainTopicDisciplinary.schema.js';

const getMainTopicByIdController = async (req, res) => {
    try {
        const { idMainTopic } = req.params;
        const mainTopic = await mainTopicDisciplinaryModel.findById(
            idMainTopic
        );
        if (!mainTopic) {
            return res
                .status(404)
                .json({ error: 'Tema principal no encontrado' });
        }
        res.json(mainTopic);
    } catch (error) {
        console.error('Error al obtener el main topic:', error);
        res.status(500).json({ error: 'Error del servidor' });
    }
};

export default getMainTopicByIdController;
