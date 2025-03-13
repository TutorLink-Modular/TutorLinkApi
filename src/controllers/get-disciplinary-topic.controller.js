import topicsDisciplinaryModel from '#Schemas/topics-disciplinary.schema.js';

const getDisciplinaryTopicController = async (req, res) => {
    const { topicId } = req.params;

    try {
        const topic = await topicsDisciplinaryModel.findById(topicId).exec();
        if (!topic) {
            return res
                .status(404)
                .json({ errors: ['Tema disciplinar no encontrado.'] });
        }

        return res.json({ id: topic._id, title: topic.title });
    } catch (error) {
        console.error('❌ Error al obtener tema disciplinar:', error);
        return res
            .status(500)
            .json({ errors: ['Error interno del servidor.'] });
    }
};

export default getDisciplinaryTopicController;
